import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'

import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import HeroSectionCentredWithImage from './components/HeroSection'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroSectionCentredWithImage />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
