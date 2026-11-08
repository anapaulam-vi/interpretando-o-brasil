"""Compara as descrições da chave (dados/descricoes.csv) com a descrição detalhada da legenda
MapBiomas (texto extraído do PDF oficial; funciona com as Coleções 10 e 11).

Uso:
  python scripts/comparar_legenda.py revisao/legenda_col10.txt dados/descricoes.csv
  python scripts/comparar_legenda.py revisao/legenda_col11.txt dados/descricoes.csv
"""
import re, csv, sys, difflib, unicodedata

txt = open(sys.argv[1], encoding='utf-8').read()
# o PDF da Coleção 11 quebra alguns nomes em duas linhas
for a, b in [("Mata\nAtlântica", "Mata Atlântica"), ("Área\nPantanosa", "Área Pantanosa"),
             ("Lavouras\nTemporárias", "Lavouras Temporárias"), ("Lavouras\nPerenes", "Lavouras Perenes")]:
    txt = txt.replace(a, b)

BIOMAS = {'Amazônia': 'amazonia', 'Caatinga': 'caatinga', 'Cerrado': 'cerrado',
          'Mata Atlântica': 'mata_atlantica', 'Pampa': 'pampa', 'Pantanal': 'pantanal'}
CLASSES = ['Formação Florestal', 'Formação Savânica', 'Savana Alagada', 'Mangue', 'Floresta Alagável',
           'Restinga Arbórea', 'Campo Alagado e Área Pantanosa', 'Formação Campestre', 'Apicum',
           'Afloramento Rochoso', 'Restinga Herbácea', 'Formação Herbáceo Arbustiva', 'Marisma', 'Pastagem',
           'Soja', 'Cana', 'Arroz', 'Algodão (beta)', 'Outras Lavouras Temporárias', 'Café', 'Citrus', 'Dendê',
           'Outras Lavouras Perenes', 'Silvicultura', 'Mosaico de Usos', 'Mosaico de usos', 'Praia, Duna e Areal',
           'Área Urbanizada', 'Mineração', 'Outras Áreas não Vegetadas', 'Usina Fotovoltaica (beta)',
           'Usina Fotovoltaica', 'Parque eólico (beta)', 'Rio, Lago e Oceano', 'Aquicultura', 'Não Observado']
codigo = re.compile(r"^([A-Za-z]{1,5}(\s\([a-z]\))?\d?(\.\d)?)(,\s?[A-Za-z]{1,5}(\s\([a-z]\))?\d?(\.\d)?)*,?$")

of = {}; cls = None; bio = None; buf = []; lendo = False


def fecha():
    global buf, lendo
    if buf and cls:
        of[(cls, bio or '*')] = ' '.join(buf)
    buf = []; lendo = False


for l in txt.splitlines():
    s = l.strip()
    if not s or s.startswith('#####'):
        continue
    if s in CLASSES:
        fecha(); cls = s.replace(' (beta)', '').replace('Mosaico de usos', 'Mosaico de Usos'); bio = None; lendo = True
        continue
    if s in BIOMAS and cls:
        fecha(); bio = BIOMAS[s]; lendo = True
        continue
    if lendo:
        if codigo.match(s) or s == 'NA':
            fecha(); continue
        buf.append(s)


def n(t):
    # ignora diferenças só de espaço, hífen de quebra de linha e ponto final
    t = unicodedata.normalize('NFKC', t)
    t = re.sub(r'[-‐]\s?', '', t)
    return re.sub(r'\s+', ' ', t).strip().rstrip('.').strip()


MAP = {'Cultivo Temporário': 'Outras Lavouras Temporárias', 'Cultivo Perene': 'Outras Lavouras Perenes',
       'Cana-de-açúcar': 'Cana', 'Praia, Duna e Areial': 'Praia, Duna e Areal', 'Área Urbana': 'Área Urbanizada',
       'Outras áreas não vegetadas': 'Outras Áreas não Vegetadas'}
rows = list(csv.DictReader(open(sys.argv[2], encoding='utf-8-sig'), delimiter=';'))
iguais = 0
for r in rows:
    oc = MAP.get(r['classe'], r['classe'])
    ref = of.get((oc, r['bioma'])) or of.get((oc, '*'))
    d = n(r['descricao'])
    if ref is None:
        print(f"SEM REF   p{r['pagina']} {r['bioma']}/{r['classe']}  (legenda oficial não tem essa classe/bioma)")
        continue
    rn = n(ref)
    if d == rn:
        iguais += 1
        continue
    if not d:
        print(f"VAZIA     p{r['pagina']} {r['bioma']}/{r['classe']}\n   OFICIAL: {ref}")
        continue
    ratio = difflib.SequenceMatcher(None, d, rn).ratio()
    print(f"DIFERENTE p{r['pagina']} {r['bioma']}/{r['classe']} (similaridade {ratio:.2f})\n"
          f"   CHAVE:   {r['descricao']}\n   OFICIAL: {ref}")
print(f'\n{iguais} de {len(rows)} descrições idênticas; {len(of)} pares classe/bioma lidos da legenda')
print('Pares da legenda sem ficha na chave:')
tem = {(MAP.get(r['classe'], r['classe']), r['bioma']) for r in rows}
for (c, b) in sorted(of):
    if b == '*':
        if not any(cc == c for cc, _ in tem):
            print('  ', c)
    elif (c, b) not in tem:
        print('  ', c, '/', b)
