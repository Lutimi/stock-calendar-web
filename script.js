const events = [
  {
    date: "2026-05-15",
    month: "2026-05",
    type: "macro",
    impact: "medium",
    title: "OPEX mensual (vencimiento de opciones)",
    meta: "Evento de flujo",
    explain: "OPEX es el vencimiento de opciones. Ese dia puede haber movimientos raros porque traders e instituciones cierran o ajustan contratos.",
    note: "Suele aumentar ruido intradia y rotaciones de corto plazo en indices y mega caps.",
    source: "Calendario de mercado",
    thesis: "OPEX puede distorsionar flujos y causar movimientos falsos. Sirve mas para gestionar entradas ya planeadas que para abrir una compra nueva.",
    strategy: {
      focus: ["SPY", "QQQ"],
      buyDaysBefore: 0,
      gainRangePct: "0% a 1.5%",
      riskLevel: "medio",
      play: "Con 150 USD: no abrir compra nueva solo por OPEX. Si ya querias comprar SPY/QQQ, usa 50 USD y guarda 100 USD para el siguiente dia habil.",
    },
  },
  {
    date: "2026-05-20",
    month: "2026-05",
    type: "earnings",
    impact: "high",
    title: "NVIDIA (NVDA) - Earnings",
    meta: "After market",
    explain: "Earnings es el reporte de utilidades de la empresa. NVIDIA publica ventas, ganancias y guidance despues del cierre del mercado; eso puede mover fuerte a NVDA y al sector de chips.",
    note: "Evento clave para chips y AI. Alta volatilidad en NVDA, AMD, AVGO, QQQ y semiconductores.",
    source: "Manual confirmado",
    sourceUrl: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2026/",
    thesis: "NVIDIA sigue siendo el termometro principal de AI. Su ultimo reporte mostro crecimiento fuerte de data center y el mercado suele usar su guidance para valorar todo el bloque de chips.",
    strategy: {
      focus: ["NVDA", "AVGO", "QQQ"],
      buyDaysBefore: 2,
      gainRangePct: "-6% a +9%",
      riskLevel: "alto",
      play: "Con 150 USD: compra 50 USD de NVDA o QQQ 1-2 dias antes si viene fuerte. Guarda 100 USD para el dia siguiente al reporte; solo los usas si abre verde y mantiene fuerza la primera hora.",
    },
  },
  {
    date: "2026-05-21",
    month: "2026-05",
    type: "watch",
    impact: "high",
    title: "Dia de reaccion a NVDA",
    meta: "Sesion post earnings",
    explain: "Es la primera sesion despues del reporte. Sirve para ver si el mercado realmente compro la historia de NVIDIA o si vendio la noticia.",
    note: "Confirmar si el movimiento de semiconductores continua o se revierte tras guidance.",
    source: "Regla tactica",
    sourceUrl: "https://investor.nvidia.com/financial-info/financial-reports",
    thesis: "El dia posterior a NVDA suele dar una lectura mas limpia: si la reaccion confirma guidance fuerte, puede arrastrar semiconductores y QQQ.",
    strategy: {
      focus: ["NVDA", "SMH", "QQQ"],
      buyDaysBefore: 0,
      gainRangePct: "1% a 5%",
      riskLevel: "alto",
      play: "Con 150 USD: espera los primeros 45-60 min. Si NVDA y QQQ siguen verdes, compra 100 USD en QQQ o SMH y deja 50 USD por si hay pullback.",
    },
  },
  {
    date: "2026-06-03",
    month: "2026-06",
    type: "earnings",
    impact: "high",
    title: "Broadcom (AVGO) - Earnings",
    meta: "After market",
    explain: "Broadcom reporta sus resultados despues del cierre. Importa porque AVGO vende chips, networking y soluciones para infraestructura de AI.",
    note: "Importante para narrativa de infraestructura AI, networking y demanda enterprise.",
    source: "Manual confirmado",
    sourceUrl: "https://investors.broadcom.com/company-information/events-presentations",
    thesis: "Broadcom es una jugada de infraestructura AI distinta a NVDA. Su proximo earnings del 3 de junio puede validar demanda en networking, custom silicon y AI infrastructure.",
    strategy: {
      focus: ["AVGO", "NVDA", "QQQ"],
      buyDaysBefore: 2,
      gainRangePct: "-5% a +8%",
      riskLevel: "alto",
      play: "Con 150 USD: compra 50 USD de AVGO 1-2 dias antes. Guarda 100 USD para despues del reporte; si el mercado premia guidance de AI, compras esos 100 USD al dia siguiente.",
    },
  },
  {
    date: "2026-06-05",
    month: "2026-06",
    type: "macro",
    impact: "high",
    title: "Non-Farm Payrolls (empleo EE.UU.)",
    meta: "Dato macro",
    explain: "Es el dato mensual de empleo en EE.UU. Si sale muy fuerte o muy debil, cambia las expectativas sobre tasas de interes.",
    note: "Puede mover tasas implicitas y compresion/expansion de multiplos en tech.",
    source: "Calendario macro estimado mensual",
    thesis: "Empleo fuerte o debil cambia la expectativa de tasas. Eso afecta multiples de growth, especialmente QQQ y mega caps.",
    strategy: {
      focus: ["SPY", "QQQ", "MSFT"],
      buyDaysBefore: 1,
      gainRangePct: "-1.5% a +2%",
      riskLevel: "medio",
      play: "Con 150 USD: no compres antes del dato. Espera 30-60 min; si SPY/QQQ suben y no se devuelven, compra 100 USD y guarda 50 USD.",
    },
  },
  {
    date: "2026-06-12",
    month: "2026-06",
    type: "macro",
    impact: "high",
    title: "CPI Estados Unidos (estimado mensual)",
    meta: "Dato macro",
    explain: "CPI mide inflacion al consumidor. Si la inflacion baja, suele ayudar a acciones de crecimiento; si sube, puede presionar al mercado.",
    note: "Inflacion impacta tasas y multiplos de growth. Suele mover MSFT, GOOGL, AMZN, META y QQQ.",
    source: "Fecha estimada, validar calendario oficial",
    thesis: "CPI es uno de los datos que mas mueve acciones growth. Una inflacion mas baja suele ayudar a QQQ; una sorpresa alta puede comprimir multiplos.",
    strategy: {
      focus: ["QQQ", "MSFT", "GOOGL"],
      buyDaysBefore: 1,
      gainRangePct: "-2% a +2.5%",
      riskLevel: "alto",
      play: "Con 150 USD: si quieres anticipar, maximo 50 USD antes del CPI. Los otros 100 USD usalos despues del dato solo si QQQ confirma subida.",
    },
  },
  {
    date: "2026-06-15",
    month: "2026-06",
    type: "macro",
    impact: "medium",
    title: "PPI Estados Unidos (estimado mensual)",
    meta: "Dato macro",
    explain: "PPI mide inflacion para productores. Es menos famoso que CPI, pero ayuda a entender si los costos siguen subiendo.",
    note: "Complementa lectura de inflacion y puede cambiar expectativas de politica monetaria.",
    source: "Fecha estimada, validar calendario oficial",
    thesis: "PPI complementa CPI. No suele ser el catalizador principal, pero puede confirmar o enfriar la lectura de inflacion.",
    strategy: {
      focus: ["SPY", "QQQ"],
      buyDaysBefore: 0,
      gainRangePct: "-1% a +1.2%",
      riskLevel: "medio",
      play: "Con 150 USD: no lo uses como razon principal para comprar. Si el dato ayuda al mercado, puedes sumar 50-75 USD a SPY/QQQ.",
    },
  },
  {
    date: "2026-06-17",
    month: "2026-06",
    type: "macro",
    impact: "high",
    title: "FOMC / Decision de la Fed",
    meta: "Dato macro",
    explain: "La Fed decide tasas y comunica su postura. Aunque no cambie la tasa, el tono del comunicado puede mover mucho a SPY, QQQ y tecnológicas.",
    note: "Decision FOMC oficial. Reunion de dos dias, 16-17 de junio; statement 2:00 p.m. y conferencia 2:30 p.m. ET.",
    source: "Federal Reserve Calendar oficial",
    sourceUrl: "https://www.federalreserve.gov/newsevents/2026-june.htm",
    thesis: "La Fed mueve la tasa esperada. Para tu tipo de cartera, importa porque QQQ/MSFT/GOOGL reaccionan fuerte a cambios en recortes o tono hawkish.",
    strategy: {
      focus: ["SPY", "QQQ", "MSFT", "GOOGL"],
      buyDaysBefore: 2,
      gainRangePct: "-2.5% a +3.5%",
      riskLevel: "alto",
      play: "Con 150 USD: compra maximo 50 USD antes de la Fed. Guarda 100 USD para despues de la conferencia; si QQQ sostiene verde, compras el resto.",
    },
  },
  {
    date: "2026-06-19",
    month: "2026-06",
    type: "macro",
    impact: "medium",
    title: "Triple Witching / OPEX trimestral",
    meta: "Evento de derivados",
    explain: "Vencen varios tipos de derivados el mismo dia. Puede aumentar volumen, volatilidad y movimientos artificiales de corto plazo.",
    note: "Dia de alta actividad en derivados; posibles barridos de liquidez y falsas rupturas.",
    source: "Calendario de mercado",
    thesis: "Triple witching concentra vencimientos de derivados. Puede provocar volatilidad sin cambio real de fundamentales.",
    strategy: {
      focus: ["SPY", "QQQ"],
      buyDaysBefore: 0,
      gainRangePct: "-1% a +1%",
      riskLevel: "medio",
      play: "Con 150 USD: evita abrir posicion grande. Si quieres comprar igual, usa 50 USD y guarda 100 USD para el lunes o siguiente sesion.",
    },
  },
  {
    date: "2026-07-03",
    month: "2026-07",
    type: "macro",
    impact: "high",
    title: "Non-Farm Payrolls (empleo EE.UU.)",
    meta: "Dato macro",
    explain: "Reporte mensual de empleo. Es importante porque el mercado lo usa para estimar si la Fed tendra margen para bajar tasas.",
    note: "Clave para sensibilidad de growth y direccion de indices antes de temporada de earnings.",
    source: "Calendario macro estimado mensual",
    thesis: "Dato de empleo antes de earnings de mega caps: puede definir si el mercado llega con apetito de riesgo o en modo defensivo.",
    strategy: {
      focus: ["QQQ", "MSFT", "AMZN"],
      buyDaysBefore: 1,
      gainRangePct: "-1.5% a +2%",
      riskLevel: "medio",
      play: "Con 150 USD: espera apertura. Si QQQ sube demasiado de golpe, no persigas; compra 75 USD en pullback y guarda 75 USD.",
    },
  },
  {
    date: "2026-07-15",
    month: "2026-07",
    type: "macro",
    impact: "high",
    title: "CPI Estados Unidos (estimado mensual)",
    meta: "Dato macro",
    explain: "Dato clave de inflacion. Puede cambiar el humor del mercado entero en minutos, especialmente en acciones tech.",
    note: "Dia critico para valuation de tecnologicas y expectativas de recortes/subidas.",
    source: "Fecha estimada, validar calendario oficial",
    thesis: "CPI cerca de temporada de resultados puede amplificar movimientos: buena inflacion + buen guidance suele ser combo favorable.",
    strategy: {
      focus: ["QQQ", "GOOGL", "META"],
      buyDaysBefore: 1,
      gainRangePct: "-2% a +2.5%",
      riskLevel: "alto",
      play: "Con 150 USD: usa 50 USD antes si estas convencido. Compra 100 USD despues del CPI solo si el mercado rompe al alza con fuerza.",
    },
  },
  {
    date: "2026-07-17",
    month: "2026-07",
    type: "macro",
    impact: "medium",
    title: "OPEX mensual (vencimiento de opciones)",
    meta: "Evento de flujo",
    explain: "Vencimiento mensual de opciones. No es una noticia de empresa, pero puede alterar precios cerca del cierre.",
    note: "Posible incremento de volatilidad de fin de semana y rotaciones sectoriales.",
    source: "Calendario de mercado",
    thesis: "OPEX mensual puede afectar cierre semanal. Mejor usarlo para timing fino, no como tesis principal.",
    strategy: {
      focus: ["SPY", "QQQ"],
      buyDaysBefore: 0,
      gainRangePct: "0% a 1.5%",
      riskLevel: "medio",
      play: "Con 150 USD: si quieres sumar a SPY/QQQ, haz 50 USD ese dia y 100 USD en la siguiente sesion para evitar ruido de cierre.",
    },
  },
  {
    date: "2026-07-21",
    month: "2026-07",
    type: "watch",
    impact: "medium",
    title: "Inicio estimado de temporada fuerte de mega caps",
    meta: "Semana tactica",
    explain: "Empieza la zona donde suelen reportar grandes tecnológicas. Sus resultados pesan mucho en SPY y QQQ.",
    note: "Reducir entradas impulsivas pre-reporte y priorizar confirmacion post resultados.",
    source: "Ventana historica aproximada",
    thesis: "La temporada de mega caps concentra los reportes que mas pesan en SPY/QQQ. Aqui conviene preparar lista y no comprar todo junto.",
    strategy: {
      focus: ["MSFT", "GOOGL", "META", "AMZN"],
      buyDaysBefore: 3,
      gainRangePct: "-3% a +4%",
      riskLevel: "alto",
      play: "Con 150 USD: reparte 50 USD MSFT, 50 USD GOOGL y guarda 50 USD para el primer reporte que salga mejor de lo esperado.",
    },
  },
  {
    date: "2026-07-22",
    month: "2026-07",
    type: "watch",
    impact: "medium",
    title: "Ventana tentativa: Alphabet (GOOGL)",
    meta: "Semana de resultados (estimado)",
    explain: "Ventana probable para resultados de Alphabet. El mercado mira Search, YouTube, Google Cloud y avances de AI.",
    note: "Monitorear Cloud, margenes y guidance de AI. Puede mover todo el bloque mega cap tech.",
    source: "Ventana historica aproximada",
    thesis: "GOOGL combina Search, Cloud y AI. Si Cloud/guidance sorprenden, puede justificar expansion de multiple.",
    strategy: {
      focus: ["GOOGL", "MSFT", "QQQ"],
      buyDaysBefore: 2,
      gainRangePct: "-4% a +6%",
      riskLevel: "alto",
      play: "Con 150 USD: compra 50 USD de GOOGL antes si quieres participar. Guarda 100 USD para despues; solo compras si Cloud/guidance gusta al mercado.",
    },
  },
  {
    date: "2026-07-23",
    month: "2026-07",
    type: "watch",
    impact: "medium",
    title: "Ventana tentativa: Microsoft (MSFT)",
    meta: "Semana de resultados (estimado)",
    explain: "Ventana probable para resultados de Microsoft. El foco suele estar en Azure, AI y crecimiento de cloud.",
    note: "Revisar crecimiento de Azure y comentarios de capex AI para validar continuidad de tendencia.",
    source: "Ventana historica aproximada",
    thesis: "MSFT es de las formas mas solidas de jugar AI/cloud. El punto clave es Azure y si el gasto en AI se traduce en ingresos.",
    strategy: {
      focus: ["MSFT", "QQQ"],
      buyDaysBefore: 2,
      gainRangePct: "-3.5% a +5%",
      riskLevel: "alto",
      play: "Con 150 USD: si MSFT viene subiendo fuerte, compra solo 50 USD antes. Usa 100 USD despues si Azure/guidance salen fuertes y la accion no se vende.",
    },
  },
  {
    date: "2026-07-24",
    month: "2026-07",
    type: "watch",
    impact: "medium",
    title: "Ventana tentativa: AAPL",
    meta: "Semana de resultados (estimado)",
    explain: "Ventana probable para resultados de Apple. Importan iPhone, servicios, guidance y señales de demanda.",
    note: "Mirar guidance de iPhone/servicios y reaccion de cadena de suministro.",
    source: "Ventana historica aproximada",
    thesis: "AAPL puede balancear un poco el riesgo de chips, pero su upside depende mas de guidance de iPhone, servicios y narrativa de AI en dispositivos.",
    strategy: {
      focus: ["AAPL", "SPY", "QQQ"],
      buyDaysBefore: 2,
      gainRangePct: "-3% a +4.5%",
      riskLevel: "medio",
      play: "Con 150 USD: AAPL es mas balanceada. Puedes comprar 75 USD antes y guardar 75 USD para reaccion post earnings.",
    },
  },
  {
    date: "2026-07-29",
    month: "2026-07",
    type: "watch",
    impact: "high",
    title: "FOMC / Decision de la Fed",
    meta: "Dato macro",
    explain: "Reunion de la Fed. El mercado escucha si la Fed suena mas flexible o mas dura con tasas.",
    note: "Decision FOMC oficial. Reunion de dos dias, 28-29 de julio; suele mover tasas, QQQ y mega cap tech.",
    source: "Federal Reserve FOMC Calendar oficial",
    sourceUrl: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    thesis: "La decision de julio puede cambiar el tono de riesgo para growth. Si la Fed suena mas flexible, QQQ suele beneficiarse; si suena dura, mejor esperar.",
    strategy: {
      focus: ["SPY", "QQQ", "MSFT", "GOOGL"],
      buyDaysBefore: 2,
      gainRangePct: "-2.5% a +3.5%",
      riskLevel: "alto",
      play: "Con 150 USD: antes del FOMC usa maximo 50 USD. Despues de Powell, si QQQ mantiene tendencia positiva, compras 100 USD.",
    },
  },
  {
    date: "2026-07-29",
    month: "2026-07",
    type: "watch",
    impact: "medium",
    title: "Ventana tentativa: Meta (META) / Amazon (AMZN)",
    meta: "Semana de resultados (estimado)",
    explain: "Zona probable de resultados para Meta y Amazon. Meta mueve publicidad/AI; Amazon mueve AWS, retail y margenes.",
    note: "Publicidad, retail cloud y guidance. Alta probabilidad de movimientos bruscos post reporte.",
    source: "Ventana historica aproximada",
    thesis: "META y AMZN tienen catalysts fuertes pero diferentes: ads/AI engagement en META y AWS/retail margin en AMZN. Elegir una evita duplicar evento.",
    strategy: {
      focus: ["META", "AMZN", "QQQ"],
      buyDaysBefore: 2,
      gainRangePct: "-5% a +7%",
      riskLevel: "alto",
      play: "Con 150 USD: elige META o AMZN, no ambas. Compra 50 USD antes y guarda 100 USD para despues del reporte si la reaccion es buena.",
    },
  },
  {
    date: "2026-08-07",
    month: "2026-08",
    type: "macro",
    impact: "high",
    title: "Non-Farm Payrolls (empleo EE.UU.)",
    meta: "Dato macro",
    explain: "Dato de empleo mensual. Puede cambiar expectativas de tasas y apetito por acciones de crecimiento.",
    note: "Marca el tono de riesgo del mes para indices y tecnologicas.",
    source: "Calendario macro estimado mensual",
    thesis: "Empleo marca el tono de agosto. Si el dato reduce miedo a tasas, puede favorecer compra en indices growth.",
    strategy: {
      focus: ["SPY", "QQQ"],
      buyDaysBefore: 1,
      gainRangePct: "-1.5% a +2%",
      riskLevel: "medio",
      play: "Con 150 USD: si el dato sale mixto, no compres. Si SPY/QQQ cierran fuertes, compra 100 USD al final del dia y guarda 50 USD.",
    },
  },
  {
    date: "2026-08-12",
    month: "2026-08",
    type: "macro",
    impact: "high",
    title: "CPI Estados Unidos (estimado mensual)",
    meta: "Dato macro",
    explain: "Inflacion al consumidor. Si sorprende al alza, puede afectar QQQ; si sorprende a la baja, puede apoyar growth.",
    note: "Evento clave para decidir si mantener momentum growth o rotar a defensivos.",
    source: "Fecha estimada, validar calendario oficial",
    thesis: "CPI de agosto puede reforzar o romper el momentum de growth tras earnings. Es evento clave para decidir si mantener o tomar ganancias.",
    strategy: {
      focus: ["QQQ", "MSFT", "META"],
      buyDaysBefore: 1,
      gainRangePct: "-2% a +2.5%",
      riskLevel: "alto",
      play: "Con 150 USD: usa 50 USD antes como maximo. Compra 100 USD despues solo si CPI favorece tasas y QQQ confirma.",
    },
  },
  {
    date: "2026-08-21",
    month: "2026-08",
    type: "macro",
    impact: "medium",
    title: "OPEX mensual (vencimiento de opciones)",
    meta: "Evento de flujo",
    explain: "Vencimiento de opciones. Puede generar ruido de precio aunque no cambie la tesis de inversion.",
    note: "Puede generar movimientos artificiales de cierre en acciones muy operadas.",
    source: "Calendario de mercado",
    thesis: "OPEX puede generar ruido de cierre. Sirve para rebalanceo y toma parcial si el mercado ya corrio.",
    strategy: {
      focus: ["SPY", "QQQ"],
      buyDaysBefore: 0,
      gainRangePct: "0% a 1.2%",
      riskLevel: "medio",
      play: "Con 150 USD: no compres todo ese dia. Usa 50 USD si ves oportunidad y guarda 100 USD para evitar ruido de OPEX.",
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

const earningsStocks = [
  {
    ticker: "NVDA",
    company: "NVIDIA",
    date: "May 20, 2026",
    status: "Confirmado",
    sourceUrl: "https://www.wallstreethorizon.com/nvidia-earnings-calendar",
    explain: "Reporte de utilidades despues del cierre. El mercado mira si la demanda de AI/data center sigue acelerando.",
    watch: ["Data Center revenue", "Gross margin", "Guidance del siguiente trimestre", "Comentarios sobre Blackwell/Rubin"],
    read: "Si supera expectativas y sube guidance, suele beneficiar NVDA, AVGO, AMD, SMH y QQQ. Si el guidance decepciona, puede pesar sobre todo el trade de AI.",
  },
  {
    ticker: "AVGO",
    company: "Broadcom",
    date: "Jun 3, 2026",
    status: "Confirmado",
    sourceUrl: "https://www.nasdaq.com/press-release/broadcom-inc-announce-second-quarter-fiscal-year-2026-financial-results-wednesday",
    explain: "Reporte de utilidades despues del cierre. Broadcom es clave para infraestructura AI, networking y custom chips.",
    watch: ["AI revenue", "Networking", "VMware/software margins", "Guidance fiscal Q3"],
    read: "Si confirma crecimiento fuerte en AI infrastructure, puede reforzar la tesis de semiconductores. Si software o guidance flojean, mejor esperar.",
  },
  {
    ticker: "MSFT",
    company: "Microsoft",
    date: "Finales de jul 2026",
    status: "Ventana estimada",
    sourceUrl: "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast",
    explain: "Microsoft reporta ingresos, EPS y avance de cloud/AI. El foco principal es Azure.",
    watch: ["Azure growth", "AI run-rate", "Capex AI", "Guidance de cloud"],
    read: "Si Azure acelera y el gasto en AI se ve rentable, MSFT puede seguir siendo compra de calidad. Si capex preocupa, puede haber retroceso aunque venda bien.",
  },
  {
    ticker: "GOOGL",
    company: "Alphabet",
    date: "Finales de jul 2026",
    status: "Ventana estimada",
    sourceUrl: "https://abc.xyz/investor/",
    explain: "Alphabet reporta Search, YouTube, Cloud y monetizacion de AI/Gemini.",
    watch: ["Google Cloud", "Search revenue", "AI monetization", "Margins"],
    read: "Si Cloud y Search salen fuertes, puede justificar mas upside. Si AI presiona margenes o Search se desacelera, conviene esperar.",
  },
  {
    ticker: "META",
    company: "Meta",
    date: "Finales de jul 2026",
    status: "Ventana estimada",
    sourceUrl: "https://investor.atmeta.com/",
    explain: "Meta reporta publicidad, usuarios, costos y gasto en AI/metaverso.",
    watch: ["Ad revenue", "AI engagement", "Capex", "Reality Labs losses"],
    read: "Si ads crecen y AI ayuda a monetizar, puede ser oportunidad. Si el mercado castiga gasto en AI, mejor entrar despues de la reaccion.",
  },
  {
    ticker: "AMZN",
    company: "Amazon",
    date: "Jul 30, 2026 aprox.",
    status: "No confirmado",
    sourceUrl: "https://ir.aboutamazon.com/",
    explain: "Amazon reporta retail, AWS, publicidad y margenes. AWS suele mover mucho la accion.",
    watch: ["AWS growth", "Operating margin", "Ad revenue", "Guidance"],
    read: "Si AWS acelera y margenes mejoran, AMZN se vuelve atractiva. Si AWS decepciona, puede pesar mas que buenas ventas retail.",
  },
  {
    ticker: "AAPL",
    company: "Apple",
    date: "Finales de jul / inicios de ago 2026",
    status: "Ventana estimada",
    sourceUrl: "https://investor.apple.com/investor-relations/default.aspx",
    explain: "Apple reporta iPhone, servicios, margenes y guidance. Tambien importa cualquier avance real en AI para dispositivos.",
    watch: ["iPhone demand", "Services growth", "Gross margin", "AI/device guidance"],
    read: "Si servicios e iPhone sostienen crecimiento, es defensiva dentro de tech. Si guidance es flojo, no conviene perseguirla antes del reporte.",
  },
];

const profileRules = {
  conservative: {
    label: "Conservador",
    minBuyScore: 76,
    riskPenalty: { bajo: 0, medio: 8, alto: 18 },
  },
  balanced: {
    label: "Balanceado",
    minBuyScore: 68,
    riskPenalty: { bajo: 0, medio: 4, alto: 10 },
  },
  aggressive: {
    label: "Agresivo",
    minBuyScore: 60,
    riskPenalty: { bajo: 0, medio: 1, alto: 4 },
  },
};

const typeScore = {
  earnings: 18,
  watch: 12,
  macro: 6,
};

const monthFilter = document.getElementById("monthFilter");
const profileFilter = document.getElementById("profileFilter");
const typeFilter = document.getElementById("typeFilter");
const impactFilter = document.getElementById("impactFilter");
const buyOnlyFilter = document.getElementById("buyOnlyFilter");
const timeline = document.getElementById("timeline");
const decisionTimeline = document.getElementById("decisionTimeline");
const eventCounter = document.getElementById("eventCounter");
const highImpactCounter = document.getElementById("highImpactCounter");
const earningsCounter = document.getElementById("earningsCounter");
const buyCounter = document.getElementById("buyCounter");
const nextTitle = document.getElementById("nextTitle");
const nextMeta = document.getElementById("nextMeta");
const nextCountdown = document.getElementById("nextCountdown");
const resetFilters = document.getElementById("resetFilters");
const showBuyOnly = document.getElementById("showBuyOnly");
const tabButtons = document.querySelectorAll(".tab-button");
const viewPanels = document.querySelectorAll(".view-panel");
const eventTemplate = document.getElementById("eventTemplate");
const earningsTemplate = document.getElementById("earningsTemplate");
const earningsGrid = document.getElementById("earningsGrid");
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

function renderEarningsStocks() {
  earningsGrid.innerHTML = "";
  earningsStocks.forEach((stock) => {
    const node = earningsTemplate.content.cloneNode(true);
    node.querySelector(".ticker").textContent = stock.ticker;
    node.querySelector(".company").textContent = stock.company;
    node.querySelector(".status").textContent = stock.status;
    node.querySelector(".status").classList.add(stock.status.includes("Confirmado") ? "confirmed" : "estimated");
    node.querySelector(".earnings-date").textContent = stock.date;
    node.querySelector(".earnings-explain").textContent = stock.explain;
    node.querySelector(".earnings-read").textContent = stock.read;

    const points = node.querySelector(".watch-points");
    stock.watch.forEach((item) => {
      const pill = document.createElement("span");
      pill.textContent = item;
      points.appendChild(pill);
    });

    const source = node.querySelector(".earnings-source");
    source.href = stock.sourceUrl;
    earningsGrid.appendChild(node);
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

function parseUpside(range) {
  const matches = range.match(/[+-]?\d+(\.\d+)?/g);
  if (!matches || matches.length === 0) return 0;
  return Number(matches[matches.length - 1]);
}

function proximityScore(days) {
  if (days < 0) return 0;
  if (days <= 3) return 22;
  if (days <= 10) return 18;
  if (days <= 25) return 12;
  if (days <= 55) return 7;
  return 3;
}

function buildDecision(event) {
  const profile = profileRules[profileFilter.value] || profileRules.balanced;
  const strategy = event.strategy;
  const days = daysUntil(event.date);
  const upside = parseUpside(strategy.gainRangePct);
  const impactBonus = event.impact === "high" ? 15 : event.impact === "medium" ? 8 : 3;
  const timingBonus = days <= strategy.buyDaysBefore + 1 && days >= 0 ? 12 : 0;
  const riskPenalty = profile.riskPenalty[strategy.riskLevel] || 0;
  const base = 36 + impactBonus + typeScore[event.type] + proximityScore(days) + timingBonus + upside * 2;
  const score = Math.max(0, Math.min(100, Math.round(base - riskPenalty)));

  let action = "wait";
  if (score >= profile.minBuyScore && days >= 0) action = "buy";
  if (score < 48 || days < 0) action = "avoid";

  const reasons = [];
  if (days < 0) reasons.push("evento ya paso");
  if (timingBonus) reasons.push("ventana de entrada cerca");
  if (event.impact === "high") reasons.push("alto impacto");
  if (strategy.riskLevel === "alto") reasons.push("riesgo alto");
  if (upside >= 5) reasons.push("upside estimado fuerte");
  if (event.type === "macro") reasons.push("depende del dato macro");
  if (event.type === "earnings") reasons.push("guidance mueve precio");

  return { action, score, reasons, profile: profile.label };
}

function probabilityLabel(score) {
  if (score >= 78) return "Alta";
  if (score >= 62) return "Media";
  if (score >= 48) return "Baja-media";
  return "Baja";
}

function applyFilters(data) {
  return data.filter((event) => {
    const decision = buildDecision(event);
    const monthOk = monthFilter.value === "all" || event.month === monthFilter.value;
    const typeOk = typeFilter.value === "all" || event.type === typeFilter.value;
    const impactOk = impactFilter.value === "all" || event.impact === impactFilter.value;
    const buyOk = !buyOnlyFilter.checked || decision.action === "buy";
    return monthOk && typeOk && impactOk && buyOk;
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
  decisionTimeline.innerHTML = "";
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const filtered = applyFilters(sorted);
  const decisionItems = filtered.filter((event) => buildDecision(event).action !== "avoid");
  updateSummary(sorted);

  filtered.forEach((item) => {
    timeline.appendChild(createEventCard(item));
  });

  decisionItems.forEach((item) => {
    decisionTimeline.appendChild(createEventCard(item));
  });

  eventCounter.textContent = filtered.length;
  highImpactCounter.textContent = filtered.filter((event) => event.impact === "high").length;
  earningsCounter.textContent = filtered.filter((event) => event.type === "earnings").length;
  buyCounter.textContent = filtered.filter((event) => buildDecision(event).action === "buy").length;
}

function createEventCard(item) {
    const node = eventTemplate.content.cloneNode(true);
    const parts = dateParts(item.date);
    node.querySelector(".day").textContent = parts.day;
    node.querySelector(".month").textContent = parts.month;
    node.querySelector(".title").textContent = item.title;
    node.querySelector(".meta").textContent = item.meta;
    node.querySelector(".event-explain").textContent = item.explain || "Evento relevante para el mercado. Falta agregar explicacion especifica.";
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
    const decision = buildDecision(item);

    const risk = node.querySelector(".badge.risk");
    risk.textContent = `riesgo: ${strategy.riskLevel}`;
    risk.classList.add(strategy.riskLevel);

    const decisionChip = node.querySelector(".decision-chip");
    decisionChip.textContent = decision.action === "buy" ? "considerar compra" : decision.action === "wait" ? "esperar" : "evitar";
    decisionChip.classList.add(decision.action);

    node.querySelector(".score").textContent = `${decision.score}/100`;
    node.querySelector(".probability").textContent = probabilityLabel(decision.score);
    node.querySelector(".focus").textContent = strategy.focus.join(", ") || "N/A";
    node.querySelector(".entry").textContent = `${strategy.buyDaysBefore} dia(s) antes`;
    node.querySelector(".range").textContent = strategy.gainRangePct;
    node.querySelector(".why").textContent = item.thesis || "Catalizador pendiente de validar con fuente.";
    node.querySelector(".plan").textContent = strategy.play;

    const reasonList = node.querySelector(".reason-list");
    decision.reasons.forEach((reason) => {
      const pill = document.createElement("span");
      pill.className = "reason";
      pill.textContent = reason;
      reasonList.appendChild(pill);
    });

    const sourceLink = node.querySelector(".source-link");
    if (item.sourceUrl) {
      sourceLink.href = item.sourceUrl;
      sourceLink.hidden = false;
    } else {
      sourceLink.hidden = true;
    }
    return node;
}

profileFilter.addEventListener("change", render);
monthFilter.addEventListener("change", render);
typeFilter.addEventListener("change", render);
impactFilter.addEventListener("change", render);
buyOnlyFilter.addEventListener("change", render);
resetFilters.addEventListener("click", () => {
  profileFilter.value = "balanced";
  monthFilter.value = "all";
  typeFilter.value = "all";
  impactFilter.value = "all";
  buyOnlyFilter.checked = false;
  render();
});
showBuyOnly.addEventListener("click", () => {
  buyOnlyFilter.checked = true;
  setView("decisions");
  render();
});

function setView(view) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  viewPanels.forEach((panel) => {
    panel.hidden = panel.dataset.panel !== view;
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

fillMonthFilter();
fillWatchlist();
renderEarningsStocks();
render();
