"""
Preenche automaticamente o campo "Limitação de interpretação da classe" de cada EXEMPLO da chave, a partir só
dos próprios exemplos:

  mapa    o que o mapa MapBiomas Coleção 11 diz no ponto do exemplo (1985–2025): divergência com a classe da
          ficha, trajetória/alternância de classes, coordenada fora do bioma.
          Fonte: revisao/exemplos_col11_serie.json (scripts/serie_exemplos_col11.py).
  geral   limitações conhecidas da interpretação visual da classe (texto-base por classe, incluindo o que a
          legenda Coleção 11 declara). Sugestão: a equipe deve revisar.
  equipe  complemento da equipe, escrito à mão na planilha. NUNCA é sobrescrito por este script.

Saída: dados/limitacoes.csv (pagina;ordem;bioma;classe;mapa;geral;equipe). Depois rode scripts/gerar_dados.py.
"""
import csv
import json
import re
import unicodedata
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
DADOS = RAIZ / "dados"
SERIE = RAIZ / "revisao" / "exemplos_col11_serie.json"
SAIDA = DADOS / "limitacoes.csv"

NOME = {3: "Formação Florestal", 4: "Formação Savânica", 5: "Mangue", 6: "Floresta Alagável", 7: "Savana Alagada",
        49: "Restinga Arbórea", 11: "Campo Alagado e Área Pantanosa", 12: "Formação Campestre",
        77: "Formação Herbáceo Arbustiva", 84: "Marisma", 50: "Restinga Herbácea ou Arbustiva", 32: "Apicum",
        29: "Afloramento Rochoso", 15: "Pastagem", 19: "Lavoura Temporária", 39: "Soja", 20: "Cana", 40: "Arroz",
        62: "Algodão", 41: "Outras Lavouras Temporárias", 36: "Lavoura Perene", 46: "Café", 47: "Citrus",
        35: "Dendê", 48: "Outras Lavouras Perenes", 9: "Silvicultura", 21: "Mosaico de Usos",
        23: "Praia, Duna e Areal", 24: "Área Urbanizada", 30: "Mineração", 75: "Usina Fotovoltaica",
        91: "Parque Eólico", 25: "Outras Áreas não Vegetadas", 33: "Rio, Lago e Oceano", 31: "Aquicultura"}
# classe da ficha -> códigos do mapa Coleção 11 que contam como a classe
EQUIV = {"Cultivo Temporário": {19, 39, 40, 41, 62}, "Cultivo Perene": {35, 36, 46, 47, 48}}

GERAL = {
    "Formação Florestal": "O limite com a Formação Savânica é gradual (dossel mais aberto). Em florestas estacionais, a "
    "queda das folhas no período seco reduz o NDVI e pode lembrar savana. Florestas secundárias jovens, degradadas ou "
    "com corte seletivo são difíceis de separar da floresta madura na resolução de 10–30 m.",
    "Formação Savânica": "A densidade de árvores varia de forma contínua, por isso os limites com Formação Florestal e "
    "Formação Campestre são subjetivos. No período seco, a resposta se aproxima da de pastagem. Comparar as imagens de "
    "seca e de chuva e a série de NDVI.",
    "Floresta Alagável": "A diferença em relação à Formação Florestal depende do regime de inundação, pouco visível em "
    "imagens ópticas sob o dossel. Usar o contexto (várzea, igapó, planície fluvial) e imagens do período de cheia.",
    "Mangue": "Pode ser confundido com Floresta Alagável e Restinga Arbórea. Os limites com Apicum e com a água variam "
    "com a maré. Usar o contexto estuarino.",
    "Formação Campestre": "Confunde-se com Pastagem, principalmente pastagem em campo nativo ou com gramíneas exóticas. "
    "A separação depende de sinais de manejo (cercas, bebedouros, talhões) e do histórico da área. Queimadas e "
    "senescência no período seco alteram a resposta espectral.",
    "Campo Alagado e Área Pantanosa": "A inundação é sazonal: no período seco a área pode parecer Formação Campestre ou "
    "Pastagem e, na cheia, água. Comparar as imagens de seca e de chuva.",
    "Afloramento Rochoso": "Afloramentos pequenos ou entremeados de vegetação ficam abaixo da resolução de 30 m e se "
    "misturam com Formação Campestre ou Savânica. A rocha exposta pode lembrar solo exposto ou Outras Áreas não "
    "Vegetadas.",
    "Apicum": "Confunde-se com Praia, Duna e Areal, Outras Áreas não Vegetadas, salinas e tanques de aquicultura. Os "
    "limites com o mangue e com a água variam com a maré.",
    "Restinga Herbácea": "Quando a cobertura é esparsa, confunde-se com Formação Campestre e com Praia, Duna e Areal. "
    "Depende do contexto costeiro (cordões arenosos).",
    "Pastagem": "Confunde-se com Formação Campestre e Savânica (pastagem em vegetação nativa aberta), com Lavoura "
    "Temporária (rotação ou integração lavoura-pecuária) e com Mosaico de Usos. Pastagens degradadas, com solo "
    "exposto, podem parecer Outras Áreas não Vegetadas.",
    "Cultivo Temporário": "Na entressafra, o solo exposto ou a palhada parecem pastagem degradada ou solo exposto. A "
    "identificação depende do calendário agrícola, visível na série de NDVI (ciclos de plantio e colheita).",
    "Arroz": "O arroz irrigado por inundação pode parecer água ou Campo Alagado no início do ciclo. O arroz de sequeiro "
    "é difícil de separar das outras lavouras temporárias sem informação de campo.",
    "Cana-de-açúcar": "A separação de outras lavouras temporárias e de pastagem depende do ciclo longo (colheita anual "
    "e rebrota) na série de NDVI. Áreas em reforma ou recém-colhidas parecem solo exposto.",
    "Cultivo Perene": "Pode ser confundida com Silvicultura e com Formação Savânica ou Florestal (pomares adultos, café "
    "sombreado, dendê), e com Pastagem nas fases iniciais. As linhas de plantio geralmente só aparecem em imagens de "
    "alta resolução.",
    "Silvicultura": "Plantios jovens ou recém-cortados parecem pastagem ou solo exposto. Plantios adultos parecem "
    "floresta. Usar o formato dos talhões, os carreadores e a série histórica (corte e rebrota).",
    "Praia, Duna e Areial": "Confunde-se com Outras Áreas não Vegetadas, Apicum e Restinga Herbácea esparsa. O areal "
    "(Pampa) pode lembrar o solo exposto de lavouras.",
    "Área Urbana": "Bairros muito arborizados, loteamentos não ocupados e pequenos núcleos rurais são difíceis de "
    "delimitar. Telhados e solo exposto podem ser confundidos com Mineração ou Outras Áreas não Vegetadas.",
    "Mineração": "Confunde-se com Outras Áreas não Vegetadas, solo exposto e áreas urbanas em expansão. Pela legenda, a "
    "mineração subterrânea ou subaquática não é detectável.",
    "Usina Fotovoltaica": "Pela legenda, a classe considera instalações de médio a grande porte voltadas à "
    "comercialização da energia: geração distribuída (telhados) e instalações pequenas não entram. Na resolução de "
    "30 m, os painéis podem ser confundidos com Outras Áreas não Vegetadas ou área urbana.",
    "Outras áreas não vegetadas": "É uma classe residual: reúne superfícies não vegetadas que não se encaixam nas "
    "demais. Por isso, confunde-se com Mineração, Área Urbanizada, Praia, Duna e Areal, Afloramento Rochoso e lavouras "
    "em solo exposto.",
    "Rio, Lago e Oceano": "A lâmina d'água varia entre seca e cheia. Rios estreitos (< 30 m) e lagos pequenos podem não "
    "aparecer. Água turva ou coberta por plantas aquáticas pode parecer solo ou vegetação.",
    "Aquicultura": "Tanques escavados parecem pequenos reservatórios e açudes (Rio, Lago e Oceano) e salinas. Tanques "
    "pequenos ficam abaixo da resolução de 30 m. O formato retangular e o agrupamento dos tanques ajudam.",
}


def ler(arq):
    if not arq.exists():
        return []
    return list(csv.DictReader(arq.read_text(encoding="utf-8-sig").splitlines(), delimiter=";"))


def slug(t):
    t = "".join(c for c in unicodedata.normalize("NFD", t or "") if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]+", "_", t.lower()).strip("_")


def nome(c):
    return NOME.get(c, "sem classe" if not c else f"classe {c}")


def juntar(itens):
    return itens[0] if len(itens) == 1 else ", ".join(itens[:-1]) + " e " + itens[-1]


def trechos(serie):
    """[(classe, ano_ini, ano_fim)] — sequências de anos com a mesma classe."""
    out = []
    for a in sorted(serie, key=int):
        c = serie[a]
        if out and out[-1][0] == c:
            out[-1][2] = a
        else:
            out.append([c, a, a])
    return out


def periodo(i, f):
    return i if i == f else f"{i}–{f}"


def texto_mapa(info, bioma, classe, codigos, nome_bioma):
    if not info:
        return ""
    partes = []
    bi = info.get("bioma_ibge")
    if bi and slug(bi) != bioma:
        partes.append(f"A coordenada fica no bioma {bi}, não no bioma {nome_bioma} da ficha.")
    serie = {a: c for a, c in info["serie"].items()}
    tr = trechos(serie)
    ok = [a for a, c in serie.items() if c in codigos]
    c25 = serie.get("2025")
    if len(ok) == len(serie):
        partes.append("No mapa MapBiomas Coleção 11, o ponto é desta classe em todos os anos (1985–2025).")
        return " ".join(partes)
    if len(tr) <= 5:
        traj = juntar([f"{nome(c)} ({periodo(i, f)})" for c, i, f in tr])
        traj = f"Trajetória do ponto no mapa Coleção 11: {traj}."
    else:
        outras = sorted({nome(c) for c, _, _ in tr if c not in codigos})
        traj = (f"No mapa Coleção 11, o ponto muda de classe {len(tr) - 1} vezes entre 1985 e 2025, alternando com "
                f"{juntar(outras)}; essa alternância indica confusão entre essas classes no ponto.")
    if len(tr) == 1:
        partes.append(f"No mapa MapBiomas Coleção 11, o ponto está classificado como {nome(c25)} em todos os anos "
                      f"(1985–2025), não como {classe}. Pode indicar confusão entre as classes, ponto na borda do alvo "
                      f"ou erro do mapa; conferir.")
    elif c25 in codigos:
        partes.append(f"Em 2025 o mapa Coleção 11 classifica o ponto como esta classe, mas nem sempre foi assim. {traj}")
    else:
        partes.append(f"No mapa MapBiomas Coleção 11 (2025), o ponto está classificado como {nome(c25)}, não como "
                      f"{classe}. {traj} Pode indicar confusão entre as classes, ponto na borda do alvo ou erro do "
                      f"mapa; conferir.")
    return " ".join(partes)


def main():
    classes = {c["classe"]: c for c in ler(DADOS / "classes.csv")}
    biomas = {b["id"]: b["bioma"] for b in ler(DADOS / "biomas.csv")}
    serie = json.loads(SERIE.read_text(encoding="utf-8")) if SERIE.exists() else {}
    antigo = {(l["pagina"], l["ordem"]): l.get("equipe", "") for l in ler(SAIDA)}
    linhas = []
    for e in ler(DADOS / "exemplos.csv"):
        c = classes.get(e["classe"])
        if not c:
            continue
        codigos = EQUIV.get(e["classe"], {int(c["codigo"])})
        k = f'{e["pagina"]}|{e["ordem"]}'
        linhas.append([e["pagina"], e["ordem"], e["bioma"], e["classe"],
                       texto_mapa(serie.get(k), e["bioma"], c.get("nome") or e["classe"], codigos,
                                  biomas.get(e["bioma"], e["bioma"])),
                       GERAL.get(e["classe"], ""), antigo.get((e["pagina"], e["ordem"]), "")])
    with SAIDA.open("w", newline="", encoding="utf-8-sig") as f:
        w = csv.writer(f, delimiter=";")
        w.writerow(["pagina", "ordem", "bioma", "classe", "mapa", "geral", "equipe"])
        w.writerows(linhas)
    print(f"{SAIDA.relative_to(RAIZ)}: {len(linhas)} exemplos, "
          f"{sum(1 for l in linhas if 'não como' in l[4])} com classe diferente no mapa em 2025")


if __name__ == "__main__":
    main()
