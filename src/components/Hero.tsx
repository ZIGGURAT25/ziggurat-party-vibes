
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
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
    <div ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center bg-ziggurat-darker bg-mesh overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-ziggurat-blue/20 blur-3xl animate-pulse-light parallax"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-ziggurat-magenta/20 blur-3xl animate-pulse-light parallax"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-ziggurat-purple/20 blur-3xl animate-pulse-light parallax"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        <div className="mb-3 parallax">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/90 mb-2">
            MARCH 22, 2025
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 parallax">
          <span className="block text-gradient-blue">ZIGGURAT</span>
          <span className="block text-gradient-magenta">'25</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 parallax">
          A National Level Technical Symposium by the Department of Civil Engineering at Rajalakshmi Engineering College
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 parallax">
          <Link to="/register" className="px-8 py-3 rounded-md bg-ziggurat-blue text-white font-medium transition-all hover:bg-ziggurat-blue/90 hover:scale-105">
            Register Now
          </Link>
          <Link to="/events" className="px-8 py-3 rounded-md bg-white/10 backdrop-blur-sm text-white font-medium border border-white/20 transition-all hover:bg-white/20 hover:scale-105">
            Explore Events
          </Link>
        </div>
      </div>

      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white transition-colors animate-float"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Hero;
