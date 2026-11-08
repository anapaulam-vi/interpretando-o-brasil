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
        sobra = p.insert_textbox(rect, texto, fontsize=t, fontname="F0", fontfile=fonte,
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
    p.insert_text((x, linha["origem"][1]), texto, fontsize=tam, fontname="F0", fontfile=fonte_arq)


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

        # 2) listas de classes (páginas de abertura de cada bioma)
        if titulo and sem_acento(nome_pdf).upper().replace(" ", "") in BIOMAS:
            for l in linhas:
                if abs(l["tam"] - 14) < 0.5 and l["texto"] in novo_nome:
                    apagar_rects.append(l["rect"])
                    escrever.append(lambda p, l=l, t=novo_nome[l["texto"]]: centralizado(p, l, t, FONTE_R, F_R, 235))
                    log["listas"] += 1

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
                            l["origem"], t, fontsize=l["tam"], fontname="F0", fontfile=FONTE_R))
                        log["campos"] += 1
            if "observacoes" in c:
                obs = [l for l in linhas if l["rect"].x0 > 245 and l["rect"].y0 > 345 and l["tam"] < 9]
                if obs:
                    apagar_rects += [l["rect"] for l in obs]
                    texto = f"Observações: {c['observacoes']}"
                    o = obs[0]
                    if F_R.text_length(texto, o["tam"]) <= 435:
                        escrever.append(lambda p, o=o, t=texto: p.insert_text(
                            o["origem"], t, fontsize=o["tam"], fontname="F0", fontfile=FONTE_R))
                    else:
                        escrever.append(lambda p, t=texto, tam=o["tam"]: caixa_que_cabe(
                            p, fitz.Rect(258, 350, 695, 396), t, tam, FONTE_R, fitz.TEXT_ALIGN_LEFT, 5))
                    log["observações"] += 1

        if apagar_rects:
            apagar(p, apagar_rects)
            for f in escrever:
                f(p)

    doc.save(saida, garbage=3, deflate=True)
    print(f"{saida}: " + ", ".join(f"{k} {v}" for k, v in log.items()))


if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
