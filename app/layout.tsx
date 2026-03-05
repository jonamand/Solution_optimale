import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'Solutions Optimales Sarl | Excellence Multisectorielle en RDC',
  description: 'Solutions Optimales Sarl (SOPt.) - Entreprise multidisciplinaire en RDC. Gestion & Finances, Agri-business, Protection Humanitaire, Solutions Numeriques, Logistique et Mobilite.',
  keywords: ['Solutions Optimales', 'SOPt', 'RDC', 'Congo', 'business plan', 'agri-business', 'solutions numeriques', 'logistique', 'Danaisha', 'Kinshasa'],
  openGraph: {
    title: 'Solutions Optimales Sarl | Excellence Multisectorielle en RDC',
    description: 'Votre partenaire de confiance en gestion, agri-business, protection humanitaire, solutions numeriques, logistique et mobilite en Republique Democratique du Congo.',
    type: 'website',
    locale: 'fr_CD',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
