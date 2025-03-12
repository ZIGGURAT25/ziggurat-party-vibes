
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
        scrolled || isOpen ? 'bg-black/70 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="content-container">
        <div className="flex items-center justify-between py-4">
          <Link 
            to="/"
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-display font-bold text-gradient-blue">
              Ziggurat<span className="text-gradient-magenta">'25</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'text-ziggurat-blue' 
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
        <div className="md:hidden h-screen w-full bg-black/95 backdrop-blur-md animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-medium transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'text-gradient-blue' 
                    : 'text-white hover:text-ziggurat-blue'
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
