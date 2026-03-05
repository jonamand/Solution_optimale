import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const viewport: Viewport = {
  themeColor: '#1a365d',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Solutions Optimales Sarl | Visa, Bourses, Traduction, Passeport, Business Plan - Kinshasa RDC',
  description: 'Solutions Optimales Sarl - Votre partenaire en RDC pour visa touristique (Emirats, Chine, Schengen, Turquie, Canada, USA), bourses d\'etudes, traduction de documents, legalisation, passeport et business plan. Kinshasa, RDC.',
  keywords: [
    'Solutions Optimales',
    'visa touristique RDC',
    'visa Kinshasa',
    'bourses etudes Congo',
    'traduction documents Kinshasa',
    'legalisation documents RDC',
    'passeport RDC',
    'business plan Congo',
    'visa Emirats Arabes Unis',
    'visa Chine',
    'visa Schengen',
    'visa Turquie',
    'visa Canada',
    'visa USA',
    'bourses Chine',
    'bourses Japon',
    'bourses Turquie',
    'bourses Canada',
    'traduction anglais francais',
    'Kinshasa',
    'RDC',
    'Congo',
    'SOPt Sarl',
  ],
  openGraph: {
    title: 'Solutions Optimales Sarl | Visa, Bourses, Traduction & Business Plan en RDC',
    description: 'Facilitez vos demarches de visa, bourses d\'etudes, traduction, legalisation, passeport et business plan avec Solutions Optimales Sarl a Kinshasa, RDC.',
    type: 'website',
    locale: 'fr_CD',
    siteName: 'Solutions Optimales Sarl',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions Optimales Sarl | Visa, Bourses & Business Plan - RDC',
    description: 'Visa touristique, bourses d\'etudes, traduction, legalisation et business plan en RDC.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://solutionsoptimales.info',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
