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
  },
  {
    date: "2026-06-05",
    month: "2026-06",
    type: "macro",
    impact: "high",
    title: "Non-Farm Payrolls (empleo EE. UU.)",
    meta: "Dato macro",
    note: "Puede mover tasas implícitas y compresion/expansion de multiplos en tech.",
    source: "Calendario macro estimado mensual",
  },
  {
    date: "2026-06-12",
    month: "2026-06",
    type: "macro",
    impact: "high",
    title: "CPI Estados Unidos (estimado mensual)",
    meta: "Dato macro",
    note: "Inflación impacta tasas y múltiplos de growth. Suele mover MSFT, GOOGL, AMZN, META y QQQ.",
    source: "Fecha estimada, validar calendario oficial",
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
  },
  {
    date: "2026-06-17",
    month: "2026-06",
    type: "macro",
    impact: "high",
    title: "FOMC / Decisión de la Fed (estimado)",
    meta: "Dato macro",
    note: "Día de riesgo direccional para mercado completo. Evitar entradas impulsivas antes del comunicado.",
    source: "Fecha estimada, validar calendario oficial",
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
  },
  {
    date: "2026-07-03",
    month: "2026-07",
    type: "macro",
    impact: "high",
    title: "Non-Farm Payrolls (empleo EE. UU.)",
    meta: "Dato macro",
    note: "Clave para sensibilidad de growth y direction de indices antes de temporada de earnings.",
    source: "Calendario macro estimado mensual",
  },
  {
    date: "2026-07-15",
    month: "2026-07",
    type: "macro",
    impact: "high",
    title: "CPI Estados Unidos (estimado mensual)",
    meta: "Dato macro",
    note: "Día crítico para valuation de tecnológicas y expectativas de recortes/subidas.",
    source: "Fecha estimada, validar calendario oficial",
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
  },
  {
    date: "2026-07-21",
    month: "2026-07",
    type: "watch",
    impact: "medium",
    title: "Inicio estimado de temporada fuerte de mega caps",
    meta: "Semana táctica",
    note: "Reducir entradas impulsivas pre-reporte y priorizar confirmación post resultados.",
    source: "Ventana historica aproximada",
  },
  {
    date: "2026-07-22",
    month: "2026-07",
    type: "watch",
    impact: "medium",
    title: "Ventana tentativa: Alphabet (GOOGL)",
    meta: "Semana de resultados (estimado)",
    note: "Monitorear Cloud, márgenes y guidance de AI. Puede mover todo el bloque mega cap tech.",
    source: "Ventana histórica aproximada",
  },
  {
    date: "2026-07-23",
    month: "2026-07",
    type: "watch",
    impact: "medium",
    title: "Ventana tentativa: Microsoft (MSFT)",
    meta: "Semana de resultados (estimado)",
    note: "Revisar crecimiento de Azure y comentarios de capex AI para validar continuidad de tendencia.",
    source: "Ventana histórica aproximada",
  },
  {
    date: "2026-07-24",
    month: "2026-07",
    type: "watch",
    impact: "medium",
    title: "Ventana tentativa: AAPL",
    meta: "Semana de resultados (estimado)",
    note: "Mirar guidance de iPhone/servicios y reacción de cadena de suministro.",
    source: "Ventana historica aproximada",
  },
  {
    date: "2026-07-28",
    month: "2026-07",
    type: "watch",
    impact: "high",
    title: "FOMC / Decisión de la Fed (estimado)",
    meta: "Dato macro",
    note: "Semana de alto riesgo para posiciones growth. Mejor operar con tamaño moderado.",
    source: "Fecha estimada, validar calendario oficial",
  },
  {
    date: "2026-07-29",
    month: "2026-07",
    type: "watch",
    impact: "medium",
    title: "Ventana tentativa: Meta (META) / Amazon (AMZN)",
    meta: "Semana de resultados (estimado)",
    note: "Publicidad, retail cloud y guidance. Alta probabilidad de movimientos bruscos post reporte.",
    source: "Ventana histórica aproximada",
  },
  {
    date: "2026-08-07",
    month: "2026-08",
    type: "macro",
    impact: "high",
    title: "Non-Farm Payrolls (empleo EE. UU.)",
    meta: "Dato macro",
    note: "Marca el tono de riesgo del mes para indices y tecnológicas.",
    source: "Calendario macro estimado mensual",
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
  },
];

const watchlist = [
  "MSFT - Core de calidad y cloud",
  "GOOGL - Growth + márgenes",
  "AMZN - AWS + consumo",
  "META - Ads + AI momentum",
  "AVGO - Infraestructura AI",
];

const monthFilter = document.getElementById("monthFilter");
const typeFilter = document.getElementById("typeFilter");
const impactFilter = document.getElementById("impactFilter");
const timeline = document.getElementById("timeline");
const eventCounter = document.getElementById("eventCounter");
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

function applyFilters(data) {
  return data.filter((event) => {
    const monthOk = monthFilter.value === "all" || event.month === monthFilter.value;
    const typeOk = typeFilter.value === "all" || event.type === typeFilter.value;
    const impactOk = impactFilter.value === "all" || event.impact === impactFilter.value;
    return monthOk && typeOk && impactOk;
  });
}

function render() {
  timeline.innerHTML = "";
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const filtered = applyFilters(sorted);

  filtered.forEach((item) => {
    const node = eventTemplate.content.cloneNode(true);
    node.querySelector(".title").textContent = item.title;
    node.querySelector(".meta").textContent = item.meta;
    node.querySelector(".note").textContent = item.note;
    node.querySelector(".source").textContent = `Fuente: ${item.source}`;

    const date = node.querySelector(".badge.date");
    date.textContent = fmtDate(item.date);

    const impact = node.querySelector(".badge.impact");
    impact.textContent = `impacto: ${item.impact}`;
    impact.classList.add(item.impact);

    node.querySelector(".badge.type").textContent = item.type;
    timeline.appendChild(node);
  });

  eventCounter.textContent = `${filtered.length} evento(s)`;
}

monthFilter.addEventListener("change", render);
typeFilter.addEventListener("change", render);
impactFilter.addEventListener("change", render);

fillMonthFilter();
fillWatchlist();
render();
