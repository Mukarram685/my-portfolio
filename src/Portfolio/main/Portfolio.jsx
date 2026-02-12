import React from 'react';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Footer from '../footer/Footer';

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Projects />
      <Footer />
    </div>
  );
};

export default Portfolio;