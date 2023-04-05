import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import NextNProgress from "nextjs-progressbar"

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="p-2 container mx-auto font-sans">
        <NextNProgress color="#53BD95" />
        <Navbar />
        <main className="pb-32">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
