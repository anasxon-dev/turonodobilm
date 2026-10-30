import type { Language } from "@/lib/site-data";

type HomeCopy = {
  nav: string[];
  mainNavigation: string;
  menuOpen: string;
  menuClose: string;
  heroEyebrow: string;
  heroImageAlt: string;
  hero: string;
  intro: string;
  apply: string;
  about: string;
  factLabels: string[];
  why: string;
  whyText: string;
  valueCards: Array<{ title: string; text: string }>;
  missionLabel: string;
  missionTitle: string;
  missionValues: Array<{ title: string; text: string }>;
  trustLabel: string;
  trustTitle: string;
  trustText: string;
  slideCaptions: string[];
  previousSlide: string;
  nextSlide: string;
  programs: string;
  programLabel: string;
  programIntro: string;
  gradeLabel: string;
  programCards: Array<{ title: string; text: string }>;
  results: string;
  resultText: string;
  resultLabel: string;
  resultNote: string;
  resultCards: Array<{ metric: string; title: string; text: string }>;
  details: string;
  life: string;
  lifeText: string;
  galleryLabel: string;
  galleryCaptions: string[];
  faq: string;
  faqLabel: string;
  faqs: Array<[string, string]>;
  processLabel: string;
  processTitle: string;
  processText: string;
  processSteps: Array<{ title: string; text: string }>;
  locationsLabel: string;
  locationsTitle: string;
  locationsText: string;
  locationSummary: string;
  branchLabel: string;
  branchAddresses: string[];
  mapLink: string;
  mapAria: string;
  form: string;
  formText: string;
  select: string;
  languages: string[];
  send: string;
  sending: string;
  success: string;
  error: string;
  parent: string;
  phone: string;
  child: string;
  grade: string;
  language: string;
  branch: string;
  message: string;
  contact: string;
  navigation: string;
  footerSchool: string;
  footerResults: string;
  footerAdmission: string;
  footerLicense: string;
};

export const homeTranslations: Record<Language, HomeCopy> = {
  uz: {
    nav: ["Maktab", "Ta’lim", "Natijalar", "Hayot", "Qabul", "Aloqa"],
    mainNavigation: "Asosiy navigatsiya",
    menuOpen: "Menyuni ochish",
    menuClose: "Menyuni yopish",
    heroEyebrow: "Farg‘ona viloyatidagi litsenziyalangan xususiy maktab",
    heroImageAlt: "Turon Odob-Ilm o‘quvchilari",
    hero: "Bilim, odob va kelajak — bir maktabda.",
    intro:
      "Akademik bilim, zamonaviy ko‘nikmalar va go‘zal tarbiya uyg‘unlashadigan maktab.",
    apply: "Qabulga ariza berish",
    about: "Maktab haqida",
    factLabels: [
      "Tashkil topgan yil",
      "Sinflar",
      "Litsenziya",
      "Ta’lim tillari",
    ],
    why: "Nega Turon Odob-Ilm?",
    whyText:
      "Farzandingiz uchun faqat bilim emas. Biz bilim, odob va kelajak ko‘nikmalarini bitta ta’lim muhitida birlashtiramiz.",
    valueCards: [
      {
        title: "Zamonaviy ta’lim",
        text: "Zamon bilan hamnafas bilim va ko‘nikmalarni rivojlantiramiz.",
      },
      {
        title: "Kuchli tarbiya",
        text: "Bilimni amaliyot, hurmat va mas’uliyat bilan birga rivojlantiramiz.",
      },
      {
        title: "Ingliz tili",
        text: "Til o‘rganishni muloqot va yangi imkoniyatlar bilan bog‘laymiz.",
      },
      {
        title: "IT va dasturlash",
        text: "Raqamli savodxonlik va texnologiyaga qiziqishni oshiramiz.",
      },
      {
        title: "Mustaqil fikrlash",
        text: "Savol berish, izlanish va asosli qaror qilishni rag‘batlantiramiz.",
      },
      {
        title: "Faol hayot",
        text: "Jamoa, ijod va kundalik faollik uchun imkon yaratamiz.",
      },
    ],
    missionLabel: "BIZNING QARASHIMIZ",
    missionTitle: "Bilim, odob va kelajak — bir maktabda.",
    missionValues: [
      {
        title: "Bilim",
        text: "Mustahkam akademik poydevor va o‘qishga qiziqish.",
      },
      { title: "Odob", text: "Hurmat, mas’uliyat va kundalik yaxshi odatlar." },
      { title: "Kelajak", text: "Mustaqil fikrlash va zamonaviy ko‘nikmalar." },
    ],
    trustLabel: "ISHONCH",
    trustTitle: "Maktab muhitini yaqindan ko‘ring.",
    trustText:
      "Maktab binosi va o‘quvchilarimizning kundalik mashg‘ulotlaridan lavhalar.",
    slideCaptions: ["Maktab binosi", "Kompyuter sinfidagi mashg‘ulot"],
    previousSlide: "Oldingi surat",
    nextSlide: "Keyingi surat",
    programs: "Ta’lim dasturlari",
    programLabel: "TA’LIM BOSQICHLARI",
    programIntro:
      "Har bir bosqich o‘quvchining yoshi va keyingi rivojiga mos quriladi.",
    gradeLabel: "sinflar",
    programCards: [
      {
        title: "Boshlang‘ich ta’lim",
        text: "Asosiy bilimlar, o‘qishga qiziqish va mustahkam odatlar uchun poydevor.",
      },
      {
        title: "Umumiy o‘rta ta’lim",
        text: "Fanlararo fikrlash, til va raqamli ko‘nikmalarni chuqurlashtirish.",
      },
      {
        title: "Yuqori sinflar",
        text: "Mustaqil qaror, akademik tayyorgarlik va keyingi bosqichga yo‘nalish.",
      },
    ],
    results: "Natijalarimiz",
    resultText:
      "O‘quvchilarimizning xalqaro imtihonlar va fan olimpiadalaridagi natijalari.",
    resultLabel: "MAKTAB MA’LUMOTIGA KO‘RA",
    resultNote:
      "Natijalar maktab taqdim etgan ma’lumotlar asosida keltirilgan.",
    resultCards: [
      {
        metric: "900+",
        title: "CEFR natijalari",
        text: "CEFR imtihonlarida sertifikat olgan o‘quvchilar.",
      },
      {
        metric: "100+",
        title: "IELTS natijalari",
        text: "IELTS imtihonidan natija olgan o‘quvchilar.",
      },
      {
        metric: "5+",
        title: "SAT natijalari",
        text: "SAT imtihonidan natija olgan o‘quvchilar.",
      },
      {
        metric: "Ko‘plab",
        title: "Olimpiada yutuqlari",
        text: "Fan olimpiadalarida qo‘lga kiritilgan sovrinli o‘rinlar.",
      },
    ],
    details: "Batafsil",
    life: "Maktab hayotidan",
    lifeText: "Dars, muloqot, tadbir va kundalik maktab muhitidan lavhalar.",
    galleryLabel: "Maktab hayoti galereyasi",
    galleryCaptions: [
      "Maktab binosi",
      "Kompyuter sinfi",
      "Dars jarayoni",
      "IT mashg‘uloti",
    ],
    faq: "Ko‘p beriladigan savollar",
    faqLabel: "KO‘P BERILADIGAN SAVOLLAR",
    faqs: [
      [
        "Maktab qayerlarda joylashgan?",
        "Furqat, Qo‘qon, Yaypan va Oltiariqdagi filiallarimiz manzillari lokatsiyalar bo‘limida ko‘rsatilgan.",
      ],
      [
        "Qaysi sinflarga qabul qilinadi?",
        "Maktab 1–11-sinflar uchun ta’lim beradi. Aniq qabul shartlari bo‘yicha maktab jamoasi bilan bog‘laning.",
      ],
      [
        "Ta’lim tillari qaysilar?",
        "O‘zbek va rus tillarida ta’lim yo‘nalishlari mavjud.",
      ],
    ],
    processLabel: "QABUL JARAYONI",
    processTitle: "Keyingi qadamni birgalikda boshlaymiz.",
    processText:
      "Ariza yuboring — maktab jamoasi siz bilan bog‘lanib, keyingi qadamlar bo‘yicha maslahat beradi.",
    processSteps: [
      {
        title: "Ariza yuborish",
        text: "Ota-ona va farzandingiz haqidagi asosiy ma’lumotlarni qoldiring.",
      },
      {
        title: "Bog‘lanish",
        text: "Maktab jamoasi siz bilan bog‘lanib, savollaringizga javob beradi.",
      },
      {
        title: "Keyingi bosqich",
        text: "Qabul bo‘yicha keyingi tartib va ma’lumotlar sizga tushuntiriladi.",
      },
    ],
    locationsLabel: "BIZNI TOPING",
    locationsTitle: "Turon Odob-Ilm bilan bog‘laning.",
    locationsText:
      "Filiallarimiz bilan tanishing yoki o‘zingizga yaqin lokatsiyani xaritada oching.",
    locationSummary: "ta lokatsiya",
    branchLabel: "FILIAL",
    branchAddresses: [
      "Farg‘ona viloyati, Furqat tumani, Yangi MFY, Surpa, 405-uy",
      "Qo‘qon shahri, Shohruhobod ko‘chasi",
      "O‘zbekiston tumani, Yaypan, Ziyokor ko‘chasi",
      "Oltiariq tumani, Qapchug‘ay MFY",
    ],
    mapLink: "Xaritada ko‘rish",
    mapAria: "filialini xaritada ochish",
    form: "Qabul uchun ariza",
    formText:
      "Ma’lumotlaringizni qoldiring, maktab jamoasi siz bilan bog‘lanadi.",
    select: "Tanlang",
    languages: ["O‘zbekcha", "Ruscha"],
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
    contact: "ALOQA",
    navigation: "NAVIGATSIYA",
    footerSchool: "Maktab haqida",
    footerResults: "Natijalar",
    footerAdmission: "Qabulga ariza",
    footerLicense: "Litsenziya",
  },
  ru: {
    nav: ["Школа", "Образование", "Результаты", "Жизнь", "Приём", "Контакты"],
    mainNavigation: "Основная навигация",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    heroEyebrow: "Лицензированная частная школа Ферганской области",
    heroImageAlt: "Ученики Turon Odob-Ilm",
    hero: "Знания, воспитание и будущее — в одной школе.",
    intro:
      "Школа, где академические знания, современные навыки и воспитание развиваются вместе.",
    apply: "Подать заявку",
    about: "О школе",
    factLabels: ["Год основания", "Классы", "Лицензия", "Языки обучения"],
    why: "Почему Turon Odob-Ilm?",
    whyText:
      "Ребёнку нужны не только знания. Мы соединяем знания, воспитание и навыки будущего.",
    valueCards: [
      {
        title: "Современное образование",
        text: "Развиваем знания и навыки, необходимые сегодня.",
      },
      {
        title: "Воспитание",
        text: "Соединяем знания с практикой, уважением и ответственностью.",
      },
      {
        title: "Английский язык",
        text: "Связываем изучение языка с общением и новыми возможностями.",
      },
      {
        title: "IT и программирование",
        text: "Развиваем цифровую грамотность и интерес к технологиям.",
      },
      {
        title: "Самостоятельное мышление",
        text: "Поощряем вопросы, поиск и обоснованные решения.",
      },
      {
        title: "Активная жизнь",
        text: "Создаём возможности для команды, творчества и активности.",
      },
    ],
    missionLabel: "НАШ ВЗГЛЯД",
    missionTitle: "Знания, воспитание и будущее — в одной школе.",
    missionValues: [
      {
        title: "Знания",
        text: "Прочная академическая основа и интерес к учёбе.",
      },
      {
        title: "Воспитание",
        text: "Уважение, ответственность и хорошие ежедневные привычки.",
      },
      {
        title: "Будущее",
        text: "Самостоятельное мышление и современные навыки.",
      },
    ],
    trustLabel: "ДОВЕРИЕ",
    trustTitle: "Познакомьтесь со школьной средой.",
    trustText: "Здание школы и занятия наших учеников.",
    slideCaptions: ["Здание школы", "Занятия в компьютерном классе"],
    previousSlide: "Предыдущее фото",
    nextSlide: "Следующее фото",
    programs: "Образовательные программы",
    programLabel: "ЭТАПЫ ОБУЧЕНИЯ",
    programIntro:
      "Каждый этап соответствует возрасту ученика и его дальнейшему развитию.",
    gradeLabel: "классы",
    programCards: [
      {
        title: "Начальное образование",
        text: "Основа для базовых знаний, интереса к учёбе и полезных привычек.",
      },
      {
        title: "Общее среднее образование",
        text: "Углубление межпредметного мышления, языковых и цифровых навыков.",
      },
      {
        title: "Старшие классы",
        text: "Самостоятельные решения, академическая подготовка и выбор дальнейшего пути.",
      },
    ],
    results: "Наши результаты",
    resultText:
      "Результаты учеников на международных экзаменах и предметных олимпиадах.",
    resultLabel: "ПО ДАННЫМ ШКОЛЫ",
    resultNote:
      "Показатели приведены на основании информации, предоставленной школой.",
    resultCards: [
      {
        metric: "900+",
        title: "Результаты CEFR",
        text: "Ученики, получившие сертификаты на экзаменах CEFR.",
      },
      {
        metric: "100+",
        title: "Результаты IELTS",
        text: "Ученики, получившие результаты экзамена IELTS.",
      },
      {
        metric: "5+",
        title: "Результаты SAT",
        text: "Ученики, получившие результаты экзамена SAT.",
      },
      {
        metric: "Много",
        title: "Олимпиадные достижения",
        text: "Призовые места на предметных олимпиадах.",
      },
    ],
    details: "Подробнее",
    life: "Жизнь школы",
    lifeText: "Уроки, общение, мероприятия и повседневная жизнь школы.",
    galleryLabel: "Галерея школьной жизни",
    galleryCaptions: [
      "Здание школы",
      "Компьютерный класс",
      "Учебный процесс",
      "Занятие по IT",
    ],
    faq: "Частые вопросы",
    faqLabel: "ЧАСТЫЕ ВОПРОСЫ",
    faqs: [
      [
        "Где расположены филиалы школы?",
        "Адреса филиалов в Фуркате, Коканде, Яйпане и Алтыарыке указаны в разделе локаций.",
      ],
      [
        "В какие классы ведётся приём?",
        "Школа обучает с 1-го по 11-й класс. Уточнить условия приёма можно у команды школы.",
      ],
      [
        "На каких языках ведётся обучение?",
        "Обучение доступно на узбекском и русском языках.",
      ],
    ],
    processLabel: "ПРОЦЕСС ПОСТУПЛЕНИЯ",
    processTitle: "Начнём следующий шаг вместе.",
    processText:
      "Оставьте заявку — команда школы свяжется с вами и расскажет о дальнейших шагах.",
    processSteps: [
      {
        title: "Отправка заявки",
        text: "Оставьте основную информацию о родителе и ребёнке.",
      },
      {
        title: "Связь с вами",
        text: "Команда школы свяжется с вами и ответит на вопросы.",
      },
      {
        title: "Следующий этап",
        text: "Мы объясним порядок и дальнейшие шаги поступления.",
      },
    ],
    locationsLabel: "КАК НАС НАЙТИ",
    locationsTitle: "Свяжитесь с Turon Odob-Ilm.",
    locationsText:
      "Познакомьтесь с филиалами или откройте ближайшую локацию на карте.",
    locationSummary: "локации",
    branchLabel: "ФИЛИАЛ",
    branchAddresses: [
      "Ферганская область, Фуркатский район, махалля Янги, Сурпа, дом 405",
      "Город Коканд, улица Шохрухобод",
      "Узбекистанский район, Яйпан, улица Зиёкор",
      "Алтыарыкский район, махалля Капчугая",
    ],
    mapLink: "Открыть на карте",
    mapAria: "открыть на карте",
    form: "Заявка на приём",
    formText: "Оставьте контакты — команда школы свяжется с вами.",
    select: "Выберите",
    languages: ["Узбекский", "Русский"],
    send: "Отправить заявку",
    sending: "Отправка…",
    success: "Заявка принята. Мы скоро свяжемся с вами.",
    error: "Не удалось отправить заявку. Попробуйте ещё раз.",
    parent: "Имя родителя",
    phone: "Номер телефона",
    child: "Имя ребёнка",
    grade: "Класс",
    language: "Язык обучения",
    branch: "Филиал",
    message: "Комментарий",
    contact: "КОНТАКТЫ",
    navigation: "НАВИГАЦИЯ",
    footerSchool: "О школе",
    footerResults: "Результаты",
    footerAdmission: "Заявка на приём",
    footerLicense: "Лицензия",
  },
  en: {
    nav: ["School", "Education", "Results", "Life", "Admission", "Contact"],
    mainNavigation: "Main navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    heroEyebrow: "Licensed private school in Fergana region",
    heroImageAlt: "Turon Odob-Ilm students",
    hero: "Knowledge, character and future — in one school.",
    intro:
      "A school where academic confidence, modern skills and character grow together.",
    apply: "Apply for admission",
    about: "About the school",
    factLabels: ["Founded", "Grades", "License", "Languages"],
    why: "Why Turon Odob-Ilm?",
    whyText:
      "A child needs more than knowledge. We bring knowledge, character and future skills together.",
    valueCards: [
      {
        title: "Modern education",
        text: "We build knowledge and skills for today's world.",
      },
      {
        title: "Strong character",
        text: "We pair learning with practice, respect and responsibility.",
      },
      {
        title: "English",
        text: "We connect language learning with communication and new opportunities.",
      },
      {
        title: "IT and programming",
        text: "We grow digital literacy and curiosity about technology.",
      },
      {
        title: "Independent thinking",
        text: "We encourage questions, exploration and thoughtful decisions.",
      },
      {
        title: "An active life",
        text: "We create opportunities for teamwork, creativity and activity.",
      },
    ],
    missionLabel: "OUR VISION",
    missionTitle: "Knowledge, character and future — in one school.",
    missionValues: [
      {
        title: "Knowledge",
        text: "A strong academic foundation and a love of learning.",
      },
      {
        title: "Character",
        text: "Respect, responsibility and positive daily habits.",
      },
      { title: "The future", text: "Independent thinking and modern skills." },
    ],
    trustLabel: "TRUST",
    trustTitle: "Take a closer look at our school.",
    trustText: "A look at our school building and students' everyday learning.",
    slideCaptions: ["School building", "Learning in the computer lab"],
    previousSlide: "Previous photo",
    nextSlide: "Next photo",
    programs: "Education programmes",
    programLabel: "LEARNING PATHWAYS",
    programIntro:
      "Each stage is designed for students' age and continued growth.",
    gradeLabel: "grades",
    programCards: [
      {
        title: "Primary education",
        text: "A foundation for core knowledge, curiosity and strong habits.",
      },
      {
        title: "Middle school",
        text: "Deeper interdisciplinary thinking, language and digital skills.",
      },
      {
        title: "Senior grades",
        text: "Independent decisions, academic preparation and next-step guidance.",
      },
    ],
    results: "Our results",
    resultText:
      "Our students' outcomes in international exams and academic olympiads.",
    resultLabel: "SCHOOL-REPORTED RESULTS",
    resultNote: "Figures are based on information provided by the school.",
    resultCards: [
      {
        metric: "900+",
        title: "CEFR results",
        text: "Students who have earned CEFR exam certificates.",
      },
      {
        metric: "100+",
        title: "IELTS results",
        text: "Students with IELTS exam results.",
      },
      {
        metric: "5+",
        title: "SAT results",
        text: "Students with SAT exam results.",
      },
      {
        metric: "Many",
        title: "Olympiad achievements",
        text: "Prize-winning places in subject olympiads.",
      },
    ],
    details: "Learn more",
    life: "School life",
    lifeText: "Lessons, conversations, events and everyday moments at school.",
    galleryLabel: "School life gallery",
    galleryCaptions: [
      "School building",
      "Computer lab",
      "Classroom learning",
      "IT lesson",
    ],
    faq: "Frequently asked questions",
    faqLabel: "FREQUENTLY ASKED QUESTIONS",
    faqs: [
      [
        "Where are the school branches?",
        "Our locations in Furqat, Kokand, Yaypan and Oltiariq are listed in the locations section.",
      ],
      [
        "Which grades can apply?",
        "The school teaches grades 1–11. Contact the school team for admission requirements.",
      ],
      [
        "Which languages are offered?",
        "Education is available in Uzbek and Russian.",
      ],
    ],
    processLabel: "ADMISSIONS PROCESS",
    processTitle: "Let's take the next step together.",
    processText:
      "Send an application and the school team will contact you about the next steps.",
    processSteps: [
      {
        title: "Submit an application",
        text: "Share basic details about the parent and child.",
      },
      {
        title: "We get in touch",
        text: "The school team will contact you and answer your questions.",
      },
      {
        title: "Next steps",
        text: "We will explain the admissions process and what comes next.",
      },
    ],
    locationsLabel: "FIND US",
    locationsTitle: "Get in touch with Turon Odob-Ilm.",
    locationsText:
      "Explore our branches or open the nearest location on the map.",
    locationSummary: "locations",
    branchLabel: "BRANCH",
    branchAddresses: [
      "405 Surpa, Yangi MFY, Furqat district, Fergana region",
      "Shohruhobod Street, Kokand",
      "Ziyokor Street, Yaypan, Uzbekistan district",
      "Qapchug‘ay MFY, Oltiariq district",
    ],
    mapLink: "View on map",
    mapAria: "open branch on the map",
    form: "Admission application",
    formText: "Share your details and our school team will contact you.",
    select: "Choose",
    languages: ["Uzbek", "Russian"],
    send: "Submit application",
    sending: "Submitting…",
    success: "Your application was received. We will be in touch soon.",
    error: "Could not send the application. Please try again.",
    parent: "Parent name",
    phone: "Phone number",
    child: "Child name",
    grade: "Grade",
    language: "Language of instruction",
    branch: "Branch",
    message: "Message",
    contact: "CONTACT",
    navigation: "NAVIGATION",
    footerSchool: "About the school",
    footerResults: "Results",
    footerAdmission: "Admission application",
    footerLicense: "License",
  },
};

export type PageType = "maktab";

type InnerPageCopy = {
  label: string;
  kicker: string;
  title: string;
  body: string;
  sections: Array<[string, string]>;
};

type InnerCopy = {
  nav: string[];
  mainNavigation: string;
  menuOpen: string;
  menuClose: string;
  language: string;
  apply: string;
  back: string;
  learnAdmission: string;
  introTitle: string;
  nextLabel: string;
  nextTitle: string;
  footer: string;
  pages: Record<PageType, InnerPageCopy>;
};

export const innerTranslations: Record<Language, InnerCopy> = {
  uz: {
    nav: ["Maktab", "Ta’lim", "Natijalar", "Hayot", "Qabul", "Aloqa"],
    mainNavigation: "Asosiy navigatsiya",
    menuOpen: "Menyuni ochish",
    menuClose: "Menyuni yopish",
    language: "Tilni tanlang",
    apply: "Qabulga ariza berish",
    back: "Bosh sahifa",
    learnAdmission: "Qabul haqida bilish",
    introTitle: "Ta’limga jiddiy, bolaga e’tibor bilan.",
    nextLabel: "KEYINGI QADAM",
    nextTitle: "Farzandingiz kelajagini birgalikda boshlaymiz.",
    footer: "© 2026 Turon Odob-Ilm",
    pages: {
      maktab: {
        label: "Maktab haqida",
        kicker: "01 / TURON ODOB-ILM",
        title: "Bilimga mehr. Odobga tayanch.",
        body: "Turon Odob-Ilm — Farg‘ona viloyatidagi litsenziyalangan xususiy maktab. Biz akademik bilim, zamonaviy ko‘nikma va go‘zal tarbiya uyg‘unligini yaratamiz.",
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
    },
  },
  ru: {
    nav: [
      "Школа",
      "Обучение",
      "Результаты",
      "Жизнь",
      "Поступление",
      "Контакты",
    ],
    mainNavigation: "Основная навигация",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    language: "Выберите язык",
    apply: "Подать заявку",
    back: "Главная",
    learnAdmission: "Подробнее о поступлении",
    introTitle: "Серьёзно к обучению, внимательно к каждому ребёнку.",
    nextLabel: "СЛЕДУЮЩИЙ ШАГ",
    nextTitle: "Начнём будущее вашего ребёнка вместе.",
    footer: "© 2026 Turon Odob-Ilm",
    pages: {
      maktab: {
        label: "О школе",
        kicker: "01 / TURON ODOB-ILM",
        title: "Любовь к знаниям. Основа воспитания.",
        body: "Turon Odob-Ilm — лицензированная частная школа в Ферганской области. Мы объединяем академические знания, современные навыки и воспитание.",
        sections: [
          [
            "Наша миссия",
            "Воспитать поколение с современными знаниями, сильным характером и широким кругозором.",
          ],
          [
            "Официальная информация",
            "1–11 классы · Узбекский / русский языки · Лицензия №038782 · 14.09.2022",
          ],
          [
            "Наш подход",
            "Индивидуальное внимание каждому ученику, открытое общение и условия для ежедневного развития.",
          ],
        ],
      },
    },
  },
  en: {
    nav: ["School", "Education", "Results", "Life", "Admission", "Contact"],
    mainNavigation: "Main navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    language: "Choose language",
    apply: "Apply for admission",
    back: "Home",
    learnAdmission: "Learn about admission",
    introTitle:
      "High standards in learning, personal attention for every child.",
    nextLabel: "NEXT STEP",
    nextTitle: "Let's build your child's future together.",
    footer: "© 2026 Turon Odob-Ilm",
    pages: {
      maktab: {
        label: "About the school",
        kicker: "01 / TURON ODOB-ILM",
        title: "A love of learning. A foundation in character.",
        body: "Turon Odob-Ilm is a licensed private school in Fergana region. We bring academic knowledge, modern skills and strong character education together.",
        sections: [
          [
            "Our mission",
            "To raise a generation with modern knowledge, strong character and a broad outlook.",
          ],
          [
            "Official information",
            "Grades 1–11 · Uzbek / Russian · License No. 038782 · 14 Sep 2022",
          ],
          [
            "Our approach",
            "Individual attention, open communication and an environment for daily growth.",
          ],
        ],
      },
    },
  },
};
