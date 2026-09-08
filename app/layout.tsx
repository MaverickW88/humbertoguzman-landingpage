import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Newsreader } from 'next/font/google'
import { profile, links } from '@/lib/content'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: 'Humberto Guzmán | Technical Program Manager, AI Products and Transformation',
  description:
    'Technical Program Manager working across technology, product, AI transformation, and cross-functional delivery. Explore Humberto Guzmán\u2019s experience and independent AI products.',
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: profile.siteUrl,
    title: 'Humberto Guzmán | Technical Program Manager, AI Products and Transformation',
    description:
      'Technical Program Manager working across technology, product, AI transformation, and cross-functional delivery.',
    siteName: 'Humberto Guzmán',
    images: [{ url: '/images/humberto-portrait.jpg', width: 1200, height: 1500, alt: 'Humberto Guzmán' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Humberto Guzmán | Technical Program Manager, AI Products and Transformation',
    description:
      'Technical Program Manager working across technology, product, AI transformation, and cross-functional delivery.',
    images: ['/images/humberto-portrait.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f5ef',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Humberto Guzmán',
  jobTitle: 'Technical Program Manager',
  description:
    'Technical Program Manager working across technology, product, AI transformation, and cross-functional delivery.',
  url: profile.siteUrl,
  worksFor: { '@type': 'Organization', name: 'Ford Motor Company' },
  address: { '@type': 'PostalAddress', addressLocality: 'Mexico City', addressCountry: 'MX' },
  sameAs: [links.linkedin, links.github],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light bg-background ${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
