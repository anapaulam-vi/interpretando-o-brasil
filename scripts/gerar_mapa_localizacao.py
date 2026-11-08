"""
Desenha um mapa de localização no estilo da chave: contorno do bioma (maior polígono contínuo,
IBGE 1:250 mil simplificado, dados/contornos_biomas.geojson) com o ponto do exemplo em vermelho.

Uso: python scripts/gerar_mapa_localizacao.py <id_bioma> <lat> <lon> <saida.jpg>
"""
import json
import math
import sys
import unicodedata
from pathlib import Path

from PIL import Image, ImageDraw

RAIZ = Path(__file__).resolve().parent.parent
FUNDO, PREENCHE, LINHA, PONTO = (255, 255, 255), (243, 243, 243), (150, 150, 150), (230, 20, 20)


def _id(t):
    t = "".join(c for c in unicodedata.normalize("NFD", t) if unicodedata.category(c) != "Mn")
    return t.lower().replace(" ", "_")


def desenhar(bioma, lat, lon, saida, tamanho=(492, 340), margem=24, escala=3):
    geo = json.loads((RAIZ / "dados" / "contornos_biomas.geojson").read_text(encoding="utf-8"))
    anel = next(f["geometry"]["coordinates"][0] for f in geo["features"] if _id(f["properties"]["bioma"]) == bioma)
    xs, ys = [p[0] for p in anel], [p[1] for p in anel]
    k = math.cos(math.radians((min(ys) + max(ys)) / 2))  # correção de longitude
    W, H = tamanho[0] * escala, tamanho[1] * escala
    m = margem * escala
    sx = (W - 2 * m) / ((max(xs) - min(xs)) * k)
    sy = (H - 2 * m) / (max(ys) - min(ys))
    s = min(sx, sy)
    ox = (W - (max(xs) - min(xs)) * k * s) / 2
    oy = (H - (max(ys) - min(ys)) * s) / 2
    proj = lambda x, y: (ox + (x - min(xs)) * k * s, oy + (max(ys) - y) * s)
    im = Image.new("RGB", (W, H), FUNDO)
    d = ImageDraw.Draw(im)
    pts = [proj(x, y) for x, y in anel]
    d.polygon(pts, fill=PREENCHE)
    d.line(pts + [pts[0]], fill=LINHA, width=int(1.4 * escala), joint="curve")
    px, py = proj(lon, lat)
    r = 5.5 * escala
    d.ellipse([px - r, py - r, px + r, py + r], fill=PONTO)
    im = im.resize(tamanho, Image.LANCZOS)
    Path(saida).parent.mkdir(parents=True, exist_ok=True)
    im.save(saida, "JPEG", quality=90)
    return saida


if __name__ == "__main__":
    if len(sys.argv) < 5:
        sys.exit(__doc__)
    print(desenhar(sys.argv[1], float(sys.argv[2]), float(sys.argv[3]), sys.argv[4]))
