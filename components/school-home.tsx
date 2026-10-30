"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  Phone,
  X,
} from "lucide-react";
import {
  branches,
  gallery,
  languages,
  officialContact,
  programs,
  schoolImages,
  schoolFacts,
  type Language,
} from "@/lib/site-data";
import { homeTranslations } from "@/lib/site-translations";

const heroImage = schoolImages.hero;
type Status = "idle" | "sending" | "success" | "error";

export function SchoolHome() {
  const [lang, setLang] = useState<Language>("uz");
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [branch, setBranch] = useState("Furqat");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const langRef = useRef<HTMLDivElement>(null);
  const t = homeTranslations[lang];

  useEffect(() => {
    document.title = `Turon Odob-Ilm | ${t.about}`;
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (description) description.content = t.intro;
  }, [t.about, t.intro]);
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
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max ? (window.scrollY / max) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  function chooseLanguage(next: Language) {
    setLang(next);
    setLangOpen(false);
    document.documentElement.lang = next;
    document.cookie = `school-lang=${next}; path=/; max-age=31536000`;
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) throw new Error("submit failed");
      setStatus("success");
      form.reset();
      setBranch("Furqat");
    } catch {
      setStatus("error");
    }
  }
  const links = [
    "#school",
    "#education",
    "#results",
    "#life",
    "#admission",
    "#contact",
  ];
  const testimonials = [
    { title: t.galleryCaptions[2], image: schoolImages.classroom },
    { title: t.galleryCaptions[3], image: schoolImages.it },
    { title: t.galleryCaptions[1], image: schoolImages.computerClass },
    { title: t.galleryCaptions[0], image: schoolImages.building },
  ];

  return (
    <main>
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#top" className="brand" aria-label="Turon Odob-Ilm">
            <img src="/turon-logo.png" alt="Turon Odob-Ilm" />
          </a>
          <nav
            className={`nav-links ${menuOpen ? "open" : ""}`}
            aria-label={t.mainNavigation}
          >
            {t.nav.map((item, index) => (
              <a
                key={item}
                href={links[index]}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              className="nav-cta"
              href="#admission"
              onClick={() => setMenuOpen(false)}
            >
              {t.apply}
              <ArrowRight size={15} />
            </a>
          </nav>
          <div className="nav-actions">
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
                    .filter((item) => item !== lang)
                    .map((item) => (
                      <button
                        type="button"
                        role="menuitem"
                        key={item}
                        onClick={() => chooseLanguage(item)}
                      >
                        {item.toUpperCase()}
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

      <section id="top" className="hero">
        <div className="hero-image">
          <img src={heroImage} alt={t.heroImageAlt} />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">
            {t.heroEyebrow}
            <span />
          </p>
          <h1>{t.hero}</h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#admission">
              {t.apply}
              <ArrowRight size={17} />
            </a>
            <a className="button button-ghost" href="/maktab">
              {t.about}
            </a>
          </div>
          <dl className="hero-facts">
            {schoolFacts.map(([value], index) => (
              <div key={value}>
                <dt>{t.factLabels[index]}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="school" className="section cream-section">
        <div className="container split-heading">
          <div>
            <p className="section-label">01 / {t.why}</p>
            <h2>{t.why}</h2>
          </div>
          <p className="lead">{t.whyText}</p>
        </div>
        <div className="container editorial-values">
          {t.valueCards.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section mission-section">
        <div className="container mission-grid">
          <div>
            <p className="section-label">02 / {t.missionLabel}</p>
            <h2>{t.missionTitle}</h2>
          </div>
          <div className="mission-values">
            {t.missionValues.map((item, index) => (
              <article key={item.title}>
                <b>0{index + 1}</b>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container trust-grid">
          <div>
            <p className="section-label">03 / {t.trustLabel}</p>
            <h2>{t.trustTitle}</h2>
            <p className="lead">{t.trustText}</p>
          </div>
          <div className="testimonial-carousel">
            <button
              type="button"
              className="carousel-arrow"
              aria-label={t.previousSlide}
              onClick={() =>
                setActiveTestimonial(
                  (activeTestimonial + testimonials.length - 1) %
                    testimonials.length,
                )
              }
            >
              <ChevronLeft />
            </button>
            <figure>
              <img
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].title}
              />
              <figcaption>{testimonials[activeTestimonial].title}</figcaption>
            </figure>
            <button
              type="button"
              className="carousel-arrow"
              aria-label={t.nextSlide}
              onClick={() =>
                setActiveTestimonial(
                  (activeTestimonial + 1) % testimonials.length,
                )
              }
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      <section id="education" className="section dark-section">
        <div className="container">
          <p className="section-label">02 / {t.programLabel}</p>
          <div className="section-heading">
            <h2>{t.programs}</h2>
            <p className="lead muted">{t.programIntro}</p>
          </div>
          <div className="program-grid">
            {programs.map((program, index) => (
              <article className="program-card" key={program.range}>
                <img
                  src={program.image}
                  alt={t.programCards[index].title}
                  loading="lazy"
                />
                <div>
                  <span>
                    {program.range} {t.gradeLabel}
                  </span>
                  <h3>{t.programCards[index].title}</h3>
                  <p>{t.programCards[index].text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="section results-section">
        <div className="container">
          <p className="section-label">03 / {t.resultLabel}</p>
          <div className="section-heading">
            <h2>{t.results}</h2>
            <p className="lead">{t.resultText}</p>
          </div>
          <div className="result-list">
            {t.resultCards.map((result) => (
              <article key={result.title}>
                <strong>{result.metric}</strong>
                <h3>{result.title}</h3>
                <p>{result.text}</p>
              </article>
            ))}
          </div>
          <p className="results-note">{t.resultNote}</p>
        </div>
      </section>

      <section id="life" className="section life-section">
        <div className="container">
          <p className="section-label">04 / {t.life}</p>
          <div className="section-heading">
            <h2>{t.life}</h2>
            <p className="lead muted">{t.lifeText}</p>
          </div>
          <div
            className="life-gallery"
            role="region"
            aria-label={t.galleryLabel}
            tabIndex={0}
          >
            <div className="life-gallery-track">
              {[false, true].map((isDuplicate) => (
                <div
                  className="life-gallery-group"
                  aria-hidden={isDuplicate}
                  key={String(isDuplicate)}
                >
                  {gallery.map(([, src], index) => (
                    <figure key={src}>
                      <img
                        src={src}
                        alt={isDuplicate ? "" : t.galleryCaptions[index]}
                        loading={isDuplicate ? "eager" : "lazy"}
                      />
                      <figcaption>{t.galleryCaptions[index]}</figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section cream-section faq-section">
        <div className="container faq-grid">
          <div>
            <p className="section-label">05 / {t.faqLabel}</p>
            <h2>{t.faq}</h2>
          </div>
          <div>
            {t.faqs.map(([question, answer], index) => (
              <div className="faq-item" key={question}>
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{question}</span>
                  <ChevronDown size={18} />
                </button>
                {openFaq === index && <p>{answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <p className="section-label">06 / {t.processLabel}</p>
          <div className="process-heading">
            <h2>{t.processTitle}</h2>
            <p className="lead">{t.processText}</p>
          </div>
          <div className="process-grid">
            {t.processSteps.map((step, index) => (
              <article key={step.title}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section location-section">
        <div className="container">
          <div className="location-grid">
            <div>
              <p className="section-label">07 / {t.locationsLabel}</p>
              <h2>{t.locationsTitle}</h2>
              <p className="lead">{t.locationsText}</p>
            </div>
            <div className="location-summary">
              <p>
                {branches.length} {t.locationSummary}:{" "}
                {branches.map((item) => item.name).join(", ")}.
              </p>
              <a className="location-cta" href="#contact">
                {t.contact} <ArrowRight size={15} />
              </a>
            </div>
          </div>
          <div className="branch-grid">
            {branches.map((item, index) => (
              <article className="branch-card" key={item.name}>
                <span>
                  {t.branchLabel} 0{index + 1}
                </span>
                <h3>{item.name}</h3>
                <address>{t.branchAddresses[index]}</address>
                <a
                  href={item.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${item.name} ${t.mapAria}`}
                >
                  {t.mapLink} <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="admission" className="section admission-section">
        <div className="container admission-grid">
          <div>
            <p className="section-label">06 / ADMISSION</p>
            <h2>{t.form}</h2>
            <p className="lead muted">{t.formText}</p>
            <a className="phone-link" href={`tel:${officialContact.phone}`}>
              <Phone size={17} />
              {officialContact.phone}
            </a>
          </div>
          <form className="application-form" onSubmit={submit}>
            <h3>{t.form}</h3>
            <p>{t.formText}</p>
            <div className="form-row">
              <label>
                {t.parent}
                <input name="parentName" required />
              </label>
              <label>
                {t.phone}
                <input
                  name="phone"
                  type="tel"
                  pattern="[+0-9 ()-]{7,}"
                  required
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                {t.child}
                <input name="childName" required />
              </label>
              <label>
                {t.grade}
                <select name="grade" defaultValue="" required>
                  <option value="" disabled>
                    {t.select}
                  </option>
                  {Array.from({ length: 11 }, (_, index) => (
                    <option key={index + 1}>{index + 1}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="form-row">
              <label>
                {t.language}
                <select name="language" defaultValue="Uzbek">
                  <option value="Uzbek">{t.languages[0]}</option>
                  <option value="Russian">{t.languages[1]}</option>
                </select>
              </label>
              <label>
                {t.branch}
                <select
                  name="branch"
                  value={branch}
                  onChange={(event) => setBranch(event.target.value)}
                  required
                >
                  {branches.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              {t.message}
              <textarea name="message" rows={3} />
            </label>
            <button
              className="button button-gold form-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? t.sending : t.send}
              <ArrowRight size={17} />
            </button>
            {status === "success" && (
              <p role="status" className="form-status success">
                <Check size={16} />
                {t.success}
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="form-status error">
                {t.error}
              </p>
            )}
          </form>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="container footer-grid">
          <div>
            <img
              src="/turon-logo.png"
              alt="Turon Odob-Ilm"
              className="footer-logo"
            />
            <p>{t.branchAddresses[0]}</p>
          </div>
          <div>
            <p className="footer-label">{t.contact}</p>
            <a href={`tel:${officialContact.phone}`}>{officialContact.phone}</a>
            <a href={officialContact.telegram}>@turonodobilm</a>
          </div>
          <div>
            <p className="footer-label">{t.navigation}</p>
            <a href="/maktab">{t.footerSchool}</a>
            <a href="#results">{t.footerResults}</a>
            <a href="/#admission">{t.footerAdmission}</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Turon Odob-Ilm</span>
          <span>
            {t.footerLicense} №038782 · 14.09.2022
          </span>
        </div>
      </footer>
    </main>
  );
}
