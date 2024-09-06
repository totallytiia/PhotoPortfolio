import { AnimatePresence, motion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Featured from './components/portfolio/Featured';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';


function App() {

  const [activeSection, setActiveSection] = useState('');

  const spring = {
    stiffness: 160,
    damping: 15,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };



  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2 * 0.25);
    const targetY = clientY - (window.innerWidth / 2 * 0.30);
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  }

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      if (sections) {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      }
    };
  }, []);

  return (
    <AnimatePresence>
      <div className=''>
        <Navbar activeSection={activeSection} />

        <motion.section id='hero' className='h-[100vh] snap-end'>
          <Hero mouseMove={mouseMove} />
        </motion.section>

        <motion.section id='portfolio' className='h-[300vh] snap-start'>
          <Portfolio mouseMove={mouseMove} />
        </motion.section>

        <motion.section id='featured' className='h-[480vh] snap-start'>
          <Featured mouseMove={mouseMove} mousePosition={mousePosition} />
        </motion.section>

        <motion.section id='services' className='h-[100vh] snap-start'>
          <Services mouseMove={mouseMove} mousePosition={mousePosition} />
        </motion.section>

        <motion.section id='contact' className='h-screen snap-start'>
          <Contact mouseMove={mouseMove} mousePosition={mousePosition} />
        </motion.section>
      </div >
    </AnimatePresence >
  );
}

export default App;
