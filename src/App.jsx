
import TargetCursor from './components/cursor/TargetCursor'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <TargetCursor spinDuration={2} hideDefaultCursor={true}/>
      <Navbar/>
      <Hero/>
      
    </div>
  )
}

export default App