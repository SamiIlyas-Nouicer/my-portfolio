import "./App.css"
import { NavBar } from "./components/NavBar"
import StarsCanvas from "./components/canvas/stars"
import Hero from "./components/Hero"
// In your main entry file (e.g., index.js or App.js)
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import About from "./components/About"
import Education from "./components/Education"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation (ms)
      once: true, // Whether animation should happen only once while scrolling down
      // Add any other global settings here
    })
  }, [])
  return (
    <div className="App min-h-screen relative z-0 p-10">
      <NavBar />
      <Hero />
      <About />
      <Education />
      <StarsCanvas />
    </div>
  )
}

export default App
