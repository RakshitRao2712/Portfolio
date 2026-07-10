import React, { Component, useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { LiquidGlass } from './ui/liquid-glass';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught WebGL/Spline load error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const Hero = () => {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const supported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setWebglSupported(supported);
    } catch (e) {
      setWebglSupported(false);
    }
  }, []);

  return (
    <section className="hero relative" id="home">
      <div className="hero-spline-container">
        {webglSupported ? (
          <ErrorBoundary fallback={<div className="spline-fallback-graphic" />}>
            <Spline scene="https://prod.spline.design/pYowLiUzJkTrMjF1/scene.splinecode" />
          </ErrorBoundary>
        ) : (
          <div className="spline-fallback-graphic" />
        )}
      </div>

      {/* Block to hide the Spline watermark */}
      <div className="absolute bottom-0 right-0 w-48 h-16 bg-black z-40 pointer-events-none" />

      <LiquidGlass />
    </section>
  );
};

export default Hero;
