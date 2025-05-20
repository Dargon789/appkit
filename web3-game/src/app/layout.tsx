import type { Metadata } from 'next'
import { headers } from 'next/headers'

import ContextProvider from '@/context'

// added
import './globals.css'

export const metadata: Metadata = {
  title: 'AppKit in Next.js + wagmi',
  description: 'AppKit example dApp'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersData = await headers()
  const cookies = headersData.get('cookie')

  return (
    <html lang="en">
      <body>
        <ContextProvider cookies={cookies}>{children}</ContextProvider>
      </body>
    </html>
  )
}
