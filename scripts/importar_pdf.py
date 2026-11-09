"""
Importa o PDF "Interpretando o Brasil" (chave de interpretação MapBiomas) para o site.

Gera, a partir do PDF:
  dados/biomas.csv       biomas na ordem do PDF
  dados/classes.csv      classes encontradas (grupo, cor e código da legenda MapBiomas)
  dados/descricoes.csv   uma linha por bioma x classe: descrição e observações
  dados/exemplos.csv     uma linha por exemplo (página de exemplo): coordenadas, falsa-cor,
                         tonalidade, textura, observações, imagens e página do PDF
  img/<bioma>/<classe>/exN_*.jpg   recortes de cada página de exemplo

Uso (na pasta do projeto):
  python scripts/importar_pdf.py "C:/caminho/Interpretando o brasil.pdf"
  python scripts/gerar_dados.py

Atenção: reimportar SOBRESCREVE os CSVs de descrições/exemplos. Se você corrigiu
textos à mão nos CSVs, faça backup antes ou corrija direto no PDF.
"""
import csv
import io
import re
import shutil
import sys
import unicodedata
from pathlib import Path

import pymupdf as fitz
from PIL import Image, ImageStat

RAIZ = Path(__file__).resolve().parent.parent
DADOS = RAIZ / "dados"
IMG = RAIZ / "img"
ZOOM = 3.5

BIOMAS = [  # id, nome, cor, como aparece no PDF (sem acento/espaço)
    ("amazonia", "Amazônia", "#24693d", "AMAZONIA"),
    ("cerrado", "Cerrado", "#9c8a3b", "CERRADO"),
    ("caatinga", "Caatinga", "#d9a24a", "CAATINGA"),
    ("mata_atlantica", "Mata Atlântica", "#2f9e6e", "MATAATLANTICA"),
    ("pantanal", "Pantanal", "#3d8fb3", "PANTANAL"),
    ("pampa", "Pampa", "#8fb35a", "PAMPA"),
]

# nome no PDF -> (grupo, cor, código, nome na legenda Coleção 11, classe cuja descrição oficial vale).
# A ordem aqui é a ordem no site. Cores e códigos: legenda MapBiomas Coleção 11.
CLASSES = {
    "Formação Florestal": ("Floresta", "#1f8d49", "3", "Formação Florestal", "Formação Florestal"),
    "Formação Savânica": ("Floresta", "#7dc975", "4", "Formação Savânica", "Formação Savânica"),
    "Floresta Alagável": ("Floresta", "#007785", "6", "Floresta Alagável", "Floresta Alagável"),
    "Mangue": ("Floresta", "#04381d", "5", "Mangue", "Mangue"),
    "Formação Campestre": ("Vegetação Herbácea e Arbustiva", "#d6bc74", "12", "Formação Campestre", "Formação Campestre"),
    "Campo Alagado e Área Pantanosa": ("Vegetação Herbácea e Arbustiva", "#519799", "11", "Campo Alagado e Área Pantanosa", "Campo Alagado e Área Pantanosa"),
    "Afloramento Rochoso": ("Vegetação Herbácea e Arbustiva", "#ffaa5f", "29", "Afloramento Rochoso", "Afloramento Rochoso"),
    "Apicum": ("Vegetação Herbácea e Arbustiva", "#fc8114", "32", "Apicum", "Apicum"),
    "Restinga Herbácea": ("Vegetação Herbácea e Arbustiva", "#ad5100", "50", "Restinga Herbácea ou Arbustiva", "Restinga Herbácea"),
    "Pastagem": ("Agropecuária", "#edde8e", "15", "Pastagem", "Pastagem"),
    "Cultivo Temporário": ("Agropecuária", "#c27ba0", "19", "Lavoura Temporária", "Outras Lavouras Temporárias"),
    "Soja": ("Agropecuária", "#f5b3c8", "39", "Soja", "Soja"),
    "Arroz": ("Agropecuária", "#c71585", "40", "Arroz", "Arroz"),
    "Cana-de-açúcar": ("Agropecuária", "#db7093", "20", "Cana", "Cana"),
    "Cultivo Perene": ("Agropecuária", "#d082de", "36", "Lavoura Perene", "Outras Lavouras Perenes"),
    "Silvicultura": ("Agropecuária", "#7a5900", "9", "Silvicultura", "Silvicultura"),
    "Praia, Duna e Areial": ("Área não Vegetada", "#ffa07a", "23", "Praia, Duna e Areal", "Praia, Duna e Areal"),
    "Área Urbana": ("Área não Vegetada", "#d4271e", "24", "Área Urbanizada", "Área Urbanizada"),
    "Mineração": ("Área não Vegetada", "#9c0027", "30", "Mineração", "Mineração"),
    "Usina Fotovoltaica": ("Área não Vegetada", "#757272", "75", "Usina Fotovoltaica", "Usina Fotovoltaica"),
    "Outras áreas não vegetadas": ("Área não Vegetada", "#db4d4f", "25", "Outras Áreas não Vegetadas", "Outras Áreas não Vegetadas"),
    "Rio, Lago e Oceano": ("Corpo d'Água", "#2532e4", "33", "Rio, Lago e Oceano", "Rio, Lago e Oceano"),
    "Aquicultura": ("Corpo d'Água", "#091077", "31", "Aquicultura", "Aquicultura"),
}

# Recortes da página de exemplo (em pontos; página 720 x 405)
QUADROS = [
    ("landsat_seco", "Landsat – seco", fitz.Rect(44, 61, 168, 201)),
    ("landsat_chuvoso", "Landsat – chuvoso", fitz.Rect(177, 61, 301, 201)),
    ("sentinel_seco", "Sentinel-2 – seco", fitz.Rect(309, 61, 433, 201)),
    ("sentinel_chuvoso", "Sentinel-2 – chuvoso", fitz.Rect(440, 61, 565, 201)),
    ("google_earth", "Google Earth", fitz.Rect(572, 61, 697, 201)),
]
GRAFICO = fitz.Rect(43, 212, 566, 336)
MAPA = fitz.Rect(571, 212, 698, 336)

# A maioria das páginas traz uma captura de tela única de 2048 x 984 px com layout fixo:
# recorta direto dela (em pixels), em resolução cheia.
COMPOSTA = (2048, 984)
PX_QUADROS = [(13, 145, 400, 531), (422, 145, 809, 531), (830, 145, 1218, 531),
              (1239, 145, 1626, 531), (1648, 145, 2035, 531)]
PX_GRAFICO = (14, 650, 1518, 980)
PX_MAPA = (1542, 640, 2034, 980)

# Classes do PDF retiradas da chave (decisão de 08/11/2026: Vegetação Urbana não existe na legenda Col. 11)
EXCLUIR = {"Vegetação Urbana"}
# Classes do PDF cujos EXEMPLOS passam para outra classe (a página de descrição é descartada).
# 09/11/2026: Soja é subclasse de Lavoura Temporária na Col. 11; os exemplos entram como Lavoura Temporária.
JUNTAR = {"Soja": "Cultivo Temporário"}
# (classe no PDF, bioma) retirados: Cana não ocorre no Pampa nem no Pantanal no mapa MapBiomas Col. 11
EXCLUIR_BIOMA = {("Cana-de-açúcar", "pampa"), ("Cana-de-açúcar", "pantanal")}

ROTULOS_EX = ["Coords", "Falsa-Cor", "Tonalidade", "Textura", "Observações"]
ROTULOS_DESC = ["Descrição", "Observações"]
LIXO = re.compile(r"(Landsat|Sentinel) - (seco|chuvoso)|Google earth", re.I)


def limpa(t):
    t = unicodedata.normalize("NFKC", t)
    return re.sub(r"\s+", " ", t).strip()


def sem_acento(t):
    return "".join(c for c in unicodedata.normalize("NFD", t) if unicodedata.category(c) != "Mn")


def slug(t):
    return re.sub(r"[^a-z0-9]+", "_", sem_acento(t).lower()).strip("_")


def ler_pagina(p):
    lado, titulo, corpo = [], [], []
    for b in p.get_text("dict")["blocks"]:
        for l in b.get("lines", []):
            for s in l["spans"]:
                t = s["text"].strip()
                if not t:
                    continue
                x0, y0 = s["bbox"][0], s["bbox"][1]
                if x0 < 30 and len(t) <= 2:
                    lado.append(t)
                elif y0 < 40 and s["size"] > 14:
                    titulo.append(t)
                else:
                    corpo.append(s["text"])
    return limpa("".join(lado)), limpa(" ".join(titulo)), limpa(" ".join(corpo))


def campos(texto, rotulos):
    texto = LIXO.sub(" ", texto)
    pos = []
    for r in rotulos:
        m = re.search(re.escape(r) + r"\s*:", texto)
        if m:
            pos.append((m.start(), m.end(), r))
    pos.sort()
    out = {r: "" for r in rotulos}
    for i, (a, b, r) in enumerate(pos):
        fim = pos[i + 1][0] if i + 1 < len(pos) else len(texto)
        out[r] = limpa(texto[b:fim])
    return out


def recorte(p, rect):
    pix = p.get_pixmap(matrix=fitz.Matrix(ZOOM, ZOOM), clip=rect)
    return Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")


def vazio(im):
    return max(ImageStat.Stat(im.convert("L")).stddev) < 6


def salvar(im, caminho):
    caminho.parent.mkdir(parents=True, exist_ok=True)
    im.save(caminho, "JPEG", quality=82, optimize=True, progressive=True)
    return caminho.relative_to(RAIZ).as_posix()


def escrever(nome, colunas, linhas):
    with (DADOS / nome).open("w", encoding="utf-8-sig", newline="") as f:
        w = csv.DictWriter(f, fieldnames=colunas, delimiter=";")
        w.writeheader()
        w.writerows(linhas)


def main(pdf):
    doc = fitz.open(pdf)
    por_lado = {b[3]: b[0] for b in BIOMAS}
    nome_classe = {sem_acento(k).lower(): k for k in CLASSES}

    descricoes, exemplos, avisos = {}, [], []
    cont = {}
    for diretorio in [IMG / b[0] for b in BIOMAS]:
        if diretorio.exists():
            shutil.rmtree(diretorio)

    for i, p in enumerate(doc):
        n = i + 1
        lado, titulo, corpo = ler_pagina(p)
        bioma = por_lado.get(sem_acento(lado).upper().replace(" ", ""))
        if not bioma or not titulo:
            continue
        if any(sem_acento(titulo).lower() == sem_acento(x).lower() for x in EXCLUIR):
            continue
        juntar = next((v for k, v in JUNTAR.items() if sem_acento(titulo).lower() == sem_acento(k).lower()), None)
        if juntar and "Coords" not in corpo:
            continue
        classe = juntar or nome_classe.get(sem_acento(titulo).lower())
        if (classe, bioma) in EXCLUIR_BIOMA:
            continue
        if not classe:
            avisos.append(f"p{n}: classe desconhecida '{titulo}' (acrescente em CLASSES)")
            continue

        if "Descrição" in corpo and "Coords" not in corpo:
            c = campos(corpo, ROTULOS_DESC)
            descricoes[(bioma, classe)] = {
                "bioma": bioma, "classe": classe,
                "descricao": c["Descrição"], "observacoes": c["Observações"], "pagina": n,
            }
        elif "Coords" in corpo:
            c = campos(corpo, ROTULOS_EX)
            k = (bioma, classe)
            cont[k] = cont.get(k, 0) + 1
            pasta = IMG / bioma / slug(classe)
            base = f"ex{cont[k]}"
            linha = {
                "bioma": bioma, "classe": classe, "ordem": cont[k], "pagina": n,
                "coords": c["Coords"], "falsa_cor": c["Falsa-Cor"], "tonalidade": c["Tonalidade"],
                "textura": c["Textura"], "observacoes": c["Observações"],
            }
            comp = [b for b in p.get_image_info(xrefs=True) if (b["width"], b["height"]) == COMPOSTA]
            if comp:
                fonte = Image.open(io.BytesIO(doc.extract_image(comp[0]["xref"])["image"])).convert("RGB")
                pedacos = [(q[0], fonte.crop(px)) for q, px in zip(QUADROS, PX_QUADROS)]
                pedacos += [("grafico", fonte.crop(PX_GRAFICO)), ("mapa", fonte.crop(PX_MAPA))]
            else:
                pedacos = [(q[0], recorte(p, q[2])) for q in QUADROS]
                pedacos += [("grafico", recorte(p, GRAFICO)), ("mapa", recorte(p, MAPA))]
            vazios = 0
            for chave, im in pedacos:
                if vazio(im):
                    linha[chave] = ""
                    vazios += chave not in ("grafico", "mapa")
                else:
                    linha[chave] = salvar(im, pasta / f"{base}_{chave}.jpg")
            if vazios == len(QUADROS):
                avisos.append(f"p{n}: {bioma} / {classe} ex{cont[k]} sem imagens de satélite")
            exemplos.append(linha)

    # apresentação (página 2)
    apres = limpa(doc[1].get_text()).replace("APRESENTAÇÃO", "").strip()
    (DADOS / "apresentacao.txt").write_text(apres + "\n", encoding="utf-8")

    presentes = {c for _, c in descricoes} | {e["classe"] for e in exemplos}
    escrever("biomas.csv", ["id", "bioma", "cor"],
             [{"id": b[0], "bioma": b[1], "cor": b[2]} for b in BIOMAS])
    escrever("classes.csv", ["classe", "nome", "grupo", "cor", "codigo", "classe_legenda"],
             [{"classe": k, "nome": v[3], "grupo": v[0], "cor": v[1], "codigo": v[2], "classe_legenda": v[4]}
              for k, v in CLASSES.items() if k in presentes])
    ordem_b = {b[0]: i for i, b in enumerate(BIOMAS)}
    ordem_c = {k: i for i, k in enumerate(CLASSES)}
    escrever("descricoes.csv", ["bioma", "classe", "descricao", "observacoes", "pagina"],
             sorted(descricoes.values(), key=lambda d: (ordem_b[d["bioma"]], ordem_c[d["classe"]])))
    col_ex = ["bioma", "classe", "ordem", "pagina", "coords", "falsa_cor", "tonalidade", "textura",
              "observacoes"] + [q[0] for q in QUADROS] + ["grafico", "mapa"]
    escrever("exemplos.csv", col_ex,
             sorted(exemplos, key=lambda e: (ordem_b[e["bioma"]], ordem_c[e["classe"]], e["ordem"])))

    for (b, c) in {(e["bioma"], e["classe"]) for e in exemplos} - set(descricoes):
        avisos.append(f"{b} / {c}: tem exemplo mas não tem página de descrição")
    print(f"{len(descricoes)} descrições, {len(exemplos)} exemplos, {len(presentes)} classes")
    for a in avisos:
        print("AVISO:", a)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    main(sys.argv[1])
