import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

export default function App() {
  const scrollTo = (elementId) => {
    const sectionAnchor = document.querySelector(elementId);
    sectionAnchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar scrollTo={scrollTo} />
      <About scrollTo={scrollTo} />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
