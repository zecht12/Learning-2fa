import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './_components/navbar'

const inter = Poppins({ 
  subsets: ["latin",]
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}