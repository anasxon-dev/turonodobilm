import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { officialContact } from "@/lib/site-data";
import { officialImages } from "./school-home";
import { AdmissionForm } from "./admission-form";

const pages = {
  maktab: {
    label: "Maktab haqida",
    kicker: "01 / TURON ODOB-ILM",
    title: "Bilimga mehr. Odobga tayanch.",
    body: "Turon Odob-Ilm — Farg‘ona viloyatidagi litsenziyalangan xususiy maktab. Biz akademik bilim, zamonaviy ko‘nikma va go‘zal tarbiya uyg‘unligini yaratamiz.",
    image: officialImages.facade,
    sections: [
      [
        "Bizning missiyamiz",
        "Zamonaviy bilim, kuchli tarbiya va keng dunyoqarashga ega avlodni voyaga yetkazish.",
      ],
      [
        "Rasmiy ma’lumot",
        "1–11-sinflar · O‘zbek / rus tillari · Litsenziya №038782 · 14.09.2022",
      ],
      [
        "Bizning yondashuvimiz",
        "Har bir o‘quvchiga individual e’tibor, ochiq muloqot va kundalik rivojlanish uchun aniq muhit.",
      ],
    ],
  },
  natijalar: {
    label: "Natijalar",
    kicker: "02 / ISHONCH",
    title: "Natija — har kuni yaratiladigan jarayon.",
    body: "Biz tasdiqlanmagan raqamlarni emas, o‘quvchining rivoji, mustaqil fikri va kelajakka tayyorligini qadrlaymiz.",
    image: officialImages.classroom,
    sections: [
      [
        "Akademik poydevor",
        "Tizimli darslar, mustahkam bilim va amaliy yondashuv orqali o‘quvchilarni keyingi bosqichga tayyorlaymiz.",
      ],
      [
        "Ingliz tili",
        "Tilni faqat fan emas, kundalik muloqot va xalqaro imkoniyatlar vositasi sifatida o‘rgatamiz.",
      ],
      [
        "IT va dasturlash",
        "Raqamli savodxonlik va dasturlashga qiziqish zamonaviy ta’limning ajralmas qismidir.",
      ],
    ],
  },
  "maktab-hayoti": {
    label: "Maktab hayoti",
    kicker: "03 / MUHIT",
    title: "Bu yerda darsdan ko‘ra ko‘proq narsa bor.",
    body: "Muloqot, tadbirlar, sport, ijod va ota-onalar bilan hamkorlik maktab hayotini mazmunli qiladi.",
    image: officialImages.parents,
    sections: [
      [
        "Dars jarayoni",
        "Har bir mashg‘ulot diqqat, savol va fikr almashish uchun imkoniyat yaratadi.",
      ],
      [
        "Hamkorlik",
        "Ota-onalar bilan ochiq muloqot bolaning ta’lim yo‘lini yanada mustahkamlaydi.",
      ],
      [
        "Faol hayot",
        "Sport va jamoaviy tadbirlar o‘quvchining ishonchi va mas’uliyatini oshiradi.",
      ],
    ],
  },
  aloqa: {
    label: "Aloqa",
    kicker: "04 / BOG‘LANISH",
    title: "Savollaringiz bormi? Gaplashamiz.",
    body: "Maktab, qabul yoki ta’lim yo‘nalishlari haqida ma’lumot olish uchun biz bilan bog‘laning.",
    image: officialImages.facade,
    sections: [
      ["Telefon", officialContact.phone],
      ["Manzil", officialContact.address],
      ["Telegram", "@turonodobilm"],
    ],
  },
  qabul: {
    label: "Qabul",
    kicker: "05 / KEYINGI QADAM",
    title: "Farzandingiz kelajagini bugun boshlang.",
    body: "Ariza qoldiring — maktab jamoasi siz bilan bog‘lanib, qabul jarayoni va keyingi bosqichlar haqida ma’lumot beradi.",
    image: officialImages.classroom,
    sections: [
      [
        "01 / Ariza",
        "Ota-ona va farzandingiz haqidagi asosiy ma’lumotlarni yuboring.",
      ],
      [
        "02 / Suhbat",
        "Maktab jamoasi siz bilan bog‘lanib, savollaringizga javob beradi.",
      ],
      [
        "03 / Keyingi bosqich",
        "Qabul tartibi va kerakli ma’lumotlar sizga tushuntiriladi.",
      ],
    ],
  },
} as const;

type PageType = keyof typeof pages;

export function PageShell({ type }: { type: PageType }) {
  const page = pages[type];
  return (
    <main className="inner-page">
      <header className="site-header inner-nav">
        <div className="container nav-wrap">
          <Link href="/" className="brand">
            <img src="/turon-logo.png" alt="Turon Odob-Ilm" />
          </Link>
          <nav className="inner-nav-links" aria-label="Asosiy navigatsiya">
            <Link href="/maktab">Maktab</Link>
            <Link href="/natijalar">Natijalar</Link>
            <Link href="/maktab-hayoti">Hayot</Link>
            <Link href="/aloqa">Aloqa</Link>
          </nav>
          <Link className="nav-cta" href="/qabul">
            Qabulga ariza berish
            <ArrowRight size={15} />
          </Link>
        </div>
      </header>
      <section className="inner-hero">
        <div className="inner-image">
          <img src={page.image} alt={page.label} />
        </div>
        <div className="inner-hero-shade" />
        <div className="container inner-content">
          <Link className="back-link" href="/">
            <ArrowLeft size={15} /> Bosh sahifa
          </Link>
          <p className="inner-kicker">{page.kicker}</p>
          <h1>{page.title}</h1>
          <p className="lead muted">{page.body}</p>
          <Link className="button button-gold" href="/qabul">
            Qabul haqida bilish
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="section inner-intro">
        <div className="container">
          <div className="inner-intro-head">
            <p className="section-label">TURON ODOB-ILM</p>
            <h2>Ta’limga jiddiy, bolaga e’tibor bilan.</h2>
          </div>
          <div className="inner-sections">
            {page.sections.map(([title, body], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
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
      {type === "qabul" ? (
        <section className="section contact-panel admission-panel">
          <div className="container admission-panel-grid">
            <div>
              <p className="section-label">ARIZA QOLDIRISH</p>
              <h2>Qabul jarayonini bugun boshlang.</h2>
              <p className="lead">
                Ma’lumotlaringizni qoldiring. Maktab jamoasi siz bilan telefon
                orqali bog‘lanadi.
              </p>
              <div className="contact-card">
                <MapPin size={20} />
                <strong>{officialContact.address}</strong>
                <a href={`tel:${officialContact.phone}`}>
                  <Phone size={16} /> {officialContact.phone}
                </a>
              </div>
            </div>
            <AdmissionForm />
          </div>
        </section>
      ) : type === "aloqa" ? (
        <section className="section contact-panel">
          <div className="container contact-panel-grid">
            <div>
              <p className="section-label">OCHIQ MULOQOT</p>
              <h2>Bizni toping va bog‘laning.</h2>
              <p className="lead">
                Farg‘ona viloyati, Furqat tumani, Yangi MFY, Surpa, 405-uy.
              </p>
            </div>
            <div className="contact-card">
              <MapPin size={20} />
              <strong>{officialContact.address}</strong>
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
        </section>
      ) : (
        <section className="section inner-cta">
          <div className="container inner-cta-grid">
            <div>
              <p className="section-label">KEYINGI QADAM</p>
              <h2>Farzandingiz kelajagini birgalikda boshlaymiz.</h2>
            </div>
            <Link className="button button-gold" href="/qabul">
              Qabulga ariza berish
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      )}
      <footer className="site-footer">
        <div className="container footer-bottom">
          <span>© 2026 Turon Odob-Ilm</span>
          <a href={`tel:${officialContact.phone}`}>
            <Phone size={14} /> {officialContact.phone}
          </a>
        </div>
      </footer>
    </main>
  );
}

export { pages };
