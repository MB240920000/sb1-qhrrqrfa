import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Twitter,
  Mail
} from 'lucide-react';

function Footer() {
  return (
    <footer className="py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900/10 to-black"></div>
        <div className="absolute inset-0 circuit-background opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 group mb-4 sm:mb-6">
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
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              Transforming business communication with next-generation AI technology.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/CalliriAi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:calliriai@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">Features</Link></li>
              <li><Link to="/outbound-calls" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">Outbound Calls</Link></li>
              <li><Link to="/testimonials" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">Testimonials</Link></li>
              <li><Link to="/help" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">Help Center</Link></li>
              <li><Link to="/case-study" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">Case Study</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm sm:text-base text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-6 sm:pt-8 text-center text-sm sm:text-base text-gray-400">
          <p>&copy; 2025 Calliri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;