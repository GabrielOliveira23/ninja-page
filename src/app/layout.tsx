import './globals.css'

import { AppSidebar } from '@/components/app-sidebar'
import { NavBar } from '@/components/nav-bar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: "Ninja's Page",
}

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <Providers>
          <NavBar />
          <AppSidebar />  
          <main className="">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
