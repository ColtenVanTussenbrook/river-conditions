import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from './components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'River Conditions',
  description: 'Easiest way to see current flows on rivers in the US',
}

// Since this is a core nextjs file, we'll allow it
// eslint-disable-next-line react/function-component-definition
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
