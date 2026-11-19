"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const content = {
  ar: {
    tagline: "هندسة الذكاء. وصناعة المستقبل.",
    explore: "استكشف",
    company: "الشركة",
    products: "المنتجات",
    research: "البحث والتطوير",
    developers: "المطورون",
    about: "عن Amaya AI",
    safety: "الأمان والثقة",
    news: "الأخبار",
    rights: "جميع الحقوق محفوظة.",
  },
  en: {
    tagline: "Building Intelligence. Engineering the Future.",
    explore: "Explore",
    company: "Company",
    products: "Products",
    research: "Research",
    developers: "Developers",
    about: "About Amaya",
    safety: "Safety & Trust",
    news: "News",
    rights: "All rights reserved.",
  },
  fr: {
    tagline: "Concevoir l'intelligence. Construire l'avenir.",
    explore: "Explorer",
    company: "Entreprise",
    products: "Produits",
    research: "Recherche",
    developers: "Développeurs",
    about: "À propos d'Amaya",
    safety: "Sécurité et confiance",
    news: "Actualités",
    rights: "Tous droits réservés.",
  },
};

export default function SiteFooter() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-area">
          <Link href="/" className="brand">
            <span className="brand-symbol">A<span>.</span></span>
            <span className="brand-word">AMAYA <b>AI</b></span>
          </Link>
          <p>{t.tagline}</p>
        </div>

        <div className="footer-column">
          <h3>{t.explore}</h3>
          <Link href="/products">{t.products}</Link>
          <Link href="/research">{t.research}</Link>
          <Link href="/developers">{t.developers}</Link>
        </div>

        <div className="footer-column">
          <h3>{t.company}</h3>
          <Link href="/company">{t.about}</Link>
          <Link href="/safety">{t.safety}</Link>
          <Link href="/news">{t.news}</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 AMAYA AI — {t.rights}</span>
        <span>{t.tagline}</span>
      </div>
    </footer>
  );
}
