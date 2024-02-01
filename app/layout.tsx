import type { Metadata } from 'next'
import './globals.sass'

import { Roboto } from 'next/font/google'

const robotoGoogle = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '300'
})

import Header from '@/components/Header'
import { robotoRegular } from '@/public/fonts'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'next-auth',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className='phone-sm:text-[50%] verticalphone:text-[25%] horizontalphone:text-[37.5%] tablet:text-[50%] laptop-sm:text-[56.25%] laptop:text-[62.5%] monitor:text-[75%] screen:text-[87.5%] leading-normal'>
      <body className={`${robotoRegular} ${robotoGoogle.variable} bg-dark-gray`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
