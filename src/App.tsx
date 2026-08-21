import Header from './components/Header'
import Hero from './components/Hero'
import Works from './components/Works'
import About from './components/About'
import Now from './components/Now'
import Journal from './components/Journal'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <a
        href="#main"
        className="skip-link fixed left-[-999px] top-0 z-[999] bg-ink px-5 py-3 text-bg focus:left-4 focus:top-4"
      >
        本文へスキップ
      </a>
      <Header />
      <main id="main" className="relative z-[2]">
        <Hero />
        <Works />
        <About />
        <Now />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
