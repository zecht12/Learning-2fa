import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import SettingNavbar from '@/components/shared/setting-navbar'

const inter = Poppins({
  subsets: ["latin"],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Generated by create next app',
}

export default async function ProtectedSettings({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <SettingNavbar />
        {children}
      </body>
    </html>
  )
}