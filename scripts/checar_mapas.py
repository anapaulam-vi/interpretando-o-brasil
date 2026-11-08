"""
Confere os mapas de localização dos exemplos (img/<bioma>/<classe>/exN_mapa.jpg):

  1. FORMA: o contorno do mapa é o do bioma da ficha? Cada mapa é comparado (IoU da silhueta
     normalizada) com a silhueta mediana de cada bioma; avisa quando outro bioma é mais parecido.
  2. PONTO: a posição do ponto vermelho dentro do contorno bate com as coordenadas do exemplo?
     Compara a posição relativa do ponto no mapa com a posição relativa da coordenada no retângulo
     envolvente do bioma (maior polígono contínuo, IBGE 1:250 mil).

Uso: python scripts/checar_mapas.py bbox_biomas.json > saida.txt
"""
import csv
import json
import re
import sys
import unicodedata
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage

RAIZ = Path(__file__).resolve().parent.parent
N = 64


def sem_acento(t):
    return "".join(c for c in unicodedata.normalize("NFD", t) if unicodedata.category(c) != "Mn")


def analisar(caminho):
    a = np.asarray(Image.open(caminho).convert("RGB")).astype(int)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    vermelho = (r > 170) & (g < 110) & (b < 110)
    cinza = (np.abs(r - g) < 25) & (np.abs(g - b) < 25)
    contorno = cinza & (r < 225)
    contorno = ndimage.binary_dilation(contorno, iterations=2)
    lab, n = ndimage.label(contorno)
    if n == 0:
        return None
    maior = lab == (np.argmax(ndimage.sum(contorno, lab, range(1, n + 1))) + 1)
    forma = ndimage.binary_fill_holes(maior | vermelho)
    ys, xs = np.where(forma)
    y0, y1, x0, x1 = ys.min(), ys.max(), xs.min(), xs.max()
    recorte = forma[y0:y1 + 1, x0:x1 + 1]
    mask = np.asarray(Image.fromarray((recorte * 255).astype(np.uint8)).resize((N, N))) > 127
    ponto = None
    if vermelho.sum() > 5:
        lv, nv = ndimage.label(vermelho)
        maior_v = lv == (np.argmax(ndimage.sum(vermelho, lv, range(1, nv + 1))) + 1)
        py, px = np.where(maior_v)
        # marcador em gota: a ponta (localização) é o pixel mais baixo; círculo: o centro
        alto, larg = py.max() - py.min(), px.max() - px.min()
        cy = py.max() if alto > 1.3 * larg else py.mean()
        ponto = ((px.mean() - x0) / max(x1 - x0, 1), (cy - y0) / max(y1 - y0, 1))
    return {"mask": mask, "aspecto": (x1 - x0) / max(y1 - y0, 1), "ponto": ponto}


def main(arq_bbox):
    bbox = {sem_acento(k).lower().replace(" ", "_"): v for k, v in json.load(open(arq_bbox, encoding="utf-8")).items()}
    ex = list(csv.DictReader((RAIZ / "dados" / "exemplos.csv").open(encoding="utf-8-sig"), delimiter=";"))
    dados = []
    for e in ex:
        if e.get("mapa"):
            r = analisar(RAIZ / e["mapa"])
            if r:
                dados.append((e, r))
    ref = {}
    for b in bbox:
        ms = [r["mask"] for e, r in dados if e["bioma"] == b]
        if ms:
            ref[b] = np.median(np.stack(ms).astype(float), axis=0) > 0.5
    iou = lambda a, b: (a & b).sum() / max((a | b).sum(), 1)
    problemas = 0
    for e, r in dados:
        notas = []
        sims = {b: iou(r["mask"], m) for b, m in ref.items()}
        melhor = max(sims, key=sims.get)
        if melhor != e["bioma"] and sims[melhor] - sims[e["bioma"]] > 0.03:
            notas.append(f"FORMA parece {melhor} (IoU {sims[melhor]:.2f}) e não {e['bioma']} ({sims[e['bioma']]:.2f})")
        nums = re.findall(r"-?\d+(?:\.\d+)?", e["coords"])
        if r["ponto"] and len(nums) >= 2:
            lat, lon = float(nums[0]), float(nums[1])
            x0, y0, x1, y1 = bbox[e["bioma"]]
            esp = ((lon - x0) / (x1 - x0), (y1 - lat) / (y1 - y0))
            dx, dy = r["ponto"][0] - esp[0], r["ponto"][1] - esp[1]
            if (dx * dx + dy * dy) ** 0.5 > 0.15:
                notas.append(f"PONTO no mapa em ({r['ponto'][0]:.2f}, {r['ponto'][1]:.2f}), "
                             f"coordenada indica ({esp[0]:.2f}, {esp[1]:.2f})")
        elif not r["ponto"]:
            notas.append("PONTO vermelho não encontrado no mapa")
        if notas:
            problemas += 1
            print(f"p{e['pagina']} {e['bioma']}/{e['classe']} ex{e['ordem']} ({e['coords']}): " + "; ".join(notas))
    print(f"\n{len(dados)} mapas analisados, {problemas} com aviso")


if __name__ == "__main__":
    main(sys.argv[1])
