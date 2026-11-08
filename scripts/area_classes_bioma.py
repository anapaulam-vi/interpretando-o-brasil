"""
Área (ha) de classes MapBiomas Coleção 11 dentro de um bioma, em lotes (células de 1°) via getInfo local.

Uso: python scripts/area_classes_bioma.py <Bioma IBGE> <ano> <classes separadas por vírgula> [saida.json]
Ex.: python scripts/area_classes_bioma.py Pampa 2025 20,9,41
"""
import json
import math
import sys

import ee

ASSET = "projects/mapbiomas-public/assets/brazil/lulc/collection11/mapbiomas_brazil_collection11_coverage_v3"
BIOMAS = "users/vieiramesquita/lm_bioma_250"


def main(bioma, ano, classes, saida=None):
    ee.Initialize()
    g = ee.FeatureCollection(BIOMAS).filter(ee.Filter.eq("Bioma", bioma)).geometry()
    x0, y0, x1, y1 = (lambda c: (min(p[0] for p in c), min(p[1] for p in c), max(p[0] for p in c),
                                 max(p[1] for p in c)))(g.bounds(1000).coordinates().getInfo()[0])
    c = ee.Image(ASSET).select(f"classification_{ano}")
    alvo = c.remap(classes, classes, 0).rename("c")
    img = ee.Image.pixelArea().divide(1e4).addBands(alvo).updateMask(alvo.gt(0))
    total = {k: 0.0 for k in classes}
    celulas = [(x, y) for x in range(math.floor(x0), math.ceil(x1)) for y in range(math.floor(y0), math.ceil(y1))]
    for i, (x, y) in enumerate(celulas, 1):
        cel = ee.Geometry.Rectangle([x, y, x + 1, y + 1]).intersection(g, 100)
        r = img.reduceRegion(ee.Reducer.sum().group(1, "c"), cel, 30, maxPixels=1e10, tileScale=4).getInfo()
        for grp in r.get("groups", []):
            total[int(grp["c"])] += grp["sum"]
        print(f"  célula {i}/{len(celulas)}", file=sys.stderr)
    res = {"bioma": bioma, "ano": ano, "area_ha": {str(k): round(v) for k, v in total.items()}}
    print(json.dumps(res, ensure_ascii=False))
    if saida:
        json.dump(res, open(saida, "w", encoding="utf-8"), ensure_ascii=False, indent=1)


if __name__ == "__main__":
    if len(sys.argv) < 4:
        sys.exit(__doc__)
    main(sys.argv[1], int(sys.argv[2]), [int(v) for v in sys.argv[3].split(",")],
         sys.argv[4] if len(sys.argv) > 4 else None)
