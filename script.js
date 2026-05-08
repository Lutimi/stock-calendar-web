const events = [
  {
    date: "2026-05-15",
    month: "2026-05",
    type: "macro",
    impact: "medium",
    title: "OPEX mensual (vencimiento de opciones)",
    meta: "Evento de flujo",
    note: "Suele aumentar ruido intradia y rotaciones de corto plazo en indices y mega caps.",
    source: "Calendario de mercado",
    strategy: {
      focus: ["SPY", "QQQ"],
      buyDaysBefore: 0,
      gainRangePct: "0% a 1.5%",
      riskLevel: "medio",
      play: "No buscar swing por OPEX. Mejor esperar confirmacion de cierre semanal.",
    },
  },
  {
    date: "2026-05-20",
    month: "2026-05",
    type: "earnings",
    impact: "high",
    title: "NVIDIA (NVDA) - Earnings",
    meta: "After market",
    note: "Evento clave para chips y AI. Alta volatilidad en NVDA, AMD, AVGO, QQQ y semiconductores.",
    source: "Manual confirmado",
    strategy: {
      focus: ["NVDA", "AVGO", "QQQ"],
      buyDaysBefore: 2,
      gainRangePct: "-6% a +9%",
      riskLevel: "alto",
      play: "Entrada parcial 1-2 dias antes solo con posicion pequena. Segunda entrada post reporte si confirma.",
    },
  },
  {
    date: "2026-05-21",
    month: "2026-05",
    type: "watch",
    impact: "high",
    title: "Dia de reaccion a NVDA",
    meta: "Sesion post earnings",
    note: "Confirmar si el movimiento de semiconductores continua o se revierte tras guidance.",
    source: "Regla tactica",
    strategy: {
      focus: ["NVDA", "SMH", "QQQ"],
      buyDaysBefore: 0,
      gainRangePct: "1% a 5%",
      riskLevel: "alto",
      play: "Suele ser mejor operar este dia que adivinar antes del reporte. Buscar direccion clara en apertura.",
    },
  },
  {
    date: "2026-06-03",
    month: "2026-06",
    type: "earnings",
    impact: "high",
    title: "Broadcom (AVGO) - Earnings",
    meta: "After market",
    note: "Importante para narrativa de infraestructura AI, networking y demanda enterprise.",
    source: "Manual confirmado",
    strategy: {
      focus: ["AVGO", "NVDA", "QQQ"],
      buyDaysBefore: 2,
      gainRangePct: "-5% a +8%",
      riskLevel: "alto",
      play: "Entrar escalonado. Si rompe al alza con volumen al dia siguiente, reforzar.",
    },
  },
  {
    date: "2026-06-05",
    month: "2026-06",
    type: "macro",
    impact: "high",
    title: "Non-Farm Payrolls (empleo EE.UU.)",
    meta: "Dato macro",
    note: "Puede mover tasas implicitas y compresion/expansion de multiplos en tech.",
    source: "Calendario macro estimado mensual",
    strategy: {
      focus: ["SPY", "QQQ", "MSFT"],
      buyDaysBefore: 1,
      gainRangePct: "-1.5% a +2%",
      riskLevel: "medio",
      play: "No comprar fuerte justo minutos antes del dato. Esperar 30-60 min despues de salida.",
    },
  },
  {
    date: "2026-06-12",
    month: "2026-06",
    type: "macro",
    impact: "high",
    title: "CPI Estados Unidos (estimado mensual)",
    meta: "Dato macro",
    note: "Inflacion impacta tasas y multiplos de growth. Suele mover MSFT, GOOGL, AMZN, META y QQQ.",
    source: "Fecha estimada, validar calendario oficial",
    strategy: {
      focus: ["QQQ", "MSFT", "GOOGL"],
      buyDaysBefore: 1,
      gainRangePct: "-2% a +2.5%",
      riskLevel: "alto",
      play: "Dato binario. Mejor entrar por partes: 50% antes y 50% tras reaccion si confirma tendencia.",
    },
  },
  {
    date: "2026-06-15",
    month: "2026-06",
    type: "macro",
    impact: "medium",
    title: "PPI Estados Unidos (estimado mensual)",
    meta: "Dato macro",
    note: "Complementa lectura de inflacion y puede cambiar expectativas de politica monetaria.",
    source: "Fecha estimada, validar calendario oficial",
    strategy: {
      focus: ["SPY", "QQQ"],
      buyDaysBefore: 0,
      gainRangePct: "-1% a +1.2%",
      riskLevel: "medio",
      play: "Impacto menor que CPI, util para ajustar tamano de riesgo.",
    },
  },
  {
    date: "2026-06-17",
    month: "2026-06",
    type: "macro",
    impact: "high",
    title: "FOMC / Decision de la Fed (estimado)",
    meta: "Dato macro",
    note: "Decision FOMC oficial. Reunión de dos dias, 16-17 de junio; statement 2:00 p.m. y conferencia 2:30 p.m. ET.",
    source: "Federal Reserve Calendar oficial",
    sourceUrl: "https://www.federalreserve.gov/newsevents/2026-june.htm",
    strategy: {
      focus: ["SPY", "QQQ", "MSFT", "GOOGL"],
      buyDaysBefore: 2,
      gainRangePct: "-2.5% a +3.5%",
      riskLevel: "alto",
      play: "Reducir tamano antes del comunicado. Mejor operar confirmacion despues de conferencia.",
    },
  },
  {
    date: "2026-06-19",
    month: "2026-06",
    type: "macro",
    impact: "medium",
    title: "Triple Witching / OPEX trimestral",
    meta: "Evento de derivados",
    note: "Dia de alta actividad en derivados; posibles barridos de liquidez y falsas rupturas.",
    source: "Calendario de mercado",
    strategy: {
      focus: ["SPY", "QQQ"],
      buyDaysBefore: 0,
      gainRangePct: "-1% a +1%",
      riskLevel: "medio",
      play: "Dia para gestionar riesgo, no para abrir posiciones grandes nuevas.",
    },
  },
  {
    date: "2026-07-03",
    month: "2026-07",
    type: "macro",
    impact: "high",
    title: "Non-Farm Payrolls (empleo EE.UU.)",
    meta: "Dato macro",
    note: "Clave para sensibilidad de growth y direccion de indices antes de temporada de earnings.",
    source: "Calendario macro estimado mensual",
    strategy: {
      focus: ["QQQ", "MSFT", "AMZN"],
      buyDaysBefore: 1,
      gainRangePct: "-1.5% a +2%",
      riskLevel: "medio",
      play: "Si el mercado abre con gap fuerte, esperar pullback antes de entrar.",
    },
  },
  {
    date: "2026-07-15",
    month: "2026-07",
    type: "macro",
    impact: "high",
    title: "CPI Estados Unidos (estimado mensual)",
    meta: "Dato macro",
    note: "Dia critico para valuation de tecnologicas y expectativas de recortes/subidas.",
    source: "Fecha estimada, validar calendario oficial",
    strategy: {
      focus: ["QQQ", "GOOGL", "META"],
      buyDaysBefore: 1,
      gainRangePct: "-2% a +2.5%",
      riskLevel: "alto",
      play: "Alta volatilidad. Mantener stops mas amplios o no operar intradia.",
    },
  },
  {
    date: "2026-07-17",
    month: "2026-07",
    type: "macro",
    impact: "medium",
    title: "OPEX mensual (vencimiento de opciones)",
    meta: "Evento de flujo",
    note: "Posible incremento de volatilidad de fin de semana y rotaciones sectoriales.",
    source: "Calendario de mercado",
    strategy: {
      focus: ["SPY", "QQQ"],
      buyDaysBefore: 0,
      gainRangePct: "0% a 1.5%",
      riskLevel: "medio",
      play: "Usar para rebalancear, no para perseguir precio.",
    },
  },
  {
    date: "2026-07-21",
    month: "2026-07",
    type: "watch",
    impact: "medium",
    title: "Inicio estimado de temporada fuerte de mega caps",
    meta: "Semana tactica",
    note: "Reducir entradas impulsivas pre-reporte y priorizar confirmacion post resultados.",
    source: "Ventana historica aproximada",
    strategy: {
      focus: ["MSFT", "GOOGL", "META", "AMZN"],
      buyDaysBefore: 3,
      gainRangePct: "-3% a +4%",
      riskLevel: "alto",
      play: "Entradas parciales en empresas con tendencia fuerte y caja solida.",
    },
  },
  {
    date: "2026-07-22",
    month: "2026-07",
    type: "watch",
    impact: "medium",
    title: "Ventana tentativa: Alphabet (GOOGL)",
    meta: "Semana de resultados (estimado)",
    note: "Monitorear Cloud, margenes y guidance de AI. Puede mover todo el bloque mega cap tech.",
    source: "Ventana historica aproximada",
    strategy: {
      focus: ["GOOGL", "MSFT", "QQQ"],
      buyDaysBefore: 2,
      gainRangePct: "-4% a +6%",
      riskLevel: "alto",
      play: "Mejor trade: esperar guidance y comprar ruptura, no adivinar vela previa.",
    },
  },
  {
    date: "2026-07-23",
    month: "2026-07",
    type: "watch",
    impact: "medium",
    title: "Ventana tentativa: Microsoft (MSFT)",
    meta: "Semana de resultados (estimado)",
    note: "Revisar crecimiento de Azure y comentarios de capex AI para validar continuidad de tendencia.",
    source: "Ventana historica aproximada",
    strategy: {
      focus: ["MSFT", "QQQ"],
      buyDaysBefore: 2,
      gainRangePct: "-3.5% a +5%",
      riskLevel: "alto",
      play: "Si ya subio fuerte antes del reporte, entrar mas pequeno o esperar post-earnings.",
    },
  },
  {
    date: "2026-07-24",
    month: "2026-07",
    type: "watch",
    impact: "medium",
    title: "Ventana tentativa: AAPL",
    meta: "Semana de resultados (estimado)",
    note: "Mirar guidance de iPhone/servicios y reaccion de cadena de suministro.",
    source: "Ventana historica aproximada",
    strategy: {
      focus: ["AAPL", "SPY", "QQQ"],
      buyDaysBefore: 2,
      gainRangePct: "-3% a +4.5%",
      riskLevel: "medio",
      play: "Menos beta que chips; mejor para balancear riesgo de cartera tech.",
    },
  },
  {
    date: "2026-07-29",
    month: "2026-07",
    type: "watch",
    impact: "high",
    title: "FOMC / Decision de la Fed",
    meta: "Dato macro",
    note: "Decision FOMC oficial. Reunión de dos dias, 28-29 de julio; suele mover tasas, QQQ y mega cap tech.",
    source: "Federal Reserve FOMC Calendar oficial",
    sourceUrl: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    strategy: {
      focus: ["SPY", "QQQ", "MSFT", "GOOGL"],
      buyDaysBefore: 2,
      gainRangePct: "-2.5% a +3.5%",
      riskLevel: "alto",
      play: "Antes del FOMC: reducir size. Despues: operar direccion de mercado, no opinion.",
    },
  },
  {
    date: "2026-07-29",
    month: "2026-07",
    type: "watch",
    impact: "medium",
    title: "Ventana tentativa: Meta (META) / Amazon (AMZN)",
    meta: "Semana de resultados (estimado)",
    note: "Publicidad, retail cloud y guidance. Alta probabilidad de movimientos bruscos post reporte.",
    source: "Ventana historica aproximada",
    strategy: {
      focus: ["META", "AMZN", "QQQ"],
      buyDaysBefore: 2,
      gainRangePct: "-5% a +7%",
      riskLevel: "alto",
      play: "Elegir una de las dos para no duplicar riesgo de evento en la misma noche.",
    },
  },
  {
    date: "2026-08-07",
    month: "2026-08",
    type: "macro",
    impact: "high",
    title: "Non-Farm Payrolls (empleo EE.UU.)",
    meta: "Dato macro",
    note: "Marca el tono de riesgo del mes para indices y tecnologicas.",
    source: "Calendario macro estimado mensual",
    strategy: {
      focus: ["SPY", "QQQ"],
      buyDaysBefore: 1,
      gainRangePct: "-1.5% a +2%",
      riskLevel: "medio",
      play: "Si el dato sale mixto, no forzar trade; esperar cierre diario.",
    },
  },
  {
    date: "2026-08-12",
    month: "2026-08",
    type: "macro",
    impact: "high",
    title: "CPI Estados Unidos (estimado mensual)",
    meta: "Dato macro",
    note: "Evento clave para decidir si mantener momentum growth o rotar a defensivos.",
    source: "Fecha estimada, validar calendario oficial",
    strategy: {
      focus: ["QQQ", "MSFT", "META"],
      buyDaysBefore: 1,
      gainRangePct: "-2% a +2.5%",
      riskLevel: "alto",
      play: "Evento binario. Usar mitad de posicion habitual.",
    },
  },
  {
    date: "2026-08-21",
    month: "2026-08",
    type: "macro",
    impact: "medium",
    title: "OPEX mensual (vencimiento de opciones)",
    meta: "Evento de flujo",
    note: "Puede generar movimientos artificiales de cierre en acciones muy operadas.",
    source: "Calendario de mercado",
    strategy: {
      focus: ["SPY", "QQQ"],
      buyDaysBefore: 0,
      gainRangePct: "0% a 1.2%",
      riskLevel: "medio",
      play: "Dia para gestionar salida parcial y rebalanceo.",
    },
  },
];

const watchlist = [
  "MSFT - Core de calidad y cloud",
  "GOOGL - Growth + margenes",
  "AMZN - AWS + consumo",
  "META - Ads + AI momentum",
  "AVGO - Infraestructura AI",
];

const monthFilter = document.getElementById("monthFilter");
const typeFilter = document.getElementById("typeFilter");
const impactFilter = document.getElementById("impactFilter");
const timeline = document.getElementById("timeline");
const eventCounter = document.getElementById("eventCounter");
const highImpactCounter = document.getElementById("highImpactCounter");
const earningsCounter = document.getElementById("earningsCounter");
const nextTitle = document.getElementById("nextTitle");
const nextMeta = document.getElementById("nextMeta");
const nextCountdown = document.getElementById("nextCountdown");
const resetFilters = document.getElementById("resetFilters");
const eventTemplate = document.getElementById("eventTemplate");
const watchlistChips = document.getElementById("watchlistChips");

function fillMonthFilter() {
  const months = Array.from(new Set(events.map((e) => e.month))).sort();
  months.forEach((month) => {
    const option = document.createElement("option");
    option.value = month;
    option.textContent = month;
    monthFilter.appendChild(option);
  });
}

function fillWatchlist() {
  watchlist.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = item;
    watchlistChips.appendChild(chip);
  });
}

function fmtDate(raw) {
  const [y, m, d] = raw.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.toLocaleDateString("es-PE", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function dateParts(raw) {
  const [y, m, d] = raw.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return {
    day: String(d).padStart(2, "0"),
    month: dt.toLocaleDateString("es-PE", { month: "short", timeZone: "UTC" }),
  };
}

function daysUntil(raw) {
  const today = new Date();
  const start = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const [y, m, d] = raw.split("-").map(Number);
  const target = Date.UTC(y, m - 1, d);
  return Math.ceil((target - start) / 86400000);
}

function applyFilters(data) {
  return data.filter((event) => {
    const monthOk = monthFilter.value === "all" || event.month === monthFilter.value;
    const typeOk = typeFilter.value === "all" || event.type === typeFilter.value;
    const impactOk = impactFilter.value === "all" || event.impact === impactFilter.value;
    return monthOk && typeOk && impactOk;
  });
}

function updateSummary(sorted) {
  const upcoming = sorted.find((event) => daysUntil(event.date) >= 0) || sorted[0];
  if (!upcoming) return;

  const diff = daysUntil(upcoming.date);
  nextTitle.textContent = upcoming.title;
  nextMeta.textContent = `${fmtDate(upcoming.date)} | ${upcoming.meta}`;
  nextCountdown.textContent = diff === 0 ? "Hoy" : `${diff} dia(s)`;
}

function render() {
  timeline.innerHTML = "";
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const filtered = applyFilters(sorted);
  updateSummary(sorted);

  filtered.forEach((item) => {
    const node = eventTemplate.content.cloneNode(true);
    const parts = dateParts(item.date);
    node.querySelector(".day").textContent = parts.day;
    node.querySelector(".month").textContent = parts.month;
    node.querySelector(".title").textContent = item.title;
    node.querySelector(".meta").textContent = item.meta;
    node.querySelector(".note").textContent = item.note;
    node.querySelector(".source").textContent = `Fuente: ${item.source}`;

    const impact = node.querySelector(".badge.impact");
    impact.textContent = `impacto: ${item.impact}`;
    impact.classList.add(item.impact);

    node.querySelector(".badge.type").textContent = item.type;

    const strategy = item.strategy || {
      focus: [],
      buyDaysBefore: 0,
      gainRangePct: "N/A",
      riskLevel: "medio",
      play: "Sin pauta tactica cargada.",
    };

    const risk = node.querySelector(".badge.risk");
    risk.textContent = `riesgo: ${strategy.riskLevel}`;
    risk.classList.add(strategy.riskLevel);

    node.querySelector(".focus").textContent = strategy.focus.join(", ") || "N/A";
    node.querySelector(".entry").textContent = `${strategy.buyDaysBefore} dia(s) antes`;
    node.querySelector(".range").textContent = strategy.gainRangePct;
    node.querySelector(".plan").textContent = strategy.play;
    const sourceLink = node.querySelector(".source-link");
    if (item.sourceUrl) {
      sourceLink.href = item.sourceUrl;
      sourceLink.hidden = false;
    } else {
      sourceLink.hidden = true;
    }
    timeline.appendChild(node);
  });

  eventCounter.textContent = filtered.length;
  highImpactCounter.textContent = filtered.filter((event) => event.impact === "high").length;
  earningsCounter.textContent = filtered.filter((event) => event.type === "earnings").length;
}

monthFilter.addEventListener("change", render);
typeFilter.addEventListener("change", render);
impactFilter.addEventListener("change", render);
resetFilters.addEventListener("click", () => {
  monthFilter.value = "all";
  typeFilter.value = "all";
  impactFilter.value = "all";
  render();
});

fillMonthFilter();
fillWatchlist();
render();
