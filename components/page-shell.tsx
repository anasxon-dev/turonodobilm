"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { languages, officialContact, type Language } from "@/lib/site-data";
import { innerTranslations, type PageType } from "@/lib/site-translations";

export function PageShell({ type }: { type: PageType }) {
  const [lang, setLang] = useState<Language>("uz");
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const t = innerTranslations[lang];
  const page = t.pages[type];
  const links = [
    "/#school",
    "/#education",
    "/#results",
    "/#life",
    "/#admission",
    "/#contact",
  ];

  useEffect(() => {
    const saved = document.cookie.match(/school-lang=(uz|ru|en)/)?.[1] as
      | Language
      | undefined;
    if (saved) {
      setLang(saved);
      document.documentElement.lang = saved;
    }
    const close = (event: MouseEvent) => {
      if (!langRef.current?.contains(event.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLangOpen(false);
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  useEffect(() => {
    document.title = `${page.label} | Turon Odob-Ilm`;
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (description) description.content = page.body;
  }, [page.body, page.label]);

  function chooseLanguage(next: Language) {
    setLang(next);
    setLangOpen(false);
    document.documentElement.lang = next;
    document.cookie = `school-lang=${next}; path=/; max-age=31536000`;
  }

  return (
    <main className="inner-page">
      <header className="site-header inner-nav">
        <div className="container nav-wrap">
          <Link href="/" className="brand" aria-label="Turon Odob-Ilm">
            <img src="/turon-logo.png" alt="Turon Odob-Ilm" />
          </Link>
          <nav
            className={`nav-links ${menuOpen ? "open" : ""}`}
            aria-label={t.mainNavigation}
          >
            {t.nav.map((item, index) => (
              <Link
                key={item}
                href={links[index]}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              className="nav-cta"
              href="/#admission"
              onClick={() => setMenuOpen(false)}
            >
              {t.apply}
              <ArrowRight size={15} />
            </Link>
          </nav>
          <div className="inner-header-actions">
            <div className="language" ref={langRef}>
              <button
                type="button"
                className="language-trigger"
                aria-haspopup="menu"
                aria-expanded={langOpen}
                onClick={() => setLangOpen(!langOpen)}
              >
                {lang.toUpperCase()}
                <ChevronDown size={14} />
              </button>
              {langOpen && (
                <div className="language-menu">
                  {(Object.keys(languages) as Language[])
                    .filter((language) => language !== lang)
                    .map((language) => (
                      <button
                        type="button"
                        role="menuitem"
                        key={language}
                        onClick={() => chooseLanguage(language)}
                      >
                        {language.toUpperCase()}
                      </button>
                    ))}
                </div>
              )}
            </div>
            <button
              type="button"
              className="menu-button"
              aria-label={menuOpen ? t.menuClose : t.menuOpen}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <section className="inner-hero">
        <div className="container inner-content">
          <Link className="back-link" href="/">
            <ArrowLeft size={15} /> {t.back}
          </Link>
          <p className="inner-kicker">{page.kicker}</p>
          <h1>{page.title}</h1>
          <p className="lead muted">{page.body}</p>
          <Link className="button button-gold" href="/#admission">
            {t.learnAdmission}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="section inner-intro">
        <div className="container">
          <div className="inner-intro-head">
            <p className="section-label">TURON ODOB-ILM</p>
            <h2>{t.introTitle}</h2>
          </div>
          <div className="inner-sections">
            {page.sections.map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p className="lead">{body}</p>
                </div>
                <Check size={20} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section inner-cta">
        <div className="container inner-cta-grid">
          <div>
            <p className="section-label">{t.nextLabel}</p>
            <h2>{t.nextTitle}</h2>
          </div>
          <Link className="button button-gold" href="/#admission">
            {t.apply}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container footer-bottom">
          <span>{t.footer}</span>
          <a href={`tel:${officialContact.phone}`}>
            <Phone size={14} /> {officialContact.phone}
          </a>
        </div>
      </footer>
    </main>
  );
}
