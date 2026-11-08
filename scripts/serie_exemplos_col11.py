"""
Amostra, no ponto de cada exemplo da chave, a classe do mapa MapBiomas Coleção 11 em todos os anos (1985–2025)
e o bioma IBGE (1:250 mil). Cálculo local (getInfo, um lote só: ~120 pontos).

Saída: revisao/exemplos_col11_serie.json  {"<pagina>|<ordem>": {"bioma_ibge": ..., "serie": {ano: classe}}}
Uso:   python scripts/serie_exemplos_col11.py
"""
import csv
import json
import re
from pathlib import Path

import ee

RAIZ = Path(__file__).resolve().parent.parent
SAIDA = RAIZ / "revisao" / "exemplos_col11_serie.json"
ASSET = "projects/mapbiomas-public/assets/brazil/lulc/collection11/mapbiomas_brazil_collection11_coverage_v3"
ANOS = list(range(1985, 2026))


def main():
    ee.Initialize()
    ex = list(csv.DictReader((RAIZ / "dados" / "exemplos.csv").read_text(encoding="utf-8-sig").splitlines(),
                             delimiter=";"))
    feats = []
    for e in ex:
        nums = re.findall(r"-?\d+(?:\.\d+)?", e["coords"])
        if len(nums) >= 2:
            feats.append(ee.Feature(ee.Geometry.Point([float(nums[1]), float(nums[0])]),
                                    {"k": f'{e["pagina"]}|{e["ordem"]}'}))
    fc = ee.FeatureCollection(feats)
    img = ee.Image(ASSET).select([f"classification_{a}" for a in ANOS], [str(a) for a in ANOS])
    res = img.reduceRegions(fc, ee.Reducer.first(), 30)
    biomas = ee.FeatureCollection("users/vieiramesquita/lm_bioma_250")
    res = res.map(lambda f: f.set("bioma_ibge", ee.Algorithms.If(
        biomas.filterBounds(f.geometry()).size().gt(0),
        biomas.filterBounds(f.geometry()).first().get("Bioma"), None)))
    out = {}
    for f in res.getInfo()["features"]:
        p = f["properties"]
        out[p["k"]] = {"bioma_ibge": p.get("bioma_ibge"), "serie": {str(a): p.get(str(a)) for a in ANOS}}
    SAIDA.write_text(json.dumps(out, ensure_ascii=False, indent=0), encoding="utf-8")
    print(f"{len(out)} exemplos -> {SAIDA.relative_to(RAIZ)}")


if __name__ == "__main__":
    main()
