"""Compara bioma e classe MapBiomas amostrados (checar_pontos.py) com a classe de cada exemplo.
Uso: python scripts/analisar_pontos.py dados/exemplos.csv saida.json [10|11]"""
import csv, json, sys, unicodedata
COL = sys.argv[3] if len(sys.argv) > 3 else '10'
ANOS = {'10': [2024, 2023, 2020], '11': [2025, 2024, 2020]}[COL]
ex = list(csv.DictReader(open(sys.argv[1], encoding='utf-8-sig'), delimiter=';'))
pt = {int(k): v for k, v in json.load(open(sys.argv[2], encoding='utf-8')).items()}
NOMES = {3:'Form. Florestal',4:'Form. Savânica',5:'Mangue',6:'Floresta Alagável',49:'Restinga Arbórea',11:'Campo Alagado',12:'Form. Campestre',32:'Apicum',29:'Afloramento',50:'Restinga Herbácea',15:'Pastagem',39:'Soja',20:'Cana',40:'Arroz',62:'Algodão',41:'Outras Lav. Temp.',46:'Café',47:'Citrus',35:'Dendê',48:'Outras Lav. Perenes',9:'Silvicultura',21:'Mosaico de Usos',23:'Praia/Duna',24:'Área Urbanizada',30:'Mineração',75:'Usina Fotovoltaica',25:'Outras não Vegetadas',33:'Rio/Lago/Oceano',31:'Aquicultura',7:'Savana Alagada',77:'Form. Herbáceo Arbustiva',84:'Marisma',91:'Parque Eólico',27:'Não observado',0:'sem dado'}
ESPERADO = {'Formação Florestal':{3},'Formação Savânica':{4},'Floresta Alagável':{6},'Mangue':{5},'Formação Campestre':{12},'Campo Alagado e Área Pantanosa':{11},'Afloramento Rochoso':{29},'Apicum':{32},'Restinga Herbácea':{50},'Pastagem':{15},'Cultivo Temporário':{19,39,20,40,62,41},'Soja':{39},'Arroz':{40},'Cana-de-açúcar':{20},'Cultivo Perene':{36,46,47,35,48},'Silvicultura':{9},'Praia, Duna e Areial':{23},'Área Urbana':{24},'Vegetação Urbana':set(),'Mineração':{30},'Usina Fotovoltaica':{75},'Outras áreas não vegetadas':{25},'Rio, Lago e Oceano':{33},'Aquicultura':{31}}
def s(t): return ''.join(c for c in unicodedata.normalize('NFD', t) if unicodedata.category(c)!='Mn').lower().replace(' ','_')
nb = cb = 0
for i, e in enumerate(ex):
    if i not in pt:
        print(f"SEM COORD p{e['pagina']} {e['bioma']}/{e['classe']} ex{e['ordem']} coords='{e['coords']}'"); continue
    p = pt[i]
    bi = s(p.get('bioma_ibge','FORA'))
    if bi != e['bioma']:
        nb += 1; print(f"BIOMA     p{e['pagina']} {e['bioma']}/{e['classe']} ex{e['ordem']} ({e['coords']}) -> ponto cai em: {p.get('bioma_ibge')}")
    c24, c23, c20 = (p.get(f'classification_{a}', 0) for a in ANOS)
    esp = ESPERADO[e['classe']]
    if esp and c24 not in esp:
        cb += 1; print(f"CLASSE    p{e['pagina']} {e['bioma']}/{e['classe']} ex{e['ordem']} ({e['coords']}) -> Col{COL} {ANOS[0]}: {NOMES.get(c24,c24)} ({ANOS[1]}: {NOMES.get(c23,c23)}, {ANOS[2]}: {NOMES.get(c20,c20)})")
    if not esp:
        print(f"INFO      p{e['pagina']} {e['bioma']}/{e['classe']} ex{e['ordem']} -> Col{COL} {ANOS[0]}: {NOMES.get(c24,c24)}")
print(f'\n{nb} fora do bioma, {cb} com classe diferente no MapBiomas Col{COL} ({ANOS[0]})')
