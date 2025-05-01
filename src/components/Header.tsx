import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookDemo = () => {
    navigate('/book-demo');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80' : 'bg-black/50'
      } backdrop-blur-lg border-b border-purple-500/20`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-6 h-6 sm:w-8 sm:h-8">
              <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-md group-hover:bg-purple-500/30 transition-colors"></div>
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczP_jSjomhwnlwqnvjhVNfkpplSqAyO7mKxNThLE4HzXqGoaZ-kNo-FB_u15nmr01xEPk0LfY73iaB_y6_2Q2E_pyeE-TVaI4ptZtm35s_CweeWDmH4=w500-h315-p-k"
                alt="Calliri Logo"
                className="w-full h-full object-contain relative z-10"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Calliri
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link 
              to="/features" 
              className="text-sm lg:text-base text-gray-300 hover:text-purple-400 transition-colors"
            >
              Features
            </Link>
            <Link 
              to="/testimonials" 
              className="text-sm lg:text-base text-gray-300 hover:text-purple-400 transition-colors"
            >
              Testimonials
            </Link>
            <Link 
              to="/pricing" 
              className="text-sm lg:text-base text-gray-300 hover:text-purple-400 transition-colors"
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className="text-sm lg:text-base text-gray-300 hover:text-purple-400 transition-colors"
            >
              Contact
            </Link>
            <button 
              onClick={handleBookDemo}
              className="px-4 lg:px-6 py-2 bg-purple-600 rounded-lg text-sm lg:text-base text-white font-medium hover:bg-purple-500 transition-colors"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;