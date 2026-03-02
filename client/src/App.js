import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>UH</h2>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
          <a href="#contact" className="nav-cta-btn">Let's Talk</a>
          <div className="nav-toggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
      
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <h3 className="footer-title">Umme Habiba — UI/UX Designer</h3>
            <div className="footer-links">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>
          <div className="footer-social">
            <a 
              href="https://www.behance.net/ummehabeeba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              Behance
            </a>
            <a 
              href="mailto:mhabeeba2004@gmail.com"
              className="social-link"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
