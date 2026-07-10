import React from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import { TimelineDemo } from './components/About.tsx';
import ParallaxSection from './components/ParallaxSection.tsx';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience.tsx';
import { CanvasTextDemo } from './components/CanvasTextDemo';
import { CoverDemo } from './components/CoverDemo';

import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CardCarousel from './components/CardCarousel.tsx';
import { MacbookScrollDemo } from './components/MacbookScrollDemo';
import { FocusCardsDemo } from './components/FocusCardsDemo';
import { AnimatedPinDemo } from './components/AnimatedPinDemo';
import SocialTooltipDemo from './components/SocialTooltipDemo';
import { EncryptedTextDemoSecond } from './components/EncryptedTextDemoSecond';
import GtaViPosterDemo from './components/ui/gta-vi-poster.tsx';
import DemoOne from './components/DemoOne';
import { TextFlippingBoardDemo } from './components/TextFlippingBoardDemo';
import TitleComponent from './components/ui/dynamic-text-slider';

import './App.css';

function SectionReveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="app-container dark" data-theme="dark">
      <Header />
      <main>
        <Hero />
        <SectionReveal><CoverDemo /></SectionReveal>
        <SectionReveal><ParallaxSection /></SectionReveal>
        <SectionReveal><CanvasTextDemo /></SectionReveal>
        <div id="experience"><SectionReveal><TimelineDemo /></SectionReveal></div>
        <div id="skills"><SectionReveal><MacbookScrollDemo /></SectionReveal></div>
        <SectionReveal><TitleComponent /></SectionReveal>
        <div id="projects"><SectionReveal><FocusCardsDemo /></SectionReveal></div>
        <SectionReveal><AnimatedPinDemo /></SectionReveal>
        <div id="contact"><SectionReveal><DemoOne /></SectionReveal></div>
        <SectionReveal><TextFlippingBoardDemo /></SectionReveal>



        <SectionReveal><GtaViPosterDemo /></SectionReveal>



        {/* <Skills />
        <Projects />
        <Experience />
        <Contact />
        <CardCarousel /> */}
      </main>

    </div>
  );
}

export default App;
