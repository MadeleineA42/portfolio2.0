import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Nav';
import Header from './components/Jumbotron/Header';
import About from './components/AboutMe/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <Header />
      <section id="about">
        <About />
        </section>
      <section id="contact">
        <Contact />
        </section>
      <section id="portfolio">
        <Portfolio />
        </section>
      <section id="resume">
        <Resume />
        </section>

      <Footer />



    </div>
  )
}

export default App
