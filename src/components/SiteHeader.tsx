"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const navigation = {
  ar: [
    ["الرئيسية", "/"],
    ["المنتجات", "/products"],
    ["الأبحاث", "/research"],
    ["المطورون", "/developers"],
    ["السلامة", "/safety"],
    ["الشركة", "/company"],
    ["الأخبار", "/news"],
  ],
  fr: [
    ["Accueil", "/"],
    ["Produits", "/products"],
    ["Recherche", "/research"],
    ["Développeurs", "/developers"],
    ["Sécurité", "/safety"],
    ["Entreprise", "/company"],
    ["Actualités", "/news"],
  ],
  en: [
    ["Home", "/"],
    ["Products", "/products"],
    ["Research", "/research"],
    ["Developers", "/developers"],
    ["Safety", "/safety"],
    ["Company", "/company"],
    ["News", "/news"],
  ],
};

const labels = {
  ar: { contact: "تواصل معنا", menu: "فتح قائمة التنقل", close: "إغلاق قائمة التنقل" },
  fr: { contact: "Contact", menu: "Ouvrir le menu", close: "Fermer le menu" },
  en: { contact: "Contact", menu: "Open navigation menu", close: "Close navigation menu" },
};

export default function SiteHeader() {
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          href="/"
          className="brand"
          onClick={() => setMenuOpen(false)}
          aria-label="Amaya AI Home"
        >
          <span className="brand-symbol">A<span>.</span></span>
          <span className="brand-word">AMAYA <b>AI</b></span>
        </Link>

        <nav
          id="main-navigation"
          className={`main-nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation[lang].map(([label, href]) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={active ? "active" : ""}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="header-tools">
          <div className="language-tools" aria-label="Choose language">
            {(["ar", "fr", "en"] as const).map((item) => (
              <button
                key={item}
                type="button"
                className={lang === item ? "selected" : ""}
                onClick={() => {
                  setLang(item);
                  setMenuOpen(false);
                }}
                aria-pressed={lang === item}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          <Link href="/company#contact" className="header-cta">
            {labels[lang].contact} <span>↗</span>
          </Link>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? labels[lang].close : labels[lang].menu}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
