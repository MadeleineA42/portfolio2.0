import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Nav';
import About from './components/AboutMe/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <About />

    </div>
  )
}

export default App
