import 'normalize.css'
import './globals.css'
import { Outfit } from 'next/font/google'
import Header from './components/header/header'
import Footer from './components/footer/footer'

const outFit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'GuitarLA | Inicio',
    template: 'GuitarLA | %s'
  },
  description: 'GuitarLA - Venta de guitarras y blog de música',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outFit.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
