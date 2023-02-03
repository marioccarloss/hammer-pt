import { ReactNode } from 'react'
import { Navigation } from './components/navigation/Navigation'
import { Nunito } from '@next/font/google'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

const nunito = Nunito({
  variable: '--font-primary',
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
});

export default function RootLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang='es' className={`${nunito.variable} font-primary`}>
      <head />
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
