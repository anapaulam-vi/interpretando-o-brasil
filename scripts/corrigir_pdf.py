"""
Aplica no PDF "Interpretando o Brasil" as correções automáticas e gera uma versão corrigida.

O que é corrigido:
  - nomes das classes pela legenda Coleção 11 (títulos e listas de classes de cada bioma);
  - descrições das classes: texto oficial da legenda (dados/legenda_mapbiomas.txt), quando existe;
  - observações, tonalidade, textura e falsa-cor conforme dados/correcoes.csv.

Imagens, gráficos e molduras não são tocados: o texto antigo é removido por redação (só texto)
e o novo é escrito em Montserrat (scripts/fontes, licença OFL), na mesma posição e tamanho.

Uso:
  python scripts/corrigir_pdf.py "C:/caminho/Interpretando o brasil.pdf" Interpretando_o_Brasil.pdf
"""
import csv
import json
import sys
import unicodedata
from pathlib import Path

import pymupdf as fitz

AQUI = Path(__file__).resolve().parent
RAIZ = AQUI.parent
DADOS = RAIZ / "dados"
sys.path.insert(0, str(AQUI))
from legenda_mapbiomas import descricao_oficial, ler_legenda  # noqa: E402

FONTE_R = str(AQUI / "fontes" / "Montserrat-Regular.ttf")
FONTE_B = str(AQUI / "fontes" / "Montserrat-Bold.ttf")
F_R, F_B = fitz.Font(fontfile=FONTE_R), fitz.Font(fontfile=FONTE_B)
# Classes retiradas da chave: páginas excluídas e item removido das listas de cada bioma
EXCLUIR = {"Vegetação Urbana", "Soja"}
EXCLUIR_BIOMA = {("Cana-de-açúcar", "pampa"), ("Cana-de-açúcar", "pantanal")}
CINZA_CAIXA = (0.937, 0.937, 0.937)
# posições dos quadros de imagem: em pixels na captura 2048x984 e em pontos nas páginas com imagens soltas
PX_QUADROS = [(13, 145, 400, 531), (422, 145, 809, 531), (830, 145, 1218, 531),
              (1239, 145, 1626, 531), (1648, 145, 2035, 531)]
QUADROS_PT = [fitz.Rect(44, 61, 168, 201), fitz.Rect(177, 61, 301, 201), fitz.Rect(309, 61, 433, 201),
              fitz.Rect(440, 61, 565, 201), fitz.Rect(572, 61, 697, 201)]

BIOMAS = {"AMAZONIA": "amazonia", "CERRADO": "cerrado", "CAATINGA": "caatinga",
          "MATAATLANTICA": "mata_atlantica", "PANTANAL": "pantanal", "PAMPA": "pampa"}


def nfkc(t):
    return " ".join(unicodedata.normalize("NFKC", t).split())


def sem_acento(t):
    return "".join(c for c in unicodedata.normalize("NFD", t) if unicodedata.category(c) != "Mn")


def ler(nome):
    return list(csv.DictReader((DADOS / nome).open(encoding="utf-8-sig"), delimiter=";"))


def linhas_da_pagina(p):
    """Linhas de texto (fora da faixa lateral do bioma) com texto, bbox, tamanho e origem."""
    out = []
    for b in p.get_text("dict")["blocks"]:
        for l in b.get("lines", []):
            spans = [s for s in l["spans"] if s["text"].strip()]
            if not spans or spans[0]["bbox"][0] < 30:
                continue
            r = fitz.Rect(spans[0]["bbox"])
            for s in spans[1:]:
                r |= fitz.Rect(s["bbox"])
            out.append({"texto": nfkc("".join(s["text"] for s in spans)), "rect": r,
                        "tam": spans[0]["size"], "fonte": spans[0]["font"], "origem": spans[0]["origin"]})
    return out


def lado(p):
    letras = []
    for b in p.get_text("dict")["blocks"]:
        for l in b.get("lines", []):
            for s in l["spans"]:
                if s["bbox"][0] < 30 and 0 < len(s["text"].strip()) <= 2:
                    letras.append(s["text"].strip())
    return BIOMAS.get(sem_acento("".join(letras)).upper().replace(" ", ""))


def apagar(p, rects):
    for r in rects:
        p.add_redact_annot(fitz.Rect(r.x0, r.y0 + 1.5, r.x1, r.y1 - 1.5), fill=False)
    p.apply_redactions(images=fitz.PDF_REDACT_IMAGE_NONE, graphics=fitz.PDF_REDACT_LINE_ART_NONE)


def caixa_que_cabe(p, rect, texto, tam, fonte, alinhar=fitz.TEXT_ALIGN_JUSTIFY, minimo=6):
    """Escreve o texto no retângulo, reduzindo a fonte até caber."""
    t = tam
    while t >= minimo:
        sobra = p.insert_textbox(rect, texto, fontsize=t, fontname=("MonB" if fonte == FONTE_B else "MonR"), fontfile=fonte,
                                 align=alinhar, lineheight=1.2)
        if sobra >= 0:
            return t
        t -= 0.5
    raise RuntimeError(f"texto não coube em {rect}: {texto[:60]}")


def centralizado(p, linha, texto, fonte_arq, fonte_obj, largura_max):
    tam = linha["tam"]
    while fonte_obj.text_length(texto, tam) > largura_max and tam > 6:
        tam -= 0.5
    cx = (linha["rect"].x0 + linha["rect"].x1) / 2
    x = cx - fonte_obj.text_length(texto, tam) / 2
    p.insert_text((x, linha["origem"][1]), texto, fontsize=tam, fontname=("MonB" if fonte_arq == FONTE_B else "MonR"), fontfile=fonte_arq)


def main(entrada, saida):
    classes = ler("classes.csv")
    novo_nome = {nfkc(c["classe"]): c["nome"] for c in classes if c["nome"] != c["classe"]}
    leg_classe = {nfkc(c["classe"]): c["classe_legenda"] for c in classes}
    legenda = ler_legenda(DADOS / "legenda_mapbiomas.txt")
    corr = {}
    for c in ler("correcoes.csv"):
        corr.setdefault(c["pagina"], {})[c["campo"]] = c["para"]
    descr = {d["pagina"]: d for d in ler("descricoes.csv")}
    exemplos = {e["pagina"]: e for e in ler("exemplos.csv")}

    doc = fitz.open(entrada)
    excluir_paginas = []
    fichas, ordem_classes = {}, []
    for pg in doc:
        b = lado(pg)
        tt = next((l for l in linhas_da_pagina(pg) if l["tam"] > 20 and l["rect"].y0 < 40), None)
        if b and tt and tt["texto"] not in EXCLUIR and (tt["texto"], b) not in EXCLUIR_BIOMA:
            fichas.setdefault(b, set()).add(tt["texto"])
            if tt["texto"] not in ordem_classes:
                ordem_classes.append(tt["texto"])
    log = {"títulos": 0, "listas": 0, "descrições": 0, "campos": 0, "observações": 0}
    for i, p in enumerate(doc):
        n = str(i + 1)
        linhas = linhas_da_pagina(p)
        bioma = lado(p)
        titulo = next((l for l in linhas if l["tam"] > 20 and l["rect"].y0 < 40), None)
        nome_pdf = titulo["texto"] if titulo else ""
        apagar_rects, escrever = [], []

        # 1) título da classe
        if titulo and nome_pdf in novo_nome:
            apagar_rects.append(titulo["rect"])
            escrever.append(lambda p, l=titulo, t=novo_nome[nome_pdf]: centralizado(p, l, t, FONTE_B, F_B, 600))
            log["títulos"] += 1

        # 2) listas de classes (páginas de abertura de cada bioma): sincroniza com as fichas existentes
        caixas_remover, caixas_novas = [], []
        chave_bioma = sem_acento(nome_pdf).upper().replace(" ", "") if titulo else ""
        if chave_bioma in BIOMAS:
            bio = BIOMAS[chave_bioma]
            itens = [l for l in linhas if abs(l["tam"] - 14) < 0.5]
            caixas = [d["rect"] for d in p.get_drawings()
                      if d.get("fill") and all(abs(a - b) < 0.01 for a, b in zip(d["fill"], CINZA_CAIXA))
                      and 20 < d["rect"].height < 30]
            na_lista = {l["texto"] for l in itens}
            faltando = [c for c in ordem_classes if c in fichas.get(bio, set()) and c not in na_lista]
            colunas = []
            for esquerda in (True, False):
                col = sorted([l for l in itens if ((l["rect"].x0 + l["rect"].x1) / 2 < 360) == esquerda],
                             key=lambda l: l["rect"].y0)
                cxs = sorted([r for r in caixas if ((r.x0 + r.x1) / 2 < 360) == esquerda], key=lambda r: r.y0)
                fica = [l for l in col if l["texto"] not in EXCLUIR and l["texto"] in fichas.get(bio, set())]
                colunas.append({"col": col, "caixas": cxs, "fica": fica})
            # itens que faltam vão para o fim da coluna mais curta
            for c in faltando:
                alvo = min(colunas, key=lambda k: len(k["fica"]))
                alvo["fica"].append({"texto": c, "novo": True})
            for k in colunas:
                col, cxs, fica = k["col"], k["caixas"], k["fica"]
                if not col:
                    continue
                passo = (col[-1]["origem"][1] - col[0]["origem"][1]) / max(len(col) - 1, 1) if len(col) > 1 else 29.6
                passo_cx = (cxs[-1].y0 - cxs[0].y0) / max(len(cxs) - 1, 1) if len(cxs) > 1 else passo
                for j, l in enumerate(fica):
                    mesma_pos = j < len(col) and col[j] is l
                    nome = novo_nome.get(l["texto"], l["texto"])
                    if mesma_pos and nome == l["texto"]:
                        continue
                    if j < len(col):
                        y = col[j]["origem"][1]
                    else:
                        y = col[-1]["origem"][1] + passo * (j - len(col) + 1)
                    base = col[0]
                    alvo = dict(base, origem=(base["origem"][0], y))
                    escrever.append(lambda p, a=alvo, t=nome: centralizado(p, a, t, FONTE_R, F_R, 280))
                    if j >= len(cxs) and cxs:
                        r = cxs[-1]
                        caixas_novas.append(fitz.Rect(r.x0, r.y0 + passo_cx * (j - len(cxs) + 1),
                                                      r.x1, r.y1 + passo_cx * (j - len(cxs) + 1)))
                    log["listas"] += 1
                # apaga os textos que mudaram de lugar ou saíram
                for j, l in enumerate(col):
                    if not (j < len(fica) and fica[j] is l and novo_nome.get(l["texto"], l["texto"]) == l["texto"]):
                        apagar_rects.append(l["rect"])
                caixas_remover += cxs[len(fica):]

        # 3) páginas de descrição
        if n in descr and any(l["texto"].startswith("Descrição:") for l in linhas):
            d = descr[n]
            of = descricao_oficial(legenda, leg_classe.get(nfkc(d["classe"]), ""), d["bioma"]) \
                if leg_classe.get(nfkc(d["classe"])) else None
            nova_desc = of or d["descricao"]
            nova_obs = corr.get(n, {}).get("observacoes", d["observacoes"])
            if nfkc(nova_desc) != nfkc(d["descricao"]) or nfkc(nova_obs) != nfkc(d["observacoes"]):
                corpo = [l for l in linhas if abs(l["tam"] - 16) < 0.5 and 90 < l["rect"].y0 < 365]
                apagar_rects += [l["rect"] for l in corpo]
                texto = f"Descrição: {nova_desc}\n\nObservações: {nova_obs}"
                escrever.append(lambda p, t=texto: caixa_que_cabe(p, fitz.Rect(75, 101, 663, 362), t, 16, FONTE_R))
                log["descrições"] += 1

        # 4) páginas de exemplo
        if n in exemplos and any(l["texto"].startswith("Coords:") for l in linhas):
            c = corr.get(n, {})
            for campo, rotulo in (("falsa_cor", "Falsa-Cor:"), ("tonalidade", "Tonalidade:"), ("textura", "Textura:")):
                if campo in c:
                    l = next((l for l in linhas if l["texto"].startswith(rotulo) and l["tam"] < 9), None)
                    if l:
                        apagar_rects.append(l["rect"])
                        escrever.append(lambda p, l=l, t=f"{rotulo} {c[campo]}": p.insert_text(
                            l["origem"], t, fontsize=l["tam"], fontname="MonR", fontfile=FONTE_R))
                        log["campos"] += 1
            # imagens trocadas (exemplo refeito ou mapa corrigido): quadros, gráfico e mapa
            caixas_px = {"landsat_seco": PX_QUADROS[0], "landsat_chuvoso": PX_QUADROS[1],
                         "sentinel_seco": PX_QUADROS[2], "sentinel_chuvoso": PX_QUADROS[3],
                         "google_earth": PX_QUADROS[4], "grafico": (14, 650, 1518, 980), "mapa": (1542, 640, 2034, 980)}
            caixas_pt = {"landsat_seco": QUADROS_PT[0], "landsat_chuvoso": QUADROS_PT[1],
                         "sentinel_seco": QUADROS_PT[2], "sentinel_chuvoso": QUADROS_PT[3],
                         "google_earth": QUADROS_PT[4], "grafico": fitz.Rect(43, 212, 566, 336),
                         "mapa": fitz.Rect(572, 213, 697, 335)}
            comp = [b for b in p.get_image_info() if (b["width"], b["height"]) == (2048, 984)]
            for campo in caixas_px:
                if campo not in c:
                    continue
                if comp:
                    bx0, by0, bx1, by1 = comp[0]["bbox"]
                    fx, fy = (bx1 - bx0) / 2048, (by1 - by0) / 984
                    x0, y0, x1, y1 = caixas_px[campo]
                    area = fitz.Rect(bx0 + x0 * fx, by0 + y0 * fy, bx0 + x1 * fx, by0 + y1 * fy)
                else:
                    area = caixas_pt[campo]
                arq = str(RAIZ / c[campo]) if c[campo] else ""

                def troca(p, area=area, arq=arq, campo=campo):
                    p.draw_rect(area, color=None, fill=(1, 1, 1), overlay=True)
                    if arq:
                        p.insert_image(area, filename=arq, keep_proportion=campo != "grafico", overlay=True)
                    elif campo == "google_earth":
                        p.insert_textbox(fitz.Rect(area.x0 + 6, area.y0 + area.height / 2 - 12, area.x1 - 6,
                                                   area.y1), "Imagem Google Earth\npendente para o novo ponto",
                                         fontsize=7, fontname="MonR", fontfile=FONTE_R, align=fitz.TEXT_ALIGN_CENTER,
                                         color=(0.45, 0.45, 0.45))
                escrever.append(troca)
                log["imagens"] = log.get("imagens", 0) + 1
            if "coords" in c:
                l = next((l for l in linhas if l["texto"].startswith("Coords:") and l["tam"] < 9), None)
                if l:
                    apagar_rects.append(l["rect"])
                    escrever.append(lambda p, l=l, t=f"Coords: {c['coords']}": p.insert_text(
                        l["origem"], t, fontsize=l["tam"], fontname="MonR", fontfile=FONTE_R))
                    log["campos"] += 1
            if "observacoes" in c:
                obs = [l for l in linhas if l["rect"].x0 > 245 and l["rect"].y0 > 345 and l["tam"] < 9]
                if obs:
                    apagar_rects += [l["rect"] for l in obs]
                    texto = f"Observações: {c['observacoes']}"
                    o = obs[0]
                    if F_R.text_length(texto, o["tam"]) <= 435:
                        escrever.append(lambda p, o=o, t=texto: p.insert_text(
                            o["origem"], t, fontsize=o["tam"], fontname="MonR", fontfile=FONTE_R))
                    else:
                        escrever.append(lambda p, t=texto, tam=o["tam"]: caixa_que_cabe(
                            p, fitz.Rect(258, 350, 695, 396), t, tam, FONTE_R, fitz.TEXT_ALIGN_LEFT, 5))
                    log["observações"] += 1

        if titulo and bioma and (nome_pdf in EXCLUIR or (nome_pdf, bioma) in EXCLUIR_BIOMA):
            excluir_paginas.append(i)
            continue
        if apagar_rects:
            apagar(p, apagar_rects)
        if apagar_rects or escrever:
            for f in escrever:
                f(p)
        for r in caixas_novas:
            p.draw_rect(r, color=None, fill=CINZA_CAIXA, radius=0.2, overlay=False)
        if caixas_remover:
            for r in caixas_remover:
                p.add_redact_annot(r, fill=False)
            p.apply_redactions(images=fitz.PDF_REDACT_IMAGE_NONE,
                               graphics=fitz.PDF_REDACT_LINE_ART_REMOVE_IF_COVERED,
                               text=fitz.PDF_REDACT_TEXT_NONE)

    total = len(doc)
    mantidas = [i for i in range(total) if i not in set(excluir_paginas)]
    mapa = {str(i + 1): novo + 1 for novo, i in enumerate(mantidas)}
    if excluir_paginas:
        doc.delete_pages(excluir_paginas)
    (DADOS / "paginas_pdf.json").write_text(json.dumps(mapa), encoding="utf-8")
    log["páginas retiradas"] = len(excluir_paginas)
    doc.save(saida, garbage=3, deflate=True)
    print(f"{saida}: " + ", ".join(f"{k} {v}" for k, v in log.items()))


if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
