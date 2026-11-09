"""
Preenche automaticamente o campo "Limitação de interpretação da classe" de cada EXEMPLO da chave:

  geral   limitações conhecidas da interpretação visual da classe (texto-base por classe, incluindo o que a
          legenda Coleção 11 declara). Sugestão: a equipe deve revisar.
  equipe  complemento da equipe, escrito à mão na planilha. NUNCA é sobrescrito por este script.

Saída: dados/limitacoes.csv (pagina;ordem;bioma;classe;geral;equipe). Depois rode scripts/gerar_dados.py.
"""
import csv
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
DADOS = RAIZ / "dados"
SAIDA = DADOS / "limitacoes.csv"

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


def main():
    classes = {c["classe"] for c in ler(DADOS / "classes.csv")}
    antigo = {(l["pagina"], l["ordem"]): l.get("equipe", "") for l in ler(SAIDA)}
    linhas = [[e["pagina"], e["ordem"], e["bioma"], e["classe"], GERAL.get(e["classe"], ""),
               antigo.get((e["pagina"], e["ordem"]), "")]
              for e in ler(DADOS / "exemplos.csv") if e["classe"] in classes]
    with SAIDA.open("w", newline="", encoding="utf-8-sig") as f:
        w = csv.writer(f, delimiter=";")
        w.writerow(["pagina", "ordem", "bioma", "classe", "geral", "equipe"])
        w.writerows(linhas)
    print(f"{SAIDA.relative_to(RAIZ)}: {len(linhas)} exemplos")


if __name__ == "__main__":
    main()
