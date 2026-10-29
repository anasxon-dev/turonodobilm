import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Turon Odob-Ilm | Xususiy maktab',
  description: 'Turon Odob-Ilm — zamonaviy bilim, kuchli tarbiya va keng dunyoqarash uyg‘unlashgan xususiy maktab.',
  generator: 'Next.js',
  metadataBase: new URL('https://turonodobilm.lovable.app'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Turon Odob-Ilm | Xususiy maktab',
    description: 'Bilim, odob va kelajak — bir maktabda.',
    type: 'website',
    locale: 'uz_UZ',
    images: [{ url: '/turon-logo.png', alt: 'Turon Odob-Ilm logosi' }],
  },
  icons: { icon: '/turon-logo.png', apple: '/turon-logo.png' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#070b0a', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uz"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
