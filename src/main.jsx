import React, { useMemo, useState } from "react";
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
  LockKeyhole,
  MessageCircle,
  Network,
  PieChart,
  ShieldCheck,
  Sparkles,
  Zap
} from "lucide-react";
import "./styles.css";
import { IA_CRIPTO_URL, POWERBITCOIN_URL, SITE_URL, TELEGRAM_URL } from "./config";

const navItems = [
  ["Inicio", "#inicio"],
  ["Sobre Manuel", "#sobre-manuel"],
  ["Rentabilidad Bitcoin", "#rentabilidad-bitcoin"],
  ["Metodología", "#metodologia"],
  ["Portafolio", "#portafolio"],
  ["Servicios", "#servicios"],
  ["FAQ", "#faq"],
  ["Telegram", "#telegram"]
];

const authorityCards = [
  {
    icon: Bitcoin,
    title: "Bitcoin como eje principal",
    text: "Una visión centrada en BTC, su tecnología, sus ciclos, su volatilidad y su papel dentro del ecosistema cripto."
  },
  {
    icon: Bot,
    title: "Bots e IA aplicada",
    text: "Experiencia vinculada a automatización, APIs, asistentes, lectura de mercado y trading algorítmico."
  },
  {
    icon: Network,
    title: "Proyectos cripto reales",
    text: "Portafolio conectado con IA CRIPTO, PowerBitcoin y modelos de producto para trading y exchange."
  },
  {
    icon: MessageCircle,
    title: "Comunidad en Telegram",
    text: "Canal directo para preguntas, contenidos de valor y conversación responsable sobre Bitcoin."
  }
];

const methodology = [
  ["01", "Entender Bitcoin", "Antes de operar o invertir, el primer paso es comprender qué es Bitcoin, cómo se comporta su mercado y por qué su volatilidad exige criterio."],
  ["02", "Analizar tecnología y estrategia", "Manuel Beiro enfoca su experiencia en sistemas automatizados, bots, APIs, inteligencia artificial y herramientas que permiten estudiar el mercado con mayor disciplina."],
  ["03", "Evaluar riesgo", "Todo proyecto cripto exige evaluar riesgos técnicos, operativos, de mercado y de liquidez. La rentabilidad nunca debe entenderse como garantía."],
  ["04", "Participar en comunidad", "La comunidad de Telegram permite hacer preguntas, recibir orientación general y conocer contenidos de valor antes de tomar decisiones."]
];

const services = [
  ["Orientación sobre Bitcoin", "Contenido y orientación general para comprender Bitcoin, su volatilidad, sus ciclos, sus oportunidades y sus riesgos.", Bitcoin],
  ["Trading algorítmico y bots", "Explicación de conceptos relacionados con bots, trading automatizado, APIs, sistemas de operación y herramientas de análisis cripto.", Bot],
  ["IA aplicada al mercado cripto", "Análisis de cómo la inteligencia artificial puede participar en lectura de mercado, ejecución automática, optimización y seguimiento.", BrainCircuit],
  ["Portafolio de proyectos cripto", "Presentación de proyectos vinculados a la experiencia de Manuel Beiro, incluyendo IA CRIPTO y PowerBitcoin.", Globe2],
  ["Comunidad y preguntas en Telegram", "Espacio directo para resolver dudas, recibir contenido de valor y conocer la visión de Manuel sobre Bitcoin.", MessageCircle],
  ["Acompañamiento informativo", "Orientación general para personas que quieren entender la tecnología, el mercado y los riesgos antes de tomar decisiones.", ShieldCheck]
];

const faqItems = [
  ["¿Quién es Manuel Beiro?", "Manuel Beiro es una figura vinculada al ecosistema Bitcoin, trading algorítmico, bots, inteligencia artificial aplicada al mercado cripto y proyectos como IA CRIPTO y PowerBitcoin."],
  ["¿Qué es Manuel Beiro Rentabilidad Bitcoin?", "Es la marca comercial y personal de Manuel Beiro para comunicar su experiencia, portafolio, contenidos y visión sobre Bitcoin, automatización, trading cripto y gestión de riesgo."],
  ["¿Qué relación tiene Manuel Beiro con IA CRIPTO?", "IA CRIPTO forma parte del ecosistema de experiencia asociado a Manuel Beiro y BIG TRADERS, con enfoque en trading automatizado, IA, API, Bitget y operación en mercado spot."],
  ["¿Qué es PowerBitcoin?", "PowerBitcoin es un proyecto de exchange enfocado en Bitcoin BTC/USDT, con una experiencia de operación basada en el sistema 3A Power System, take profit, stop loss y apalancamiento automático/adaptativo."],
  ["¿Manuel Beiro garantiza rentabilidad?", "No. La marca comunica experiencia, tecnología, contenidos y metodología. Bitcoin y el trading cripto implican riesgos, y ningún resultado histórico garantiza resultados futuros."],
  ["¿Qué puedo preguntar en el grupo de Telegram?", "Puedes preguntar sobre Bitcoin, conceptos básicos, trading algorítmico, IA cripto, bots, exchanges, seguridad, gestión de riesgo y proyectos del portafolio de Manuel Beiro."],
  ["¿La web tiene formulario?", "No. La comunicación principal se realiza mediante Telegram."],
  ["¿Qué significa trading algorítmico?", "Es el uso de sistemas, reglas, bots o software para analizar condiciones de mercado y ejecutar operaciones de manera automatizada o asistida."],
  ["¿Qué es una API en trading cripto?", "Una API permite que un sistema externo se conecte a una cuenta de exchange para leer datos o ejecutar operaciones según permisos definidos."],
  ["¿Qué significa gestión de riesgo en Bitcoin?", "Es el conjunto de criterios usados para evaluar exposición, volatilidad, tamaño de operación, posibles pérdidas y condiciones de mercado antes de participar."]
];

const articles = [
  {
    slug: "que-es-bitcoin",
    title: "¿Qué es Bitcoin y por qué sigue siendo el eje del mercado cripto?",
    description: "Una guía clara sobre el rol de Bitcoin, su escasez digital y su influencia en el mercado cripto.",
    category: "Bitcoin",
    time: "6 min",
    sections: [
      ["Respuesta directa", "Bitcoin es un activo digital descentralizado que permite transferir valor por internet sin depender de una autoridad central. Su red funciona con reglas públicas, emisión limitada y validación distribuida."],
      ["Por qué importa", "Bitcoin sigue siendo el eje del mercado cripto porque concentra liquidez, atención institucional, infraestructura, pares de trading y una narrativa tecnológica difícil de replicar: escasez programada, resistencia a censura y funcionamiento global."],
      ["Qué debe entender una persona antes de participar", "El precio de Bitcoin puede moverse con fuerza. Entender su volatilidad, sus ciclos, la custodia, los exchanges, las comisiones y la gestión de riesgo es más importante que perseguir movimientos de corto plazo."]
    ],
    bullets: ["Bitcoin no es una promesa de rentabilidad fija.", "Su oferta máxima está limitada por protocolo.", "La educación reduce decisiones impulsivas.", "La gestión de riesgo debe estar antes que la expectativa."]
  },
  {
    slug: "rentabilidad-bitcoin-riesgo",
    title: "Rentabilidad Bitcoin: oportunidad, volatilidad y gestión de riesgo",
    description: "Cómo interpretar la rentabilidad como resultado variable, no como promesa fija.",
    category: "Gestión de riesgo",
    time: "7 min",
    sections: [
      ["Rentabilidad no significa garantía", "En Bitcoin, la rentabilidad es un resultado posible que depende de precio, tiempo, estrategia, liquidez, costos, ejecución y riesgo asumido. No debe presentarse como cifra fija ni como promesa comercial."],
      ["La volatilidad es parte del sistema", "Bitcoin puede tener movimientos amplios en poco tiempo. Esa volatilidad crea oportunidades, pero también puede producir pérdidas significativas si una persona opera sin criterio, sin límites o con exceso de exposición."],
      ["El enfoque responsable", "Rentabilidad Bitcoin comunica método, datos, tecnología y comunidad. La idea no es vender certeza, sino ayudar a comprender variables para tomar decisiones mejor informadas."]
    ],
    bullets: ["Define el riesgo antes de pensar en beneficio.", "Evita operar por emoción o urgencia.", "No uses capital que no puedas exponer.", "Pregunta y entiende antes de decidir."]
  },
  {
    slug: "bots-trading-criptomonedas",
    title: "Cómo funcionan los bots de trading en criptomonedas",
    description: "Conceptos clave sobre automatización, reglas, ejecución y límites de los sistemas de trading.",
    category: "Bots",
    time: "8 min",
    sections: [
      ["Qué es un bot de trading", "Un bot de trading es un software que analiza condiciones definidas y puede ejecutar operaciones según reglas, señales, algoritmos o modelos. Su valor está en la disciplina operativa, no en una supuesta capacidad mágica de ganar siempre."],
      ["Qué puede automatizar", "Un bot puede leer precios, detectar condiciones, gestionar entradas y salidas, registrar operaciones, enviar alertas y ejecutar órdenes mediante una API. También puede integrarse con paneles, estadísticas y asistentes como Telegram."],
      ["Qué límites tiene", "Un bot depende de su estrategia, configuración, permisos, liquidez del mercado, latencia, comisiones y eventos inesperados. Automatizar no elimina el riesgo: solo cambia la forma de administrarlo."]
    ],
    bullets: ["Un bot ejecuta reglas; no elimina incertidumbre.", "La API debe configurarse con permisos prudentes.", "El mercado puede cambiar más rápido que una estrategia.", "El seguimiento humano sigue siendo importante."]
  },
  {
    slug: "api-exchange-cripto",
    title: "Qué es una API en un exchange cripto",
    description: "Permisos, conexión, seguridad y lectura de datos en plataformas de trading cripto.",
    category: "API trading",
    time: "5 min",
    sections: [
      ["Definición sencilla", "Una API es un puente técnico que permite que un sistema externo se conecte con una cuenta de exchange para leer datos, consultar balances o ejecutar operaciones según permisos definidos por el usuario."],
      ["Permisos importantes", "En trading automatizado es común usar permisos de lectura y operación. Un enfoque responsable evita habilitar permisos de retiro cuando no son necesarios para la estrategia."],
      ["Seguridad operativa", "Las claves API deben protegerse, renovarse cuando sea necesario y configurarse con límites. La seguridad de una API es parte central de cualquier proyecto cripto serio."]
    ],
    bullets: ["No todas las APIs tienen los mismos permisos.", "Sin permiso de retiro se reduce un vector crítico de riesgo.", "Las claves API no deben compartirse públicamente.", "La trazabilidad ayuda a auditar movimientos."]
  },
  {
    slug: "trading-manual-vs-automatizado",
    title: "Trading manual vs trading automatizado",
    description: "Diferencias entre ejecución humana, sistemas asistidos y modelos algorítmicos.",
    category: "Trading",
    time: "6 min",
    sections: [
      ["Trading manual", "El trading manual depende de análisis humano, criterio, paciencia y ejecución directa. Puede ser flexible, pero también está más expuesto a emociones, cansancio, impulsividad y falta de disciplina."],
      ["Trading automatizado", "El trading automatizado usa reglas, bots o algoritmos para ejecutar procesos con consistencia. Puede operar sin pausa, registrar datos y reducir errores repetitivos, aunque depende por completo de la calidad del sistema."],
      ["Cuál conviene", "No existe una respuesta universal. Lo importante es entender la estrategia, el riesgo, el capital, el horizonte temporal y el nivel de supervisión que cada persona puede asumir."]
    ],
    bullets: ["Manual no significa improvisado.", "Automatizado no significa infalible.", "La disciplina importa en ambos enfoques.", "La tecnología debe estar al servicio del método."]
  },
  {
    slug: "ia-aplicada-trading",
    title: "IA aplicada al trading: qué puede hacer y qué no",
    description: "Alcances reales de la inteligencia artificial en análisis, seguimiento y automatización.",
    category: "IA cripto",
    time: "7 min",
    sections: [
      ["Qué puede aportar la IA", "La inteligencia artificial puede ayudar a clasificar información, detectar patrones, resumir señales, asistir decisiones, automatizar reportes y mejorar el seguimiento de estrategias."],
      ["Qué no debe prometer", "La IA no convierte un mercado incierto en un resultado garantizado. Puede fallar, sobreadaptarse a datos históricos o interpretar condiciones incompletas."],
      ["Uso responsable", "La IA aplicada al trading debe combinarse con reglas claras, controles de riesgo, supervisión humana, registro de operaciones y transparencia sobre resultados históricos."]
    ],
    bullets: ["IA no equivale a certeza.", "Los datos de entrenamiento importan.", "Los resultados pasados no garantizan el futuro.", "La supervisión sigue siendo necesaria."]
  },
  {
    slug: "que-es-btc-usdt",
    title: "Qué es BTC/USDT y por qué importa en el trading Bitcoin",
    description: "El par más utilizado para operar Bitcoin contra una moneda estable en exchanges.",
    category: "BTC/USDT",
    time: "4 min",
    sections: [
      ["Qué significa BTC/USDT", "BTC/USDT es un par de trading que expresa el precio de Bitcoin frente a USDT, una moneda estable vinculada al dólar estadounidense en muchos exchanges."],
      ["Por qué se usa tanto", "Este par suele concentrar liquidez, volumen y herramientas de análisis. Por eso es frecuente en estrategias de trading manual, bots, paneles de mercado y sistemas automatizados."],
      ["Qué revisar", "Antes de operar BTC/USDT conviene revisar comisiones, spread, profundidad de mercado, tipo de orden, volatilidad y reglas de riesgo."]
    ],
    bullets: ["BTC es el activo base.", "USDT actúa como referencia de precio.", "La liquidez afecta la ejecución.", "El par no elimina la volatilidad."]
  },
  {
    slug: "evaluar-proyecto-cripto",
    title: "Cómo evaluar un proyecto cripto antes de participar",
    description: "Criterios de tecnología, equipo, riesgo, liquidez, transparencia y comunicación.",
    category: "Educación",
    time: "8 min",
    sections: [
      ["Primero: entender qué resuelve", "Un proyecto cripto debe explicar con claridad qué problema aborda, qué tecnología utiliza, quién lo opera y cómo se relaciona con el usuario final."],
      ["Revisar señales de seriedad", "La transparencia sobre riesgos, límites, equipo, producto, fase de desarrollo, seguridad y soporte es una señal más valiosa que el ruido promocional."],
      ["Preguntas útiles", "Antes de participar, una persona debería preguntar cómo se custodian los fondos, qué permisos se entregan, qué comisiones existen, qué datos se muestran y qué sucede en escenarios adversos."]
    ],
    bullets: ["Desconfía de promesas absolutas.", "Busca documentación y trazabilidad.", "Comprende el modelo de riesgo.", "Pregunta antes de comprometer capital."]
  },
  {
    slug: "exchange-sin-custodia",
    title: "Qué es un exchange sin custodia",
    description: "Privacidad, control del usuario y diferencias frente a modelos de custodia centralizada.",
    category: "Exchange",
    time: "5 min",
    sections: [
      ["Concepto base", "Un modelo sin custodia busca que el usuario conserve mayor control sobre sus activos o sobre las claves que permiten moverlos, en lugar de delegar completamente esa custodia a una plataforma."],
      ["Ventajas y responsabilidades", "La no custodia puede mejorar privacidad y control, pero también exige más responsabilidad técnica. Perder accesos, firmar operaciones sin entenderlas o usar herramientas inseguras puede tener consecuencias."],
      ["Qué evaluar", "Conviene revisar cómo se ejecutan operaciones, qué permisos existen, cómo se gestiona la liquidez y qué mecanismos de protección ofrece el sistema."]
    ],
    bullets: ["Más control implica más responsabilidad.", "La privacidad no reemplaza la seguridad.", "El usuario debe comprender el flujo operativo.", "No custodia no significa riesgo cero."]
  },
  {
    slug: "preguntas-antes-de-bitcoin",
    title: "Preguntas frecuentes antes de entrar al mundo Bitcoin",
    description: "Respuestas responsables para iniciar con más claridad y menos ruido.",
    category: "Principiantes",
    time: "6 min",
    sections: [
      ["¿Debo entender antes de comprar?", "Sí. Antes de comprar, operar o participar en un proyecto cripto, conviene entender qué es Bitcoin, cómo se custodia, por qué cambia de precio y qué riesgos existen."],
      ["¿Bitcoin es solo para expertos?", "No. Cualquier persona puede aprender sus conceptos básicos, pero participar sin educación aumenta la probabilidad de errores. El objetivo inicial debe ser comprender, no correr."],
      ["¿Dónde resolver dudas?", "El grupo de Telegram de Manuel Beiro Rentabilidad Bitcoin existe para hacer preguntas, conocer proyectos, aclarar conceptos y conversar con un enfoque responsable."]
    ],
    bullets: ["Aprender primero es una ventaja.", "No hay rentabilidad garantizada.", "La seguridad personal importa.", "Una comunidad clara ayuda a filtrar ruido."]
  }
];

function App() {
  const schemas = useMemo(() => buildSchemas(), []);

  return (
    <>
      <JsonLd schemas={schemas} />
      <Header />
      <main>
        <Hero />
        <AuthorityCards />
        <AboutSection />
        <RentabilidadSection />
        <MethodSection />
        <PortfolioSection />
        <IaCriptoSection />
        <PowerBitcoinSection />
        <ServicesSection />
        <TelegramSection />
        <FAQSection />
        <BlogSection />
        <KnowledgeArticlesSection />
        <RiskSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingTelegramButton />
    </>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        <span>Manuel Beiro</span>
        <small>Rentabilidad Bitcoin</small>
      </a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {navItems.slice(0, -1).map(([label, href]) => (
          <a key={label} href={href}>{label}</a>
        ))}
      </nav>
      <a className="header-cta" href={TELEGRAM_URL} aria-label="Entrar al grupo de Telegram">
        <MessageCircle size={18} aria-hidden="true" />
        Telegram
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="hero-copy reveal">
        <p className="eyebrow"><Sparkles size={16} aria-hidden="true" /> Bitcoin con método, datos y tecnología</p>
        <h1>Manuel Beiro Rentabilidad Bitcoin</h1>
        <p className="hero-subtitle">Bitcoin, trading algorítmico e inteligencia artificial aplicada al mercado cripto.</p>
        <p className="hero-text">
          Manuel Beiro reúne experiencia práctica en proyectos vinculados a Bitcoin, automatización, bots de trading, exchanges,
          inteligencia artificial y estrategias cripto. Su enfoque combina tecnología, análisis, gestión de riesgo e información clara
          para personas que quieren entender mejor el mundo Bitcoin antes de tomar decisiones.
        </p>
        <div className="cta-row">
          <ButtonLink href={TELEGRAM_URL} label="Entrar al grupo de Telegram" icon={MessageCircle} primary />
          <ButtonLink href="#sobre-manuel" label="Conocer la experiencia de Manuel" icon={ArrowRight} />
          <ButtonLink href="#portafolio" label="Ver portafolio cripto" icon={BarChart3} />
        </div>
        <p className="microcopy">Únete al grupo para hacer preguntas, recibir orientación general y conocer contenidos sobre Bitcoin, trading automatizado e innovación cripto.</p>
      </div>
      <HeroVisual />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual reveal" aria-label="Visual abstracto de Bitcoin, trading algorítmico e IA aplicada">
      <div className="network-grid" />
      <div className="bitcoin-orbit">
        <Bitcoin size={78} aria-hidden="true" />
      </div>
      <div className="chart-panel">
        <div className="panel-top">
          <span>BTC/USDT</span>
          <strong>+ método</strong>
        </div>
        <div className="bars" aria-hidden="true">
          <i style={{ height: "34%" }} />
          <i style={{ height: "52%" }} />
          <i style={{ height: "42%" }} />
          <i style={{ height: "70%" }} />
          <i style={{ height: "58%" }} />
          <i style={{ height: "86%" }} />
          <i style={{ height: "76%" }} />
        </div>
        <svg className="line-chart" viewBox="0 0 420 140" aria-hidden="true">
          <path d="M10 108 C55 70 82 86 123 62 C168 35 194 54 230 42 C286 23 309 68 354 38 C382 20 399 24 413 18" />
        </svg>
      </div>
      <div className="floating-tags">
        <span>Trading algorítmico</span>
        <span>IA aplicada</span>
        <span>Bitcoin</span>
      </div>
    </div>
  );
}

function AuthorityCards() {
  return (
    <section className="authority-grid section-narrow" aria-label="Bloques de autoridad">
      {authorityCards.map(({ icon: Icon, title, text }) => (
        <article className="info-card reveal" key={title}>
          <Icon size={26} aria-hidden="true" />
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      ))}
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre-manuel" className="section split">
      <div className="section-copy reveal">
        <p className="eyebrow"><BadgeCheck size={16} aria-hidden="true" /> Sobre Manuel Beiro</p>
        <h2>Experiencia práctica en Bitcoin, trading algorítmico e innovación cripto</h2>
        <p>
          Manuel Beiro se posiciona como una figura especializada en el ecosistema Bitcoin, con experiencia vinculada a proyectos de
          trading automatizado, inteligencia artificial aplicada al mercado cripto, bots de operación, sistemas BTC/USDT y modelos de
          exchange. Su marca, Rentabilidad Bitcoin, nace para compartir una visión más clara, tecnológica y responsable sobre las
          oportunidades del mundo cripto.
        </p>
        <blockquote>“Bitcoin no se entiende desde la emoción. Se entiende desde el método, los datos y la gestión del riesgo.”</blockquote>
        <ButtonLink href={TELEGRAM_URL} label="Preguntar a Manuel en Telegram" icon={MessageCircle} primary />
      </div>
      <div className="feature-list reveal">
        {[
          ["Visión", "Acercar Bitcoin a personas que quieren entender antes de actuar."],
          ["Experiencia", "Participación en proyectos de automatización, trading y exchange."],
          ["Diferencial", "Explicar desde la práctica, no solo desde la teoría."],
          ["Comunidad", "Resolver preguntas y entregar valor mediante Telegram."]
        ].map(([title, text]) => (
          <article key={title}>
            <span>{title}</span>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function RentabilidadSection() {
  return (
    <section id="rentabilidad-bitcoin" className="section muted-band">
      <div className="centered reveal">
        <p className="eyebrow"><Gauge size={16} aria-hidden="true" /> Definición directa</p>
        <h2>¿Qué es Rentabilidad Bitcoin?</h2>
        <p>
          Rentabilidad Bitcoin es la marca comercial de Manuel Beiro orientada a explicar el potencial de Bitcoin, el trading algorítmico,
          la automatización con bots, la inteligencia artificial aplicada al mercado cripto y los criterios que una persona debe comprender
          antes de participar en este ecosistema.
        </p>
      </div>
      <div className="pill-grid reveal">
        {["Bitcoin como activo digital", "Rentabilidad como resultado variable", "Trading automatizado como herramienta", "Gestión de riesgo como método", "Comunidad y aprendizaje continuo"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="centered">
        <ButtonLink href={TELEGRAM_URL} label="Entrar al grupo de Telegram y aprender sobre Bitcoin" icon={MessageCircle} primary />
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <section id="metodologia" className="section">
      <div className="section-heading reveal">
        <p className="eyebrow"><Cpu size={16} aria-hidden="true" /> Metodología</p>
        <h2>Método, tecnología y gestión de riesgo</h2>
      </div>
      <div className="timeline">
        {methodology.map(([step, title, text]) => (
          <article className="timeline-item reveal" key={title}>
            <span>{step}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="centered">
        <ButtonLink href={TELEGRAM_URL} label="Unirme a la comunidad de Telegram" icon={MessageCircle} primary />
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portafolio" className="section portfolio-band">
      <div className="section-heading reveal">
        <p className="eyebrow"><PieChart size={16} aria-hidden="true" /> Portafolio</p>
        <h2>Portafolio cripto y experiencia aplicada</h2>
      </div>
      <div className="portfolio-grid">
        <ProjectCard
          title="IA CRIPTO — Trading automatizado con inteligencia artificial"
          description="Proyecto de trading de criptomonedas con IA, automatización 24/7, conexión mediante API, integración con Bitget, operación en mercado spot y enfoque de control del capital desde la cuenta del usuario."
          items={["Automatización de operaciones.", "Bot asistente vía Telegram.", "Conexión por API.", "Operativa en mercado spot.", "Dashboard, estadísticas e historial.", "Hito operativo de más de 1.800 operaciones positivas consecutivas reportadas por la plataforma.", "Participación del equipo BIG TRADERS, donde Manuel Beiro aparece asociado como perfil de trading."]}
          href={IA_CRIPTO_URL}
          cta="Ver IA CRIPTO"
          icon={BrainCircuit}
        />
        <ProjectCard
          title="PowerBitcoin — Exchange exclusivo de Bitcoin BTC/USDT"
          description="Proyecto enfocado en Bitcoin, trading BTC/USDT y una experiencia de exchange descentralizado con sistema 3A Power System, orientado a simplificar la operación mediante take profit, stop loss y apalancamiento automático/adaptativo."
          items={["Enfoque exclusivo en Bitcoin.", "Operaciones BTC/USDT.", "Sistema 3A Power System.", "LONG/SHORT.", "Take Profit, Stop Loss y Apalancamiento.", "Experiencia para principiantes y profesionales.", "Modelo sin custodia y con enfoque en privacidad.", "Proyecto en fase de pruebas visuales previo a apertura oficial."]}
          href={POWERBITCOIN_URL}
          cta="Ver PowerBitcoin"
          icon={Bitcoin}
        />
        <ProjectCard
          title="Comunidad Telegram — Preguntas y contenido de valor"
          description="Espacio donde Manuel Beiro comparte información, responde preguntas y orienta a personas interesadas en Bitcoin, trading algorítmico, IA cripto y proyectos vinculados a su portafolio."
          items={["Preguntas sobre Bitcoin.", "Contenido educativo.", "Novedades del portafolio.", "Conversación directa.", "Enfoque responsable."]}
          href={TELEGRAM_URL}
          cta="Entrar al Telegram"
          icon={MessageCircle}
        />
      </div>
    </section>
  );
}

function IaCriptoSection() {
  return (
    <section id="ia-cripto" className="section split">
      <div className="section-copy reveal">
        <p className="eyebrow"><BrainCircuit size={16} aria-hidden="true" /> IA CRIPTO</p>
        <h2>IA CRIPTO dentro de la experiencia de Manuel Beiro</h2>
        <p>
          IA CRIPTO forma parte del ecosistema de experiencia asociado a Manuel Beiro y BIG TRADERS. El proyecto presenta una plataforma de
          trading automatizado con inteligencia artificial, conectada a Bitget mediante API, diseñada para operar de forma automática en mercado spot.
        </p>
        <div className="milestone">
          <strong>Hito operativo</strong>
          <p>Más de 1.800 operaciones positivas consecutivas reportadas en IA CRIPTO, dentro de una experiencia vinculada al equipo BIG TRADERS.</p>
        </div>
        <p className="responsible-note">Los resultados históricos forman parte de un antecedente operativo y no deben interpretarse como garantía de resultados futuros.</p>
        <ButtonLink href={TELEGRAM_URL} label="Conocer más en Telegram" icon={MessageCircle} primary />
      </div>
      <FeatureMatrix
        items={["Automatización 24/7", "Conexión vía API", "Operativa spot", "Sin permiso de retiro desde la API", "Panel de control con datos", "Bot asistente vía Telegram", "Comisión sobre operaciones con beneficio", "1.805 operaciones positivas reportadas"]}
      />
    </section>
  );
}

function PowerBitcoinSection() {
  return (
    <section id="powerbitcoin" className="section muted-band split reverse">
      <FeatureMatrix
        items={["Exchange exclusivo de Bitcoin", "Par BTC/USDT", "Sistema 3A Power System", "Take Profit, Stop Loss y Apalancamiento", "Operaciones desde bajo capital", "Principiantes y profesionales", "Fase visual / próxima apertura", "Modelo tecnológico asociado a BIG TRADERS"]}
      />
      <div className="section-copy reveal">
        <p className="eyebrow"><Bitcoin size={16} aria-hidden="true" /> PowerBitcoin</p>
        <h2>PowerBitcoin dentro del portafolio cripto</h2>
        <p>
          PowerBitcoin representa una línea de innovación enfocada en Bitcoin, BTC/USDT, exchange descentralizado y sistemas automatizados de
          operación. Dentro de la narrativa de Manuel Beiro, este proyecto sirve como muestra de experiencia en productos cripto, trading,
          tecnología, privacidad, no custodia y automatización.
        </p>
        <div className="cta-row">
          <ButtonLink href={POWERBITCOIN_URL} label="Ver proyecto PowerBitcoin" icon={ExternalLink} primary />
          <ButtonLink href={TELEGRAM_URL} label="Preguntar sobre PowerBitcoin en Telegram" icon={MessageCircle} />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="servicios" className="section">
      <div className="section-heading reveal">
        <p className="eyebrow"><Zap size={16} aria-hidden="true" /> Servicios</p>
        <h2>Servicios y líneas de experiencia</h2>
      </div>
      <div className="services-grid">
        {services.map(([title, text, Icon]) => (
          <article className="info-card reveal" key={title}>
            <Icon size={26} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="centered">
        <ButtonLink href={TELEGRAM_URL} label="Hablar con Manuel en Telegram" icon={MessageCircle} primary />
      </div>
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
          <p>
            El grupo de Telegram es el canal principal de comunicación de Manuel Beiro Rentabilidad Bitcoin. Allí podrás hacer preguntas,
            recibir contenido de valor, conocer novedades de sus proyectos y entender mejor temas como Bitcoin, trading algorítmico, bots,
            IA cripto, exchanges y gestión de riesgo.
          </p>
        </div>
        <div className="benefit-grid">
          {["Preguntas directas", "Contenido educativo", "Novedades de proyectos", "Discusión sobre Bitcoin", "Explicación de conceptos", "Comunidad interesada en cripto", "Acceso rápido desde móvil"].map((item) => (
            <span key={item}><ShieldCheck size={16} aria-hidden="true" /> {item}</span>
          ))}
        </div>
        <ButtonLink href={TELEGRAM_URL} label="Entrar ahora al Telegram" icon={MessageCircle} primary large />
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section">
      <div className="section-heading reveal">
        <p className="eyebrow"><MessageCircle size={16} aria-hidden="true" /> Respuestas directas</p>
        <h2>Preguntas frecuentes</h2>
      </div>
      <div className="faq-list reveal">
        {faqItems.map(([question, answer], index) => (
          <article className="faq-item" key={question}>
            <button
              type="button"
              aria-expanded={open === index}
              aria-controls={`faq-${index}`}
              onClick={() => setOpen(open === index ? -1 : index)}
            >
              <span>{question}</span>
              <ChevronDown size={20} aria-hidden="true" />
            </button>
            <div id={`faq-${index}`} className="faq-answer" hidden={open !== index}>
              <p>{answer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="blog" className="section muted-band">
      <div className="section-heading reveal">
        <p className="eyebrow"><Activity size={16} aria-hidden="true" /> Centro de conocimiento</p>
        <h2>Blog sobre Bitcoin, automatización y gestión de riesgo</h2>
      </div>
      <div className="blog-grid">
        {articles.map(({ slug, title, description, category, time }) => (
          <article className="blog-card reveal" key={title}>
            <div className="blog-meta">
              <span>{category}</span>
              <span>{time}</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={`#${slug}`} aria-label={`Leer guía: ${title}`}>
              Leer guía <ArrowRight size={16} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
      <div className="centered">
        <ButtonLink href={TELEGRAM_URL} label="Pedir una guía en Telegram" icon={MessageCircle} primary />
      </div>
    </section>
  );
}

function KnowledgeArticlesSection() {
  return (
    <section id="guias-bitcoin" className="section article-library">
      <div className="section-heading reveal">
        <p className="eyebrow"><Activity size={16} aria-hidden="true" /> Guías completas</p>
        <h2>Lecturas educativas sobre Bitcoin, bots, IA y riesgo</h2>
        <p>Contenido informativo para entender conceptos antes de tomar decisiones. Sin promesas de rentabilidad y con enfoque práctico.</p>
      </div>
      <div className="article-stack">
        {articles.map(({ slug, title, description, category, time, sections, bullets }) => (
          <article id={slug} className="knowledge-article reveal" key={slug}>
            <div className="article-kicker">
              <span>{category}</span>
              <span>{time}</span>
            </div>
            <h3>{title}</h3>
            <p className="article-description">{description}</p>
            <div className="article-content">
              {sections.map(([heading, body]) => (
                <section key={heading}>
                  <h4>{heading}</h4>
                  <p>{body}</p>
                </section>
              ))}
            </div>
            <div className="article-takeaways" aria-label={`Ideas clave de ${title}`}>
              <strong>Ideas clave</strong>
              <ul>
                {bullets.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="article-footer">
              <p>¿Quieres conversar este tema con más contexto? Manuel responde preguntas generales en Telegram.</p>
              <ButtonLink href={TELEGRAM_URL} label="Preguntar en Telegram" icon={MessageCircle} primary />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function RiskSection() {
  return (
    <section id="riesgos" className="section split">
      <div className="section-copy reveal">
        <p className="eyebrow"><LockKeyhole size={16} aria-hidden="true" /> Transparencia</p>
        <h2>Transparencia y responsabilidad</h2>
        <p>
          Bitcoin, las criptomonedas y el trading implican volatilidad y riesgo. La información presentada por Manuel Beiro Rentabilidad Bitcoin
          tiene fines informativos, educativos y de presentación de experiencia. Ningún contenido debe interpretarse como garantía de rentabilidad
          ni como promesa de resultados futuros.
        </p>
        <ButtonLink href={TELEGRAM_URL} label="Resolver dudas en Telegram" icon={MessageCircle} primary />
      </div>
      <div className="risk-list reveal">
        {["Los resultados pasados no garantizan resultados futuros.", "Toda operación cripto implica riesgo.", "La rentabilidad depende de mercado, estrategia, capital, liquidez, tiempo y gestión de riesgo.", "Antes de participar en cualquier proyecto cripto, cada persona debe informarse y resolver sus dudas.", "El grupo de Telegram existe para conversar, orientar y responder preguntas generales."].map((item) => (
          <p key={item}><ShieldCheck size={18} aria-hidden="true" /> {item}</p>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta section-narrow reveal">
      <p className="eyebrow"><Sparkles size={16} aria-hidden="true" /> Antes de decidir, entiende el sistema</p>
      <h2>Pregunta, aprende y conoce la visión de Manuel Beiro en Telegram.</h2>
      <p>Rentabilidad Bitcoin no empieza prometiendo resultados: empieza explicando el método.</p>
      <ButtonLink href={TELEGRAM_URL} label="Entrar al grupo de Telegram" icon={MessageCircle} primary large />
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h2>Manuel Beiro Rentabilidad Bitcoin</h2>
          <p>Bitcoin, trading algorítmico, IA cripto y portafolio de proyectos tecnológicos.</p>
        </div>
        <div>
          <h3>Navegación</h3>
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </div>
        <div>
          <h3>Temas</h3>
          {["Bitcoin", "Trading algorítmico", "Bots de trading", "IA cripto", "BTC/USDT", "Gestión de riesgo", "Exchange Bitcoin"].map((item) => <span key={item}>{item}</span>)}
        </div>
        <div>
          <h3>CTA</h3>
          <ButtonLink href={TELEGRAM_URL} label="Únete al grupo de Telegram" icon={MessageCircle} primary />
        </div>
      </div>
      <p className="legal">Contenido informativo. No constituye garantía de rentabilidad ni asesoría financiera personalizada.</p>
    </footer>
  );
}

function ProjectCard({ title, description, items, href, cta, icon: Icon }) {
  return (
    <article className="project-card reveal">
      <div className="project-icon"><Icon size={30} aria-hidden="true" /></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <ButtonLink href={href} label={cta} icon={ExternalLink} primary />
    </article>
  );
}

function FeatureMatrix({ items }) {
  return (
    <div className="matrix reveal">
      {items.map((item, index) => (
        <div key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

function ButtonLink({ href, label, icon: Icon, primary = false, large = false }) {
  return (
    <a className={`button-link ${primary ? "primary" : ""} ${large ? "large" : ""}`} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      <Icon size={18} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

function FloatingTelegramButton() {
  return (
    <a className="floating-telegram" href={TELEGRAM_URL} aria-label="Entrar al grupo de Telegram" target="_blank" rel="noreferrer">
      <MessageCircle size={24} aria-hidden="true" />
      <span>Telegram</span>
    </a>
  );
}

function JsonLd({ schemas }) {
  return schemas.map((schema, index) => (
    <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  ));
}

function buildSchemas() {
  const organizationId = `${SITE_URL}#brand`;
  const personId = `${SITE_URL}#manuel-beiro`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: "Manuel Beiro",
      brand: { "@id": organizationId },
      url: SITE_URL,
      knowsAbout: ["Bitcoin", "trading algorítmico", "inteligencia artificial aplicada al trading", "bots de trading", "exchanges cripto", "BTC/USDT", "gestión de riesgo", "IA CRIPTO", "PowerBitcoin"]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      name: "Manuel Beiro Rentabilidad Bitcoin",
      url: SITE_URL,
      inLanguage: "es",
      publisher: { "@id": organizationId }
    },
    {
      "@context": "https://schema.org",
      "@type": "Brand",
      "@id": organizationId,
      name: "Manuel Beiro Rentabilidad Bitcoin",
      url: SITE_URL,
      slogan: "Bitcoin con método, datos y tecnología."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map(([name, text]) => ({
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: navItems.slice(0, 7).map(([name, href], index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
        item: `${SITE_URL}${href}`
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Orientación sobre Bitcoin, trading algorítmico e IA cripto",
      provider: { "@id": personId },
      areaServed: "Ecuador y comunidad hispanohablante",
      serviceType: "Contenido informativo y comunidad sobre Bitcoin",
      description: "Orientación general sobre Bitcoin, automatización, bots de trading, IA aplicada al mercado cripto, exchanges y gestión de riesgo."
    },
    ...articles.map(({ slug, title, description, category }) => ({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      articleSection: category,
      author: { "@id": personId },
      publisher: { "@id": organizationId },
      inLanguage: "es",
      mainEntityOfPage: `${SITE_URL}#${slug}`
    }))
  ];
}

createRoot(document.getElementById("root")).render(<App />);
