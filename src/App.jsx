import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import AOS from 'aos';
import Featured from './components/Featured'
import Cards from './components/Cards'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Testimonial from './components/Testimonial'
import Pricing from './components/Pricing'
/* import Faq from './components/Faq' */
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Featured />
      <Cards />
      <Features />
      <Gallery />
      <Testimonial />
      <Pricing />
      {/* <Faq /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
