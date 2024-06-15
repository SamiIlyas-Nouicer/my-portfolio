import "./App.css"
import { NavBar } from "./components/NavBar"
import Tech from "./components/Tech"
import Hero from "./pages/Hero"

function App() {
  return (
    <div className="bg-blue-950 min-h-screen">
      <NavBar />
      <Hero />
      <Tech />
    </div>
  )
}

export default App
