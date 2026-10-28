import Link from 'next/link'

export default function NotFound() {
  return <main className="not-found"><img src="/turon-logo.png" alt="Turon Odob-Ilm" /><p className="section-label">404 / SAHIFA TOPILMADI</p><h1>Bu sahifa mavjud emas.</h1><p>Manzilni tekshiring yoki bosh sahifaga qayting.</p><Link className="button button-gold" href="/">Bosh sahifaga qaytish</Link></main>
}
