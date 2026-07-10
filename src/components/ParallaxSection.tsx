import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ParallaxHeroImages } from "./ui/parallax-hero-images";

const images = [
  "https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp",
  "https://assets.aceternity.com/components/3d-globe.webp",
  "https://assets.aceternity.com/components/keyboard-2.webp",
  "https://assets.aceternity.com/components/hero-1.webp",
  "https://assets.aceternity.com/components/hero-2.webp",
  "https://assets.aceternity.com/components/hero-3.webp",
];

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });
  const [hasHovered, setHasHovered] = useState(false);

  return (
    <motion.div
      ref={sectionRef}
      onMouseEnter={() => setHasHovered(true)}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Parallax floating images — scale in after mouse enter with 1s delay */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={hasHovered ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <ParallaxHeroImages images={images} />
      </motion.div>

      {/* Static text — original demo content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] md:text-6xl">
          Space for my art, built with cutting edge UI.
        </h1>
        <p className="max-w-md text-neutral-400 drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]">
          Move your mouse around. The images move too. It's basically magic (it's just CSS).
        </p>
      </div>
    </motion.div>
  );
}