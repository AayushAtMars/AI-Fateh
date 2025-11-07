
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import WhatWeDo from './components/what_we_do'
import Footer from './components/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <Footer/>
      <WhatWeDo/>
      
    </div>
  )
}

export default App