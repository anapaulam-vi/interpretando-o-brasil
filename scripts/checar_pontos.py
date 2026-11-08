"""Amostra bioma (IBGE 1:250 mil) e classe MapBiomas nos pontos dos exemplos (getInfo local).
Uso: python scripts/checar_pontos.py dados/exemplos.csv saida.json [10|11]"""
import csv, re, sys, ee, json
ee.Initialize()
ex = list(csv.DictReader(open(sys.argv[1], encoding='utf-8-sig'), delimiter=';'))
feats = []
for i, e in enumerate(ex):
    nums = re.findall(r'-?\d+(?:\.\d+)?', e['coords'])
    if len(nums) >= 2:
        feats.append(ee.Feature(ee.Geometry.Point([float(nums[1]), float(nums[0])]), {'i': i}))
fc = ee.FeatureCollection(feats)
biomas = ee.FeatureCollection('users/vieiramesquita/lm_bioma_250')
COL = sys.argv[3] if len(sys.argv) > 3 else '10'
ASSET = {'10': 'projects/mapbiomas-public/assets/brazil/lulc/collection10/mapbiomas_brazil_collection10_coverage_v2',
         '11': 'projects/mapbiomas-public/assets/brazil/lulc/collection11/mapbiomas_brazil_collection11_coverage_v3'}[COL]
ANOS = {'10': [2024, 2023, 2020], '11': [2025, 2024, 2020]}[COL]
img = ee.Image(ASSET).select([f'classification_{a}' for a in ANOS])
def f(ft):
    b = biomas.filterBounds(ft.geometry())
    nome = ee.Algorithms.If(b.size().gt(0), b.first().get('Bioma'), 'FORA')
    return ft.set('bioma_ibge', nome)
fc = img.sampleRegions(collection=fc.map(f), scale=30, geometries=False)
res = fc.getInfo()['features']
out = {r['properties']['i']: r['properties'] for r in res}
json.dump(out, open(sys.argv[2], 'w'), ensure_ascii=False)
print(len(out), 'pontos amostrados de', len(feats))
