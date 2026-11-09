(function () {
  "use strict";
  const D = window.CHAVE;
  const $ = (id) => document.getElementById(id);
  if (!D) {
    $("grade").innerHTML = '<p class="vazio">Arquivo <code>dados/chave.js</code> não encontrado. Rode <code>python scripts/gerar_dados.py</code>.</p>';
    return;
  }

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  // ---------- idioma (PT / EN) ----------
  const LEGPDF = "https://brasil.mapbiomas.org/wp-content/uploads/sites/3/2026/08/DESCRICAO_DA_LEGENDA_MAPBIOMAS_BRASIL_COLECAO_11_PDF.pdf";
  const UI = {
    pt: {
      subtitulo: "Chave de Interpretação Visual para Imagens de Satélite", modoAria: "Modo de visualização",
      porBioma: "Por bioma", porClasse: "Por classe", sobre: "Sobre", filtros: "Filtros", bioma: "Bioma",
      biomas: "Biomas", grupo: "Grupo", busca: "Buscar classe…", ausentes: "Mostrar classes sem ficha",
      fichaAnt: "Ficha anterior", fichaProx: "Próxima ficha", anterior: "Anterior (←)", proxima: "Próxima (→)",
      fechar: "Fechar", fecharEsc: "Fechar (Esc)", imgAnt: "Imagem anterior", imgProx: "Próxima imagem",
      comoLer: "Como ler cada ficha", baixarPdf: "Baixar o PDF completo",
      comoCitar: "Como citar", copiarCitacao: "copiar citação", citacaoCopiada: "citação copiada",
      lista: `<li><strong>Imagens:</strong> composições Landsat e Sentinel-2 nos períodos seco (jul–ago) e chuvoso (jan–fev), e imagem de alta resolução do Google Earth.</li>
        <li><strong>Falsa-cor (R-G-B):</strong> Landsat B5-B6-B4 (infravermelho próximo, SWIR 1, vermelho), em que a vegetação aparece em tons de vermelho; Sentinel-2 B11-B8-B4 (SWIR 1, infravermelho próximo, vermelho), em que a vegetação aparece verde.</li>
        <li><strong>Série temporal:</strong> NDVI do Sentinel-2 e precipitação acumulada mensal no ponto.</li>
        <li><strong>Tonalidade e textura:</strong> padrões de interpretação visual do alvo.</li>
        <li><strong>Classes e descrições:</strong> nomes, códigos, cores e descrições por bioma seguem a <a href="${LEGPDF}" target="_blank" rel="noopener">legenda MapBiomas Coleção 11</a>.</li>`,
      rodape: 'Chave de interpretação elaborada com especialistas em interpretação visual no âmbito do projeto <a href="https://mapbiomas.org" target="_blank" rel="noopener">MapBiomas</a>.',
      semImg: "imagens em elaboração", semFicha: "sem ficha", nEx: (n) => `${n} exemplos`,
      descNI: "Descrição não informada.", semFichaBioma: "Sem ficha para este bioma",
      nClasses: (n) => `${n} classes com ficha de interpretação`, nadaFiltro: "Nenhuma classe encontrada com esses filtros.",
      biomasComFicha: "biomas com ficha", nada: "Nada encontrado.", codigoMB: "código MapBiomas", codigo: "código",
      fichaEm: (n, tot, l) => `Ficha em ${n} de ${tot} biomas: ${l}`,
      semFichaSel: "Esta classe não tem ficha nos biomas selecionados.", todos: "Todos",
      autoLim: "Preenchido automaticamente; a equipe vai revisar e complementar.",
      lim: "Limitação de interpretação da classe:", ampliar: "Ampliar",
      semQuadros: "Imagens de satélite deste exemplo ainda em elaboração.",
      serieCap: "Série temporal Sentinel-2 — NDVI e precipitação acumulada mensal", serieAlt: "Série temporal de NDVI",
      serieZoom: "Série temporal Sentinel-2 — NDVI e precipitação",
      localCap: "Localização no bioma", localAlt: "Localização no mapa do bioma", naoInf: "não informado",
      naoInfF: "não informada", copiar: "copiar", copiado: "copiado", coord: "Coordenadas", falsa: "Falsa-cor",
      ton: "Tonalidade", tex: "Textura", obs: "Observações", desc: "Descrição",
      verPdf: (p) => `Ver esta página no PDF (p. ${p})`, fonteLeg: (l) => `Descrição da legenda MapBiomas ${l}`,
      semLeg: (l) => `Classe ou bioma sem descrição na legenda MapBiomas ${l}`, exemplo: (i) => `Exemplo ${i}`,
      nenhumEx: "Nenhum exemplo cadastrado.", legenda: (l) => l,
    },
    en: {
      subtitulo: "Visual Interpretation Key for Satellite Images", modoAria: "View mode",
      porBioma: "By biome", porClasse: "By class", sobre: "About", filtros: "Filters", bioma: "Biome",
      biomas: "Biomes", grupo: "Group", busca: "Search class…", ausentes: "Show classes without a sheet",
      fichaAnt: "Previous sheet", fichaProx: "Next sheet", anterior: "Previous (←)", proxima: "Next (→)",
      fechar: "Close", fecharEsc: "Close (Esc)", imgAnt: "Previous image", imgProx: "Next image",
      comoLer: "How to read each sheet", baixarPdf: "Download the full PDF (in Portuguese)",
      comoCitar: "How to cite", copiarCitacao: "copy citation", citacaoCopiada: "citation copied",
      lista: `<li><strong>Images:</strong> Landsat and Sentinel-2 composites for the dry (Jul–Aug) and rainy (Jan–Feb) seasons, and a high-resolution Google Earth image.</li>
        <li><strong>False color (R-G-B):</strong> Landsat B5-B6-B4 (near infrared, SWIR 1, red), where vegetation appears in shades of red; Sentinel-2 B11-B8-B4 (SWIR 1, near infrared, red), where vegetation appears green.</li>
        <li><strong>Time series:</strong> Sentinel-2 NDVI and monthly accumulated precipitation at the point.</li>
        <li><strong>Tone and texture:</strong> visual interpretation patterns of the target.</li>
        <li><strong>Classes and descriptions:</strong> names, codes, colors and descriptions by biome follow the <a href="${LEGPDF}" target="_blank" rel="noopener">MapBiomas Collection 11 legend</a>.</li>`,
      rodape: 'Interpretation key developed with specialists in visual interpretation within the <a href="https://mapbiomas.org" target="_blank" rel="noopener">MapBiomas</a> project.',
      semImg: "images in preparation", semFicha: "no sheet", nEx: (n) => `${n} examples`,
      descNI: "Description not provided.", semFichaBioma: "No sheet for this biome",
      nClasses: (n) => `${n} classes with an interpretation sheet`, nadaFiltro: "No class found with these filters.",
      biomasComFicha: "biomes with a sheet", nada: "Nothing found.", codigoMB: "MapBiomas code", codigo: "code",
      fichaEm: (n, tot, l) => `Sheet in ${n} of ${tot} biomes: ${l}`,
      semFichaSel: "This class has no sheet in the selected biomes.", todos: "All",
      autoLim: "Filled in automatically; the team will review and complete it.",
      lim: "Class interpretation limitations:", ampliar: "Enlarge",
      semQuadros: "Satellite images for this example are still in preparation.",
      serieCap: "Sentinel-2 time series — NDVI and monthly accumulated precipitation", serieAlt: "NDVI time series",
      serieZoom: "Sentinel-2 time series — NDVI and precipitation",
      localCap: "Location in the biome", localAlt: "Location on the biome map", naoInf: "not provided",
      naoInfF: "not provided", copiar: "copy", copiado: "copied", coord: "Coordinates", falsa: "False color",
      ton: "Tone", tex: "Texture", obs: "Notes", desc: "Description",
      verPdf: (p) => `See this page in the PDF (p. ${p}, in Portuguese)`, fonteLeg: (l) => `MapBiomas ${l} legend description`,
      semLeg: (l) => `Class or biome without a description in the MapBiomas ${l} legend`, exemplo: (i) => `Example ${i}`,
      nenhumEx: "No examples registered.", legenda: (l) => l.replace("Coleção", "Collection"),
    },
  };
  // ---------- como citar ----------
  // Para mudar a autoria ou o ano da citação, edite aqui.
  const CITACAO = {
    ano: 2026,
    pt: (url, data) => `LABORATÓRIO DE PROCESSAMENTO DE IMAGENS E GEOPROCESSAMENTO – LAPIG/UFG. <strong>Interpretando o Brasil</strong>: chave de interpretação visual para imagens de satélite. Goiânia: LAPIG/UFG, ${CITACAO.ano}. Disponível em: ${url}. Acesso em: ${data}.`,
    en: (url, data) => `Image Processing and Geoprocessing Laboratory (LAPIG/UFG). (${CITACAO.ano}). <em>Interpretando o Brasil: visual interpretation key for satellite images</em>. Federal University of Goiás. Retrieved ${data}, from ${url}`,
  };
  const MESES_ABNT = ["jan.", "fev.", "mar.", "abr.", "maio", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."];
  function htmlCitacao() {
    const url = location.href.split("#")[0];
    const h = new Date();
    const data = LANG === "en"
      ? h.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
      : `${h.getDate()} ${MESES_ABNT[h.getMonth()]} ${h.getFullYear()}`;
    return CITACAO[LANG](esc(url), data);
  }

  let LANG = "pt";
  try { if (localStorage.getItem("idioma") === "en") LANG = "en"; } catch (e) { /* sem armazenamento */ }
  const t = (k, ...a) => { const v = UI[LANG][k] ?? UI.pt[k]; return typeof v === "function" ? v(...a) : v; };
  const tc = (s) => (LANG === "en" && s && D.en && D.en[s]) || s || "";
  const leg = () => t("legenda", D.legenda || "");

  function aplicarIdioma() {
    document.documentElement.lang = LANG === "en" ? "en" : "pt-BR";
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
    document.querySelectorAll("[data-i18n-html]").forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => (el.placeholder = t(el.dataset.i18nPh)));
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    document.querySelectorAll("[data-i18n-title]").forEach((el) => (el.title = t(el.dataset.i18nTitle)));
    document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === LANG ? "true" : "false"));
    $("sobre-texto").textContent = tc(D.apresentacao);
    $("citacao-texto").innerHTML = htmlCitacao();
  }

  const BIOMA = Object.fromEntries(D.biomas.map((b) => [b.id, b]));
  const CLASSE = Object.fromEntries(D.classes.map((c) => [c.id, c]));
  const ficha = (cl, bio) => D.entradas[cl + "|" + bio] || null;
  const PREF_MINI = ["sentinel_seco", "landsat_seco", "sentinel_chuvoso", "landsat_chuvoso", "google_earth"];

  function miniatura(f) {
    if (!f) return null;
    for (const ex of f.exemplos) {
      if (!ex.imagens.length) continue;
      for (const p of PREF_MINI) {
        const im = ex.imagens.find((i) => i.src.includes(p));
        if (im) return im.src;
      }
    }
    return null;
  }

  const S = {
    modo: "bioma",
    bioma: D.biomas[0].id,
    classe: D.classes[0].id,
    grupo: "todos",
    biomasSel: new Set(D.biomas.map((b) => b.id)),
    busca: "",
    ausentes: false,
  };
  let visiveis = []; // [classe, bioma] na ordem exibida (navegação no detalhe)

  // ---------- estado na URL ----------
  function lerHash() {
    const p = new URLSearchParams(location.hash.slice(1));
    if (p.get("lang") === "en" || p.get("lang") === "pt") LANG = p.get("lang");
    if (p.get("modo") === "classe" || p.get("modo") === "bioma") S.modo = p.get("modo");
    if (BIOMA[p.get("bioma")]) S.bioma = p.get("bioma");
    if (CLASSE[p.get("classe")]) S.classe = p.get("classe");
    const g = p.get("grupo");
    S.grupo = g && D.grupos.includes(g) ? g : "todos";
    const sel = (p.get("biomas") || "").split(",").filter((b) => BIOMA[b]);
    S.biomasSel = new Set(sel.length ? sel : D.biomas.map((b) => b.id));
    return p.get("ficha");
  }
  function gravarHash() {
    const p = new URLSearchParams({ modo: S.modo });
    if (S.modo === "bioma") p.set("bioma", S.bioma);
    else {
      p.set("classe", S.classe);
      if (S.biomasSel.size !== D.biomas.length) p.set("biomas", [...S.biomasSel].join(","));
    }
    if (S.grupo !== "todos") p.set("grupo", S.grupo);
    if (LANG === "en") p.set("lang", "en");
    if (dlg.open && visiveis[atual]) p.set("ficha", visiveis[atual].join("|"));
    history.replaceState(null, "", "#" + p.toString());
  }

  // ---------- filtros ----------
  function chip({ rotulo, cor, ativo, onClick }) {
    const b = document.createElement("button");
    b.className = "chip";
    b.type = "button";
    b.setAttribute("aria-pressed", ativo ? "true" : "false");
    b.innerHTML = (cor ? `<span class="ponto" style="background:${esc(cor)}"></span>` : "") + esc(rotulo);
    b.addEventListener("click", onClick);
    return b;
  }

  function renderFiltros() {
    document.querySelectorAll(".modo [data-modo]").forEach((b) =>
      b.setAttribute("aria-selected", b.dataset.modo === S.modo ? "true" : "false"));
    $("f-bioma").hidden = S.modo !== "bioma";
    $("f-bioma-multi").hidden = S.modo !== "classe";
    $("lista-classes").hidden = S.modo !== "classe";
    document.querySelector(".conteudo").classList.toggle("com-lista", S.modo === "classe");

    $("chips-bioma").replaceChildren(...D.biomas.map((b) => chip({
      rotulo: tc(b.nome), cor: b.cor, ativo: S.bioma === b.id,
      onClick: () => { S.bioma = b.id; render(); },
    })));

    const todos = S.biomasSel.size === D.biomas.length;
    $("chips-bioma-multi").replaceChildren(
      chip({ rotulo: t("todos"), ativo: todos, onClick: () => { S.biomasSel = new Set(D.biomas.map((b) => b.id)); render(); } }),
      ...D.biomas.map((b) => chip({
        rotulo: tc(b.nome), cor: b.cor, ativo: !todos && S.biomasSel.has(b.id),
        onClick: () => {
          if (todos) S.biomasSel = new Set([b.id]);
          else if (S.biomasSel.has(b.id)) S.biomasSel.delete(b.id);
          else S.biomasSel.add(b.id);
          if (!S.biomasSel.size) S.biomasSel = new Set(D.biomas.map((x) => x.id));
          render();
        },
      })),
    );

    $("chips-grupo").replaceChildren(
      chip({ rotulo: t("todos"), ativo: S.grupo === "todos", onClick: () => { S.grupo = "todos"; render(); } }),
      ...D.grupos.map((g) => chip({ rotulo: tc(g), ativo: S.grupo === g, onClick: () => { S.grupo = g; render(); } })),
    );
  }

  function classesFiltradas() {
    const q = norm(S.busca.trim());
    return D.classes.filter((c) =>
      (S.grupo === "todos" || c.grupo === S.grupo) &&
      (!q || norm(c.nome).includes(q) || norm(tc(c.nome)).includes(q) || c.codigo === q));
  }

  // ---------- cards ----------
  const swatch = (cor, cls = "swatch") => `<span class="${cls}" style="background:${esc(cor)}"></span>`;
  const bTag = (b) => `<span class="bioma-tag">${swatch(b.cor, "ponto")}${esc(tc(b.nome))}</span>`;

  function card(cl, bio, porClasse) {
    const c = CLASSE[cl], b = BIOMA[bio], f = ficha(cl, bio);
    const idx = f ? visiveis.push([cl, bio]) - 1 : -1;
    const mini = miniatura(f);
    const img = mini
      ? `<img src="${esc(mini)}" alt="" loading="lazy">`
      : `<div class="sem-img">${swatch(c.cor)}<span>${f ? t("semImg") : t("semFicha")}</span></div>`;
    const nEx = f ? f.exemplos.length : 0;
    const qtd = nEx > 1 ? `<span class="qtd">${t("nEx", nEx)}</span>` : "";
    const texto = f
      ? `<p>${esc(tc(f.descricao || f.observacoes) || t("descNI"))}</p>`
      : `<p class="nao-ocorre">${t("semFichaBioma")}</p>`;
    const topo = porClasse ? `${swatch(b.cor, "ponto")}${esc(tc(c.nome))}` : `${swatch(c.cor)}${esc(tc(c.grupo))}`;
    const tag = f ? "button" : "div";
    return `<${tag} class="card${f ? "" : " ausente"}" ${f ? `data-idx="${idx}" type="button"` : ""}>
      <div class="card-img">${img}${qtd}</div>
      <div class="card-corpo">
        <div class="card-top">${topo}</div>
        <h3>${esc(tc(porClasse ? b.nome : c.nome))}</h3>
        ${texto}
      </div>
    </${tag}>`;
  }

  function renderPorBioma() {
    const grade = $("grade");
    grade.className = "grade";
    const b = BIOMA[S.bioma];
    const n = D.classes.filter((c) => ficha(c.id, S.bioma)).length;
    $("cabecalho-painel").innerHTML = `<div class="cab-painel">${swatch(b.cor, "faixa")}
      <div><h2>${esc(tc(b.nome))}</h2><p>${t("nClasses", n)}</p></div></div>`;
    let html = "";
    for (const g of D.grupos) {
      const cs = classesFiltradas().filter((c) => c.grupo === g && (S.ausentes || ficha(c.id, S.bioma)));
      if (!cs.length) continue;
      html += `<div class="titulo-grupo">${esc(tc(g))}</div>` + cs.map((c) => card(c.id, S.bioma, false)).join("");
    }
    grade.innerHTML = html;
    $("vazio").hidden = !!html;
    $("vazio").textContent = t("nadaFiltro");
  }

  function renderLista() {
    const cs = classesFiltradas();
    if (cs.length && !cs.some((c) => c.id === S.classe)) S.classe = cs[0].id;
    let html = "";
    for (const g of D.grupos) {
      const doGrupo = cs.filter((c) => c.grupo === g);
      if (!doGrupo.length) continue;
      html += `<h3>${esc(tc(g))}</h3>` + doGrupo.map((c) => {
        const n = D.biomas.filter((b) => ficha(c.id, b.id)).length;
        return `<button class="item-classe" data-cl="${esc(c.id)}" aria-current="${c.id === S.classe}">
          ${swatch(c.cor)}<span>${esc(tc(c.nome))}</span><span class="cod" title="${esc(t("biomasComFicha"))}">${n}</span>
        </button>`;
      }).join("");
    }
    $("lista-classes").innerHTML = html || `<p class="vazio">${t("nada")}</p>`;
    return cs.length > 0;
  }

  function renderPorClasse() {
    const grade = $("grade");
    grade.className = "grade por-classe";
    if (!renderLista()) {
      $("cabecalho-painel").innerHTML = "";
      grade.innerHTML = "";
      $("vazio").hidden = false;
      $("vazio").textContent = t("nadaFiltro");
      return;
    }
    const c = CLASSE[S.classe];
    const com = D.biomas.filter((b) => ficha(c.id, b.id));
    $("cabecalho-painel").innerHTML = `<div class="cab-painel">${swatch(c.cor, "faixa")}
      <div><div class="meta">${esc(tc(c.grupo))}${c.codigo ? ` · ${t("codigoMB")} ${esc(c.codigo)}` : ""}</div>
      <h2>${esc(tc(c.nome))}</h2><p>${t("fichaEm", com.length, D.biomas.length, com.map((b) => esc(tc(b.nome))).join(", ") || "—")}</p></div></div>`;
    const bios = D.biomas.filter((b) => S.biomasSel.has(b.id) && (S.ausentes || ficha(c.id, b.id)));
    grade.innerHTML = bios.map((b) => card(c.id, b.id, true)).join("");
    $("vazio").hidden = bios.length > 0;
    $("vazio").textContent = t("semFichaSel");
  }

  function render() {
    visiveis = [];
    renderFiltros();
    if (S.modo === "bioma") renderPorBioma(); else renderPorClasse();
    gravarHash();
  }

  // ---------- detalhe ----------
  const dlg = $("detalhe");
  let atual = 0, exAtual = 0;

  const pdfLink = (pag, txt) => D.pdf && pag
    ? `<a class="link-pdf" href="${esc(D.pdf)}#page=${pag}" target="_blank" rel="noopener">${txt || "p. " + pag}</a>` : "";

  function htmlLimitacao(l) {
    if (!l || !(l.equipe || l.geral)) return "";
    let h = "";
    if (l.equipe) h += `<p>${esc(tc(l.equipe))}</p>`;
    if (l.geral) h += `<p>${esc(tc(l.geral))}</p>`;
    if (!l.equipe) h += `<p class="fonte-desc aviso">${t("autoLim")}</p>`;
    return `<dt class="lim">${t("lim")}</dt><dd class="limitacao">${h}</dd>`;
  }

  function htmlExemplo(c, b, ex, i, total) {
    let h = "";
    if (ex.imagens.length) {
      h += `<div class="quadros">` + ex.imagens.map((im, j) =>
        `<figure><figcaption>${esc(tc(im.rotulo))}</figcaption>
          <button class="quadro" data-ex="${i}" data-j="${j}" aria-label="${t("ampliar")} ${esc(tc(im.rotulo))}">
          <img src="${esc(im.src)}" alt="${esc(tc(c.nome))} — ${esc(tc(im.rotulo))}" loading="lazy"></button></figure>`).join("") + `</div>`;
    } else {
      h += `<div class="sem-quadros">${t("semQuadros")}</div>`;
    }
    if (ex.grafico || ex.mapa) {
      h += `<div class="extras-ex">`;
      if (ex.grafico) h += `<figure class="grafico"><figcaption>${t("serieCap")}</figcaption>
        <button class="quadro" data-ex="${i}" data-j="grafico"><img src="${esc(ex.grafico)}" alt="${t("serieAlt")}" loading="lazy"></button></figure>`;
      if (ex.mapa) h += `<figure class="mapa"><figcaption>${t("localCap")}</figcaption>
        <img src="${esc(ex.mapa)}" alt="${t("localAlt")}" loading="lazy"></figure>`;
      h += `</div>`;
    }
    const linha = (rot, val) => `<dt>${rot}</dt><dd>${val || `<span class="pendente">${t("naoInf")}</span>`}</dd>`;
    let coord = esc(ex.coords);
    if (ex.lat != null) {
      const url = `https://www.google.com/maps/@?api=1&map_action=map&center=${ex.lat},${ex.lon}&zoom=15&basemap=satellite`;
      coord = `<a href="${url}" target="_blank" rel="noopener">${ex.lat}, ${ex.lon}</a>
        <button class="copiar" data-copiar="${ex.lat}, ${ex.lon}" type="button">${t("copiar")}</button>`;
    }
    h += `<dl class="atributos">${linha(t("coord"), coord)}${linha(t("falsa"), esc(tc(ex.falsa_cor)))}
      ${linha(t("ton"), esc(tc(ex.tonalidade)))}${linha(t("tex"), esc(tc(ex.textura)))}
      ${ex.observacoes ? linha(t("obs"), esc(tc(ex.observacoes))) : ""}
      ${htmlLimitacao(ex.limitacao)}</dl>`;
    if (ex.pagina) h += `<p class="fonte">${pdfLink(ex.pagina, t("verPdf", ex.pagina))}</p>`;
    return h;
  }

  function abrir(idx, ex = 0) {
    atual = idx;
    exAtual = ex;
    const [cl, bio] = visiveis[idx];
    const c = CLASSE[cl], b = BIOMA[bio], f = ficha(cl, bio);

    $("det-cor").style.background = c.cor;
    $("det-meta").innerHTML = `${bTag(b)}<span>${esc(tc(c.grupo))}${c.codigo ? " · " + t("codigo") + " " + esc(c.codigo) : ""}</span>`;
    $("det-titulo").textContent = tc(c.nome);

    const fonte = f.fonte === "legenda"
      ? `<p class="fonte-desc">${esc(t("fonteLeg", leg()))}</p>`
      : `<p class="fonte-desc aviso">${esc(t("semLeg", leg()))}</p>`;
    let h = `<section class="det-desc">
      <div><h4>${t("desc")}</h4><p>${f.descricao ? esc(tc(f.descricao)) : `<span class="pendente">${t("naoInfF")}</span>`}</p>${fonte}</div>
      ${f.observacoes ? `<div><h4>${t("obs")}</h4><p>${esc(tc(f.observacoes))}</p></div>` : ""}
    </section>`;
    if (f.exemplos.length > 1) {
      h += `<div class="abas" role="tablist">` + f.exemplos.map((_, i) =>
        `<button role="tab" data-aba="${i}" aria-selected="${i === ex}">${t("exemplo", i + 1)}</button>`).join("") + `</div>`;
    }
    if (f.exemplos.length) {
      h += `<section class="det-ex">${htmlExemplo(c, b, f.exemplos[ex], ex, f.exemplos.length)}</section>`;
    } else {
      h += `<div class="sem-quadros">${t("nenhumEx")}</div>`;
    }
    $("det-corpo").innerHTML = h;

    $("det-ant").disabled = idx === 0;
    $("det-prox").disabled = idx === visiveis.length - 1;
    if (!dlg.open) dlg.showModal();
    $("det-corpo").scrollTop = 0;
    gravarHash();
  }

  $("det-corpo").addEventListener("click", (ev) => {
    const aba = ev.target.closest("[data-aba]");
    if (aba) { abrir(atual, +aba.dataset.aba); return; }
    const q = ev.target.closest(".quadro");
    if (q) { abrirZoom(q.dataset.j); return; }
    const cp = ev.target.closest("[data-copiar]");
    if (cp && navigator.clipboard) {
      navigator.clipboard.writeText(cp.dataset.copiar).then(() => {
        cp.textContent = t("copiado"); setTimeout(() => (cp.textContent = t("copiar")), 1500);
      });
    }
  });

  // ---------- zoom ----------
  const zdlg = $("zoom");
  let zLista = [], zPos = 0;
  function abrirZoom(j) {
    const [cl, bio] = visiveis[atual];
    const ex = ficha(cl, bio).exemplos[exAtual];
    zLista = ex.imagens.map((i) => ({ src: i.src, legenda: tc(i.rotulo) }));
    if (ex.grafico) zLista.push({ src: ex.grafico, legenda: t("serieZoom") });
    zPos = j === "grafico" ? zLista.length - 1 : +j;
    mostrarZoom();
    zdlg.showModal();
  }
  function mostrarZoom() {
    const it = zLista[zPos];
    const [cl, bio] = visiveis[atual];
    $("zoom-img").src = it.src;
    $("zoom-legenda").textContent = `${tc(CLASSE[cl].nome)} · ${tc(BIOMA[bio].nome)} — ${it.legenda}`;
    $("zoom-ant").disabled = zPos === 0;
    $("zoom-prox").disabled = zPos === zLista.length - 1;
  }
  $("zoom-ant").addEventListener("click", () => { if (zPos > 0) { zPos--; mostrarZoom(); } });
  $("zoom-prox").addEventListener("click", () => { if (zPos < zLista.length - 1) { zPos++; mostrarZoom(); } });
  $("zoom-fechar").addEventListener("click", () => zdlg.close());
  zdlg.addEventListener("click", (ev) => { if (ev.target === zdlg) zdlg.close(); });

  // ---------- sobre ----------
  if (D.pdf) $("sobre-pdf").href = D.pdf; else $("sobre-pdf").parentElement.hidden = true;
  $("btn-sobre").addEventListener("click", () => $("sobre").showModal());
  $("rodape-citar").addEventListener("click", () => {
    $("sobre").showModal();
    $("como-citar").scrollIntoView({ block: "start" });
  });
  $("citar-copiar").addEventListener("click", () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText($("citacao-texto").textContent).then(() => {
      $("citar-copiar").textContent = t("citacaoCopiada");
      setTimeout(() => ($("citar-copiar").textContent = t("copiarCitacao")), 1500);
    });
  });
  $("sobre-fechar").addEventListener("click", () => $("sobre").close());
  $("sobre").addEventListener("click", (ev) => { if (ev.target === $("sobre")) $("sobre").close(); });

  // ---------- eventos ----------
  document.querySelectorAll(".modo [data-modo]").forEach((b) =>
    b.addEventListener("click", () => { S.modo = b.dataset.modo; render(); }));
  document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => {
    LANG = b.dataset.lang;
    try { localStorage.setItem("idioma", LANG); } catch (e) { /* sem armazenamento */ }
    aplicarIdioma();
    render();
    if (dlg.open) abrir(atual, exAtual);
  }));
  $("busca").addEventListener("input", (ev) => { S.busca = ev.target.value; render(); });
  $("mostrar-ausentes").addEventListener("change", (ev) => { S.ausentes = ev.target.checked; render(); });
  $("grade").addEventListener("click", (ev) => {
    const c = ev.target.closest(".card[data-idx]");
    if (c) abrir(+c.dataset.idx);
  });
  $("lista-classes").addEventListener("click", (ev) => {
    const it = ev.target.closest(".item-classe");
    if (it) { S.classe = it.dataset.cl; render(); window.scrollTo({ top: 0, behavior: "smooth" }); }
  });

  $("det-fechar").addEventListener("click", () => dlg.close());
  dlg.addEventListener("close", gravarHash);
  $("det-ant").addEventListener("click", () => atual > 0 && abrir(atual - 1));
  $("det-prox").addEventListener("click", () => atual < visiveis.length - 1 && abrir(atual + 1));
  dlg.addEventListener("click", (ev) => { if (ev.target === dlg) dlg.close(); });
  document.addEventListener("keydown", (ev) => {
    if (zdlg.open) {
      if (ev.key === "ArrowLeft") $("zoom-ant").click();
      if (ev.key === "ArrowRight") $("zoom-prox").click();
      return;
    }
    if (!dlg.open) return;
    if (ev.key === "ArrowLeft" && atual > 0) abrir(atual - 1);
    if (ev.key === "ArrowRight" && atual < visiveis.length - 1) abrir(atual + 1);
  });

  const fichaInicial = lerHash();
  aplicarIdioma();
  render();
  if (fichaInicial) {
    const i = visiveis.findIndex((v) => v.join("|") === fichaInicial);
    if (i >= 0) abrir(i);
  }
})();
