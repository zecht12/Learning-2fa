import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/shared/navbar'
import Sidebar from '@/components/shared/sidebar'

const inter = Poppins({
  subsets: ["latin"],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Home',
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
        <Sidebar/>
        {children}
      </body>
    </html>
  )
}