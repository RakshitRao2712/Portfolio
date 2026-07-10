import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">K.dev</div>
        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#experience" className="footer-link">Experience</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="Twitter"><FaTwitter /></a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Krish. All rights reserved. Designed & Engineered with 💜.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
