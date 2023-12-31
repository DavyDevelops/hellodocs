import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import {cn} from '@/lib/utils';
import './globals.css'
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Hello Docs :)',
  description: 'Chat with your PDF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <Providers>
      <body className={cn(
        'min-h-screen font-sans antialiased grainy',
        inter.className
      )}>
        <Navbar/>
        {children}
        </body>
        </Providers>
    </html>
  )
}
