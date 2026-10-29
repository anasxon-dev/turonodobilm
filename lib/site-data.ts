export const schoolFacts = [
  ['2022', 'Tashkil topgan yil'],
  ['1–11', 'Sinflar'],
  ['№038782', 'Litsenziya'],
  ['UZ / RU', 'Ta’lim tillari'],
]

export const programs = [
  { range: '1–4', title: 'Boshlang‘ich ta’lim', text: 'Asosiy bilimlar, o‘qishga qiziqish va mustahkam odatlar uchun poydevor.', image: 'https://turonodobilm.lovable.app/__l5e/assets-v1/8fe23003-d3f0-403b-aa12-1bbbbc5481cf/students-attentive.jpg' },
  { range: '5–9', title: 'Umumiy o‘rta ta’lim', text: 'Fanlararo fikrlash, til va raqamli ko‘nikmalarni chuqurlashtirish.', image: 'https://turonodobilm.lovable.app/__l5e/assets-v1/409c4bac-440f-4dc4-91d2-6e9d44e736bb/classroom-branded.jpg' },
  { range: '10–11', title: 'Yuqori sinflar', text: 'Mustaqil qaror, akademik tayyorgarlik va keyingi bosqichga yo‘nalish.', image: 'https://turonodobilm.lovable.app/__l5e/assets-v1/625d969e-2ece-4ecd-a9fa-87321c5d84cc/it-lab-active.jpg' },
]

export const schoolImages = {
  hero: 'https://turonodobilm.lovable.app/__l5e/assets-v1/8fe23003-d3f0-403b-aa12-1bbbbc5481cf/students-attentive.jpg',
  classroom: 'https://turonodobilm.lovable.app/__l5e/assets-v1/409c4bac-440f-4dc4-91d2-6e9d44e736bb/classroom-branded.jpg',
  it: 'https://turonodobilm.lovable.app/__l5e/assets-v1/625d969e-2ece-4ecd-a9fa-87321c5d84cc/it-lab-active.jpg',
  facade: 'https://turonodobilm.lovable.app/__l5e/assets-v1/c52ef57e-b881-4689-b826-c79c58a94d75/facade.jpg',
  parents: 'https://turonodobilm.lovable.app/assets/life-parents-yZ6LsEAW.jpg',
  building: '/school-building.png',
  computerClass: '/computer-class.png',
}

export const results = [
  { type: 'Ta’lim falsafasi', title: 'Bilim + odob', text: 'Natija biz uchun faqat raqam emas: bilim, mas’uliyat va mustaqil fikrning kundalik rivoji.' },
  { type: 'Rasmiy ma’lumot', title: 'Litsenziyalangan maktab', text: 'Turon Odob-Ilm 2022-yildan buyon Farg‘ona viloyatida faoliyat yuritadi.' },
]

export const faqs = [
  ['Maktab qayerlarda joylashgan?', 'Furqat, Qo‘qon, Yaypan va Oltiariqdagi filiallarimiz manzillari lokatsiyalar bo‘limida ko‘rsatilgan.'],
  ['Qaysi sinflarga qabul qilinadi?', 'Maktab 1–11-sinflar uchun ta’lim beradi. Aniq qabul shartlari bo‘yicha maktab jamoasi bilan bog‘laning.'],
  ['Ta’lim tillari qaysilar?', 'O‘zbek va rus tillarida ta’lim yo‘nalishlari mavjud.'],
]

export const gallery = [
  ['Maktab binosi', schoolImages.building],
  ['Kompyuter sinfi', schoolImages.computerClass],
  ['Dars jarayoni', schoolImages.classroom],
  ['IT mashg‘uloti', schoolImages.it],
]

export const officialContact = { phone: '+998 55 808 55 75', telegram: 'https://t.me/turonodobilm', address: 'Farg‘ona viloyati, Furqat tumani, Yangi MFY, Surpa, 405-uy' }
export const branches = [
  {
    name: 'Furqat',
    address: officialContact.address,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=40.47584743%2C70.74656296',
  },
  {
    name: 'Qo‘qon',
    address: 'Qo‘qon shahri, Shohruhobod ko‘chasi',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=40.5186616%2C70.9442254',
  },
  {
    name: 'Yaypan',
    address: 'O‘zbekiston tumani, Yaypan, Ziyokor ko‘chasi',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=40.3643523%2C70.8001028',
  },
  {
    name: 'Oltiariq',
    address: 'Oltiariq tumani, Qapchug‘ay MFY',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=40.4053324%2C71.4678156',
  },
]
export const languages = { uz: 'O‘zbekcha', ru: 'Русский', en: 'English' }
export type Language = keyof typeof languages
