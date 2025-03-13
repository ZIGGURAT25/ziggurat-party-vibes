
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Events', path: '/events' },
    { title: 'Schedule', path: '/schedule' },
    { title: 'Register', path: '/register' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-zinc-900/90 backdrop-blur-lg border-b border-amber-500/20' : 'bg-transparent'
      }`}
    >
      <div className="content-container">
        <div className="flex items-center justify-between py-4">
          <Link 
            to="/"
            className="flex items-center space-x-2"
          >
            <div className="relative w-10 h-10 mr-2">
              <Zap className="w-full h-full text-amber-500 absolute animate-pulse-light" />
              <Zap className="w-full h-full text-blue-500 absolute -translate-x-1 -translate-y-1" />
            </div>
            <span className="text-2xl font-display font-bold">
              <span className="text-gradient-gold">ZIGGURAT</span>
              <span className="text-gradient-blue">'25</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-display font-medium transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'text-amber-500' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden h-screen w-full bg-zinc-900/95 backdrop-blur-lg animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-display font-medium transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'text-gradient-gold' 
                    : 'text-white hover:text-amber-500'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
