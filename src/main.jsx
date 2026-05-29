import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bitcoin,
  Bot,
  BrainCircuit,
  ChevronDown,
  Cpu,
  ExternalLink,
  Gauge,
  Globe2,
  LineChart,
  LockKeyhole,
  Menu,
  MessageCircle,
  Network,
  PieChart,
  ShieldCheck,
  Sparkles,
  X,
  Zap
} from "lucide-react";
import "./styles.css";
import { BRAND_NAME, IA_CRIPTO_URL, POWERBITCOIN_URL, SITE_URL, TELEGRAM_URL } from "./config";

const updatedAt = "2026-05-29";
const siteUrl = SITE_URL.replace(/\/$/, "");

const routes = [
  { path: "/", label: "Inicio" },
  { path: "/manuel-beiro", label: "Sobre Manuel" },
  { path: "/portafolio", label: "Portafolio" },
  { path: "/guias", label: "Guías" },
  { path: "/#faq", label: "FAQ" },
  { path: "/telegram", label: "Telegram" }
];

const footerRoutes = [
  ["/", "Inicio"],
  ["/manuel-beiro", "Sobre Manuel"],
  ["/rentabilidad-bitcoin", "Rentabilidad Bitcoin"],
  ["/portafolio", "Portafolio"],
  ["/guias", "Guías"],
  ["/transparencia", "Transparencia"],
  ["/telegram", "Telegram"]
];

const faqItems = [
  ["¿Quién es Manuel Beiro?", "Manuel Beiro es una figura vinculada al ecosistema Bitcoin, trading algorítmico, bots, inteligencia artificial aplicada al mercado cripto y proyectos tecnológicos como IA CRIPTO y PowerBitcoin."],
  ["¿Qué es Rentabilidad Bitcoin?", "Rentabilidad Bitcoin es la marca personal y comercial de Manuel Beiro para comunicar experiencia, contenidos, metodología y portafolio alrededor de Bitcoin, trading automatizado, IA cripto, BTC/USDT y gestión de riesgo."],
  ["¿Qué experiencia tiene Manuel Beiro en Bitcoin?", "Su experiencia se vincula con proyectos cripto enfocados en Bitcoin, bots de trading, automatización, exchanges, APIs, IA aplicada al mercado y sistemas BTC/USDT."],
  ["¿Qué es trading algorítmico?", "Es el uso de reglas, sistemas, algoritmos o bots para analizar condiciones de mercado y ejecutar procesos de trading de forma automatizada o asistida."],
  ["¿Qué son los bots de trading?", "Son programas que pueden leer datos de mercado, ejecutar reglas, enviar alertas o realizar operaciones mediante APIs, según una estrategia previamente definida."],
  ["¿Qué es IA cripto?", "IA cripto se refiere al uso de inteligencia artificial para apoyar análisis, seguimiento, automatización, clasificación de información y lectura de condiciones dentro del mercado cripto."],
  ["¿Qué es BTC/USDT?", "BTC/USDT es un par de trading que expresa el precio de Bitcoin frente a USDT, una moneda estable usada como referencia de dólar en muchos exchanges."],
  ["¿Qué relación tiene Manuel Beiro con IA CRIPTO?", "IA CRIPTO forma parte del ecosistema de experiencia asociado a Manuel Beiro y BIG TRADERS, con enfoque en trading automatizado, inteligencia artificial, conexión por API y operación en mercado spot."],
  ["¿Qué es PowerBitcoin?", "PowerBitcoin es un proyecto presentado como una línea de innovación enfocada en Bitcoin, BTC/USDT, exchange descentralizado y sistemas automatizados de operación."],
  ["¿Manuel Beiro garantiza rentabilidad?", "No. Manuel Beiro | Rentabilidad Bitcoin no garantiza rentabilidad. La marca comunica experiencia, contenidos, tecnología, portafolio y orientación general. Bitcoin y el trading cripto implican volatilidad y riesgo."],
  ["¿Dónde puedo hacer preguntas?", "Puedes hacer preguntas en el grupo oficial de Telegram de Manuel Beiro | Rentabilidad Bitcoin."],
  ["¿Qué temas se tratan en Telegram?", "Bitcoin, trading algorítmico, bots, IA cripto, BTC/USDT, exchanges, APIs, gestión de riesgo, IA CRIPTO, PowerBitcoin y conceptos para principiantes."],
  ["¿Qué significa gestión de riesgo?", "Es el conjunto de criterios usados para evaluar exposición, volatilidad, tamaño de operación, posibles pérdidas, liquidez y condiciones de mercado antes de participar."],
  ["¿Qué es una API en un exchange?", "Una API es un puente técnico que permite que un sistema externo se conecte a una cuenta de exchange para leer datos o ejecutar operaciones según permisos definidos."],
  ["¿Es necesario saber de tecnología para aprender Bitcoin?", "No. Cualquier persona puede aprender conceptos básicos de Bitcoin, pero entender tecnología, seguridad y riesgo ayuda a tomar mejores decisiones."]
];

const authorityCards = [
  ["Bitcoin como especialidad central", "Una visión centrada en BTC, su tecnología, sus ciclos, su volatilidad y su papel dentro del ecosistema cripto.", Bitcoin],
  ["Bots e IA aplicada al trading", "Experiencia vinculada a automatización, APIs, asistentes, lectura de mercado y trading algorítmico.", Bot],
  ["Portafolio cripto verificable", "Experiencia conectada con IA CRIPTO, PowerBitcoin y modelos de producto para trading, exchange y comunidad.", Network],
  ["Comunidad para preguntas reales", "Canal directo para preguntar, aprender conceptos y conversar con enfoque responsable sobre Bitcoin.", MessageCircle]
];

const followBlocks = [
  ["Experiencia práctica", "Participación en proyectos vinculados a Bitcoin, bots, IA, exchanges y BTC/USDT."],
  ["Método antes que emoción", "Contenido enfocado en comprender procesos, no en perseguir impulsos de mercado."],
  ["Tecnología aplicada", "Uso de conceptos como APIs, automatización, dashboards, asistentes y sistemas algorítmicos."],
  ["Portafolio cripto", "IA CRIPTO y PowerBitcoin como casos de experiencia dentro del ecosistema cripto."],
  ["Gestión de riesgo", "La rentabilidad se comunica como resultado variable, nunca como promesa fija."],
  ["Comunidad abierta", "Telegram como espacio para preguntas, explicación de conceptos y contenidos de valor."]
];

const timeline = [
  "Interés y especialización en Bitcoin.",
  "Experiencia con trading algorítmico y bots.",
  "Vinculación con proyectos de IA cripto.",
  "Participación en ecosistemas como IA CRIPTO y BIG TRADERS.",
  "Portafolio vinculado a PowerBitcoin.",
  "Creación de Rentabilidad Bitcoin como marca personal/comercial.",
  "Apertura de comunidad en Telegram."
];

const methodology = [
  ["01", "Entender Bitcoin", "Antes de operar o invertir, el primer paso es comprender qué es Bitcoin, cómo se comporta su mercado y por qué su volatilidad exige criterio."],
  ["02", "Analizar tecnología y estrategia", "Manuel Beiro enfoca su experiencia en sistemas automatizados, bots, APIs, inteligencia artificial y herramientas que permiten estudiar el mercado con mayor disciplina."],
  ["03", "Evaluar riesgo", "Todo proyecto cripto exige evaluar riesgos técnicos, operativos, de mercado y de liquidez. La rentabilidad nunca debe entenderse como garantía."],
  ["04", "Participar en comunidad", "La comunidad de Telegram permite hacer preguntas, recibir orientación general y conocer contenidos de valor antes de tomar decisiones."]
];

const services = [
  ["Orientación Bitcoin para principiantes", "Contenido y orientación general para comprender Bitcoin, su volatilidad, sus ciclos, sus oportunidades y sus riesgos.", Bitcoin],
  ["Trading algorítmico y bots", "Explicación de conceptos relacionados con bots, trading automatizado, APIs, sistemas de operación y herramientas de análisis cripto.", Bot],
  ["IA aplicada al mercado cripto", "Análisis de cómo la inteligencia artificial puede participar en lectura de mercado, ejecución automática, optimización, seguimiento y generación de señales.", BrainCircuit],
  ["Evaluación de proyectos cripto", "Criterios para revisar tecnología, equipo, seguridad, liquidez, transparencia, riesgos y condiciones antes de participar.", ShieldCheck],
  ["Portafolio tecnológico", "Presentación de proyectos vinculados a la experiencia de Manuel Beiro, incluyendo IA CRIPTO, PowerBitcoin y desarrollos relacionados con Bitcoin.", Globe2],
  ["Comunidad y preguntas en Telegram", "Espacio directo para resolver dudas, recibir contenido de valor y conocer la visión de Manuel sobre Bitcoin y el ecosistema cripto.", MessageCircle]
];

const portfolioCases = [
  {
    title: "IA CRIPTO — Trading automatizado con inteligencia artificial",
    category: "Trading automatizado / IA cripto / API / Bitget",
    description: "IA CRIPTO es una experiencia tecnológica vinculada al trading automatizado, inteligencia artificial, conexión por API y análisis operativo del mercado cripto. Dentro de la narrativa de Manuel Beiro, este proyecto muestra experiencia en automatización, bots, dashboards, mercado spot y sistemas conectados a exchanges.",
    points: ["Automatización de operaciones.", "Bot asistente vía Telegram.", "Conexión mediante API.", "Operativa en mercado spot.", "Panel con datos, estadísticas e historial.", "Modelo tecnológico vinculado a BIG TRADERS.", "Hito operativo reportado por la plataforma.", "Enfoque de control del capital desde la cuenta del usuario."],
    href: IA_CRIPTO_URL,
    cta: "Ver IA CRIPTO",
    note: "Proyecto externo usado como referencia de portafolio y experiencia. Resultados pasados no garantizan resultados futuros.",
    icon: BrainCircuit
  },
  {
    title: "PowerBitcoin — Innovación enfocada en Bitcoin BTC/USDT",
    category: "Exchange / BTC/USDT / sistemas automatizados / no custodia",
    description: "PowerBitcoin representa una línea de innovación enfocada en Bitcoin, BTC/USDT, exchange descentralizado y sistemas automatizados de operación. Dentro del portafolio de Manuel Beiro, este proyecto funciona como muestra de experiencia en productos cripto, tecnología, trading, privacidad, no custodia y diseño de experiencias para usuarios principiantes y profesionales.",
    points: ["Enfoque exclusivo en Bitcoin.", "Par BTC/USDT.", "Sistema 3A Power System.", "LONG/SHORT.", "Take Profit, Stop Loss y Apalancamiento.", "Modelo sin custodia.", "Enfoque en privacidad.", "Proyecto en fase de pruebas visuales previo a apertura oficial."],
    href: POWERBITCOIN_URL,
    cta: "Ver PowerBitcoin",
    note: "Proyecto externo presentado como parte del portafolio tecnológico. Evaluar siempre riesgos, condiciones y contexto antes de participar.",
    icon: Bitcoin
  },
  {
    title: "Comunidad Telegram — Preguntas y contenido de valor",
    category: "Comunidad / educación / conversación directa",
    description: "Espacio donde Manuel Beiro comparte información, responde preguntas y orienta a personas interesadas en Bitcoin, trading algorítmico, IA cripto, bots, exchanges, BTC/USDT y gestión de riesgo.",
    points: ["Preguntas sobre Bitcoin.", "Contenido educativo.", "Novedades del portafolio.", "Conversación directa.", "Enfoque responsable.", "Sin formularios."],
    href: TELEGRAM_URL,
    cta: "Entrar al Telegram",
    note: "Canal principal de conversión. Acceso directo, sin campos de contacto.",
    icon: MessageCircle
  }
];

const guideData = [
  ["que-es-bitcoin", "¿Qué es Bitcoin y por qué sigue siendo el eje del mercado cripto?", "Bitcoin es un activo digital descentralizado con emisión limitada y reglas públicas. Sigue siendo el eje cripto por liquidez, infraestructura, narrativa tecnológica y referencia de mercado.", "Bitcoin", "6 min", ["Qué es Bitcoin", "Por qué sigue siendo el eje del mercado", "Riesgos básicos que debes entender"], ["Bitcoin no promete rentabilidad fija.", "Su volatilidad exige criterio.", "La custodia y la seguridad importan.", "Aprender primero reduce decisiones impulsivas."]],
  ["rentabilidad-bitcoin-gestion-riesgo", "Rentabilidad Bitcoin: oportunidad, volatilidad y gestión de riesgo", "Rentabilidad Bitcoin comunica oportunidades y tecnología, pero entiende la rentabilidad como resultado variable, nunca como garantía.", "Gestión de riesgo", "7 min", ["Rentabilidad no significa garantía", "Volatilidad y exposición", "Método antes que expectativa"], ["Define riesgo antes de buscar beneficio.", "Evita decisiones por urgencia.", "La rentabilidad depende de múltiples variables.", "Pregunta antes de participar."]],
  ["bots-trading-criptomonedas", "Cómo funcionan los bots de trading en criptomonedas", "Un bot de trading ejecuta reglas o procesos definidos mediante datos, señales y APIs. Automatiza disciplina, pero no elimina incertidumbre.", "Bots", "8 min", ["Qué es un bot de trading", "Qué puede automatizar", "Límites y supervisión"], ["Un bot ejecuta reglas.", "La API debe configurarse con prudencia.", "Automatizar no elimina el riesgo.", "El seguimiento humano sigue siendo relevante."]],
  ["api-exchange-cripto", "Qué es una API en un exchange cripto", "Una API conecta un sistema externo con una cuenta de exchange para leer datos o ejecutar operaciones según permisos definidos.", "API trading", "5 min", ["Definición sencilla", "Permisos importantes", "Seguridad operativa"], ["No todas las APIs tienen los mismos permisos.", "Evitar permisos de retiro reduce riesgo.", "Las claves API deben protegerse.", "La trazabilidad ayuda a auditar."]],
  ["trading-manual-vs-automatizado", "Trading manual vs trading automatizado", "El trading manual depende del criterio humano; el automatizado usa reglas y software. Ambos requieren método, control y gestión de riesgo.", "Trading", "6 min", ["Trading manual", "Trading automatizado", "Cuál conviene"], ["Manual no significa improvisado.", "Automatizado no significa infalible.", "La disciplina importa en ambos.", "La tecnología debe servir al método."]],
  ["ia-aplicada-trading-cripto", "IA aplicada al trading: qué puede hacer y qué no", "La IA puede apoyar análisis, clasificación, seguimiento y automatización, pero no transforma un mercado incierto en un resultado garantizado.", "IA cripto", "7 min", ["Qué puede aportar la IA", "Qué no debe prometer", "Uso responsable"], ["IA no equivale a certeza.", "Los datos importan.", "Los resultados pasados no garantizan el futuro.", "La supervisión sigue siendo necesaria."]],
  ["btc-usdt", "Qué es BTC/USDT y por qué importa en el trading Bitcoin", "BTC/USDT expresa el precio de Bitcoin frente a USDT y suele concentrar liquidez, volumen y herramientas de operación en exchanges.", "BTC/USDT", "4 min", ["Qué significa BTC/USDT", "Por qué se usa tanto", "Qué revisar antes de operar"], ["BTC es el activo base.", "USDT funciona como referencia de precio.", "La liquidez afecta la ejecución.", "El par no elimina volatilidad."]],
  ["evaluar-proyecto-cripto", "Cómo evaluar un proyecto cripto antes de participar", "Evaluar un proyecto cripto exige revisar tecnología, equipo, seguridad, liquidez, transparencia, permisos, riesgos y condiciones.", "Educación", "8 min", ["Qué problema resuelve", "Señales de seriedad", "Preguntas útiles"], ["Desconfía de promesas absolutas.", "Busca documentación y trazabilidad.", "Comprende el modelo de riesgo.", "Pregunta antes de comprometer capital."]],
  ["exchange-sin-custodia", "Qué es un exchange sin custodia", "Un exchange sin custodia busca que el usuario conserve mayor control de sus activos o permisos, aunque eso implica más responsabilidad técnica.", "Exchange", "5 min", ["Concepto base", "Ventajas y responsabilidades", "Qué evaluar"], ["Más control implica más responsabilidad.", "Privacidad no reemplaza seguridad.", "El usuario debe comprender el flujo.", "No custodia no significa riesgo cero."]],
  ["bitcoin-principiantes", "Preguntas frecuentes antes de entrar al mundo Bitcoin", "Antes de entrar a Bitcoin conviene entender volatilidad, custodia, seguridad, exchanges, riesgo y objetivos personales.", "Principiantes", "6 min", ["Aprender antes de comprar", "Bitcoin para principiantes", "Dónde resolver dudas"], ["Aprender primero es una ventaja.", "No hay rentabilidad garantizada.", "La seguridad personal importa.", "Una comunidad clara ayuda a filtrar ruido."]],
  ["manuel-beiro-rentabilidad-bitcoin", "Manuel Beiro y Rentabilidad Bitcoin: Bitcoin, IA y trading algorítmico", "Manuel Beiro | Rentabilidad Bitcoin reúne Bitcoin, bots, IA cripto, BTC/USDT, portafolio tecnológico y comunidad con enfoque responsable.", "Marca", "6 min", ["Quién es Manuel Beiro", "Qué comunica Rentabilidad Bitcoin", "Portafolio y comunidad"], ["La marca se apoya en experiencia práctica.", "El método va antes que la emoción.", "Telegram es el canal principal.", "No se prometen resultados."]],
  ["trading-algoritmico-bitcoin", "Qué es trading algorítmico en Bitcoin", "El trading algorítmico en Bitcoin usa reglas, datos y sistemas para analizar o ejecutar procesos sobre el mercado BTC, normalmente mediante APIs.", "Trading algorítmico", "7 min", ["Definición aplicada a Bitcoin", "Datos, reglas y ejecución", "Riesgos del enfoque algorítmico"], ["Algoritmo no significa certeza.", "La calidad de reglas es central.", "La volatilidad puede superar modelos.", "El riesgo debe medirse antes."]],
  ["promesas-falsas-rentabilidad-cripto", "Cómo evitar promesas falsas de rentabilidad en cripto", "Las promesas falsas suelen usar urgencia, cifras fijas, garantía de beneficio o minimización del riesgo. Un enfoque serio comunica límites y volatilidad.", "Transparencia", "7 min", ["Señales de alerta", "Preguntas antes de creer una promesa", "Comunicación responsable"], ["Desconfía de garantías absolutas.", "Revisa riesgos visibles.", "Pide contexto sobre resultados históricos.", "No confundas tecnología con seguridad total."]],
  ["portafolio-ia-cripto-powerbitcoin", "IA CRIPTO y PowerBitcoin dentro del portafolio de Manuel Beiro", "IA CRIPTO y PowerBitcoin son referencias del portafolio tecnológico asociado a Manuel Beiro en automatización, IA cripto, BTC/USDT y exchange Bitcoin.", "Portafolio", "6 min", ["IA CRIPTO", "PowerBitcoin", "Cómo evaluar el portafolio"], ["Son proyectos externos de referencia.", "Los resultados pasados no garantizan futuro.", "El contexto y los permisos importan.", "Telegram permite resolver preguntas."]]
].map(([slug, title, directAnswer, category, readTime, headings, takeaways]) => ({
  slug,
  title,
  directAnswer,
  category,
  readTime,
  updatedAt,
  author: BRAND_NAME,
  description: directAnswer.slice(0, 156),
  headings,
  takeaways
}));

const pages = {
  "/": {
    title: "Manuel Beiro | Rentabilidad Bitcoin, Trading Algorítmico e IA Cripto",
    description: "Conoce a Manuel Beiro: Bitcoin, trading algorítmico, bots, IA cripto, BTC/USDT, PowerBitcoin, IA CRIPTO y comunidad en Telegram."
  },
  "/manuel-beiro": {
    title: "Manuel Beiro | Biografía, Bitcoin, Trading Algorítmico e IA Cripto",
    description: "Biografía y visión de Manuel Beiro en Bitcoin, bots, IA cripto, BTC/USDT, PowerBitcoin, IA CRIPTO y gestión de riesgo."
  },
  "/rentabilidad-bitcoin": {
    title: "Qué es Rentabilidad Bitcoin | Método, Datos, Tecnología y Riesgo",
    description: "Rentabilidad Bitcoin es la marca de Manuel Beiro para comunicar Bitcoin, trading automatizado, IA cripto, BTC/USDT y gestión de riesgo."
  },
  "/trading-algoritmico-bitcoin": {
    title: "Trading Algorítmico Bitcoin | Bots, APIs, BTC/USDT y Riesgo",
    description: "Guía sobre trading algorítmico aplicado a Bitcoin: bots, APIs, automatización, BTC/USDT, límites y gestión de riesgo."
  },
  "/bots-trading-bitcoin": {
    title: "Bots de Trading Bitcoin | Automatización, APIs y Límites",
    description: "Qué son los bots de trading Bitcoin, cómo funcionan con APIs y qué riesgos técnicos u operativos conviene evaluar."
  },
  "/ia-cripto": {
    title: "IA CRIPTO | Portafolio de Manuel Beiro y Trading Automatizado",
    description: "IA CRIPTO dentro del portafolio de Manuel Beiro: trading automatizado, inteligencia artificial, API, Bitget y mercado spot."
  },
  "/powerbitcoin": {
    title: "PowerBitcoin | Bitcoin BTC/USDT, Exchange y Sistemas Automatizados",
    description: "PowerBitcoin como línea de innovación enfocada en Bitcoin, BTC/USDT, exchange descentralizado, no custodia y sistemas automatizados."
  },
  "/portafolio": {
    title: "Portafolio Cripto | IA CRIPTO, PowerBitcoin y Telegram",
    description: "Portafolio cripto de Manuel Beiro: IA CRIPTO, PowerBitcoin, comunidad Telegram, trading algorítmico, bots y Bitcoin."
  },
  "/servicios": {
    title: "Servicios | Bitcoin, Bots, IA Cripto y Gestión de Riesgo",
    description: "Líneas de experiencia de Manuel Beiro en Bitcoin para principiantes, bots, IA cripto, proyectos cripto y comunidad Telegram."
  },
  "/telegram": {
    title: "Telegram Oficial | Manuel Beiro | Rentabilidad Bitcoin",
    description: "Únete al grupo de Telegram de Manuel Beiro para preguntas sobre Bitcoin, bots, IA cripto, BTC/USDT, PowerBitcoin e IA CRIPTO."
  },
  "/transparencia": {
    title: "Transparencia y Responsabilidad | Manuel Beiro | Rentabilidad Bitcoin",
    description: "Riesgos, límites, resultados históricos, responsabilidad y contexto Ecuador para Bitcoin, cripto, bots, IA y trading."
  },
  "/guias": {
    title: "Guías Bitcoin | Trading Algorítmico, Bots, IA Cripto y Riesgo",
    description: "Centro de conocimiento sobre Bitcoin, trading algorítmico, bots, APIs, IA cripto, BTC/USDT y gestión de riesgo."
  }
};

function App() {
  const [path, setPath] = useState(normalizePath(window.location.pathname));
  const guide = guideData.find((item) => `/guias/${item.slug}` === path);
  const meta = guide ? guideMeta(guide) : pages[path] || pages["/"];
  const schemas = useMemo(() => buildSchemas(path, guide), [path, guide]);

  useEffect(() => {
    const onPop = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    applyMeta(path, meta);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path, meta]);

  useEffect(() => {
    const onScroll = () => {
      if (window.__scroll75) return;
      const depth = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (depth >= 0.75) {
        window.__scroll75 = true;
        trackEvent("scroll_75");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (href) => {
    if (href.startsWith("http") || href.includes("#")) return;
    window.history.pushState({}, "", href);
    setPath(normalizePath(href));
  };

  return (
    <>
      <JsonLd schemas={schemas} />
      <Header path={path} navigate={navigate} />
      <main>
        {guide ? <GuidePage guide={guide} navigate={navigate} /> : renderPage(path, navigate)}
      </main>
      <Footer navigate={navigate} />
      <FloatingTelegramButton />
    </>
  );
}

function renderPage(path, navigate) {
  switch (path) {
    case "/manuel-beiro":
      return <ManuelPage navigate={navigate} />;
    case "/rentabilidad-bitcoin":
      return <RentabilidadPage navigate={navigate} />;
    case "/trading-algoritmico-bitcoin":
      return <TopicPage type="trading" navigate={navigate} />;
    case "/bots-trading-bitcoin":
      return <TopicPage type="bots" navigate={navigate} />;
    case "/ia-cripto":
      return <ProjectPage project="ia" navigate={navigate} />;
    case "/powerbitcoin":
      return <ProjectPage project="power" navigate={navigate} />;
    case "/portafolio":
      return <PortfolioPage navigate={navigate} />;
    case "/servicios":
      return <ServicesPage navigate={navigate} />;
    case "/telegram":
      return <TelegramPage navigate={navigate} />;
    case "/transparencia":
      return <TransparencyPage navigate={navigate} />;
    case "/guias":
      return <GuidesIndex navigate={navigate} />;
    default:
      return <HomePage navigate={navigate} />;
  }
}

function Header({ path, navigate }) {
  const [open, setOpen] = useState(false);
  const go = (event, href) => {
    if (!href.startsWith("http") && !href.includes("#")) {
      event.preventDefault();
      setOpen(false);
      navigate(href);
    }
  };
  return (
    <header className="site-header">
      <a className="brand" href="/" onClick={(event) => go(event, "/")} aria-label="Ir al inicio">
        <span>Manuel Beiro</span>
        <small>Rentabilidad Bitcoin</small>
      </a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {routes.map(({ path: href, label }) => (
          <a key={label} href={href} onClick={(event) => go(event, href)} aria-current={path === href ? "page" : undefined}>{label}</a>
        ))}
      </nav>
      <div className="header-actions">
        <TrackedLink eventName="click_telegram_header" className="header-cta" href={TELEGRAM_URL} aria-label="Entrar al grupo de Telegram">
          <MessageCircle size={18} aria-hidden="true" /> Telegram
        </TrackedLink>
        <button className="menu-button" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      <nav className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Navegación móvil">
        {routes.map(({ path: href, label }) => (
          <a key={label} href={href} onClick={(event) => go(event, href)}>{label}</a>
        ))}
      </nav>
    </header>
  );
}

function HomePage({ navigate }) {
  return (
    <>
      <Hero navigate={navigate} />
      <AuthorityCards />
      <WhyFollow />
      <AboutSection navigate={navigate} />
      <RentabilidadSection navigate={navigate} />
      <MethodSection />
      <MilestoneSection />
      <PortfolioSection />
      <ServicesSection />
      <TelegramSection />
      <GuidesPreview navigate={navigate} />
      <FAQSection />
      <TransparencyPreview navigate={navigate} />
      <FinalCTA />
    </>
  );
}

function Hero({ navigate }) {
  return (
    <section id="inicio" className="hero section">
      <div className="hero-copy reveal">
        <p className="eyebrow"><Sparkles size={16} aria-hidden="true" /> Bitcoin con método, datos y tecnología</p>
        <h1>Manuel Beiro | Rentabilidad Bitcoin</h1>
        <p className="hero-subtitle">Bitcoin, trading algorítmico e inteligencia artificial aplicada al mercado cripto.</p>
        <p className="hero-text">
          Manuel Beiro reúne experiencia práctica en proyectos vinculados a Bitcoin, bots de trading, automatización, exchanges, inteligencia artificial aplicada al mercado y estrategias BTC/USDT. Su enfoque combina método, datos, tecnología y gestión de riesgo para ayudar a las personas a entender mejor el ecosistema Bitcoin antes de tomar decisiones.
        </p>
        <div className="direct-answer">
          <strong>¿Quién es Manuel Beiro?</strong>
          <p>Manuel Beiro es una figura vinculada al ecosistema Bitcoin, trading algorítmico, bots, inteligencia artificial aplicada al mercado cripto y proyectos tecnológicos como IA CRIPTO y PowerBitcoin.</p>
        </div>
        <div className="cta-row">
          <ButtonLink href={TELEGRAM_URL} label="Entrar al grupo de Telegram" icon={MessageCircle} primary eventName="click_telegram_hero" />
          <ButtonLink href="/portafolio" label="Ver portafolio cripto" icon={BarChart3} onNavigate={navigate} eventName="click_portafolio" />
        </div>
        <p className="microcopy">Sin formularios. Entra directamente al grupo oficial para hacer preguntas y recibir contenido de valor.</p>
      </div>
      <HeroVisual />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual reveal" role="img" aria-label="Dashboard abstracto de Bitcoin y trading algorítmico con IA cripto">
      <div className="network-grid" />
      <div className="bitcoin-orbit"><Bitcoin size={78} aria-hidden="true" /></div>
      <div className="chart-panel">
        <div className="panel-top"><span>BTC/USDT</span><strong>método + datos</strong></div>
        <div className="bars" aria-hidden="true">{[34, 52, 42, 70, 58, 86, 76].map((height) => <i key={height} style={{ height: `${height}%` }} />)}</div>
        <svg className="line-chart" viewBox="0 0 420 140" aria-hidden="true"><path d="M10 108 C55 70 82 86 123 62 C168 35 194 54 230 42 C286 23 309 68 354 38 C382 20 399 24 413 18" /></svg>
      </div>
      <div className="floating-tags"><span>Bitcoin</span><span>IA cripto</span><span>Bots</span><span>BTC/USDT</span><span>Gestión de riesgo</span></div>
    </div>
  );
}

function AuthorityCards() {
  return (
    <section className="authority-grid section-narrow" aria-label="Tarjetas de autoridad">
      {authorityCards.map(([title, text, Icon]) => <InfoCard key={title} title={title} text={text} Icon={Icon} heading="h2" />)}
    </section>
  );
}

function WhyFollow() {
  return (
    <section className="section">
      <div className="section-heading reveal">
        <p className="eyebrow"><BadgeCheck size={16} aria-hidden="true" /> Autoridad práctica</p>
        <h2>¿Por qué seguir a Manuel Beiro?</h2>
        <p>Manuel Beiro no comunica Bitcoin desde la teoría vacía. Su marca se apoya en experiencia práctica, proyectos reales, tecnología aplicada, automatización, trading algorítmico y una visión responsable del riesgo.</p>
      </div>
      <div className="services-grid compact">
        {followBlocks.map(([title, text]) => <article className="info-card reveal" key={title}><h3>{title}</h3><p>{text}</p></article>)}
      </div>
      <div className="centered"><ButtonLink href={TELEGRAM_URL} label="Entrar al grupo de Telegram" icon={MessageCircle} primary eventName="click_telegram_hero" /></div>
    </section>
  );
}

function AboutSection({ navigate }) {
  return (
    <section id="sobre-manuel" className="section split">
      <div className="section-copy reveal">
        <p className="eyebrow"><BadgeCheck size={16} aria-hidden="true" /> Sobre Manuel Beiro</p>
        <h2>Experiencia práctica en Bitcoin, trading algorítmico e innovación cripto</h2>
        <p>Manuel Beiro se posiciona como una figura especializada en el ecosistema Bitcoin, con experiencia vinculada a proyectos de trading automatizado, inteligencia artificial aplicada al mercado cripto, bots de operación, sistemas BTC/USDT y modelos de exchange. Su marca, Rentabilidad Bitcoin, nace para compartir una visión clara, tecnológica y responsable sobre las oportunidades y riesgos del mundo cripto.</p>
        <blockquote>“Bitcoin no se entiende desde la emoción. Se entiende desde el método, los datos y la gestión del riesgo.”</blockquote>
        <div className="cta-row">
          <ButtonLink href={TELEGRAM_URL} label="Preguntar a Manuel en Telegram" icon={MessageCircle} primary eventName="click_telegram_hero" />
          <ButtonLink href="/manuel-beiro" label="Leer biografía" icon={ArrowRight} onNavigate={navigate} />
        </div>
      </div>
      <Timeline />
    </section>
  );
}

function Timeline() {
  return <div className="feature-list reveal">{timeline.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</div>;
}

function RentabilidadSection({ navigate }) {
  return (
    <section id="rentabilidad-bitcoin" className="section muted-band">
      <div className="centered reveal">
        <p className="eyebrow"><Gauge size={16} aria-hidden="true" /> Definición directa</p>
        <h2>¿Qué es Rentabilidad Bitcoin?</h2>
        <p>Rentabilidad Bitcoin es la marca personal y comercial de Manuel Beiro para comunicar experiencia, contenidos y portafolio alrededor de Bitcoin, trading algorítmico, bots, inteligencia artificial aplicada al mercado cripto, BTC/USDT y gestión de riesgo.</p>
        <p>Rentabilidad Bitcoin no debe entenderse como una promesa de ganancias. Debe entenderse como una marca enfocada en explicar oportunidades, tecnología, automatización, análisis y criterios de riesgo dentro del ecosistema Bitcoin.</p>
      </div>
      <div className="pill-grid reveal">{["Bitcoin como activo digital", "Rentabilidad como resultado variable", "Trading automatizado como herramienta", "IA cripto como apoyo tecnológico", "Gestión de riesgo como método", "Comunidad y aprendizaje continuo"].map((item) => <span key={item}>{item}</span>)}</div>
      <div className="centered"><ButtonLink href="/rentabilidad-bitcoin" label="Profundizar en Rentabilidad Bitcoin" icon={ArrowRight} onNavigate={navigate} /></div>
    </section>
  );
}

function MethodSection() {
  return (
    <section id="metodologia" className="section">
      <div className="section-heading reveal"><p className="eyebrow"><Cpu size={16} aria-hidden="true" /> Metodología</p><h2>Método, tecnología y gestión de riesgo</h2></div>
      <div className="timeline-grid">{methodology.map(([step, title, text]) => <article className="timeline-item reveal" key={title}><span>{step}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className="centered"><ButtonLink href={TELEGRAM_URL} label="Unirme a la comunidad de Telegram" icon={MessageCircle} primary eventName="click_telegram_hero" /></div>
    </section>
  );
}

function MilestoneSection() {
  return (
    <section className="section milestone-section">
      <div className="milestone-card reveal">
        <div>
          <p className="eyebrow"><LineChart size={16} aria-hidden="true" /> Hito operativo reportado</p>
          <h2>Hito operativo reportado</h2>
          <p>Dentro del ecosistema de experiencia vinculado a IA CRIPTO y BIG TRADERS, se reporta un hito operativo de más de 1.800 operaciones positivas consecutivas. Este antecedente forma parte del portafolio narrativo de Manuel Beiro y debe entenderse como resultado histórico reportado por la plataforma, no como garantía de resultados futuros.</p>
          <p className="responsible-note">Los resultados históricos no garantizan resultados futuros. Bitcoin, las criptomonedas y el trading implican riesgo.</p>
        </div>
        <div className="counter" aria-label="1.805 operaciones positivas reportadas"><strong>1.805</strong><span>operaciones positivas reportadas</span></div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portafolio" className="section portfolio-band">
      <div className="section-heading reveal"><p className="eyebrow"><PieChart size={16} aria-hidden="true" /> Portafolio</p><h2>Portafolio cripto y experiencia aplicada</h2></div>
      <div className="portfolio-grid">{portfolioCases.map((item) => <ProjectCard key={item.title} {...item} />)}</div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="servicios" className="section">
      <div className="section-heading reveal"><p className="eyebrow"><Zap size={16} aria-hidden="true" /> Servicios</p><h2>Servicios y líneas de experiencia</h2><p>Presentados como líneas de orientación, contenido, portafolio y experiencia. No son una promesa de inversión.</p></div>
      <div className="services-grid">{services.map(([title, text, Icon]) => <InfoCard key={title} title={title} text={text} Icon={Icon} />)}</div>
      <div className="centered"><ButtonLink href={TELEGRAM_URL} label="Entrar al grupo de Telegram" icon={MessageCircle} primary eventName="click_telegram_hero" /></div>
    </section>
  );
}

function TelegramSection() {
  return (
    <section id="telegram" className="section telegram-section">
      <div className="telegram-panel reveal">
        <div>
          <p className="eyebrow"><MessageCircle size={16} aria-hidden="true" /> Comunidad Telegram</p>
          <h2>Únete al grupo de Telegram de Manuel Beiro</h2>
          <p>El grupo de Telegram es el canal principal de Manuel Beiro | Rentabilidad Bitcoin. Allí puedes hacer preguntas, recibir contenido de valor, conocer novedades de sus proyectos y entender mejor temas como Bitcoin, trading algorítmico, bots, IA cripto, exchanges, BTC/USDT y gestión de riesgo.</p>
        </div>
        <Benefits />
        <ButtonLink href={TELEGRAM_URL} label="Entrar ahora al Telegram" icon={MessageCircle} primary large eventName="click_telegram_hero" />
        <p className="microcopy">Sin formularios. Sin correos. Acceso directo al canal oficial.</p>
      </div>
    </section>
  );
}

function Benefits() {
  return <div className="benefit-grid">{["Preguntas directas", "Explicaciones simples", "Contenido educativo", "Novedades de IA CRIPTO y PowerBitcoin", "Conversación sobre Bitcoin", "Conceptos de trading algorítmico", "Comunidad interesada en cripto", "Enfoque responsable, sin promesas de rentabilidad"].map((item) => <span key={item}><ShieldCheck size={16} aria-hidden="true" /> {item}</span>)}</div>;
}

function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section">
      <div className="section-heading reveal"><p className="eyebrow"><MessageCircle size={16} aria-hidden="true" /> Respuestas directas</p><h2>Preguntas frecuentes sobre Manuel Beiro y Rentabilidad Bitcoin</h2></div>
      <div className="faq-list reveal">
        {faqItems.map(([question, answer], index) => (
          <article className="faq-item" key={question}>
            <button type="button" aria-expanded={open === index} aria-controls={`faq-${index}`} onClick={() => { setOpen(open === index ? -1 : index); trackEvent("faq_open", { question }); }}>
              <span>{question}</span><ChevronDown size={20} aria-hidden="true" />
            </button>
            <div id={`faq-${index}`} className="faq-answer" hidden={open !== index}><p>{answer}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function GuidesPreview({ navigate }) {
  return (
    <section id="guias" className="section muted-band">
      <div className="section-heading reveal"><p className="eyebrow"><Activity size={16} aria-hidden="true" /> Centro de conocimiento</p><h2>Guías sobre Bitcoin, bots, IA y gestión de riesgo</h2><p>La home muestra solo previews. Cada guía tiene su página individual, respuesta directa, ideas clave, enlaces internos y aviso de riesgo cuando aplica.</p></div>
      <GuideGrid guides={guideData.slice(0, 6)} navigate={navigate} />
      <div className="centered"><ButtonLink href="/guias" label="Ver todas las guías" icon={ArrowRight} onNavigate={navigate} eventName="read_guide" /></div>
    </section>
  );
}

function TransparencyPreview({ navigate }) {
  return (
    <section className="section split">
      <div className="section-copy reveal">
        <p className="eyebrow"><LockKeyhole size={16} aria-hidden="true" /> Transparencia</p>
        <h2>Bitcoin con responsabilidad, no con promesas</h2>
        <p>Bitcoin, las criptomonedas y el trading implican volatilidad y riesgo. Ningún contenido debe interpretarse como garantía de rentabilidad ni como promesa de resultados futuros.</p>
        <ButtonLink href="/transparencia" label="Leer transparencia" icon={ArrowRight} onNavigate={navigate} eventName="click_transparencia" />
      </div>
      <RiskList compact />
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta section-narrow reveal">
      <p className="eyebrow"><Sparkles size={16} aria-hidden="true" /> Antes de decidir, entiende el sistema</p>
      <h2>Pregunta, aprende y conoce la visión de Manuel Beiro en Telegram.</h2>
      <p>Rentabilidad Bitcoin no empieza prometiendo resultados: empieza explicando el método.</p>
      <ButtonLink href={TELEGRAM_URL} label="Entrar al grupo de Telegram" icon={MessageCircle} primary large eventName="click_telegram_footer" />
    </section>
  );
}

function ManuelPage({ navigate }) {
  return (
    <InnerPage eyebrow="Manuel Beiro" title="Experiencia práctica en Bitcoin, trading algorítmico e innovación cripto" subtitle="Biografía, visión, autoridad y trayectoria de Manuel Beiro dentro de Bitcoin, IA cripto, bots, BTC/USDT y portafolio tecnológico.">
      <DirectAnswer question="¿Quién es Manuel Beiro?" answer={faqItems[0][1]} />
      <AboutSection navigate={navigate} />
      <WhyFollow />
      <RelatedLinks navigate={navigate} links={[["/rentabilidad-bitcoin", "Rentabilidad Bitcoin"], ["/portafolio", "Portafolio cripto"], ["/telegram", "Telegram"]]} />
    </InnerPage>
  );
}

function RentabilidadPage({ navigate }) {
  return (
    <InnerPage eyebrow="Rentabilidad Bitcoin" title="Bitcoin con método, datos, tecnología y gestión de riesgo" subtitle="Rentabilidad Bitcoin no empieza prometiendo resultados: empieza explicando el método.">
      <DirectAnswer question="¿Qué es Rentabilidad Bitcoin?" answer={faqItems[1][1]} />
      <RentabilidadSection navigate={navigate} />
      <MethodSection />
      <RelatedLinks navigate={navigate} links={[["/trading-algoritmico-bitcoin", "Trading algorítmico Bitcoin"], ["/bots-trading-bitcoin", "Bots de trading Bitcoin"], ["/transparencia", "Transparencia"]]} />
    </InnerPage>
  );
}

function TopicPage({ type, navigate }) {
  const isBots = type === "bots";
  return (
    <InnerPage eyebrow={isBots ? "Bots Bitcoin" : "Trading algorítmico Bitcoin"} title={isBots ? "Bots de trading, APIs, automatización y límites" : "Trading algorítmico aplicado a Bitcoin"} subtitle={isBots ? "Los bots pueden automatizar reglas y ejecución, pero no eliminan volatilidad, fallos técnicos ni riesgo de mercado." : "Una visión responsable de sistemas, datos, reglas, APIs, BTC/USDT y gestión de riesgo."}>
      <DirectAnswer question={isBots ? "¿Qué son los bots de trading Bitcoin?" : "¿Qué es trading algorítmico en Bitcoin?"} answer={isBots ? faqItems[4][1] : "El trading algorítmico en Bitcoin es el uso de reglas, datos, algoritmos o bots para analizar condiciones del mercado BTC y ejecutar procesos de forma automatizada o asistida."} />
      <ServicesSection />
      <GuidesPreview navigate={navigate} />
    </InnerPage>
  );
}

function ProjectPage({ project, navigate }) {
  const selected = project === "ia" ? portfolioCases[0] : portfolioCases[1];
  const question = project === "ia" ? "¿Qué relación tiene Manuel Beiro con IA CRIPTO?" : "¿Qué es PowerBitcoin dentro del portafolio de Manuel Beiro?";
  const answer = project === "ia" ? faqItems[7][1] : "PowerBitcoin es presentado como una línea de innovación enfocada en Bitcoin, BTC/USDT, exchange descentralizado y sistemas automatizados de operación.";
  return (
    <InnerPage eyebrow={project === "ia" ? "IA CRIPTO" : "PowerBitcoin"} title={selected.title} subtitle={selected.description}>
      <DirectAnswer question={question} answer={answer} />
      <div className="portfolio-grid single"><ProjectCard {...selected} /></div>
      {project === "ia" ? <MilestoneSection /> : null}
      <RelatedLinks navigate={navigate} links={[["/portafolio", "Portafolio"], ["/transparencia", "Transparencia"], ["/telegram", "Telegram"]]} />
    </InnerPage>
  );
}

function PortfolioPage({ navigate }) {
  return (
    <InnerPage eyebrow="Portafolio cripto" title="IA CRIPTO, PowerBitcoin y comunidad Telegram" subtitle="Resumen de proyectos, referencias tecnológicas y experiencia aplicada en Bitcoin, IA cripto, bots, exchange y BTC/USDT.">
      <PortfolioSection />
      <MilestoneSection />
      <RelatedLinks navigate={navigate} links={[["/ia-cripto", "IA CRIPTO"], ["/powerbitcoin", "PowerBitcoin"], ["/guias/portafolio-ia-cripto-powerbitcoin", "Guía del portafolio"]]} />
    </InnerPage>
  );
}

function ServicesPage({ navigate }) {
  return (
    <InnerPage eyebrow="Servicios" title="Servicios y líneas de experiencia" subtitle="Orientación, contenido, portafolio y experiencia. No se presentan como promesa de inversión ni asesoría financiera personalizada.">
      <ServicesSection />
      <RelatedLinks navigate={navigate} links={[["/telegram", "Telegram"], ["/guias", "Guías"], ["/transparencia", "Transparencia"]]} />
    </InnerPage>
  );
}

function TelegramPage({ navigate }) {
  return (
    <InnerPage eyebrow="Telegram" title="Únete al grupo de Telegram de Manuel Beiro" subtitle="El canal principal para preguntas, contenido de valor y novedades de IA CRIPTO, PowerBitcoin, Bitcoin, bots, IA cripto y BTC/USDT.">
      <TelegramSection />
      <GuidesPreview navigate={navigate} />
    </InnerPage>
  );
}

function TransparencyPage({ navigate }) {
  return (
    <InnerPage eyebrow="Transparencia" title="Transparencia y responsabilidad" subtitle="Bitcoin, las criptomonedas y el trading implican volatilidad y riesgo. La información presentada tiene fines informativos, educativos y de presentación de experiencia.">
      <DirectAnswer question="¿Manuel Beiro garantiza rentabilidad?" answer={faqItems[9][1]} />
      <div className="risk-page-grid">
        {[
          ["Resultados históricos", "Todo resultado histórico debe entenderse como antecedente operativo, no como garantía futura."],
          ["Riesgo de mercado", "Bitcoin puede subir o bajar con fuerza en periodos cortos. La volatilidad puede generar oportunidades, pero también pérdidas."],
          ["Riesgo tecnológico", "Bots, APIs, exchanges, plataformas y sistemas automatizados pueden presentar fallos, latencia, errores de configuración o eventos inesperados."],
          ["Riesgo del usuario", "Decisiones apresuradas, mala custodia, exceso de capital expuesto, desconocimiento o presión emocional pueden aumentar pérdidas."],
          ["Resultados no garantizados", "Ningún bot, trader, sistema automatizado, exchange, IA o proyecto cripto puede garantizar resultados futuros."],
          ["Contexto Ecuador", "En Ecuador, los criptoactivos no son moneda de curso legal ni medio de pago electrónico autorizado a nivel nacional. Esta web presenta información educativa, tecnológica y de portafolio, no promueve el uso de Bitcoin como moneda oficial ni como medio de pago autorizado."],
          ["Telegram como canal de preguntas", "El grupo de Telegram existe para conversar, orientar y responder preguntas generales antes de tomar decisiones."]
        ].map(([title, text]) => <article className="info-card reveal" key={title}><h2>{title}</h2><p>{text}</p></article>)}
      </div>
      <div className="centered"><ButtonLink href={TELEGRAM_URL} label="Resolver dudas en Telegram" icon={MessageCircle} primary eventName="click_telegram_footer" /></div>
      <RelatedLinks navigate={navigate} links={[["/guias/promesas-falsas-rentabilidad-cripto", "Evitar promesas falsas"], ["/portafolio", "Portafolio"], ["/telegram", "Telegram"]]} />
    </InnerPage>
  );
}

function GuidesIndex({ navigate }) {
  return (
    <InnerPage eyebrow="Centro de conocimiento" title="Guías Bitcoin, bots, IA cripto y gestión de riesgo" subtitle="Artículos educativos con respuesta directa, ideas clave, enlaces internos y CTA a Telegram.">
      <GuideGrid guides={guideData} navigate={navigate} />
    </InnerPage>
  );
}

function GuidePage({ guide, navigate }) {
  const sections = guide.headings.map((heading, index) => ({
    id: `s-${index + 1}`,
    heading,
    body: buildGuideParagraph(guide, index)
  }));
  return (
    <article className="section article-page">
      <p className="eyebrow"><Activity size={16} aria-hidden="true" /> {guide.category}</p>
      <h1>{guide.title}</h1>
      <div className="article-meta"><span>Actualizado: {guide.updatedAt}</span><span>Autor: {guide.author}</span><span>{guide.readTime} de lectura</span></div>
      <p className="hero-text">{guide.description}</p>
      <DirectAnswer question={guide.title} answer={guide.directAnswer} />
      <nav className="toc" aria-label="Tabla de contenidos">
        <strong>Tabla de contenidos</strong>
        {sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.heading}</a>)}
      </nav>
      {sections.map((section) => (
        <section id={section.id} className="article-section" key={section.id}>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </section>
      ))}
      <div className="article-takeaways">
        <strong>Ideas clave</strong>
        <ul>{guide.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <p className="responsible-note">Aviso de riesgo: este contenido es informativo. Bitcoin, las criptomonedas y el trading implican volatilidad y riesgo. Los resultados históricos no garantizan resultados futuros.</p>
      <div className="article-footer">
        <p>¿Quieres conversar esta guía con más contexto? Manuel responde preguntas generales en Telegram.</p>
        <ButtonLink href={TELEGRAM_URL} label="Preguntar en Telegram" icon={MessageCircle} primary eventName="click_telegram_footer" />
      </div>
      <RelatedLinks navigate={navigate} links={[["/guias", "Todas las guías"], ["/transparencia", "Transparencia"], ["/portafolio", "Portafolio"]]} />
    </article>
  );
}

function GuideGrid({ guides, navigate }) {
  return (
    <div className="blog-grid">
      {guides.map((guide) => (
        <article className="blog-card reveal" key={guide.slug}>
          <div className="blog-meta"><span>{guide.category}</span><span>{guide.readTime}</span></div>
          <h2>{guide.title}</h2>
          <p>{guide.directAnswer}</p>
          <ButtonLink href={`/guias/${guide.slug}`} label="Leer guía" icon={ArrowRight} onNavigate={navigate} eventName="read_guide" />
        </article>
      ))}
    </div>
  );
}

function InnerPage({ eyebrow, title, subtitle, children }) {
  return (
    <>
      <section className="inner-hero section-narrow">
        <p className="eyebrow"><Sparkles size={16} aria-hidden="true" /> {eyebrow}</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </section>
      {children}
      <FinalCTA />
    </>
  );
}

function DirectAnswer({ question, answer }) {
  return <div className="direct-answer reveal"><strong>{question}</strong><p>{answer}</p></div>;
}

function RelatedLinks({ links, navigate }) {
  return (
    <section className="section-narrow related-links">
      <h2>Enlaces relacionados</h2>
      <div className="pill-grid">{links.map(([href, label]) => <ButtonLink key={href} href={href} label={label} icon={ArrowRight} onNavigate={navigate} />)}</div>
    </section>
  );
}

function RiskList() {
  return <div className="risk-list reveal">{["Los resultados pasados no garantizan resultados futuros.", "Toda operación cripto implica riesgo.", "La rentabilidad depende de mercado, estrategia, capital, liquidez, tiempo y gestión de riesgo.", "Antes de participar en cualquier proyecto cripto, cada persona debe informarse y resolver sus dudas.", "El grupo de Telegram existe para conversar, orientar y responder preguntas generales."].map((item) => <p key={item}><ShieldCheck size={18} aria-hidden="true" /> {item}</p>)}</div>;
}

function InfoCard({ title, text, Icon, heading = "h3" }) {
  const Heading = heading;
  return <article className="info-card reveal">{Icon ? <Icon size={26} aria-hidden="true" /> : null}<Heading>{title}</Heading><p>{text}</p></article>;
}

function ProjectCard({ title, category, description, points, href, cta, note, icon: Icon }) {
  return (
    <article className="project-card reveal">
      <div className="project-icon"><Icon size={30} aria-hidden="true" /></div>
      <p className="project-category">{category}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>{points.map((item) => <li key={item}>{item}</li>)}</ul>
      <p className="responsible-note">{note}</p>
      <ButtonLink href={href} label={cta} icon={ExternalLink} primary eventName={href === IA_CRIPTO_URL ? "click_iacripto" : href === POWERBITCOIN_URL ? "click_powerbitcoin" : "click_telegram_footer"} />
    </article>
  );
}

function ButtonLink({ href, label, icon: Icon, primary = false, large = false, onNavigate, eventName }) {
  const local = href.startsWith("/");
  const onClick = (event) => {
    if (eventName) trackEvent(eventName, { href, label });
    if (local && onNavigate) {
      event.preventDefault();
      onNavigate(href);
    }
  };
  return (
    <a className={`button-link ${primary ? "primary" : ""} ${large ? "large" : ""}`} href={href} onClick={onClick} target={!local && href.startsWith("http") ? "_blank" : undefined} rel={!local && href.startsWith("http") ? "noreferrer" : undefined}>
      <Icon size={18} aria-hidden="true" /><span>{label}</span>
    </a>
  );
}

function TrackedLink({ eventName, children, ...props }) {
  return <a {...props} target="_blank" rel="noreferrer" onClick={() => trackEvent(eventName)}>{children}</a>;
}

function FloatingTelegramButton() {
  return (
    <TrackedLink eventName="click_telegram_float" className="floating-telegram" href={TELEGRAM_URL} aria-label="Entrar al grupo de Telegram de Manuel Beiro | Rentabilidad Bitcoin">
      <MessageCircle size={24} aria-hidden="true" /><span>Telegram</span>
    </TrackedLink>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div><h2>Manuel Beiro | Rentabilidad Bitcoin</h2><p>Bitcoin, trading algorítmico, IA cripto y portafolio de proyectos tecnológicos.</p></div>
        <div><h3>Navegación</h3>{footerRoutes.map(([href, label]) => <a key={href} href={href} onClick={(event) => { event.preventDefault(); navigate(href); }}>{label}</a>)}</div>
        <div><h3>Temas</h3>{["Bitcoin", "Trading algorítmico", "Bots de trading", "IA cripto", "BTC/USDT", "Gestión de riesgo", "API trading", "Exchange Bitcoin"].map((item) => <span key={item}>{item}</span>)}</div>
        <div><h3>CTA</h3><ButtonLink href={TELEGRAM_URL} label="Únete al grupo de Telegram" icon={MessageCircle} primary eventName="click_telegram_footer" /></div>
      </div>
      <p className="legal">Contenido informativo. No constituye garantía de rentabilidad ni asesoría financiera personalizada. Bitcoin y el trading cripto implican riesgo.</p>
    </footer>
  );
}

function JsonLd({ schemas }) {
  return schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

function normalizePath(path) {
  if (!path || path === "/index.html") return "/";
  return path.length > 1 ? path.replace(/\/$/, "") : path;
}

function canonicalFor(path) {
  return `${siteUrl}${path === "/" ? "/" : path}`;
}

function guideMeta(guide) {
  return {
    title: `${guide.title} | ${BRAND_NAME}`,
    description: guide.description
  };
}

function applyMeta(path, meta) {
  document.title = meta.title;
  setMeta("description", meta.description);
  setMeta("keywords", "Manuel Beiro, Rentabilidad Bitcoin, Bitcoin, trading Bitcoin, trading algorítmico, IA cripto, bots de trading, PowerBitcoin, IA CRIPTO, Bitcoin Ecuador, BTC USDT, gestión de riesgo cripto, API trading, exchange Bitcoin");
  setLink("canonical", canonicalFor(path));
  setProperty("og:title", path === "/" ? "Manuel Beiro | Rentabilidad Bitcoin" : meta.title);
  setProperty("og:description", "Bitcoin, trading algorítmico, IA cripto, bots y portafolio tecnológico explicado desde la experiencia de Manuel Beiro.");
  setProperty("og:type", "website");
  setProperty("og:url", canonicalFor(path));
  setProperty("og:image", `${siteUrl}/og-image.svg`);
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", meta.title);
  setMeta("twitter:description", meta.description);
  setMeta("twitter:image", `${siteUrl}/og-image.svg`);
}

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function buildSchemas(path, guide) {
  const brandId = `${siteUrl}/#brand`;
  const personId = `${siteUrl}/#manuel-beiro`;
  const base = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: BRAND_NAME,
      url: `${siteUrl}/`,
      inLanguage: "es",
      publisher: { "@id": brandId }
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: "Manuel Beiro",
      alternateName: BRAND_NAME,
      description: "Figura vinculada a Bitcoin, trading algorítmico, bots, inteligencia artificial aplicada al mercado cripto, BTC/USDT, IA CRIPTO y PowerBitcoin.",
      brand: { "@type": "Brand", name: "Rentabilidad Bitcoin" },
      knowsAbout: ["Bitcoin", "Trading algorítmico", "Bots de trading", "Inteligencia artificial aplicada al trading", "IA cripto", "BTC/USDT", "Gestión de riesgo", "API trading", "Exchange cripto", "IA CRIPTO", "PowerBitcoin"],
      url: `${siteUrl}/`,
      sameAs: [TELEGRAM_URL, IA_CRIPTO_URL, POWERBITCOIN_URL]
    },
    {
      "@context": "https://schema.org",
      "@type": "Brand",
      "@id": brandId,
      name: "Rentabilidad Bitcoin",
      url: `${siteUrl}/`,
      slogan: "Bitcoin con método, datos y tecnología."
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: BRAND_NAME,
      url: `${siteUrl}/`,
      sameAs: [TELEGRAM_URL, IA_CRIPTO_URL, POWERBITCOIN_URL]
    },
    breadcrumbSchema(path, guide)
  ];
  if (path === "/") base.push(faqSchema());
  if (path === "/servicios") base.push(serviceSchema(personId));
  if (path === "/portafolio" || path === "/ia-cripto" || path === "/powerbitcoin") base.push(creativeWorkSchema(path));
  if (guide) base.push(articleSchema(guide, personId, brandId), breadcrumbSchema(path, guide), faqSchema());
  return base;
}

function faqSchema() {
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
}

function breadcrumbSchema(path, guide) {
  const items = [{ "@type": "ListItem", position: 1, name: "Inicio", item: `${siteUrl}/` }];
  if (path !== "/") {
    if (guide) items.push({ "@type": "ListItem", position: 2, name: "Guías", item: `${siteUrl}/guias` }, { "@type": "ListItem", position: 3, name: guide.title, item: canonicalFor(path) });
    else items.push({ "@type": "ListItem", position: 2, name: (pages[path]?.title || BRAND_NAME).split("|")[0].trim(), item: canonicalFor(path) });
  }
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
}

function articleSchema(guide, personId, brandId) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: guide.title,
    description: guide.description,
    dateModified: guide.updatedAt,
    author: { "@id": personId },
    publisher: { "@id": brandId },
    inLanguage: "es",
    mainEntityOfPage: `${siteUrl}/guias/${guide.slug}`,
    articleSection: guide.category
  };
}

function serviceSchema(personId) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Orientación sobre Bitcoin, trading algorítmico e IA cripto",
    provider: { "@id": personId },
    serviceType: "Contenido informativo y comunidad sobre Bitcoin",
    description: "Orientación general sobre Bitcoin, automatización, bots de trading, IA aplicada al mercado cripto, exchanges y gestión de riesgo.",
    hasOfferCatalog: { "@type": "OfferCatalog", name: "Líneas de experiencia", itemListElement: services.map(([name, description]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name, description } })) }
  };
}

function creativeWorkSchema(path) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: pages[path]?.title || "Portafolio cripto de Manuel Beiro",
    description: pages[path]?.description,
    url: canonicalFor(path),
    creator: { "@type": "Person", name: "Manuel Beiro" }
  };
}

function buildGuideParagraph(guide, index) {
  const topic = guide.title.replace(/[¿?]/g, "");
  const paragraphs = [
    `${guide.directAnswer} El punto clave es separar una explicación responsable de cualquier promesa comercial. En ${BRAND_NAME}, el contenido se presenta como referencia educativa para comprender antes de decidir.`,
    `En la práctica, ${topic.toLowerCase()} debe analizarse junto con volatilidad, liquidez, tecnología, seguridad, comisiones, permisos y contexto operativo. La tecnología ayuda a ordenar procesos, pero no elimina incertidumbre.`,
    `Antes de participar conviene hacer preguntas, revisar límites y entender que Bitcoin y el trading cripto pueden generar pérdidas. La comunidad de Telegram funciona como canal directo para resolver dudas generales y conocer el portafolio.`
  ];
  return paragraphs[index] || paragraphs[0];
}

function trackEvent(name, params = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
  if (typeof window.gtag === "function") window.gtag("event", name, params);
  if (typeof window.fbq === "function") window.fbq("trackCustom", name, params);
  if (typeof window.ttq?.track === "function") window.ttq.track(name, params);
}

createRoot(document.getElementById("root")).render(<App />);
