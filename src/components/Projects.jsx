import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import gsap from 'gsap';

/* ── Icons for each project feature ──────────────────────────────────────── */
const icons = {
  collab:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
  shield:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  chart:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  wallet:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
  search:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  store:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
  default:  () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
};

const PROJECTS = [
  {
    id: 1,
    number: '01',
    title: 'DevSpace',
    subtitle: 'Collaborative IDE',
    description: 'A real-time collaborative workspace with live multi-user editing, shared terminal logs, and integrated chat.',
    img: '/projects/devspace.png',
    github: 'https://github.com/Krish-Dev/devspace',
    demo: 'https://devspace-workspace.vercel.app',
    features: [
      { label: 'Multi-user cursor tracking via OT', icon: 'collab' },
      { label: 'Isolated Node.js / Python sandboxes', icon: 'shield' },
      { label: 'End-to-end encrypted team chat', icon: 'default' },
    ],
    tags: ['Next.js', 'WebSockets', 'Redis', 'Monaco'],
  },
  {
    id: 2,
    number: '02',
    title: 'ZenithPay',
    subtitle: 'Financial Dashboard',
    description: 'Sleek fintech dashboard aggregating crypto wallet analytics alongside fiat accounts with instant conversions.',
    img: '/projects/zenithpay.png',
    github: 'https://github.com/Krish-Dev/zenithpay',
    demo: 'https://zenithpay-crypto.vercel.app',
    features: [
      { label: 'Custom responsive allocation charts', icon: 'chart' },
      { label: 'Ethereum & Solana wallet integrations', icon: 'wallet' },
      { label: 'Instant PDF invoices & Stripe Checkout', icon: 'default' },
    ],
    tags: ['React.js', 'TypeScript', 'Chart.js', 'Stripe'],
  },
  {
    id: 3,
    number: '03',
    title: 'PrismaShop',
    subtitle: 'Headless E-Commerce',
    description: 'Blisteringly fast headless store using ISR for instant product updates and sub-10ms Algolia search.',
    img: '/projects/prismashop.png',
    github: 'https://github.com/Krish-Dev/prismashop',
    demo: 'https://prismashop-headless.vercel.app',
    features: [
      { label: 'Algolia instant search under 10ms', icon: 'search' },
      { label: 'WCAG 2.1 AAA accessibility compliant', icon: 'shield' },
      { label: 'Persistent cart synced to localStorage', icon: 'store' },
    ],
    tags: ['Next.js', 'GraphQL', 'Shopify API', 'Algolia'],
  },
];

const AUTO_INTERVAL = 3500; // ms per project

export default function Projects() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const imageRef   = useRef(null);
  const infoRef    = useRef(null);
  const timerRef   = useRef(null);
  const prevActive = useRef(0);

  /* ── Animate image + info panel on tab change ── */
  const switchTo = useCallback((idx) => {
    if (idx === active || animating) return;
    setAnimating(true);
    prevActive.current = active;

    const imgEl  = imageRef.current;
    const infoEl = infoRef.current;

    const tl = gsap.timeline({
      onComplete: () => { setActive(idx); setAnimating(false); },
    });

    // Slide out current
    tl.to(imgEl,  { x: -32, opacity: 0, scale: 0.97, duration: 0.28, ease: 'power2.in' }, 0);
    tl.to(infoEl, { y: 16,  opacity: 0, duration: 0.22, ease: 'power2.in' }, 0);

    // After state updates, reset then slide in
    tl.call(() => {
      gsap.set(imgEl,  { x: 40, scale: 0.97 });
      gsap.set(infoEl, { y: -16 });
    });
    tl.to(imgEl,  { x: 0, opacity: 1, scale: 1, duration: 0.42, ease: 'power3.out' }, '+=0.02');
    tl.to(infoEl, { y: 0, opacity: 1, duration: 0.38, ease: 'power3.out' }, '<0.06');
  }, [active, animating]);

  /* ── Auto-scroll ── */
  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(prev => {
        const next = (prev + 1) % PROJECTS.length;
        // Animate directly
        const imgEl  = imageRef.current;
        const infoEl = infoRef.current;
        if (!imgEl || !infoEl) return next;

        const tl = gsap.timeline();
        tl.to(imgEl,  { x: -28, opacity: 0, scale: 0.97, duration: 0.25, ease: 'power2.in' }, 0);
        tl.to(infoEl, { y: 14,  opacity: 0, duration: 0.2,  ease: 'power2.in' }, 0);
        tl.call(() => { gsap.set(imgEl, { x: 40, scale: 0.97 }); gsap.set(infoEl, { y: -12 }); });
        tl.to(imgEl,  { x: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' }, '+=0.02');
        tl.to(infoEl, { y: 0, opacity: 1, duration: 0.36, ease: 'power3.out' }, '<0.05');
        return next;
      });
    }, AUTO_INTERVAL);
  }, []);

  useEffect(() => { resetTimer(); return () => clearInterval(timerRef.current); }, [resetTimer]);

  const handleClick = (idx) => { switchTo(idx); resetTimer(); };

  const proj = PROJECTS[active];
  const IconFn = icons[proj.features[0]?.icon] || icons.default;

  return (
    <section className="section proj-section" id="projects">
      <div className="container">

        {/* Header */}
        <div className="section-header reveal">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of complex systems and premium interfaces built with modern frameworks.
          </p>
        </div>

        {/* Main layout */}
        <div className="proj-layout reveal reveal-delay-1">

          {/* ── LEFT: project list sidebar ── */}
          <div className="proj-sidebar">
            {PROJECTS.map((p, i) => (
              <button
                key={p.id}
                className={`proj-list-item ${i === active ? 'proj-list-item--active' : ''}`}
                onClick={() => handleClick(i)}
                aria-label={`View ${p.title}`}
              >
                <span className="proj-list-icon">
                  {i === active
                    ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                    : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/></svg>
                  }
                </span>
                <span className="proj-list-name">
                  <span className="proj-list-number">{p.number}</span>
                  {p.title}
                </span>
                {/* Auto-scroll progress bar on active */}
                {i === active && <span className="proj-list-progress" key={active} />}
              </button>
            ))}
          </div>

          {/* ── RIGHT: image + details ── */}
          <div className="proj-right">

            {/* Image card */}
            <div className="proj-image-card" ref={imageRef}>
              <img
                src={proj.img}
                alt={proj.title}
                className="proj-image"
                key={proj.id}
              />
              {/* Badge overlay */}
              <div className="proj-image-badge">
                <span className="proj-badge-num">{proj.number}</span>
                <span>·</span>
                <span className="proj-badge-sub">{proj.subtitle.toUpperCase()}</span>
              </div>
              {/* Bottom caption */}
              <div className="proj-image-caption">
                <h3 className="proj-caption-title">{proj.title}</h3>
                <div className="proj-caption-links">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="proj-link-btn">
                    <FaGithub /> Code
                  </a>
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="proj-link-btn proj-link-btn--primary">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Details below image */}
            <div className="proj-info" ref={infoRef}>
              <p className="proj-info-desc">{proj.description}</p>
              <div className="proj-info-features">
                {proj.features.map((f, i) => {
                  const Icon = icons[f.icon] || icons.default;
                  return (
                    <div key={i} className="proj-info-feature">
                      <span className="proj-info-feature-icon"><Icon /></span>
                      <span>{f.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="proj-info-tags">
                {proj.tags.map(tag => (
                  <span key={tag} className="proj-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
