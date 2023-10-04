import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/NavBar'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <NavBar />

        {children}
      </body>
    </html>
  )
}
