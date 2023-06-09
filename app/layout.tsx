import './globals.css'
import './anim.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TeachBoard',
  description: 'TeachBoard Manage your classroom, students, and lessons.',
  keywords: 'TeachBoard, classroom, students, lessons, teachers, education,Manage your classroom, students, and lessons.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
