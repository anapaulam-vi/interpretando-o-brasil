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
    document.querySelectorAll(".modo button").forEach((b) =>
      b.setAttribute("aria-selected", b.dataset.modo === S.modo ? "true" : "false"));
    $("f-bioma").hidden = S.modo !== "bioma";
    $("f-bioma-multi").hidden = S.modo !== "classe";
    $("lista-classes").hidden = S.modo !== "classe";
    document.querySelector(".conteudo").classList.toggle("com-lista", S.modo === "classe");

    $("chips-bioma").replaceChildren(...D.biomas.map((b) => chip({
      rotulo: b.nome, cor: b.cor, ativo: S.bioma === b.id,
      onClick: () => { S.bioma = b.id; render(); },
    })));

    const todos = S.biomasSel.size === D.biomas.length;
    $("chips-bioma-multi").replaceChildren(
      chip({ rotulo: "Todos", ativo: todos, onClick: () => { S.biomasSel = new Set(D.biomas.map((b) => b.id)); render(); } }),
      ...D.biomas.map((b) => chip({
        rotulo: b.nome, cor: b.cor, ativo: !todos && S.biomasSel.has(b.id),
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
      chip({ rotulo: "Todos", ativo: S.grupo === "todos", onClick: () => { S.grupo = "todos"; render(); } }),
      ...D.grupos.map((g) => chip({ rotulo: g, ativo: S.grupo === g, onClick: () => { S.grupo = g; render(); } })),
    );
  }

  function classesFiltradas() {
    const q = norm(S.busca.trim());
    return D.classes.filter((c) =>
      (S.grupo === "todos" || c.grupo === S.grupo) &&
      (!q || norm(c.nome).includes(q) || c.codigo === q));
  }

  // ---------- cards ----------
  const swatch = (cor, cls = "swatch") => `<span class="${cls}" style="background:${esc(cor)}"></span>`;
  const bTag = (b) => `<span class="bioma-tag">${swatch(b.cor, "ponto")}${esc(b.nome)}</span>`;

  function card(cl, bio, porClasse) {
    const c = CLASSE[cl], b = BIOMA[bio], f = ficha(cl, bio);
    const idx = f ? visiveis.push([cl, bio]) - 1 : -1;
    const mini = miniatura(f);
    const img = mini
      ? `<img src="${esc(mini)}" alt="" loading="lazy">`
      : `<div class="sem-img">${swatch(c.cor)}<span>${f ? "imagens em elaboração" : "sem ficha"}</span></div>`;
    const nEx = f ? f.exemplos.length : 0;
    const qtd = nEx > 1 ? `<span class="qtd">${nEx} exemplos</span>` : "";
    const texto = f
      ? `<p>${esc(f.descricao || f.observacoes || "Descrição não informada.")}</p>`
      : `<p class="nao-ocorre">Sem ficha para este bioma</p>`;
    const topo = porClasse ? `${swatch(b.cor, "ponto")}${esc(c.nome)}` : `${swatch(c.cor)}${esc(c.grupo)}`;
    const tag = f ? "button" : "div";
    return `<${tag} class="card${f ? "" : " ausente"}" ${f ? `data-idx="${idx}" type="button"` : ""}>
      <div class="card-img">${img}${qtd}</div>
      <div class="card-corpo">
        <div class="card-top">${topo}</div>
        <h3>${esc(porClasse ? b.nome : c.nome)}</h3>
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
      <div><h2>${esc(b.nome)}</h2><p>${n} classes com ficha de interpretação</p></div></div>`;
    let html = "";
    for (const g of D.grupos) {
      const cs = classesFiltradas().filter((c) => c.grupo === g && (S.ausentes || ficha(c.id, S.bioma)));
      if (!cs.length) continue;
      html += `<div class="titulo-grupo">${esc(g)}</div>` + cs.map((c) => card(c.id, S.bioma, false)).join("");
    }
    grade.innerHTML = html;
    $("vazio").hidden = !!html;
    $("vazio").textContent = "Nenhuma classe encontrada com esses filtros.";
  }

  function renderLista() {
    const cs = classesFiltradas();
    if (cs.length && !cs.some((c) => c.id === S.classe)) S.classe = cs[0].id;
    let html = "";
    for (const g of D.grupos) {
      const doGrupo = cs.filter((c) => c.grupo === g);
      if (!doGrupo.length) continue;
      html += `<h3>${esc(g)}</h3>` + doGrupo.map((c) => {
        const n = D.biomas.filter((b) => ficha(c.id, b.id)).length;
        return `<button class="item-classe" data-cl="${esc(c.id)}" aria-current="${c.id === S.classe}">
          ${swatch(c.cor)}<span>${esc(c.nome)}</span><span class="cod" title="biomas com ficha">${n}</span>
        </button>`;
      }).join("");
    }
    $("lista-classes").innerHTML = html || '<p class="vazio">Nada encontrado.</p>';
    return cs.length > 0;
  }

  function renderPorClasse() {
    const grade = $("grade");
    grade.className = "grade por-classe";
    if (!renderLista()) {
      $("cabecalho-painel").innerHTML = "";
      grade.innerHTML = "";
      $("vazio").hidden = false;
      $("vazio").textContent = "Nenhuma classe encontrada com esses filtros.";
      return;
    }
    const c = CLASSE[S.classe];
    const com = D.biomas.filter((b) => ficha(c.id, b.id));
    $("cabecalho-painel").innerHTML = `<div class="cab-painel">${swatch(c.cor, "faixa")}
      <div><div class="meta">${esc(c.grupo)}${c.codigo ? ` · código MapBiomas ${esc(c.codigo)}` : ""}</div>
      <h2>${esc(c.nome)}</h2><p>Ficha em ${com.length} de ${D.biomas.length} biomas: ${com.map((b) => esc(b.nome)).join(", ") || "—"}</p></div></div>`;
    const bios = D.biomas.filter((b) => S.biomasSel.has(b.id) && (S.ausentes || ficha(c.id, b.id)));
    grade.innerHTML = bios.map((b) => card(c.id, b.id, true)).join("");
    $("vazio").hidden = bios.length > 0;
    $("vazio").textContent = "Esta classe não tem ficha nos biomas selecionados.";
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
    if (l.equipe) h += `<p>${esc(l.equipe)}</p>`;
    if (l.geral) h += `<p>${esc(l.geral)}</p>`;
    if (!l.equipe) h += `<p class="fonte-desc aviso">Preenchido automaticamente; a equipe vai revisar e complementar.</p>`;
    return `<dt class="lim">Limitação de interpretação da classe:</dt><dd class="limitacao">${h}</dd>`;
  }

  function htmlExemplo(c, b, ex, i, total) {
    let h = "";
    if (ex.imagens.length) {
      h += `<div class="quadros">` + ex.imagens.map((im, j) =>
        `<figure><figcaption>${esc(im.rotulo)}</figcaption>
          <button class="quadro" data-ex="${i}" data-j="${j}" aria-label="Ampliar ${esc(im.rotulo)}">
          <img src="${esc(im.src)}" alt="${esc(c.nome)} — ${esc(im.rotulo)}" loading="lazy"></button></figure>`).join("") + `</div>`;
    } else {
      h += `<div class="sem-quadros">Imagens de satélite deste exemplo ainda em elaboração.</div>`;
    }
    if (ex.grafico || ex.mapa) {
      h += `<div class="extras-ex">`;
      if (ex.grafico) h += `<figure class="grafico"><figcaption>Série temporal Sentinel-2 — NDVI e precipitação acumulada mensal</figcaption>
        <button class="quadro" data-ex="${i}" data-j="grafico"><img src="${esc(ex.grafico)}" alt="Série temporal de NDVI" loading="lazy"></button></figure>`;
      if (ex.mapa) h += `<figure class="mapa"><figcaption>Localização no bioma</figcaption>
        <img src="${esc(ex.mapa)}" alt="Localização no mapa do bioma" loading="lazy"></figure>`;
      h += `</div>`;
    }
    const linha = (rot, val) => `<dt>${rot}</dt><dd>${val || '<span class="pendente">não informado</span>'}</dd>`;
    let coord = esc(ex.coords);
    if (ex.lat != null) {
      const url = `https://www.google.com/maps/@?api=1&map_action=map&center=${ex.lat},${ex.lon}&zoom=15&basemap=satellite`;
      coord = `<a href="${url}" target="_blank" rel="noopener">${ex.lat}, ${ex.lon}</a>
        <button class="copiar" data-copiar="${ex.lat}, ${ex.lon}" type="button">copiar</button>`;
    }
    h += `<dl class="atributos">${linha("Coordenadas", coord)}${linha("Falsa-cor", esc(ex.falsa_cor))}
      ${linha("Tonalidade", esc(ex.tonalidade))}${linha("Textura", esc(ex.textura))}
      ${ex.observacoes ? linha("Observações", esc(ex.observacoes)) : ""}
      ${htmlLimitacao(ex.limitacao)}</dl>`;
    if (ex.pagina) h += `<p class="fonte">${pdfLink(ex.pagina, "Ver esta página no PDF (p. " + ex.pagina + ")")}</p>`;
    return h;
  }

  function abrir(idx, ex = 0) {
    atual = idx;
    exAtual = ex;
    const [cl, bio] = visiveis[idx];
    const c = CLASSE[cl], b = BIOMA[bio], f = ficha(cl, bio);

    $("det-cor").style.background = c.cor;
    $("det-meta").innerHTML = `${bTag(b)}<span>${esc(c.grupo)}${c.codigo ? " · código " + esc(c.codigo) : ""}</span>`;
    $("det-titulo").textContent = c.nome;

    const fonte = f.fonte === "legenda"
      ? `<p class="fonte-desc">Descrição da legenda MapBiomas ${esc(D.legenda || "")}</p>`
      : `<p class="fonte-desc aviso">Classe ou bioma sem descrição na legenda MapBiomas ${esc(D.legenda || "")}</p>`;
    let h = `<section class="det-desc">
      <div><h4>Descrição</h4><p>${f.descricao ? esc(f.descricao) : '<span class="pendente">não informada</span>'}</p>${fonte}</div>
      ${f.observacoes ? `<div><h4>Observações</h4><p>${esc(f.observacoes)}</p></div>` : ""}
    </section>`;
    if (f.exemplos.length > 1) {
      h += `<div class="abas" role="tablist">` + f.exemplos.map((_, i) =>
        `<button role="tab" data-aba="${i}" aria-selected="${i === ex}">Exemplo ${i + 1}</button>`).join("") + `</div>`;
    }
    if (f.exemplos.length) {
      h += `<section class="det-ex">${htmlExemplo(c, b, f.exemplos[ex], ex, f.exemplos.length)}</section>`;
    } else {
      h += `<div class="sem-quadros">Nenhum exemplo cadastrado.</div>`;
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
        cp.textContent = "copiado"; setTimeout(() => (cp.textContent = "copiar"), 1500);
      });
    }
  });

  // ---------- zoom ----------
  const zdlg = $("zoom");
  let zLista = [], zPos = 0;
  function abrirZoom(j) {
    const [cl, bio] = visiveis[atual];
    const ex = ficha(cl, bio).exemplos[exAtual];
    zLista = ex.imagens.map((i) => ({ src: i.src, legenda: i.rotulo }));
    if (ex.grafico) zLista.push({ src: ex.grafico, legenda: "Série temporal Sentinel-2 — NDVI e precipitação" });
    zPos = j === "grafico" ? zLista.length - 1 : +j;
    mostrarZoom();
    zdlg.showModal();
  }
  function mostrarZoom() {
    const it = zLista[zPos];
    const [cl, bio] = visiveis[atual];
    $("zoom-img").src = it.src;
    $("zoom-legenda").textContent = `${CLASSE[cl].nome} · ${BIOMA[bio].nome} — ${it.legenda}`;
    $("zoom-ant").disabled = zPos === 0;
    $("zoom-prox").disabled = zPos === zLista.length - 1;
  }
  $("zoom-ant").addEventListener("click", () => { if (zPos > 0) { zPos--; mostrarZoom(); } });
  $("zoom-prox").addEventListener("click", () => { if (zPos < zLista.length - 1) { zPos++; mostrarZoom(); } });
  $("zoom-fechar").addEventListener("click", () => zdlg.close());
  zdlg.addEventListener("click", (ev) => { if (ev.target === zdlg) zdlg.close(); });

  // ---------- sobre ----------
  $("sobre-texto").textContent = D.apresentacao;
  if (D.pdf) $("sobre-pdf").href = D.pdf; else $("sobre-pdf").parentElement.hidden = true;
  $("btn-sobre").addEventListener("click", () => $("sobre").showModal());
  $("sobre-fechar").addEventListener("click", () => $("sobre").close());
  $("sobre").addEventListener("click", (ev) => { if (ev.target === $("sobre")) $("sobre").close(); });

  // ---------- eventos ----------
  document.querySelectorAll(".modo button").forEach((b) =>
    b.addEventListener("click", () => { S.modo = b.dataset.modo; render(); }));
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
  render();
  if (fichaInicial) {
    const i = visiveis.findIndex((v) => v.join("|") === fichaInicial);
    if (i >= 0) abrir(i);
  }
})();
