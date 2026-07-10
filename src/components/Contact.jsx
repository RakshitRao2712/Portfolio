import React from 'react';
import ContactStackCarousel from './ui/card-fan-carousel';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Open to freelance, full-stack contracts, and exciting collaborations. Pick a platform below.
          </p>
        </div>

        <div className="contact-fan-centered reveal reveal-delay-1">
          <ContactStackCarousel />
        </div>
      </div>
    </section>
  );
};

export default Contact;
