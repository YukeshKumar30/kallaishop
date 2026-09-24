import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import GiftCenter from './components/GiftCenter'
import Photography from './components/Photography'
import EventManagement from './components/EventManagement'
import Gallery from './components/Gallery'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <About />
        <GiftCenter />
        <Photography />
        <EventManagement />
        <Gallery />
        <WhyChooseUs />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <FloatingContact />
      <BackToTop />
    </div>
  )
}
