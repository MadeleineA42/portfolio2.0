import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Nav';
import About from './components/AboutMe/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <About />
      <Contact />
      <Portfolio />
      

    </div>
  )
}

export default App
