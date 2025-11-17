import React from 'react';
import '../src/App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className='mx-auto'>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Education />
    <Projects />
    <Contact />
    <Footer />
    </div>
  );
};

export default App;