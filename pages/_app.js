import 'tailwindcss/tailwind.css'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto mb-5 md:mb-10">
        <Header />
      </div>
      <Component {...pageProps} />
      <div className="container mx-auto mb-10">
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
