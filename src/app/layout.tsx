import type { Metadata } from 'next'
import { Lora, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pedro Afonso',
  description: 'Frontend developer and Team Lead based in Porto, Portugal. 17 years building for the web.',
  openGraph: {
    title: 'Pedro Afonso',
    description: 'Frontend developer and Team Lead based in Porto, Portugal.',
    siteName: 'Pedro Afonso',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Pedro Afonso',
    description: 'Frontend developer and Team Lead based in Porto, Portugal.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
