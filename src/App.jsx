import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingActions from './components/layout/FloatingActions'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Stats from './components/sections/Stats'
import Timeline from './components/sections/Timeline'
import Gallery from './components/sections/Gallery'
import Reviews from './components/sections/Reviews'
import CTA from './components/sections/CTA'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Stats />
        <Timeline />
        <Gallery />
        <Reviews />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
