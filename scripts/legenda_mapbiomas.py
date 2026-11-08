"""Lê o texto extraído da "Descrição da Legenda" do MapBiomas (Coleções 10 e 11) e devolve
{(classe_oficial, id_bioma ou '*'): descrição}.

O texto é gerado com PyMuPDF a partir do PDF oficial (ver revisao/legenda_col11.txt).
"""
import re

BIOMAS = {'Amazônia': 'amazonia', 'Caatinga': 'caatinga', 'Cerrado': 'cerrado',
          'Mata Atlântica': 'mata_atlantica', 'Pampa': 'pampa', 'Pantanal': 'pantanal'}
CLASSES = ['Formação Florestal', 'Formação Savânica', 'Savana Alagada', 'Mangue', 'Floresta Alagável',
           'Restinga Arbórea', 'Campo Alagado e Área Pantanosa', 'Formação Campestre', 'Apicum',
           'Afloramento Rochoso', 'Restinga Herbácea', 'Formação Herbáceo Arbustiva', 'Marisma', 'Pastagem',
           'Soja', 'Cana', 'Arroz', 'Algodão (beta)', 'Outras Lavouras Temporárias', 'Café', 'Citrus', 'Dendê',
           'Outras Lavouras Perenes', 'Silvicultura', 'Mosaico de Usos', 'Mosaico de usos', 'Praia, Duna e Areal',
           'Área Urbanizada', 'Mineração', 'Outras Áreas não Vegetadas', 'Usina Fotovoltaica (beta)',
           'Usina Fotovoltaica', 'Parque eólico (beta)', 'Rio, Lago e Oceano', 'Aquicultura', 'Não Observado']
_CODIGO = re.compile(r"^([A-Za-z]{1,5}(\s\([a-z]\))?\d?(\.\d)?)(,\s?[A-Za-z]{1,5}(\s\([a-z]\))?\d?(\.\d)?)*,?$")
_QUEBRAS = [("Mata\nAtlântica", "Mata Atlântica"), ("Área\nPantanosa", "Área Pantanosa"),
            ("Lavouras\nTemporárias", "Lavouras Temporárias"), ("Lavouras\nPerenes", "Lavouras Perenes")]


def ler_legenda(caminho):
    txt = open(caminho, encoding='utf-8').read()
    for a, b in _QUEBRAS:
        txt = txt.replace(a, b)
    of, estado = {}, {"cls": None, "bio": None, "buf": [], "lendo": False}

    def fecha():
        if estado["buf"] and estado["cls"]:
            texto = re.sub(r"\s+", " ", " ".join(estado["buf"])).strip()
            texto = re.sub(r"(\w)- (\w)", r"\1-\2", texto)  # hífen partido na quebra de linha
            of[(estado["cls"], estado["bio"] or "*")] = texto
        estado["buf"], estado["lendo"] = [], False

    for linha in txt.splitlines():
        s = linha.strip()
        if not s or s.startswith("#####"):
            continue
        if s in CLASSES:
            fecha()
            estado.update(cls=s.replace(" (beta)", "").replace("Mosaico de usos", "Mosaico de Usos"),
                          bio=None, lendo=True)
            continue
        if s in BIOMAS and estado["cls"]:
            fecha()
            estado.update(bio=BIOMAS[s], lendo=True)
            continue
        if estado["lendo"]:
            if _CODIGO.match(s) or s == "NA":
                fecha()
                continue
            estado["buf"].append(s)
    fecha()
    return of


# Erros de digitação do texto oficial da Coleção 11, corrigidos na chave (autorizado em 08/11/2026)
CORRECOES_TEXTO = [
    ("Pequenas áreas agricolas", "Pequenas áreas agrícolas"),                       # Pastagem
    ("Não são passíveis de deteção nenhum tipo de mineração subterrâneas ou subaquática",
     "Não são passíveis de detecção nenhum tipo de mineração subterrânea ou subaquática"),  # Mineração
    ("extração mineral superficial, de  porte", "extração mineral superficial, de porte"),
    ("associadas à formações geológicas", "associadas a formações geológicas"),      # Afloramento, Cerrado
    # inconsistências da legenda resolvidas a favor das mudanças da Coleção 11:
    ("(Cerrado Denso, Típico, Ralo e Rupestre)", "(Cerrado Denso, Típico e Ralo)"),  # Savânica, Cerrado:
    #   Cerrado Rupestre passou para Afloramento Rochoso
    ("Savana Gramíneo-Lenhosa, Campinarana, para", "Savana Gramíneo-Lenhosa, para"),  # Campestre, Amazônia:
    #   "Áreas de Campinarana" passou a constar em Formação Florestal (Amazônia)
]


def descricao_oficial(of, classe_oficial, bioma):
    t = of.get((classe_oficial, bioma)) or of.get((classe_oficial, "*"))
    if t:
        t = re.sub(r"([a-zà-ú])\.([A-ZÁÉÍÓÚ])", r"\1. \2", t)  # "país.Em" -> "país. Em"
        t = re.sub(r"\s{2,}", " ", t)
        for de, para in CORRECOES_TEXTO:
            t = t.replace(de, para)
    return t
