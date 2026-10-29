"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, MapPin, Phone } from "lucide-react";
import {
  branches,
  languages,
  officialContact,
  type Language,
} from "@/lib/site-data";
import {
  homeTranslations,
  innerTranslations,
  type PageType,
} from "@/lib/site-translations";

export function PageShell({ type }: { type: PageType }) {
  const [lang, setLang] = useState<Language>("uz");
  const t = innerTranslations[lang];
  const page = t.pages[type];

  useEffect(() => {
    const saved = document.cookie.match(/school-lang=(uz|ru|en)/)?.[1] as
      | Language
      | undefined;
    if (saved) {
      setLang(saved);
      document.documentElement.lang = saved;
    }
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
            className="inner-nav-links"
            aria-label={t.mainNavigation}
          >
            <Link href="/maktab">{t.nav[0]}</Link>
            <Link href="/natijalar">{t.nav[1]}</Link>
            <Link href="/maktab-hayoti">{t.nav[2]}</Link>
            <Link href="/aloqa">{t.nav[3]}</Link>
          </nav>
          <div className="inner-header-actions">
            <div className="inner-language">
              <select
                aria-label={t.language}
                value={lang}
                onChange={(event) =>
                  chooseLanguage(event.target.value as Language)
                }
              >
                {(Object.keys(languages) as Language[]).map((language) => (
                  <option value={language} key={language}>
                    {language.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            <Link className="nav-cta" href="/#admission">
              {t.apply}
              <ArrowRight size={15} />
            </Link>
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
      {type === "aloqa" ? (
        <section className="section contact-panel">
          <div className="container contact-panel-grid">
            <div>
              <p className="section-label">{t.contactLabel}</p>
              <h2>{t.contactTitle}</h2>
              <p className="lead">{t.contactText}</p>
            </div>
            <div className="contact-card">
              <MapPin size={20} />
              <strong>{t.branchContact}</strong>
              <a href={`tel:${officialContact.phone}`}>
                <Phone size={16} /> {officialContact.phone}
              </a>
              <a
                href={officialContact.telegram}
                target="_blank"
                rel="noreferrer"
              >
                Telegram: @turonodobilm
              </a>
            </div>
          </div>
          <div className="container branch-grid">
            {branches.map((branch, index) => (
              <article className="branch-card" key={branch.name}>
                <span>
                  {t.branchLabel} 0{index + 1}
                </span>
                <h3>{branch.name}</h3>
                <address>{homeTranslations[lang].branchAddresses[index]}</address>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${branch.name} ${t.mapAria}`}
                >
                  {t.mapLink}
                  <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>
      ) : (
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
      )}
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
