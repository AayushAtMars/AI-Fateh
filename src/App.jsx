
import TargetCursor from './components/cursor/TargetCursor'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import WhatWeDo from './components/what_we_do'
import Footer from './components/Footer'
import LogoCloudDemo from './components/LogoCloudDemo'
import MissionVision from './components/MissionVision'



const App = () => {
  return (
    <div>
      <TargetCursor spinDuration={2} hideDefaultCursor={true}/>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <MissionVision/>
      <WhatWeDo/>
      <LogoCloudDemo/>
      <Footer/>
      
    </div>
  )
}

export default App