import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    id: 1,
    quote: 'Krish is an exceptional developer who combines top-tier technical skills with a keen eye for user experience. His implementation of our dashboard redesign changed how our team works.',
    name: 'Sarah Jenkins',
    role: 'CEO of TechVantage',
    initials: 'SJ',
  },
  {
    id: 2,
    quote: 'Working with Krish was a flawless process. He delivered ahead of schedule, structured the codebase beautifully, and went above and beyond to ensure our SEO was completely optimized.',
    name: 'Marcus Aurelius',
    role: 'Product Manager',
    initials: 'MA',
  },
  {
    id: 3,
    quote: 'Krish took our vague concept and delivered a production-ready product in just 6 weeks. His communication was clear, code quality was outstanding, and the final result exceeded all expectations.',
    name: 'Lena Park',
    role: 'Founder, CloudSprint',
    initials: 'LP',
  },
];

function ReviewCard({ review, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.7, delay: index * 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: cardRef.current, start: 'top 88%', once: true },
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} className="rev-card">
      {/* Quote mark */}
      <span className="rev-quote-mark">"</span>

      <p className="rev-text">{review.quote}</p>

      <div className="rev-author">
        <div className="rev-avatar">{review.initials}</div>
        <div className="rev-author-info">
          <span className="rev-name">{review.name}</span>
          <span className="rev-role">{review.role}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const headingRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;
    const words = headingRef.current.querySelectorAll('.rev-word');
    gsap.fromTo(words,
      { opacity: 0, y: 50, skewY: 3 },
      {
        opacity: 1, y: 0, skewY: 0,
        duration: 0.75, stagger: 0.08, ease: 'power4.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true },
      }
    );
  }, []);

  return (
    <section className="section rev-section" id="testimonials">
      <div className="container">

        <div className="rev-header">
          <div className="rev-badge">
            <span className="rev-badge-dot" /> Feedback
          </div>

          <h2 ref={headingRef} className="rev-heading">
            {['Client', 'Reviews'].map((w, i) => (
              <span key={i} className="rev-word-wrap"><span className="rev-word">{w}</span></span>
            ))}
          </h2>

          <p className="rev-subtitle">
            Here's what business owners and product managers say about working with me.
          </p>
        </div>

        <div className="rev-grid">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
