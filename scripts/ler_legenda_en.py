"""
Lê a descrição da legenda MapBiomas Coleção 11 em inglês (PDF exportado da planilha "Descrição Detalhada",
aba EN) e devolve as linhas da tabela na ordem: (nível 1-4, bioma, descrição).

Uso: python scripts/ler_legenda_en.py revisao/MapBiomas_Legenda_Colecao11_Descricao_EN.pdf
     python scripts/ler_legenda_en.py revisao/MapBiomas_Legenda_Colecao11_Descricao_EN.pdf --csv
     (--csv grava dados/legenda_mapbiomas_en.csv: classe_legenda;bioma;descricao, lido por gerar_dados.py)
"""
import sys

import pymupdf as fitz

COL_NIVEIS = (50, 258)
COL_BIOMA = (258, 328)
COL_DESC = (328, 529)


def _bandas(p):
    ys = []
    for dr in p.get_drawings():
        for it in dr["items"]:
            if it[0] == "l" and abs(it[1].y - it[2].y) < 0.5 and min(it[1].x, it[2].x) < 330 and max(it[1].x, it[2].x) > 500:
                ys.append(it[1].y)
            elif it[0] == "re" and it[1].height < 1.5 and it[1].x0 < 330 and it[1].x1 > 500:
                ys.append(it[1].y0)
    ys.sort()
    out = []
    for y in ys:
        if not out or y - out[-1] > 1.5:
            out.append(y)
    return list(zip(out, out[1:]))


def _texto(palavras, x0, x1, y0, y1):
    ws = [w for w in palavras if x0 <= (w[0] + w[2]) / 2 < x1 and y0 <= (w[1] + w[3]) / 2 < y1]
    ws.sort(key=lambda w: (round((w[1] + w[3]) / 2 / 3), w[0]))
    return " ".join(w[4] for w in ws).replace(" ,", ",").replace(" .", ".").strip()


def ler(pdf):
    linhas = []
    for p in fitz.open(pdf):
        palavras = p.get_text("words")
        for y0, y1 in _bandas(p):
            desc = _texto(palavras, *COL_DESC, y0, y1)
            if not desc or desc.startswith("Brief description"):
                continue
            linhas.append({"niveis": _texto(palavras, *COL_NIVEIS, y0, y1), "bioma": _texto(palavras, *COL_BIOMA, y0, y1),
                           "descricao": desc, "pagina": p.number + 1, "y": round(y0)})
    return linhas


def main():
    if "--csv" in sys.argv:
        import csv
        from pathlib import Path
        destino = Path(__file__).resolve().parent.parent / "dados" / "legenda_mapbiomas_en.csv"
        with destino.open("w", newline="", encoding="utf-8-sig") as f:
            w = csv.writer(f, delimiter=";")
            w.writerow(["classe_legenda", "bioma", "descricao"])
            for (c, b), txt in descricoes_en(sys.argv[1]).items():
                w.writerow([c, b, txt])
        print("gravado", destino)
        return
    for i, l in enumerate(ler(sys.argv[1])):
        print(i, l["pagina"], "|", l["niveis"], "|", l["bioma"], "|", l["descricao"][:110])


# ordem das linhas da tabela EN -> classe da legenda (nome em português, como em classes.csv/classe_legenda)
ORDEM = (["Formação Florestal"] * 6 + ["Formação Savânica"] * 5 + ["Savana Alagada", "Mangue", "Floresta Alagável"]
         + ["Restinga Arbórea"] * 2 + ["Campo Alagado e Área Pantanosa"] * 5 + ["Formação Campestre"] * 6 + ["Apicum"]
         + ["Afloramento Rochoso"] * 6 + ["Restinga Herbácea"] * 4
         + ["Formação Herbáceo Arbustiva", "Marisma", "Pastagem", "Soja", "Cana", "Arroz", "Algodão",
            "Outras Lavouras Temporárias", "Café", "Citrus", "Dendê", "Outras Lavouras Perenes", "Silvicultura"]
         + ["Mosaico de Usos"] * 6 + ["Praia, Duna e Areal", "Área Urbanizada", "Mineração", "Usina Fotovoltaica",
                                      "Parque Eólico"] + ["Outras Áreas não Vegetadas"] * 6
         + ["Rio, Lago e Oceano", "Aquicultura"])
BIOMA_EN = {"Amazon": "amazonia", "Caatinga": "caatinga", "Cerrado": "cerrado", "Atlantic Forest": "mata_atlantica",
            "Pampa": "pampa", "Pantanal": "pantanal"}
# mesmas decisões tomadas no texto em português (scripts/legenda_mapbiomas.py)
CORRECOES_EN = [
    ("(Dense, Typical, Sparse, and Rupestrian Savanna)", "(Dense, Typical, and Sparse Savanna)"),  # Rupestre -> Afloramento
    ("Grassland Savanna, and Campinarana in regions", "and Grassland Savanna in regions"),  # Campinarana -> Florestal
]


def descricoes_en(pdf):
    """{(classe_legenda, id_bioma ou ""): descrição em inglês}; "" = vale para todos os biomas."""
    import re
    linhas = ler(pdf)[:len(ORDEM)]
    assert len(linhas) == len(ORDEM), (len(linhas), len(ORDEM))
    out = {}
    for classe, l in zip(ORDEM, linhas):
        txt = re.sub(r"(\w)- (?!or\b|and\b)(\w)", r"\1-\2", l["descricao"])  # hífen partido na quebra de linha
        for a, b in CORRECOES_EN:
            txt = txt.replace(a, b)
        out[(classe, BIOMA_EN.get(l["bioma"], ""))] = txt
    return out


if __name__ == "__main__":
    main()
