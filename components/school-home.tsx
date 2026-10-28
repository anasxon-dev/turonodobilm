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
  Play,
  X,
} from "lucide-react";
import {
  faqs,
  gallery,
  languages,
  officialContact,
  programs,
  results,
  schoolFacts,
  type Language,
} from "@/lib/site-data";

const heroImage =
  "https://turonodobilm.lovable.app/__l5e/assets-v1/8fe23003-d3f0-403b-aa12-1bbbbc5481cf/students-attentive.jpg";
const translations = {
  uz: {
    nav: ["Maktab", "Ta’lim", "Natijalar", "Hayot", "Qabul", "Aloqa"],
    hero: "Bilim, odob va kelajak — bir maktabda.",
    intro:
      "Akademik bilim, zamonaviy ko‘nikmalar va go‘zal tarbiya uyg‘unlashadigan maktab.",
    apply: "Qabulga ariza berish",
    about: "Maktab haqida",
    why: "Nega Turon Odob-Ilm?",
    whyText:
      "Farzandingiz uchun faqat bilim emas. Biz bilim, odob va kelajak ko‘nikmalarini bitta ta’lim muhitida birlashtiramiz.",
    programs: "Ta’lim dasturlari",
    results: "Natijalar o‘zlari gapiradi",
    resultText:
      "Natija biz uchun raqamdan kengroq: o‘quvchining bilimi, odobi va mustaqil fikri.",
    life: "Maktab hayotidan",
    faq: "Ko‘p beriladigan savollar",
    form: "Qabul uchun ariza",
    formText:
      "Ma’lumotlaringizni qoldiring, maktab jamoasi siz bilan bog‘lanadi.",
    send: "Arizani yuborish",
    sending: "Yuborilmoqda…",
    success: "Arizangiz qabul qilindi. Tez orada siz bilan bog‘lanamiz.",
    error:
      "Arizani yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.",
    parent: "Ota-ona ismi",
    phone: "Telefon raqami",
    child: "Farzand ismi",
    grade: "Sinf",
    language: "Ta’lim tili",
    branch: "Filial",
    message: "Izoh",
  },
  ru: {
    nav: ["Школа", "Образование", "Результаты", "Жизнь", "Приём", "Контакты"],
    hero: "Знания, воспитание и будущее — в одной школе.",
    intro:
      "Школа, где академические знания, современные навыки и воспитание развиваются вместе.",
    apply: "Подать заявку",
    about: "О школе",
    why: "Почему Turon Odob-Ilm?",
    whyText:
      "Ребёнку нужны не только знания. Мы соединяем знания, воспитание и навыки будущего.",
    programs: "Образовательные программы",
    results: "Результаты говорят сами",
    resultText:
      "Результат — это не только цифры, но и знания, характер и самостоятельность ученика.",
    life: "Жизнь школы",
    faq: "Частые вопросы",
    form: "Заявка на приём",
    formText: "Оставьте контакты — команда школы свяжется с вами.",
    send: "Отправить заявку",
    sending: "Отправка…",
    success: "Заявка принята. Мы скоро свяжемся с вами.",
    error: "Не удалось отправить заявку. Попробуйте ещё раз.",
    parent: "Имя родителя",
    phone: "Телефон",
    child: "Имя ребёнка",
    grade: "Класс",
    language: "Язык обучения",
    branch: "Филиал",
    message: "Комментарий",
  },
  en: {
    nav: ["School", "Education", "Results", "Life", "Admission", "Contact"],
    hero: "Knowledge, character and future — in one school.",
    intro:
      "A school where academic confidence, modern skills and character grow together.",
    apply: "Apply for admission",
    about: "About school",
    why: "Why Turon Odob-Ilm?",
    whyText:
      "A child needs more than knowledge. We bring knowledge, character and future skills together.",
    programs: "Education programmes",
    results: "Results speak for themselves",
    resultText:
      "Results are more than numbers: knowledge, character and independent thinking.",
    life: "School life",
    faq: "Frequently asked questions",
    form: "Admission application",
    formText: "Share your details and our school team will contact you.",
    send: "Submit application",
    sending: "Submitting…",
    success: "Your application was received. We will be in touch soon.",
    error: "Could not send the application. Please try again.",
    parent: "Parent name",
    phone: "Phone number",
    child: "Child name",
    grade: "Grade",
    language: "Education language",
    branch: "Branch",
    message: "Message",
  },
};

type Status = "idle" | "sending" | "success" | "error";

export function SchoolHome() {
  const [lang, setLang] = useState<Language>("uz");
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const langRef = useRef<HTMLDivElement>(null);
  const t = translations[lang];

  useEffect(() => {
    const saved = document.cookie.match(/school-lang=(uz|ru|en)/)?.[1] as
      | Language
      | undefined;
    if (saved) setLang(saved);
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
        setVideoOpen(false);
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
    { title: "Maktab muhiti bilan tanishing", image: officialImages.parents },
    { title: "Dars jarayonidan lavha", image: officialImages.classroom },
    { title: "IT mashg‘ulotlari", image: officialImages.it },
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
            aria-label="Asosiy navigatsiya"
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
            <a className="nav-cta" href="#admission">
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
              aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
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
          <img src={heroImage} alt="Turon Odob-Ilm o‘quvchilari" />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">
            Farg‘ona viloyatidagi litsenziyalangan xususiy maktab
            <span />
          </p>
          <h1>{t.hero}</h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button button-gold" href="/qabul">
              {t.apply}
              <ArrowRight size={17} />
            </a>
            <a className="button button-ghost" href="/maktab">
              {t.about}
            </a>
          </div>
          <dl className="hero-facts">
            {schoolFacts.map(([value, label]) => (
              <div key={label}>
                <dt>{label}</dt>
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
          {[
            "Zamonaviy ta’lim",
            "Kuchli tarbiya",
            "Ingliz tili",
            "IT va dasturlash",
            "Mustaqil fikrlash",
            "Faol hayot",
          ].map((item, index) => (
            <article key={item}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
              <p>
                Bilimni amaliyot, hurmat va mas’uliyat bilan birga
                rivojlantirish.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section mission-section">
        <div className="container mission-grid">
          <div>
            <p className="section-label">02 / BIZNING QARASHIMIZ</p>
            <h2>Bilim, odob va kelajak — bir maktabda.</h2>
          </div>
          <div className="mission-values">
            <article>
              <b>01</b>
              <h3>Bilim</h3>
              <p>Mustahkam akademik poydevor va o‘qishga qiziqish.</p>
            </article>
            <article>
              <b>02</b>
              <h3>Odob</h3>
              <p>Hurmat, mas’uliyat va kundalik yaxshi odatlar.</p>
            </article>
            <article>
              <b>03</b>
              <h3>Kelajak</h3>
              <p>Mustaqil fikrlash va zamonaviy ko‘nikmalar.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container trust-grid">
          <div>
            <p className="section-label">03 / ISHONCH</p>
            <h2>Maktab muhitini yaqindan ko‘ring.</h2>
            <p className="lead">
              Turon Odob-Ilm haqida rasmiy manbalardagi haqiqiy maktab lavhalari
              bilan tanishing.
            </p>
            <button
              type="button"
              className="video-trigger"
              onClick={() => setVideoOpen(true)}
            >
              <Play size={16} fill="currentColor" /> Videoni ko‘rish
            </button>
          </div>
          <div className="testimonial-carousel">
            <button
              type="button"
              className="carousel-arrow"
              aria-label="Oldingi"
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
              aria-label="Keyingi"
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
          <p className="section-label">02 / {t.programs}</p>
          <div className="section-heading">
            <h2>{t.programs}</h2>
            <p className="lead muted">
              Har bir bosqich o‘quvchining yoshiga va keyingi rivojiga mos
              quriladi.
            </p>
          </div>
          <div className="program-grid">
            {programs.map((program) => (
              <article className="program-card" key={program.range}>
                <img src={program.image} alt={program.title} loading="lazy" />
                <div>
                  <span>{program.range} sinflar</span>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="section results-section">
        <div className="container">
          <p className="section-label">03 / {t.results}</p>
          <div className="section-heading">
            <h2>{t.results}</h2>
            <p className="lead">{t.resultText}</p>
          </div>
          <div className="result-list">
            {results.map((result, index) => (
              <article key={result.title}>
                <span>
                  0{index + 1} / {result.type}
                </span>
                <h3>{result.title}</h3>
                <p>{result.text}</p>
                <a className="text-link" href="/natijalar">
                  Batafsil <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="life" className="section life-section">
        <div className="container">
          <p className="section-label">04 / {t.life}</p>
          <div className="section-heading">
            <h2>{t.life}</h2>
            <p className="lead muted">
              Dars, muloqot, tadbir va kundalik maktab muhitidan lavhalar.
            </p>
          </div>
          <div className="life-gallery">
            {gallery.map(([alt, src]) => (
              <figure key={src}>
                <img src={src} alt={alt} loading="lazy" />
                <figcaption>{alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream-section faq-section">
        <div className="container faq-grid">
          <div>
            <p className="section-label">05 / FAQ</p>
            <h2>{t.faq}</h2>
          </div>
          <div>
            {faqs.map(([question, answer], index) => (
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
          <p className="section-label">06 / QABUL JARAYONI</p>
          <div className="process-heading">
            <h2>Keyingi qadamni birgalikda boshlaymiz.</h2>
            <p className="lead">
              Ariza yuboring — maktab jamoasi siz bilan bog‘lanib, keyingi
              qadamlar bo‘yicha maslahat beradi.
            </p>
          </div>
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Ariza yuborish</h3>
              <p>
                Ota-ona va farzandingiz haqidagi asosiy ma’lumotlarni qoldiring.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Bog‘lanish</h3>
              <p>
                Maktab jamoasi siz bilan bog‘lanib, savollaringizga javob
                beradi.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Keyingi bosqich</h3>
              <p>
                Qabul bo‘yicha keyingi tartib va ma’lumotlar sizga
                tushuntiriladi.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section location-section">
        <div className="container location-grid">
          <div>
            <p className="section-label">07 / BIZNI TOPING</p>
            <h2>Turon Odob-Ilm bilan bog‘laning.</h2>
            <p className="lead">
              Farg‘ona viloyatidagi yagona tasdiqlangan manzilimizga tashrif
              buyuring yoki savollaringiz bo‘yicha bog‘laning.
            </p>
          </div>
          <div className="location-card">
            <span>MANZIL</span>
            <address>{officialContact.address}</address>
            <a href={`tel:${officialContact.phone}`}>{officialContact.phone}</a>
            <a href={officialContact.telegram} target="_blank" rel="noreferrer">
              Telegram: @turonodobilm
            </a>
            <a className="location-cta" href="/aloqa">
              Aloqa sahifasi <ArrowRight size={15} />
            </a>
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
                    —
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
                  <option>Uzbek</option>
                  <option>Русский</option>
                </select>
              </label>
              <label>
                {t.branch}
                <select name="branch" defaultValue="Furqat">
                  <option>Furqat</option>
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

      {videoOpen && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Maktab videosi"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="video-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Yopish"
              onClick={() => setVideoOpen(false)}
            >
              <X />
            </button>
            <img src={testimonials[activeTestimonial].image} alt="" />
            <h2>{testimonials[activeTestimonial].title}</h2>
            <p>Turon Odob-Ilm maktab hayotidan rasmiy lavha.</p>
          </div>
        </div>
      )}

      <footer id="contact" className="site-footer">
        <div className="container footer-grid">
          <div>
            <img
              src="/turon-logo.png"
              alt="Turon Odob-Ilm"
              className="footer-logo"
            />
            <p>{officialContact.address}</p>
          </div>
          <div>
            <p className="footer-label">ALOQA</p>
            <a href={`tel:${officialContact.phone}`}>{officialContact.phone}</a>
            <a href={officialContact.telegram}>@turonodobilm</a>
          </div>
          <div>
            <p className="footer-label">NAVIGATSIYA</p>
            <a href="/maktab">Maktab haqida</a>
            <a href="/natijalar">Natijalar</a>
            <a href="/qabul">Qabul</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Turon Odob-Ilm</span>
          <span>Litsenziya №038782 · 14.09.2022</span>
        </div>
      </footer>
    </main>
  );
}

export const officialImages = {
  hero: heroImage,
  classroom:
    "https://turonodobilm.lovable.app/__l5e/assets-v1/409c4bac-440f-4dc4-91d2-6e9d44e736bb/classroom-branded.jpg",
  it: "https://turonodobilm.lovable.app/__l5e/assets-v1/625d969e-2ece-4ecd-a9fa-87321c5d84cc/it-lab-active.jpg",
  facade:
    "https://turonodobilm.lovable.app/__l5e/assets-v1/c52ef57e-b881-4689-b826-c79c58a94d75/facade.jpg",
  parents: "https://turonodobilm.lovable.app/assets/life-parents-yZ6LsEAW.jpg",
};
