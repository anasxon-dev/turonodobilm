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

export const results = [
  { type: 'Ta’lim falsafasi', title: 'Bilim + odob', text: 'Natija biz uchun faqat raqam emas: bilim, mas’uliyat va mustaqil fikrning kundalik rivoji.' },
  { type: 'Rasmiy ma’lumot', title: 'Litsenziyalangan maktab', text: 'Turon Odob-Ilm 2022-yildan buyon Farg‘ona viloyatida faoliyat yuritadi.' },
]

export const faqs = [
  ['Maktab qayerda joylashgan?', 'Farg‘ona viloyati, Furqat tumani, Yangi MFY, Surpa, 405-uy.'],
  ['Qaysi sinflarga qabul qilinadi?', 'Maktab 1–11-sinflar uchun ta’lim beradi. Aniq qabul shartlari bo‘yicha maktab jamoasi bilan bog‘laning.'],
  ['Ta’lim tillari qaysilar?', 'O‘zbek va rus tillarida ta’lim yo‘nalishlari mavjud.'],
]

export const gallery = [
  ['Maktab binosi', 'https://turonodobilm.lovable.app/__l5e/assets-v1/c52ef57e-b881-4689-b826-c79c58a94d75/facade.jpg'],
  ['Dars jarayoni', 'https://turonodobilm.lovable.app/__l5e/assets-v1/409c4bac-440f-4dc4-91d2-6e9d44e736bb/classroom-branded.jpg'],
  ['IT mashg‘uloti', 'https://turonodobilm.lovable.app/__l5e/assets-v1/625d969e-2ece-4ecd-a9fa-87321c5d84cc/it-lab-active.jpg'],
]

export const officialContact = { phone: '+998 55 808 55 75', telegram: 'https://t.me/turonodobilm', address: 'Farg‘ona viloyati, Furqat tumani, Yangi MFY, Surpa, 405-uy' }
export const languages = { uz: 'O‘zbekcha', ru: 'Русский', en: 'English' }
export type Language = keyof typeof languages
