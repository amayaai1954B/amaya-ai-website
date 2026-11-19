"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export type PageKey =
  | "products"
  | "research"
  | "developers"
  | "safety"
  | "company"
  | "news";

const pages = {
  ar: {
    products: {
      label: "منظومة Amaya AI",
      title: "تقنيات ذكية.",
      accent: "إمكانات بلا حدود.",
      description: "نستكشف ونطور تقنيات الذكاء الاصطناعي والبرمجيات والأدوات الإبداعية لبناء حلول عملية تخدم الأفراد والمؤسسات.",
      intro: "مجالات المنتجات",
      introText: "مجالات تقنية نعمل على تطويرها واستكشاف إمكاناتها.",
      cards: [
        ["01", "أنظمة الذكاء الاصطناعي", "المساعدون الرقميون، الأنظمة الذكية، تحليل البيانات والأتمتة."],
        ["02", "هندسة البرمجيات", "تطبيقات الويب والهواتف والمنصات والأنظمة الرقمية."],
        ["03", "الإبداع الرقمي", "أدوات وتجارب الذكاء الاصطناعي للصورة والصوت والفيديو."]
      ],
      featureTitle: "من الفكرة إلى التطبيق.",
      featureText: "نعمل على تحويل الأفكار التقنية إلى نماذج أولية وتجارب عملية، مع الاهتمام بالموثوقية والأداء وسهولة الاستخدام.",
      cta: "اكتشف الأبحاث والتطوير",
      ctaLink: "/research",
      note: "تعكس هذه الصفحة مجالات العمل والتطوير، ولا تعني أن جميع المنتجات متاحة تجارياً."
    },
    research: {
      label: "البحث والتطوير",
      title: "نطرح الأسئلة.",
      accent: "ونستكشف الإجابات.",
      description: "البحث هو نقطة البداية لبناء تقنيات أفضل. نستكشف إمكانات الذكاء الاصطناعي ونتعامل مع التحديات الهندسية من خلال التجربة والتطوير.",
      intro: "محاور الاستكشاف",
      introText: "مجالات بحثية وتقنية تمثل توجهاتنا في الابتكار.",
      cards: [
        ["01", "الذكاء الاصطناعي المحلي", "استكشاف تشغيل النماذج الذكية وتحسين كفاءتها على الأجهزة والبيئات المحلية."],
        ["02", "الرؤية الحاسوبية", "تحليل الصور والفيديو واستخراج المعلومات باستخدام تقنيات الرؤية الحاسوبية."],
        ["03", "أنظمة الوكلاء", "بناء أنظمة قادرة على التخطيط وتنفيذ المهام ومراجعة النتائج ضمن ضوابط واضحة."]
      ],
      featureTitle: "التجربة تقود الابتكار.",
      featureText: "نؤمن بأهمية الاختبار والقياس والتوثيق. نميز بين النماذج التجريبية والأنظمة التي اجتازت التحقق العملي.",
      cta: "استكشف منظومة المنتجات",
      ctaLink: "/products",
      note: "تعرض هذه الصفحة توجهات البحث والتطوير، ولا تمثل ادعاءً بنشر نتائج بحثية محكّمة."
    },
    developers: {
      label: "هندسة البرمجيات",
      title: "نبني الأساس.",
      accent: "ليُبنى عليه المستقبل.",
      description: "نهتم بهندسة البرمجيات وبناء التطبيقات والمنصات والأنظمة الذكية، مع التركيز على الجودة والأمان وقابلية التوسع.",
      intro: "مجالات الهندسة",
      introText: "الممارسات والتقنيات التي نعتمد عليها في بناء الأنظمة.",
      cards: [
        ["01", "تطوير الويب", "تطبيقات حديثة وواجهات متجاوبة وتجارب استخدام واضحة."],
        ["02", "الأنظمة الخلفية", "واجهات API وقواعد البيانات وإدارة الخدمات والتكاملات."],
        ["03", "أدوات الذكاء الاصطناعي", "دمج النماذج الذكية وأتمتة سير العمل وتطوير الوكلاء."]
      ],
      featureTitle: "الهندسة الجيدة تبدأ بالأساس الصحيح.",
      featureText: "نولي اهتماماً لبنية المشاريع والاختبارات والتوثيق وإدارة الاعتماديات، حتى تكون الأنظمة قابلة للصيانة والتطوير.",
      cta: "تعرف على مشاريعنا التقنية",
      ctaLink: "/products",
      note: "سيتم نشر التوثيق وواجهات API العامة عند توفر خدمات جاهزة للنشر."
    },
    safety: {
      label: "السلامة والثقة",
      title: "الذكاء يحتاج",
      accent: "إلى مسؤولية.",
      description: "تطوير التقنيات الذكية يتطلب الاهتمام بالخصوصية والأمان والشفافية والاختبار المستمر.",
      intro: "مبادئنا",
      introText: "قيم نسترشد بها عند تصميم وتطوير الحلول التقنية.",
      cards: [
        ["01", "الخصوصية", "التعامل المسؤول مع البيانات وتقليل جمع المعلومات غير الضرورية."],
        ["02", "الأمان", "التحقق من المدخلات والاعتماديات والصلاحيات ومخاطر التشغيل."],
        ["03", "الشفافية", "توضيح قدرات الأنظمة وحدودها والتمييز بين النتائج المؤكدة والتجريبية."]
      ],
      featureTitle: "الثقة جزء من التصميم.",
      featureText: "نهدف إلى بناء أنظمة يمكن فهمها واختبارها ومراجعتها، مع مراعاة المخاطر المحتملة قبل الاستخدام.",
      cta: "تعرف على الشركة",
      ctaLink: "/company",
      note: "هذه مبادئ توجيهية، وليست ادعاءً بالحصول على شهادات أو اعتمادات أمنية."
    },
    company: {
      label: "عن Amaya AI",
      title: "نبني الذكاء.",
      accent: "ونهندس المستقبل.",
      description: "Amaya AI مبادرة تقنية تعمل على تطوير حلول في الذكاء الاصطناعي وهندسة البرمجيات والإبداع الرقمي والبحث والتطوير.",
      intro: "رؤيتنا",
      introText: "تطوير تقنيات مفيدة تجمع بين البحث والهندسة والتطبيق العملي.",
      cards: [
        ["01", "الابتكار", "استكشاف الأفكار والتقنيات الجديدة وتحويلها إلى تجارب قابلة للاختبار."],
        ["02", "الهندسة", "بناء أنظمة منظمة وقابلة للصيانة والتطوير."],
        ["03", "الأثر", "توجيه التقنية نحو حلول عملية تفتح فرصاً جديدة."]
      ],
      featureTitle: "Building Intelligence. Engineering the Future.",
      featureText: "نؤمن أن المستقبل يُبنى بالمعرفة والتجربة والعمل الهندسي المتقن.",
      cta: "تواصل معنا",
      ctaLink: "#contact",
      note: "نعمل على تطوير منظومتنا التقنية بشكل تدريجي."
    },
    news: {
      label: "الأخبار والتحديثات",
      title: "رحلة التطوير",
      accent: "مستمرة.",
      description: "مساحة مخصصة لمشاركة أخبار Amaya AI والتحديثات التقنية والإعلانات عند توفرها.",
      intro: "آخر المستجدات",
      introText: "سيتم نشر التحديثات الرسمية هنا عند اعتمادها.",
      cards: [
        ["01", "تحديثات المنتجات", "معلومات حول إصدارات المنتجات والميزات الجديدة عند توفرها."],
        ["02", "التطوير التقني", "مستجدات العمل الهندسي والتجارب التقنية."],
        ["03", "إعلانات الشركة", "الأخبار والإعلانات الرسمية المتعلقة بـ Amaya AI."]
      ],
      featureTitle: "المعرفة تنمو بالمشاركة.",
      featureText: "سنستخدم هذه المساحة لنشر المعلومات الواضحة والمحدثة حول ما نعمل عليه.",
      cta: "تعرف على Amaya AI",
      ctaLink: "/company",
      note: "لا توجد إعلانات أو أخبار منشورة في هذه الصفحة حتى الآن."
    }
  },
  en: {
    products: {
      label: "THE AMAYA AI ECOSYSTEM",
      title: "Intelligent technology.",
      accent: "New possibilities.",
      description: "We explore and develop AI, software and creative technologies to build practical solutions for people and organizations.",
      intro: "Technology areas",
      introText: "Domains we are developing and exploring.",
      cards: [
        ["01", "AI Systems", "Digital assistants, intelligent systems, data analysis and automation."],
        ["02", "Software Engineering", "Web and mobile applications, platforms and digital systems."],
        ["03", "Creative Technology", "AI-powered tools and experiences for image, audio and video."]
      ],
      featureTitle: "From ideas to applications.",
      featureText: "We turn technology concepts into prototypes and practical experiments, with attention to reliability, performance and usability.",
      cta: "Explore research and development",
      ctaLink: "/research",
      note: "This page describes areas of work and development. It does not imply that every product is commercially available."
    },
    research: {
      label: "RESEARCH & DEVELOPMENT",
      title: "We ask questions.",
      accent: "We explore answers.",
      description: "Research is where better technology begins. We explore AI capabilities and engineering challenges through experimentation and development.",
      intro: "Research directions",
      introText: "Technology areas that shape our innovation efforts.",
      cards: [
        ["01", "Local AI", "Exploring intelligent models and efficient operation in local environments."],
        ["02", "Computer Vision", "Image and video analysis using computer vision techniques."],
        ["03", "Agent Systems", "Systems that plan, execute tasks and review results within defined boundaries."]
      ],
      featureTitle: "Experimentation drives innovation.",
      featureText: "We value testing, measurement and documentation, distinguishing experimental prototypes from systems that have been practically validated.",
      cta: "Explore our products",
      ctaLink: "/products",
      note: "These are research and development directions, not claims of peer-reviewed publications."
    },
    developers: {
      label: "SOFTWARE ENGINEERING",
      title: "Building foundations.",
      accent: "For what comes next.",
      description: "We focus on software engineering, applications, platforms and intelligent systems, with an emphasis on quality, security and scalability.",
      intro: "Engineering domains",
      introText: "Practices and technologies involved in building systems.",
      cards: [
        ["01", "Web Development", "Modern applications, responsive interfaces and clear user experiences."],
        ["02", "Backend Systems", "APIs, databases, services and system integrations."],
        ["03", "AI Tooling", "Model integration, workflow automation and agent development."]
      ],
      featureTitle: "Good engineering starts with strong foundations.",
      featureText: "We care about architecture, testing, documentation and dependency management to make systems maintainable and extensible.",
      cta: "Explore technology areas",
      ctaLink: "/products",
      note: "Public API documentation will be published when services are ready for release."
    },
    safety: {
      label: "SAFETY & TRUST",
      title: "Intelligence",
      accent: "requires responsibility.",
      description: "Building intelligent technology requires attention to privacy, security, transparency and continuous testing.",
      intro: "Our principles",
      introText: "Values that guide our approach to technology development.",
      cards: [
        ["01", "Privacy", "Responsible data handling and minimizing unnecessary collection."],
        ["02", "Security", "Reviewing inputs, dependencies, permissions and operational risks."],
        ["03", "Transparency", "Communicating system capabilities, limitations and uncertainty."]
      ],
      featureTitle: "Trust belongs in the design.",
      featureText: "We aim to build systems that can be understood, tested and reviewed, while considering potential risks before use.",
      cta: "Discover the company",
      ctaLink: "/company",
      note: "These are guiding principles, not claims of security certifications or accreditations."
    },
    company: {
      label: "ABOUT AMAYA AI",
      title: "Building intelligence.",
      accent: "Engineering the future.",
      description: "Amaya AI is a technology initiative focused on artificial intelligence, software engineering, creative technology and research.",
      intro: "Our vision",
      introText: "Developing useful technology through research, engineering and practical application.",
      cards: [
        ["01", "Innovation", "Exploring new ideas and technologies through testable experiments."],
        ["02", "Engineering", "Building structured systems that can be maintained and improved."],
        ["03", "Impact", "Applying technology to practical challenges and new opportunities."]
      ],
      featureTitle: "Building Intelligence. Engineering the Future.",
      featureText: "We believe the future is built through knowledge, experimentation and thoughtful engineering.",
      cta: "Contact us",
      ctaLink: "#contact",
      note: "Our technology ecosystem is being developed progressively."
    },
    news: {
      label: "NEWS & UPDATES",
      title: "The development journey",
      accent: "continues.",
      description: "A space for Amaya AI news, technology updates and announcements as they become available.",
      intro: "Latest updates",
      introText: "Official updates will be published here when available.",
      cards: [
        ["01", "Product updates", "Information about product releases and new features when available."],
        ["02", "Engineering", "Updates on engineering work and technical experiments."],
        ["03", "Company announcements", "Official Amaya AI news and announcements."]
      ],
      featureTitle: "Knowledge grows when shared.",
      featureText: "This space will provide clear and current information about what we are working on.",
      cta: "Discover Amaya AI",
      ctaLink: "/company",
      note: "There are no published announcements on this page yet."
    }
  },
  fr: {
    products: {
      label: "ÉCOSYSTÈME AMAYA AI",
      title: "Technologie intelligente.",
      accent: "Nouvelles possibilités.",
      description: "Nous explorons et développons l'IA, les logiciels et les technologies créatives pour créer des solutions pratiques.",
      intro: "Domaines technologiques",
      introText: "Les domaines que nous développons et explorons.",
      cards: [
        ["01", "Systèmes IA", "Assistants numériques, systèmes intelligents, analyse et automatisation."],
        ["02", "Ingénierie logicielle", "Applications web et mobiles, plateformes et systèmes numériques."],
        ["03", "Technologie créative", "Outils et expériences IA pour l'image, l'audio et la vidéo."]
      ],
      featureTitle: "Des idées aux applications.",
      featureText: "Nous transformons les concepts en prototypes et expérimentations pratiques, avec une attention portée à la fiabilité et à l'utilisation.",
      cta: "Explorer la recherche",
      ctaLink: "/research",
      note: "Cette page présente des domaines de développement et ne signifie pas que tous les produits sont commercialisés."
    },
    research: {
      label: "RECHERCHE & DÉVELOPPEMENT",
      title: "Nous posons des questions.",
      accent: "Nous explorons les réponses.",
      description: "La recherche est le point de départ d'une meilleure technologie. Nous explorons l'IA et les défis d'ingénierie par l'expérimentation.",
      intro: "Axes d'exploration",
      introText: "Domaines technologiques qui orientent nos travaux.",
      cards: [
        ["01", "IA locale", "Explorer les modèles intelligents et leur fonctionnement dans des environnements locaux."],
        ["02", "Vision par ordinateur", "Analyse d'images et de vidéos avec des techniques de vision artificielle."],
        ["03", "Systèmes agents", "Des systèmes qui planifient, exécutent et vérifient des tâches dans un cadre défini."]
      ],
      featureTitle: "L'expérimentation nourrit l'innovation.",
      featureText: "Nous valorisons les tests, la mesure et la documentation, en distinguant les prototypes des systèmes validés.",
      cta: "Explorer nos produits",
      ctaLink: "/products",
      note: "Ces éléments décrivent des axes de recherche, et non des publications scientifiques évaluées."
    },
    developers: {
      label: "INGÉNIERIE LOGICIELLE",
      title: "Construire les fondations.",
      accent: "Pour demain.",
      description: "Nous développons des logiciels, applications, plateformes et systèmes intelligents en privilégiant qualité, sécurité et évolutivité.",
      intro: "Domaines d'ingénierie",
      introText: "Pratiques et technologies utilisées dans la construction des systèmes.",
      cards: [
        ["01", "Développement web", "Applications modernes, interfaces adaptatives et expériences claires."],
        ["02", "Systèmes backend", "API, bases de données, services et intégrations."],
        ["03", "Outils IA", "Intégration de modèles, automatisation et développement d'agents."]
      ],
      featureTitle: "Une bonne ingénierie commence par de bonnes bases.",
      featureText: "Nous accordons de l'importance à l'architecture, aux tests, à la documentation et aux dépendances.",
      cta: "Explorer nos domaines",
      ctaLink: "/products",
      note: "La documentation des API publiques sera publiée lorsque les services seront prêts."
    },
    safety: {
      label: "SÉCURITÉ & CONFIANCE",
      title: "L'intelligence",
      accent: "exige la responsabilité.",
      description: "Le développement de technologies intelligentes exige une attention particulière à la vie privée, la sécurité et la transparence.",
      intro: "Nos principes",
      introText: "Des valeurs qui guident notre approche technologique.",
      cards: [
        ["01", "Confidentialité", "Gestion responsable des données et collecte limitée au nécessaire."],
        ["02", "Sécurité", "Vérification des entrées, dépendances, permissions et risques."],
        ["03", "Transparence", "Communication des capacités, limites et incertitudes des systèmes."]
      ],
      featureTitle: "La confiance fait partie de la conception.",
      featureText: "Nous voulons créer des systèmes compréhensibles, testables et vérifiables, en évaluant les risques.",
      cta: "Découvrir l'entreprise",
      ctaLink: "/company",
      note: "Ces principes ne constituent pas une déclaration de certification ou d'accréditation."
    },
    company: {
      label: "À PROPOS D'AMAYA AI",
      title: "Construire l'intelligence.",
      accent: "Concevoir l'avenir.",
      description: "Amaya AI est une initiative technologique axée sur l'intelligence artificielle, l'ingénierie logicielle, la créativité et la recherche.",
      intro: "Notre vision",
      introText: "Développer des technologies utiles grâce à la recherche et à l'ingénierie.",
      cards: [
        ["01", "Innovation", "Explorer de nouvelles idées et technologies par l'expérimentation."],
        ["02", "Ingénierie", "Construire des systèmes structurés, maintenables et évolutifs."],
        ["03", "Impact", "Appliquer la technologie à des défis et opportunités concrets."]
      ],
      featureTitle: "Building Intelligence. Engineering the Future.",
      featureText: "Nous croyons que l'avenir se construit par la connaissance et l'ingénierie réfléchie.",
      cta: "Nous contacter",
      ctaLink: "#contact",
      note: "Notre écosystème technologique se développe progressivement."
    },
    news: {
      label: "ACTUALITÉS & MISES À JOUR",
      title: "Le développement",
      accent: "continue.",
      description: "Un espace dédié aux actualités d'Amaya AI, aux mises à jour techniques et aux annonces officielles.",
      intro: "Dernières actualités",
      introText: "Les informations officielles seront publiées ici lorsqu'elles seront disponibles.",
      cards: [
        ["01", "Produits", "Informations sur les versions et fonctionnalités à venir."],
        ["02", "Ingénierie", "Actualités sur les travaux techniques et expérimentations."],
        ["03", "Annonces", "Actualités et annonces officielles d'Amaya AI."]
      ],
      featureTitle: "Le savoir grandit lorsqu'il est partagé.",
      featureText: "Cet espace présentera des informations claires sur nos activités.",
      cta: "Découvrir Amaya AI",
      ctaLink: "/company",
      note: "Aucune annonce n'est encore publiée sur cette page."
    }
  }
};

export default function SectionPage({ page }: { page: PageKey }) {
  const { lang } = useLanguage();
  const t = pages[lang][page];

  return (
    <main className="inner-page">
      <section className="inner-hero">
        <div className="inner-hero-glow" />
        <div className="inner-hero-content">
          <span className="overline">{t.label}</span>
          <h1>{t.title}<br /><span>{t.accent}</span></h1>
          <p>{t.description}</p>
          <div className="inner-hero-meta">
            <span>AMAYA AI</span>
            <span>BUILDING INTELLIGENCE</span>
          </div>
        </div>
        <div className="inner-hero-symbol">A<span>.</span></div>
      </section>

      <section className="inner-content">
        <div className="inner-section-heading">
          <span className="overline">{t.intro}</span>
          <h2>{t.introText}</h2>
        </div>

        <div className="inner-card-grid">
          {t.cards.map((card) => (
            <article className="inner-card" key={card[0]}>
              <span className="inner-card-number">{card[0]}</span>
              <h3>{card[1]}</h3>
              <p>{card[2]}</p>
              <span className="inner-card-decoration">↗</span>
            </article>
          ))}
        </div>

        <section className="inner-feature">
          <span className="overline">AMAYA AI / {page.toUpperCase()}</span>
          <h2>{t.featureTitle}</h2>
          <p>{t.featureText}</p>
          <Link href={t.ctaLink} className="button-primary">
            {t.cta} <span>↗</span>
          </Link>
        </section>

        {page === "company" && (
          <section id="contact" className="company-contact">
            <span className="overline">CONTACT / AMAYA AI</span>
            <h2>Building the future starts with a conversation.</h2>
            <p>للتواصل بشأن التعاون أو الاستفسارات، يمكن إضافة قنوات الاتصال الرسمية هنا بعد اعتمادها.</p>
          </section>
        )}

        <p className="inner-disclaimer">{t.note}</p>
      </section>
    </main>
  );
}
