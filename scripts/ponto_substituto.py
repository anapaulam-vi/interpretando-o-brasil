"""
Procura, dentro de um bioma, o ponto mais próximo de uma coordenada que tenha a classe MapBiomas
(Coleção 11) desejada de forma estável (todos os anos de 2018 a 2025) e homogênea (vizinhança de ~180 m).

Uso: python scripts/ponto_substituto.py <Bioma IBGE> <lat> <lon> <classes separadas por vírgula> [raio_km]
"""
import json
import math
import sys

import ee

ASSET = "projects/mapbiomas-public/assets/brazil/lulc/collection11/mapbiomas_brazil_collection11_coverage_v3"
BIOMAS = "users/vieiramesquita/lm_bioma_250"


def dist_km(a, b):
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 6371 * 2 * math.asin(math.sqrt(h))


def main(bioma, lat, lon, classes, raio_km=250):
    ee.Initialize()
    g = ee.FeatureCollection(BIOMAS).filter(ee.Filter.eq("Bioma", bioma)).geometry()
    pt = ee.Geometry.Point([lon, lat])
    regiao = g.intersection(pt.buffer(raio_km * 1000), 100)
    img = ee.Image(ASSET)
    ok = None
    for ano in range(2018, 2026):
        m = img.select(f"classification_{ano}").remap(classes, [1] * len(classes), 0)
        ok = m if ok is None else ok.And(m)
    homog = ok.focalMin(radius=90, units="meters").selfMask()
    vet = homog.reduceToVectors(geometry=regiao, scale=30, geometryType="centroid",
                                eightConnected=True, maxPixels=1e10, tileScale=4)
    cand = [(f["geometry"]["coordinates"][1], f["geometry"]["coordinates"][0]) for f in vet.getInfo()["features"]]
    if not cand:
        print(json.dumps({"bioma": bioma, "origem": [lat, lon], "classes": classes, "resultado": None}))
        return
    cand.sort(key=lambda c: dist_km((lat, lon), c))
    melhor = cand[0]
    print(json.dumps({"bioma": bioma, "origem": [lat, lon], "classes": classes, "n_manchas": len(cand),
                      "ponto": [round(melhor[0], 5), round(melhor[1], 5)],
                      "distancia_km": round(dist_km((lat, lon), melhor), 1),
                      "alternativas": [[round(c[0], 5), round(c[1], 5), round(dist_km((lat, lon), c), 1)]
                                       for c in cand[1:4]]}, ensure_ascii=False))


if __name__ == "__main__":
    if len(sys.argv) < 5:
        sys.exit(__doc__)
    main(sys.argv[1], float(sys.argv[2]), float(sys.argv[3]), [int(v) for v in sys.argv[4].split(",")],
         float(sys.argv[5]) if len(sys.argv) > 5 else 250)
