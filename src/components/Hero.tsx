
import { useEffect, useRef } from 'react';
import { ChevronDown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / (innerWidth / 2) * -15;
      const moveY = (clientY - innerHeight / 2) / (innerHeight / 2) * -15;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el, i) => {
        const htmlEl = el as HTMLElement;
        const depth = (i + 1) * 0.2;
        const translateX = moveX * depth;
        const translateY = moveY * depth;
        htmlEl.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    const contentElement = document.getElementById('event-intro');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center bg-ziggurat-dark overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 z-0 bg-electric">
        {/* Lightning bolt accents */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 transform -rotate-12 opacity-10">
          <Zap className="w-full h-full text-amber-500" strokeWidth={2} />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 transform rotate-12 opacity-10">
          <Zap className="w-full h-full text-blue-500" strokeWidth={2} />
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl animate-pulse-light parallax"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse-light parallax"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl animate-pulse-light parallax"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        <div className="mb-3 parallax flex justify-center">
          <div className="relative w-20 h-20 mb-4">
            <Zap className="w-full h-full text-amber-500 absolute animate-pulse-light" strokeWidth={2} />
            <Zap className="w-full h-full text-blue-500 absolute -translate-x-1 -translate-y-1" strokeWidth={2} />
          </div>
        </div>
        
        <div className="mb-3 parallax">
          <span className="inline-block px-4 py-1 text-xs font-medium font-display tracking-wider rounded-full bg-zinc-800/80 text-amber-400 mb-2 border border-amber-500/20">
            MARCH 22, 2025
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-wider parallax">
          <span className="block text-gradient-gold drop-shadow-[0_0_8px_rgba(245,164,37,0.5)]">ZIGGURAT</span>
          <span className="block text-gradient-blue drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]">'25</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-8 parallax">
          A National Level Technical Symposium by the Department of Civil Engineering at Rajalakshmi Engineering College
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 parallax">
          <Link to="/register" className="btn-glow px-8 py-3 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-900 font-display font-bold tracking-wide transition-all hover:scale-105 flex items-center">
            <Zap className="w-5 h-5 mr-2" />
            Register Now
          </Link>
          <Link to="/events" className="px-8 py-3 rounded-md bg-zinc-800/80 backdrop-blur-sm text-white font-display font-medium tracking-wide border border-blue-500/20 transition-all hover:border-blue-500/50 hover:bg-zinc-800/90 hover:scale-105">
            Explore Events
          </Link>
        </div>
      </div>

      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-zinc-400 hover:text-white transition-colors animate-float"
      >
        <span className="text-sm mb-2 font-display">Scroll Down</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Hero;
