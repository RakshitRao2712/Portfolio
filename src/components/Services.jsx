import React from 'react';
import { FaGlobe, FaNetworkWired, FaTachometerAlt, FaPaintBrush } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Services Offered</h2>
          <p className="section-subtitle">
            Tailored engineering solutions to bring ideas to production with performance and premium design.
          </p>
        </div>
        
        <div className="services-grid reveal reveal-delay-1">
          {/* Service 1 */}
          <div className="service-card glass-panel">
            <div className="service-icon">
              <FaGlobe />
            </div>
            <h3 className="service-title">Single & Multi-Page Apps</h3>
            <p className="service-description">
              Modern, highly responsive, and robust websites crafted cleanly in React/Next.js frameworks and detailed custom CSS.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="service-card glass-panel">
            <div className="service-icon">
              <FaNetworkWired />
            </div>
            <h3 className="service-title">API Development</h3>
            <p className="service-description">
              Custom high-efficiency GraphQL or REST APIs, data storage schemas, webhook workers, and oauth security modules.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="service-card glass-panel">
            <div className="service-icon">
              <FaTachometerAlt />
            </div>
            <h3 className="service-title">Performance Tuning</h3>
            <p className="service-description">
              Asset optimization, code splitting, cleaning up rendering blocking JS codes to maximize Core Web Vitals and SEO.
            </p>
          </div>
          
          {/* Service 4 */}
          <div className="service-card glass-panel">
            <div className="service-icon">
              <FaPaintBrush />
            </div>
            <h3 className="service-title">UI/UX Glassmorphism</h3>
            <p className="service-description">
              Designing fluid visual systems with soft lighting, frosted glass card properties, and seamless interactive behaviors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
