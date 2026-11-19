"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const content = {
  ar: {
    eyebrow: "ذكاء يُهندس للمستقبل",
    title: "نبني تقنيات",
    accent: "تفتح آفاقاً جديدة.",
    description:
      "Amaya AI شركة تقنية تعمل على استكشاف الذكاء الاصطناعي وهندسة البرمجيات وبناء حلول رقمية تجمع بين البحث والابتكار والتطبيق العملي.",
    explore: "اكتشف عالم Amaya",
    vision: "تعرف على رؤيتنا",
    announcement: "نستكشف حدوداً جديدة في الذكاء الاصطناعي",
    announcementLink: "اكتشف توجهنا البحثي",
    productsLabel: "01 — منظومة التقنية",
    productsTitle: "من الفكرة إلى الذكاء.",
    productsDesc: "مجالات تقنية نعمل على تطويرها واستكشاف إمكاناتها.",
    products: [
      ["AI SYSTEMS", "أنظمة الذكاء الاصطناعي", "تطوير الأنظمة الذكية والمساعدين الرقميين وأدوات الأتمتة.", "/products", "✳"],
      ["SOFTWARE", "هندسة البرمجيات", "تصميم وبناء التطبيقات والمنصات والبنية الرقمية.", "/developers", "⌘"],
      ["CREATIVE AI", "الإبداع بالذكاء الاصطناعي", "استكشاف إمكانات الذكاء الاصطناعي في الصورة والصوت والفيديو.", "/products", "◈"],
    ],
    researchLabel: "02 — البحث والتطوير",
    researchTitle: "الابتكار يبدأ بالسؤال.",
    researchDesc: "نؤمن أن التقدم التقني يبدأ بالبحث والتجربة. نعمل على استكشاف تقنيات جديدة وتحويل الأفكار إلى نماذج وحلول قابلة للاختبار.",
    researchLink: "استكشف البحث والتطوير",
    researchTag: "RESEARCH / EXPERIMENT / BUILD",
    engineeringLabel: "03 — هندسة المستقبل",
    engineeringTitle: "تقنية تُبنى بعناية.",
    engineeringDesc: "من البرمجيات إلى الأنظمة الذكية، نركز على الهندسة المتينة والتصميم المدروس والتطوير المستمر.",
    engineeringLink: "مساحة المطورين",
    safetyLabel: "04 — السلامة والثقة",
    safetyTitle: "الابتكار مسؤولية.",
    safetyDesc: "نضع الأمان والخصوصية والشفافية ضمن المبادئ التي توجه تصميم وتطوير تقنياتنا.",
    safetyLink: "مبادئ السلامة والثقة",
    finalEyebrow: "THE NEXT CHAPTER",
    finalTitle: "المستقبل لا يُنتظر.",
    finalAccent: "بل يُهندس.",
    finalDesc: "اكتشف رؤية Amaya AI وما نعمل على بنائه.",
    finalLink: "تعرف على Amaya AI",
  },
  en: {
    eyebrow: "INTELLIGENCE ENGINEERED FOR TOMORROW",
    title: "Building technology",
    accent: "that opens new possibilities.",
    description:
      "Amaya AI is a technology company exploring artificial intelligence, software engineering and digital solutions through research, innovation and practical development.",
    explore: "Explore Amaya",
    vision: "Discover our vision",
    announcement: "Exploring new frontiers in artificial intelligence",
    announcementLink: "Discover our research",
    productsLabel: "01 — TECHNOLOGY ECOSYSTEM",
    productsTitle: "From ideas to intelligence.",
    productsDesc: "Technology domains we are developing and exploring.",
    products: [
      ["AI SYSTEMS", "Artificial Intelligence", "Intelligent systems, digital assistants and automation tools.", "/products", "✳"],
      ["SOFTWARE", "Software Engineering", "Applications, platforms and robust digital infrastructure.", "/developers", "⌘"],
      ["CREATIVE AI", "Creative Intelligence", "Exploring AI possibilities across image, audio and video.", "/products", "◈"],
    ],
    researchLabel: "02 — RESEARCH & DEVELOPMENT",
    researchTitle: "Innovation begins with a question.",
    researchDesc: "We believe technological progress starts with research and experimentation. We explore emerging technologies and turn ideas into testable concepts and solutions.",
    researchLink: "Explore research",
    researchTag: "RESEARCH / EXPERIMENT / BUILD",
    engineeringLabel: "03 — ENGINEERING THE FUTURE",
    engineeringTitle: "Technology, built with purpose.",
    engineeringDesc: "From software to intelligent systems, we focus on thoughtful design, robust engineering and continuous development.",
    engineeringLink: "Developer space",
    safetyLabel: "04 — SAFETY & TRUST",
    safetyTitle: "Innovation comes with responsibility.",
    safetyDesc: "Security, privacy and transparency are principles that guide how we approach the design and development of technology.",
    safetyLink: "Our safety principles",
    finalEyebrow: "THE NEXT CHAPTER",
    finalTitle: "The future isn't waiting.",
    finalAccent: "It's engineered.",
    finalDesc: "Discover the vision of Amaya AI and what we are working to build.",
    finalLink: "Discover Amaya AI",
  },
  fr: {
    eyebrow: "L'INTELLIGENCE CONÇUE POUR DEMAIN",
    title: "Construire des technologies",
    accent: "qui ouvrent de nouvelles possibilités.",
    description:
      "Amaya AI est une entreprise technologique qui explore l'intelligence artificielle, l'ingénierie logicielle et les solutions numériques à travers la recherche et l'innovation.",
    explore: "Explorer Amaya",
    vision: "Découvrir notre vision",
    announcement: "Explorer de nouveaux horizons en intelligence artificielle",
    announcementLink: "Découvrir nos recherches",
    productsLabel: "01 — ÉCOSYSTÈME TECHNOLOGIQUE",
    productsTitle: "Des idées à l'intelligence.",
    productsDesc: "Des domaines technologiques que nous développons et explorons.",
    products: [
      ["AI SYSTEMS", "Intelligence artificielle", "Systèmes intelligents, assistants numériques et automatisation.", "/products", "✳"],
      ["SOFTWARE", "Ingénierie logicielle", "Applications, plateformes et infrastructures numériques robustes.", "/developers", "⌘"],
      ["CREATIVE AI", "Créativité par l'IA", "Explorer l'IA dans l'image, l'audio et la vidéo.", "/products", "◈"],
    ],
    researchLabel: "02 — RECHERCHE & DÉVELOPPEMENT",
    researchTitle: "L'innovation commence par une question.",
    researchDesc: "Le progrès technologique commence par la recherche et l'expérimentation. Nous explorons les nouvelles technologies et transformons les idées en concepts testables.",
    researchLink: "Explorer la recherche",
    researchTag: "RESEARCH / EXPERIMENT / BUILD",
    engineeringLabel: "03 — INGÉNIERIE DU FUTUR",
    engineeringTitle: "Une technologie conçue avec exigence.",
    engineeringDesc: "Du logiciel aux systèmes intelligents, nous privilégions la conception réfléchie et l'ingénierie robuste.",
    engineeringLink: "Espace développeurs",
    safetyLabel: "04 — SÉCURITÉ & CONFIANCE",
    safetyTitle: "L'innovation implique une responsabilité.",
    safetyDesc: "La sécurité, la confidentialité et la transparence guident notre approche du développement technologique.",
    safetyLink: "Nos principes de sécurité",
    finalEyebrow: "THE NEXT CHAPTER",
    finalTitle: "Le futur ne s'attend pas.",
    finalAccent: "Il se construit.",
    finalDesc: "Découvrez la vision d'Amaya AI et ce que nous travaillons à construire.",
    finalLink: "Découvrir Amaya AI",
  },
};

export default function Home() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-light hero-light-one" />
          <div className="hero-light hero-light-two" />
          <div className="hero-grid" />
          <div className="hero-ring hero-ring-one" />
          <div className="hero-ring hero-ring-two" />
          <div className="hero-ring hero-ring-three" />
          <div className="hero-core">A<span>.</span></div>
        </div>

        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="live-dot" />
              {t.eyebrow}
            </div>

            <h1>
              {t.title}
              <br />
              <span>{t.accent}</span>
            </h1>

            <p>{t.description}</p>

            <div className="hero-buttons">
              <Link href="/products" className="button-primary">
                {t.explore} <span>↗</span>
              </Link>
              <Link href="/company" className="button-secondary">
                {t.vision} <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-bottom-line">
          <span>AMAYA AI</span>
          <span>BUILDING INTELLIGENCE. ENGINEERING THE FUTURE.</span>
          <span>2026</span>
        </div>
      </section>

      <section className="announcement-strip">
        <span className="announcement-indicator">✳</span>
        <span>{t.announcement}</span>
        <Link href="/research">{t.announcementLink} ↗</Link>
      </section>

      <section className="home-section ecosystem-section">
        <div className="section-intro">
          <span className="overline">{t.productsLabel}</span>
          <h2>{t.productsTitle}</h2>
          <p>{t.productsDesc}</p>
        </div>

        <div className="ecosystem-grid">
          {t.products.map((item, index) => (
            <Link href={item[3]} className="ecosystem-card" key={item[0]}>
              <div className="ecosystem-card-top">
                <span>{item[0]}</span>
                <span className="ecosystem-icon">{item[4]}</span>
              </div>
              <div className="ecosystem-card-content">
                <span className="card-index">0{index + 1}</span>
                <h3>{item[1]}</h3>
                <p>{item[2]}</p>
              </div>
              <span className="ecosystem-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="research-feature">
        <div className="research-visual">
          <div className="research-visual-grid" />
          <div className="research-visual-orbit orbit-large" />
          <div className="research-visual-orbit orbit-medium" />
          <div className="research-visual-orbit orbit-small" />
          <div className="research-visual-center">A<span>.</span></div>
          <span className="research-visual-caption">AMAYA / R&D</span>
        </div>
        <div className="research-copy">
          <span className="overline">{t.researchLabel}</span>
          <h2>{t.researchTitle}</h2>
          <p>{t.researchDesc}</p>
          <Link href="/research" className="underlined-link">
            {t.researchLink} <span>↗</span>
          </Link>
          <span className="research-tag">{t.researchTag}</span>
        </div>
      </section>

      <section className="engineering-section">
        <div className="engineering-copy">
          <span className="overline">{t.engineeringLabel}</span>
          <h2>{t.engineeringTitle}</h2>
          <p>{t.engineeringDesc}</p>
          <Link href="/developers" className="underlined-link">
            {t.engineeringLink} <span>↗</span>
          </Link>
        </div>
        <div className="code-visual" aria-hidden="true">
          <div className="code-window-bar">
            <span /><span /><span />
            <small>AMAYA / SYSTEMS</small>
          </div>
          <div className="code-lines">
            <div><i>01</i><span className="code-purple">const</span> <b>future</b> = <em>"intelligent"</em>;</div>
            <div><i>02</i><span className="code-purple">function</span> <b>build</b>() {"{"}</div>
            <div><i>03</i>&nbsp;&nbsp;<span className="code-blue">create</span>(possibilities);</div>
            <div><i>04</i>&nbsp;&nbsp;<span className="code-blue">engineer</span>(theFuture);</div>
            <div><i>05</i>{"}"}</div>
            <div><i>06</i><span className="code-muted">// Always exploring.</span></div>
          </div>
        </div>
      </section>

      <section className="safety-band">
        <div>
          <span className="overline">{t.safetyLabel}</span>
          <h2>{t.safetyTitle}</h2>
          <p>{t.safetyDesc}</p>
        </div>
        <Link href="/safety" className="safety-link">
          {t.safetyLink} <span>↗</span>
        </Link>
      </section>

      <section className="closing-section">
        <span className="overline">{t.finalEyebrow}</span>
        <h2>{t.finalTitle}<br /><span>{t.finalAccent}</span></h2>
        <p>{t.finalDesc}</p>
        <Link href="/company" className="button-primary">
          {t.finalLink} <span>↗</span>
        </Link>
        <div className="closing-watermark">A<span>.</span></div>
      </section>
    </main>
  );
}
