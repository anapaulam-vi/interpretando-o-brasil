"""
Gera dados/chave.js (lido pelo site) a partir das planilhas em dados/:

  biomas.csv        id;bioma;cor
  classes.csv       classe;nome;grupo;cor;codigo;classe_legenda   (a ordem das linhas é a ordem no site;
                    "classe" = nome no PDF, "nome" = nome na legenda Coleção 11)
  legenda_mapbiomas.txt  texto da Descrição da Legenda MapBiomas (Coleção 11). A descrição exibida no
                    site é a oficial do bioma; o texto do PDF só é usado quando a legenda não tem descrição.
  descricoes.csv    bioma;classe;descricao;observacoes;pagina
  exemplos.csv      bioma;classe;ordem;pagina;coords;falsa_cor;tonalidade;textura;observacoes;
                    landsat_seco;landsat_chuvoso;sentinel_seco;sentinel_chuvoso;google_earth;grafico;mapa
  apresentacao.txt  texto da janela "Sobre"
  legenda_mapbiomas_en.csv  descrição oficial da legenda em inglês (scripts/ler_legenda_en.py --csv)
  traducao_en.csv   pt;en — tradução dos textos para o botão EN do site (o que faltar aparece em português)
  correcoes.csv     pagina;campo;para;motivo — correções de texto aplicadas por cima do que veio do PDF
                    (sobrevivem a uma nova importação). Campos: descricao, observacoes, coords,
                    falsa_cor, tonalidade, textura.

As planilhas são criadas por scripts/importar_pdf.py e podem ser corrigidas à mão
(Excel, separador ";"). Depois de editar, rode:

  python scripts/gerar_dados.py
"""
import csv
import json
import re
import sys
import unicodedata
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from legenda_mapbiomas import descricao_oficial, ler_legenda  # noqa: E402

RAIZ = Path(__file__).resolve().parent.parent
DADOS = RAIZ / "dados"
PDF = "Interpretando_o_Brasil.pdf"
LEGENDA = "Coleção 11"
QUADROS = [
    ("landsat_seco", "Landsat – seco"),
    ("landsat_chuvoso", "Landsat – chuvoso"),
    ("sentinel_seco", "Sentinel-2 – seco"),
    ("sentinel_chuvoso", "Sentinel-2 – chuvoso"),
    ("google_earth", "Google Earth"),
]


def ler(nome):
    caminho = DADOS / nome
    if not caminho.exists():
        return []
    texto = caminho.read_text(encoding="utf-8-sig")
    primeira = texto.splitlines()[0] if texto else ""
    sep = ";" if primeira.count(";") >= primeira.count(",") else ","
    return [{(k or "").strip(): (v or "").strip() for k, v in l.items()}
            for l in csv.DictReader(texto.splitlines(), delimiter=sep)]


def slug(t):
    t = "".join(c for c in unicodedata.normalize("NFD", t) if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]+", "_", t.lower()).strip("_")


def coords(txt):
    nums = re.findall(r"-?\d+(?:\.\d+)?", txt)
    if len(nums) >= 2:
        lat, lon = float(nums[0]), float(nums[1])
        if -35 <= lat <= 6 and -75 <= lon <= -30:
            return lat, lon
    return None, None


def main():
    biomas = ler("biomas.csv")
    classes = ler("classes.csv")
    id_classe = {c["classe"]: slug(c.get("nome") or c["classe"]) for c in classes}
    leg_classe = {c["classe"]: c.get("classe_legenda", "") for c in classes}
    arq_leg = DADOS / "legenda_mapbiomas.txt"
    legenda = ler_legenda(arq_leg) if arq_leg.exists() else {}
    # descrição oficial da legenda em inglês (scripts/ler_legenda_en.py --csv); "" no bioma = todos os biomas
    leg_en = {(l["classe_legenda"], l["bioma"]): l["descricao"] for l in ler("legenda_mapbiomas_en.csv")}
    en = {l["pt"]: l["en"] for l in ler("traducao_en.csv") if l.get("pt") and l.get("en")}
    entradas = {}
    n_of = n_en = 0

    # numeração do PDF corrigido (páginas retiradas mudam a numeração); gerado por corrigir_pdf.py
    arq_pag = DADOS / "paginas_pdf.json"
    mapa_pag = json.loads(arq_pag.read_text(encoding="utf-8")) if arq_pag.exists() else {}

    def pag(v):
        if not str(v).isdigit():
            return None
        return mapa_pag.get(str(v), int(v)) if mapa_pag else int(v)

    correcoes = {}
    for c in ler("correcoes.csv"):
        correcoes.setdefault(c["pagina"], {})[c["campo"]] = c["para"]

    def corrige(linha):
        linha.update(correcoes.get(linha.get("pagina", ""), {}))
        return linha

    for d in map(corrige, ler("descricoes.csv")):
        if d["classe"] not in id_classe:
            print(f"AVISO: classe '{d['classe']}' não está em classes.csv")
            continue
        k = f'{id_classe[d["classe"]]}|{d["bioma"]}'
        of = descricao_oficial(legenda, leg_classe[d["classe"]], d["bioma"]) if leg_classe[d["classe"]] else None
        if of:
            of = re.sub(r"([a-zà-ú])\.([A-ZÁÉÍÓÚ])", r"\1. \2", of)  # "país.Em" -> "país. Em"
            n_of += 1
            lc = leg_classe[d["classe"]]
            of_en = leg_en.get((lc, d["bioma"])) or leg_en.get((lc, ""))
            if of_en:
                en[of] = of_en  # a descrição oficial em inglês substitui a tradução da planilha
                n_en += 1
        entradas[k] = {
            "descricao": of or d.get("descricao", ""), "fonte": "legenda" if of else "chave",
            "observacoes": d.get("observacoes", ""),
            "pagina": pag(d.get("pagina", "")), "exemplos": [],
        }

    # limitação de interpretação da classe, por exemplo (scripts/gerar_limitacoes.py + coluna "equipe")
    limit = {(l["pagina"], l["ordem"]): {c: l[c] for c in ("equipe", "geral") if l.get(c)}
             for l in ler("limitacoes.csv")}

    exemplos = sorted(map(corrige, ler("exemplos.csv")), key=lambda e: int(e.get("ordem") or 0))
    n_img = 0
    for e in exemplos:
        if e["classe"] not in id_classe:
            continue
        k = f'{id_classe[e["classe"]]}|{e["bioma"]}'
        ent = entradas.setdefault(k, {"descricao": "", "fonte": "chave", "observacoes": "", "pagina": None,
                                      "exemplos": []})
        lat, lon = coords(e.get("coords", ""))
        imgs = [{"src": e[q], "rotulo": r} for q, r in QUADROS if e.get(q)]
        n_img += len(imgs)
        ent["exemplos"].append({
            "lat": lat, "lon": lon, "coords": e.get("coords", ""),
            "falsa_cor": e.get("falsa_cor", ""), "tonalidade": e.get("tonalidade", ""),
            "textura": e.get("textura", ""), "observacoes": e.get("observacoes", ""),
            "limitacao": limit.get((e.get("pagina", ""), e.get("ordem", "")), {}),
            "pagina": pag(e.get("pagina", "")),
            "imagens": imgs, "grafico": e.get("grafico", ""), "mapa": e.get("mapa", ""),
        })

    grupos = []
    for c in classes:
        if c["grupo"] not in grupos:
            grupos.append(c["grupo"])
    apres = DADOS / "apresentacao.txt"
    dados = {
        "apresentacao": apres.read_text(encoding="utf-8").strip() if apres.exists() else "",
        "pdf": PDF if (RAIZ / PDF).exists() else "",
        "legenda": LEGENDA,
        "biomas": [{"id": b["id"], "nome": b["bioma"], "cor": b["cor"]} for b in biomas],
        "grupos": grupos,
        "classes": [{"id": id_classe[c["classe"]], "nome": c.get("nome") or c["classe"], "grupo": c["grupo"],
                     "cor": c["cor"], "codigo": c.get("codigo", "")} for c in classes],
        "entradas": entradas,
        # tradução para inglês: texto em português -> inglês (dados/traducao_en.csv, editável no Excel)
        "en": en,
    }
    destino = DADOS / "chave.js"
    destino.write_text(
        "// Gerado por scripts/gerar_dados.py — não edite à mão; edite as planilhas em dados/\n"
        "window.CHAVE = " + json.dumps(dados, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8",
    )
    n_ex = sum(len(v["exemplos"]) for v in entradas.values())
    print(f"correções aplicadas: {sum(len(v) for v in correcoes.values())}")
    print(f"{destino.relative_to(RAIZ)}: {len(classes)} classes, {len(biomas)} biomas, "
          f"{len(entradas)} fichas ({n_of} com descrição da legenda {LEGENDA}), {n_ex} exemplos, "
          f"{n_img} imagens de satélite; {n_en} descrições com o texto oficial em inglês")
    versionar()


def versionar():
    """Põe ?v=<hash do conteúdo> nos endereços de chave.js, app.js e style.css no index.html, para o navegador
    não usar uma cópia antiga em cache depois de uma atualização."""
    import hashlib
    html = RAIZ / "index.html"
    t = html.read_text(encoding="utf-8")
    for arq in ("dados/chave.js", "assets/app.js", "assets/style.css"):
        h = hashlib.md5((RAIZ / arq).read_bytes().replace(b"\r\n", b"\n")).hexdigest()[:8]
        t = re.sub(re.escape(arq) + r'(\?v=\w+)?"', f'{arq}?v={h}"', t)
    html.write_text(t, encoding="utf-8")


if __name__ == "__main__":
    main()
