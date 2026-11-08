"""
Gera dados/correcoes.csv com as correções que podem ser feitas sem decisão da equipe:

  - tonalidade padronizada no feminino (Escura / Média / Clara);
  - textura padronizada ("Rugosa e Heterogênea", "Lisa e Homogênea"...);
  - falsa-cor com a ordem R-G-B real das composições (Landsat B5-B6-B4, Sentinel-2 B11-B8-B4; o PDF dizia
    B6-B5-B4 e B8-B11-B4, o que não bate com as cores das imagens) e p. 57 (tinha a textura repetida);
  - erros de digitação e decimais com vírgula nas observações (texto revisado à mão abaixo);
  - observação da p. 8.

As descrições das classes NÃO entram aqui: o site e o PDF corrigido usam direto a descrição
oficial da legenda (dados/legenda_mapbiomas.txt).

Uso: python scripts/correcoes_automaticas.py   (depois: gerar_dados.py e corrigir_pdf.py)
"""
import csv
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
DADOS = RAIZ / "dados"

TONALIDADE = {"escuro": "Escura", "escura": "Escura", "médio": "Média", "média": "Média",
              "claro": "Clara", "clara": "Clara"}
FALSA_COR = "Landsat (B5, B6, B4); Sentinel (B11, B8, B4)"

OBS = {  # página -> observação revisada
    "6": "Florestas degradadas são mantidas na classe Formação Florestal até a perda irreversível da "
         "vegetação. A regeneração só é considerada quando o porte da floresta se assemelha ao natural.",
    "7": "NDVI alto (0,9) e baixa variação por sazonalidade.",
    "8": "Savanas alagadas são consideradas na classe “Campo Alagado e Área Pantanosa”.",
    "27": "Mesmo que no período seco não tenha água, ainda é considerado Rio, Lago e Oceano.",
    "78": "Vegetação florestal bem marcada em torno de grandes rios e em área rebaixada (com bastante "
          "umidade). NDVI acima de 0,8 e sem variação com a sazonalidade. Apicuns associados.",
    "89": "Delimitação (em talhões) com textura rugosa e homogênea, indicando uma mesma espécie. Essas "
          "‘falhas’ na área podem significar espécies de silvicultura que perdem as folhas ou uma plantação "
          "que não teve um bom manejo (plantas que não se desenvolveram). NDVI subindo de 0,2 para 0,8, "
          "indicando o plantio, estável em 0,8 por anos, indicando espécie arbórea, e uma queda brusca, "
          "indicando a colheita. Tonalidade muito escura, puxada para o marrom, na silvicultura pode "
          "significar uma silvicultura velha.",
    "154": "Relevo montanhoso e altas altitudes, uma das características da Mata Atlântica. NDVI médio, "
           "típico de gramínea.",
    "172": "Coloração indicativa de ausência de vegetação e presença de umidade. NDVI baixo e constante.",
    "182": "Delimitação com textura lisa (para este nível de detalhe da imagem) e homogênea; ver a diferença "
           "em relação à formação florestal ao lado. NDVI baixo com aumento para acima de 0,8, indicando o "
           "cultivo de espécie arbórea. Esse formato de silvicultura em meio a formações florestais é comum "
           "no bioma Mata Atlântica.",
    "186": "NDVI abaixo de 0,15 aponta ausência de vegetação. Manchas de solo exposto e lagoas próximas "
           "indicam a atividade de mineração.",
    "215": "Delimitação que indica que houve desmatamento da vegetação nativa. Manchas características de "
           "áreas que sofrem alagamento, típicas do bioma Pantanal. Solo exposto em regiões de alagamento em "
           "que a gramínea exótica não sobrevive. Bebedouros para gado. NDVI médio, típico de gramínea.",
    "230": "Padrão de pequenos talhões; a coloração indica umidade (vermelho + azul) e há dutos de irrigação, "
           "características do plantio de arroz. O NDVI varia de 0,2 a 1 em alguns meses e volta a 0,2, "
           "indicando cultivo e colheita.",
}


def ler(nome):
    return list(csv.DictReader((DADOS / nome).open(encoding="utf-8-sig"), delimiter=";"))


def textura(t):
    if not t:
        return t
    partes = [p.strip().lower() for p in t.split(" e ")]
    if len(partes) != 2:
        return t
    a = {"rugosa": "Rugosa", "rugoso": "Rugosa", "lisa": "Lisa", "liso": "Lisa"}.get(partes[0], partes[0].title())
    b = {"heterogênea": "Heterogênea", "heterogêneo": "Heterogênea",
         "homogênea": "Homogênea", "homogêneo": "Homogênea"}.get(partes[1], partes[1].title())
    return f"{a} e {b}"


def main():
    linhas = []
    for e in ler("exemplos.csv"):
        p = e["pagina"]
        ton = TONALIDADE.get(e["tonalidade"].strip().lower(), e["tonalidade"])
        if ton != e["tonalidade"]:
            linhas.append((p, "tonalidade", ton, "tonalidade no feminino"))
        tex = textura(e["textura"])
        if tex != e["textura"]:
            linhas.append((p, "textura", tex, "concordância da textura"))
        if e["falsa_cor"] and e["falsa_cor"] != FALSA_COR:
            motivo = ("falsa-cor com a textura repetida" if not e["falsa_cor"].startswith("Vermelho")
                      else "ordem R-G-B das bandas da falsa-cor")
            linhas.append((p, "falsa_cor", FALSA_COR, motivo))
        if p in OBS and OBS[p] != e["observacoes"]:
            linhas.append((p, "observacoes", OBS[p], "revisão do texto da observação"))
    for d in ler("descricoes.csv"):
        if d["pagina"] in OBS and OBS[d["pagina"]] != d["observacoes"]:
            linhas.append((d["pagina"], "observacoes", OBS[d["pagina"]], "revisão do texto da observação"))
    with (DADOS / "correcoes.csv").open("w", encoding="utf-8-sig", newline="") as f:
        w = csv.writer(f, delimiter=";")
        w.writerow(["pagina", "campo", "para", "motivo"])
        w.writerows(sorted(linhas, key=lambda l: (int(l[0]), l[1])))
    print(f"dados/correcoes.csv: {len(linhas)} correções")


if __name__ == "__main__":
    main()
