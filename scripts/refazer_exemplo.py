"""
Refaz as imagens de um exemplo para uma coordenada nova, no estilo da chave (Earth Engine, getInfo local):

  - Landsat 8/9 e Sentinel-2, períodos seco (jul–ago) e chuvoso (jan–fev), falsa-cor R-G-B
    Landsat B5-B6-B4 e Sentinel B11-B8-B4, recorte de ~1,3 km de raio, contraste por banda (2–98%);
  - série temporal Sentinel-2: NDVI (original e suavizado por Whittaker), mediana do último ano e
    precipitação mensal (CHIRPS);
  - mapa de localização no bioma.

A imagem do Google Earth não pode ser gerada aqui: fica pendente para a equipe.

Uso: python scripts/refazer_exemplo.py <pagina> <id_bioma> <lat> <lon> [ano]
Saída: img/corrigidos/p<pagina>_<quadro>.jpg
"""
import datetime as dt
import io
import sys
import urllib.request
from pathlib import Path

import ee
import matplotlib
import numpy as np
from PIL import Image, ImageDraw, ImageFont
from scipy import sparse
from scipy.sparse.linalg import spsolve

matplotlib.use("Agg")
import matplotlib.dates as mdates  # noqa: E402
import matplotlib.pyplot as plt  # noqa: E402

sys.path.insert(0, str(Path(__file__).resolve().parent))
from gerar_mapa_localizacao import desenhar  # noqa: E402

RAIZ = Path(__file__).resolve().parent.parent
SAIDA = RAIZ / "img" / "corrigidos"
FONTE = str(Path(__file__).resolve().parent / "fontes" / "Montserrat-Regular.ttf")
RAIO = 1300
TAM = 387


def _mascara_s2(i):
    scl = i.select("SCL")
    return i.updateMask(scl.neq(3).And(scl.neq(8)).And(scl.neq(9)).And(scl.neq(10)))


def _mascara_l8(i):
    qa = i.select("QA_PIXEL")
    return i.updateMask(qa.bitwiseAnd(1 << 3).eq(0).And(qa.bitwiseAnd(1 << 4).eq(0)))


def _quadro(img, bandas, regiao, rotulo, destino, por_banda=True):
    st = img.select(bandas).reduceRegion(ee.Reducer.percentile([2, 98]), regiao, 20, maxPixels=1e8).getInfo()
    mn = [st[f"{b}_p2"] for b in bandas]
    mx = [st[f"{b}_p98"] for b in bandas]
    if not por_banda:  # mesmo intervalo para as três bandas: cores mais naturais (Landsat)
        mn, mx = [min(mn)] * 3, [max(mx)] * 3
    url = img.visualize(bands=bandas, min=mn, max=mx).getThumbURL(
        {"region": regiao, "dimensions": TAM, "format": "png"})
    im = Image.open(io.BytesIO(urllib.request.urlopen(url).read())).convert("RGB").resize((TAM, TAM))
    d = ImageDraw.Draw(im)
    c = TAM // 2
    verde = (20, 140, 40)
    d.line([c - 12, c, c + 12, c], fill=verde, width=2)
    d.line([c, c - 12, c, c + 12], fill=verde, width=2)
    d.ellipse([c - 3, c - 3, c + 3, c + 3], fill=verde)
    f = ImageFont.truetype(FONTE, 13)
    w = d.textlength(rotulo, font=f)
    caixa = Image.new("RGBA", (int(w) + 14, 22), (20, 20, 20, 170))
    im.paste(caixa, (TAM - int(w) - 20, TAM - 28), caixa)
    d.text((TAM - w - 13, TAM - 25), rotulo, font=f, fill=(255, 255, 255))
    im.save(destino, "JPEG", quality=88)


def _whittaker(y, lmbd=800):
    w = (~np.isnan(y)).astype(float)
    z = np.nan_to_num(y)
    n = len(y)
    D = sparse.diags([1, -2, 1], [0, 1, 2], shape=(n - 2, n))
    W = sparse.diags(w)
    return spsolve((W + lmbd * D.T @ D).tocsc(), w * z)


def _grafico(p, ano, destino):
    ini, fim = f"{ano - 5}-01-01", f"{ano + 1}-01-31"
    s2 = (ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED").filterBounds(p).filterDate(ini, fim)
          .map(_mascara_s2).map(lambda i: i.normalizedDifference(["B8", "B4"]).rename("ndvi")
                                .copyProperties(i, ["system:time_start"])))
    linhas = s2.getRegion(p, 10).getInfo()
    cab = linhas[0]
    it, iv = cab.index("time"), cab.index("ndvi")
    obs = {}
    for l in linhas[1:]:
        if l[iv] is not None:
            dia = dt.date.fromtimestamp(l[it] / 1000)
            obs[dia] = max(obs.get(dia, -1), l[iv])
    dias = sorted(obs)
    serie_dias = [dias[0] + dt.timedelta(d) for d in range((dias[-1] - dias[0]).days + 1)]
    y = np.full(len(serie_dias), np.nan)
    for i, d in enumerate(serie_dias):
        if d in obs:
            y[i] = obs[d]
    suave = _whittaker(y)
    mediana = float(np.median([v for d, v in obs.items() if d.year == ano]))
    meses = ee.List.sequence(0, (ano - (ano - 5) + 1) * 12 - 1)
    chirps = ee.ImageCollection("UCSB-CHG/CHIRPS/DAILY")
    base = ee.Date(ini)
    mensal = ee.ImageCollection(meses.map(lambda m: chirps.filterDate(base.advance(m, "month"),
                                                                       base.advance(ee.Number(m).add(1), "month"))
                                          .sum().rename("p").set("system:time_start",
                                                                 base.advance(m, "month").millis())))
    lp = mensal.getRegion(p, 5000).getInfo()
    cp = lp[0]
    prec = [(dt.date.fromtimestamp(l[cp.index("time")] / 1000), l[cp.index("p")] or 0) for l in lp[1:]]

    fig, ax = plt.subplots(figsize=(15.04, 3.3), dpi=100)
    ax2 = ax.twinx()
    ax2.bar([d + dt.timedelta(14) for d, _ in prec], [v for _, v in prec], width=8, color="#2f3fa0", zorder=1)
    ax.set_zorder(ax2.get_zorder() + 1)
    ax.patch.set_visible(False)
    ax.scatter(dias, [obs[d] for d in dias], s=6, color="#9aa0a6", zorder=3)
    ax.plot(serie_dias, suave, color="#1f9e48", lw=2, zorder=4)
    ax.axhline(mediana, color="#d62728", lw=1.2, zorder=2)
    ax.set_ylabel("NDVI", fontsize=12)
    ax2.set_ylabel("Precipitation (mm)", fontsize=12)
    ax.set_ylim(0, 1)
    ax.xaxis.set_major_locator(mdates.MonthLocator(bymonth=[1, 7]))
    ax.xaxis.set_major_formatter(mdates.DateFormatter("%b %Y"))
    plt.setp(ax.get_xticklabels(), rotation=40, ha="right", fontsize=10)
    for s in ("top",):
        ax.spines[s].set_visible(False)
        ax2.spines[s].set_visible(False)
    ax.grid(axis="y", color="#eeeeee")
    from matplotlib.lines import Line2D
    from matplotlib.patches import Patch
    ax.legend([Patch(color="#2f3fa0"), Line2D([], [], ls="", marker="o", ms=3, color="#9aa0a6"),
               Line2D([], [], color="#1f9e48", lw=2), Line2D([], [], color="#d62728", lw=1.2)],
              ["Precipitation", "NDVI (Original)", "NDVI (Whittaker)", f"Mediana ({ano}): {mediana:.2f}"],
              loc="upper center", bbox_to_anchor=(0.45, 1.18), ncol=4, frameon=False, fontsize=11)
    fig.tight_layout()
    fig.savefig(destino, format="jpg", dpi=100, pil_kwargs={"quality": 88})
    plt.close(fig)


def main(pagina, bioma, lat, lon, ano=2025):
    ee.Initialize()
    SAIDA.mkdir(parents=True, exist_ok=True)
    p = ee.Geometry.Point([lon, lat])
    reg = p.buffer(RAIO).bounds()
    s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED").filterBounds(p).map(_mascara_s2)
    l8 = (ee.ImageCollection("LANDSAT/LC08/C02/T1_L2").merge(ee.ImageCollection("LANDSAT/LC09/C02/T1_L2"))
          .filterBounds(p).map(_mascara_l8))
    periodos = {"seco": (f"{ano}-07-01", f"{ano}-08-31", f"Jul-Ago · {ano}"),
                "chuvoso": (f"{ano}-01-01", f"{ano}-02-28", f"Jan-Fev · {ano}")}
    saida = {}
    for nome, (d1, d2, rot) in periodos.items():
        arq = SAIDA / f"p{pagina}_landsat_{nome}.jpg"
        _quadro(l8.filterDate(d1, d2).median(), ["SR_B5", "SR_B6", "SR_B4"], reg, rot, arq, por_banda=False)
        saida[f"landsat_{nome}"] = arq
        arq = SAIDA / f"p{pagina}_sentinel_{nome}.jpg"
        _quadro(s2.filterDate(d1, d2).median(), ["B11", "B8", "B4"], reg, rot, arq)
        saida[f"sentinel_{nome}"] = arq
    arq = SAIDA / f"p{pagina}_grafico.jpg"
    _grafico(p, ano, arq)
    saida["grafico"] = arq
    arq = SAIDA / f"p{pagina}_mapa.jpg"
    desenhar(bioma, lat, lon, arq)
    saida["mapa"] = arq
    for k, v in saida.items():
        print(k, v.relative_to(RAIZ).as_posix())


if __name__ == "__main__":
    if len(sys.argv) < 5:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2], float(sys.argv[3]), float(sys.argv[4]),
         int(sys.argv[5]) if len(sys.argv) > 5 else 2025)
