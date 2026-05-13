import type { Metadata } from 'next'
import { Great_Vibes, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const greatVibes = Great_Vibes({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script"
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: 'Нұрсара - Қыз Ұзату | 26 Маусым 2026',
  description: 'Нұрсараның қыз ұзату тойына шақырамыз!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="kk" className={`${greatVibes.variable} ${cormorant.variable}`}>
      <body className="font-serif antialiased bg-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
