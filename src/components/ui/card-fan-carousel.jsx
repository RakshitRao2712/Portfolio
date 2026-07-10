import React, { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Mail, Code2 } from "lucide-react";

const CARDS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    sub: "Connect Professionally",
    href: "https://linkedin.com/in/krish",
    icon: FaLinkedinIn,
    bg: "linear-gradient(135deg, #0a0a1a 0%, #0d1f3c 60%, #0a3d62 100%)",
    accent: "#0A66C2",
    glow: "rgba(10, 102, 194, 0.35)",
  },
  {
    id: "github",
    label: "GitHub",
    sub: "View My Projects",
    href: "https://github.com/Krish-Dev",
    icon: FaGithub,
    bg: "linear-gradient(135deg, #0a0a0a 0%, #161b22 60%, #21262d 100%)",
    accent: "#e6edf3",
    glow: "rgba(200, 200, 200, 0.2)",
  },
  {
    id: "email",
    label: "Email",
    sub: "krish@example.dev",
    href: "mailto:krish@example.dev",
    icon: Mail,
    bg: "linear-gradient(135deg, #0f0020 0%, #1e0040 60%, #2d0060 100%)",
    accent: "#a855f7",
    glow: "rgba(168, 85, 247, 0.4)",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    sub: "Message Me",
    href: "https://wa.me/911234567890",
    icon: FaWhatsapp,
    bg: "linear-gradient(135deg, #001a0a 0%, #003d1a 60%, #005c27 100%)",
    accent: "#25D366",
    glow: "rgba(37, 211, 102, 0.35)",
  },
  {
    id: "leetcode",
    label: "LeetCode",
    sub: "Solve Problems",
    href: "https://leetcode.com/krish",
    icon: Code2,
    bg: "linear-gradient(135deg, #1a0a00 0%, #3d1f00 60%, #5c3000 100%)",
    accent: "#FFA116",
    glow: "rgba(255, 161, 22, 0.35)",
  },
];

const CARD_W     = 520;
const CARD_H     = 300;
const STACK_OFFSET = 16;    // px each card peeks upward per depth
const STACK_SCALE  = 0.028; // scale shrink per depth level
const STACK_FADE   = 0.17;  // opacity reduction per depth
const TOTAL        = CARDS.length;
const VISIBLE      = Math.min(TOTAL, 5);

/** Visual state for a given stack depth (0 = front card) */
function depthProps(depth) {
  return {
    x:       0,
    y:       -depth * STACK_OFFSET,
    scaleX:   1 - depth * STACK_SCALE,
    scaleY:   1 - depth * STACK_SCALE,
    opacity:  1 - depth * STACK_FADE,
    rotation: 0,
    zIndex:   VISIBLE - depth,
  };
}

/** Return ordered visible card indices starting from frontIdx */
function getOrder(frontIdx) {
  return Array.from({ length: VISIBLE }, (_, i) => (frontIdx + i) % TOTAL);
}

export default function ContactStackCarousel() {
  const [front, setFront]   = useState(0);
  const animating            = useRef(false);
  const frontRef             = useRef(0);
  const cardRefs             = useRef([]); // indexed by CARDS array position

  // ── Mount: place all cards at their initial depth positions ───────────────
  useEffect(() => {
    const order = getOrder(0);

    // First: hide all cards
    cardRefs.current.forEach((el) => {
      if (el) gsap.set(el, { opacity: 0, scale: 0.7, y: CARD_H * 0.5, zIndex: 0, x: 0, rotation: 0 });
    });

    // Then: animate visible cards in with a staggered elastic entrance
    const tl = gsap.timeline();
    order.forEach((cardIdx, depth) => {
      const el = cardRefs.current[cardIdx];
      if (!el) return;
      const target = depthProps(depth);
      gsap.set(el, { ...target, y: target.y + CARD_H * 0.5, opacity: 0, scaleX: 0.7, scaleY: 0.7 });
      tl.to(el, { ...target, duration: 1.0, ease: "elastic.out(1, 0.65)" }, depth * 0.07);
    });
  }, []);

  // ── Core navigation ───────────────────────────────────────────────────────
  const navigate = useCallback((direction) => {
    if (animating.current) return;
    animating.current = true;

    const f         = frontRef.current;
    const nextFront = direction === "next"
      ? (f + 1) % TOTAL
      : (f - 1 + TOTAL) % TOTAL;

    const oldOrder = getOrder(f);
    const newOrder = getOrder(nextFront);

    const tl = gsap.timeline({
      onComplete: () => {
        frontRef.current = nextFront;
        setFront(nextFront);
        animating.current = false;
      },
    });

    // For every card, compute its old depth and new depth, then animate accordingly
    CARDS.forEach((_, cardIdx) => {
      const el       = cardRefs.current[cardIdx];
      if (!el) return;

      const oldDepth = oldOrder.indexOf(cardIdx); // -1 = was hidden
      const newDepth = newOrder.indexOf(cardIdx); // -1 = becomes hidden

      // ── Not involved in this transition ──
      if (oldDepth === -1 && newDepth === -1) return;

      // ── Card exits the visible window (was visible, now hidden) ──
      if (oldDepth >= 0 && newDepth === -1) {
        if (direction === "next" && oldDepth === 0) {
          // Front card flies off to the right with rotation
          tl.to(el, {
            x: CARD_W * 1.15, y: -50, rotation: 16, scaleX: 0.78, scaleY: 0.78, opacity: 0,
            duration: 0.44, ease: "power3.in",
          }, 0);
          // Silently reset it to the back-of-stack position (hidden) for future reuse
          tl.set(el, { x: 0, rotation: 0, ...depthProps(VISIBLE - 1), opacity: 0 });
        } else {
          // Back card fades out quietly
          tl.to(el, { opacity: 0, scaleX: 0.75, scaleY: 0.75, duration: 0.32, ease: "power2.in" }, 0);
        }
        return;
      }

      // ── Card enters the visible window (was hidden, now visible) ──
      if (oldDepth === -1 && newDepth >= 0) {
        const target = depthProps(newDepth);
        if (direction === "prev" && newDepth === 0) {
          // The new front card sweeps in from the LEFT
          gsap.set(el, { x: -CARD_W * 0.9, rotation: -14, scaleX: 0.82, scaleY: 0.82, opacity: 0, zIndex: VISIBLE + 1 });
          tl.to(el, { ...target, duration: 0.52, ease: "power2.out" }, 0);
        } else {
          // Enters at back of stack, rising from below
          gsap.set(el, { x: 0, y: target.y + CARD_H * 0.45, scaleX: 0.75, scaleY: 0.75, opacity: 0, zIndex: 1 });
          tl.to(el, { ...target, duration: 0.46, ease: "power2.out" }, 0.12);
        }
        return;
      }

      // ── Card shifts between visible depths ──
      const target = depthProps(newDepth);

      if (direction === "prev" && newDepth === 0 && oldDepth > 0) {
        // Card at the back sweeps to the front from the left
        tl.to(el, { ...target, duration: 0.52, ease: "power2.out" }, 0);
        // Override starting x/rotation using fromTo via a "from" set before animating
        // GSAP trick: set it to the "from" state first, then animate to target
        tl.set(el, { x: -CARD_W * 0.75, rotation: -12, scaleX: 0.82, scaleY: 0.82, opacity: 0.5, zIndex: VISIBLE + 1 }, "<-=0.001");
        tl.to(el, { ...target, duration: 0.52, ease: "power2.out" }, "<");
      } else {
        // Standard depth shift (advance or retreat)
        tl.to(el, { ...target, duration: 0.48, ease: "power2.out" }, 0.05);
      }
    });
  }, []);

  const goNext = () => navigate("next");
  const goPrev = () => navigate("prev");

  // ── Arrow button style helpers ─────────────────────────────────────────────
  const arrowBase = {
    width: "52px", height: "52px", borderRadius: "50%", flexShrink: 0,
    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
    color: "rgba(255,255,255,0.65)", cursor: "pointer", outline: "none",
    display: "flex", alignItems: "center", justifyContent: "center",
    backdropFilter: "blur(14px)", transition: "all 0.22s ease", fontSize: "22px",
  };
  const hov = (e, on) => {
    e.currentTarget.style.background   = on ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.06)";
    e.currentTarget.style.color        = on ? "#fff" : "rgba(255,255,255,0.65)";
    e.currentTarget.style.borderColor  = on ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.12)";
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem", width: "100%" }}>

      {/* Dot indicators */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {CARDS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const steps = ((i - frontRef.current + TOTAL) % TOTAL);
              const dir   = steps <= TOTAL / 2 ? "next" : "prev";
              navigate(dir);
            }}
            style={{
              width: i === front ? "28px" : "8px", height: "8px",
              borderRadius: "4px", border: "none", padding: 0, cursor: "pointer",
              background: i === front ? CARDS[front].accent : "rgba(255,255,255,0.2)",
              transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        ))}
      </div>

      {/* Stack + arrows */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "3rem", width: "100%" }}>

        <button aria-label="Previous" onClick={goPrev} style={arrowBase}
          onMouseEnter={e => hov(e, true)} onMouseLeave={e => hov(e, false)}>‹</button>

        {/* Fixed-size stage — GSAP positions all cards inside */}
        <div style={{
          position: "relative",
          width:  `${CARD_W}px`,
          height: `${CARD_H + (VISIBLE - 1) * STACK_OFFSET + 20}px`,
          overflow: "visible",
        }}>
          {CARDS.map((card, cardIdx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                ref={el => { cardRefs.current[cardIdx] = el; }}
                style={{
                  position: "absolute", bottom: 0,
                  left: "50%", marginLeft: `-${CARD_W / 2}px`,
                  width: `${CARD_W}px`, height: `${CARD_H}px`,
                  borderRadius: "24px", background: card.bg,
                  border: `1px solid ${card.accent}22`,
                  overflow: "hidden", willChange: "transform, opacity",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "40px 48px", transformOrigin: "bottom center",
                }}
              >
                {/* Decorative rings */}
                <div style={{
                  position: "absolute", right: "-60px", top: "50%", transform: "translateY(-50%)",
                  width: "300px", height: "300px", borderRadius: "50%",
                  border: `1px solid ${card.accent}20`, pointerEvents: "none",
                }} />
                <div style={{
                  position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)",
                  width: "200px", height: "200px", borderRadius: "50%",
                  border: `1px solid ${card.accent}15`, pointerEvents: "none",
                }} />

                {/* Text */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", zIndex: 2 }}>
                  <span style={{
                    fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase",
                    color: card.accent, fontWeight: 600, fontFamily: "'Inter', sans-serif",
                  }}>Connect via</span>
                  <h3 style={{
                    fontSize: "2.8rem", fontWeight: 800, color: "#fff",
                    fontFamily: "'Outfit', 'Inter', sans-serif", lineHeight: 1, margin: 0,
                  }}>{card.label}</h3>
                  <p style={{
                    fontSize: "0.92rem", color: "rgba(255,255,255,0.5)",
                    fontFamily: "'Inter', sans-serif", margin: 0,
                  }}>{card.sub}</p>
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      marginTop: "8px", display: "inline-flex", alignItems: "center", gap: "8px",
                      background: card.accent, color: "#000", fontWeight: 700, fontSize: "14px",
                      padding: "10px 22px", borderRadius: "999px", textDecoration: "none",
                      fontFamily: "'Inter', sans-serif", width: "fit-content",
                      transition: "opacity 0.2s ease",
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                  >Open →</a>
                </div>

                {/* Icon */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "110px", height: "110px", borderRadius: "28px", flexShrink: 0,
                  background: `${card.accent}18`, border: `1px solid ${card.accent}30`,
                  zIndex: 2, boxShadow: `0 0 40px ${card.glow}`,
                }}>
                  <Icon size={54} color={card.accent} />
                </div>
              </div>
            );
          })}
        </div>

        <button aria-label="Next" onClick={goNext} style={arrowBase}
          onMouseEnter={e => hov(e, true)} onMouseLeave={e => hov(e, false)}>›</button>
      </div>
    </div>
  );
}
