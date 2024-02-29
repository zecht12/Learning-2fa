import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'

const inter = Poppins({
  subsets: ["latin"],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'zecht',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}