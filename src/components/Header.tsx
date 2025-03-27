
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        isScrolled ? 'backdrop-blur-lg bg-black/30 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-mono font-bold tracking-wider text-xl">
          <span className="text-primary">CB</span>
          <span className="text-white">/DEV</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['hero', 'games', 'experience', 'certifications', 'about'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-white/80 hover:text-white transition-colors link-underline pb-1 uppercase text-sm font-semibold tracking-wider"
            >
              {section}
            </button>
          ))}
          <a 
            href="https://beycemil.github.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary/20 border border-primary/50 text-white px-4 py-1 rounded-full hover:bg-primary/30 transition-colors"
          >
            CV
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col justify-center items-center transition-transform duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-6 items-center">
          {['hero', 'games', 'experience', 'certifications', 'about'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-white text-2xl uppercase font-semibold tracking-wider"
            >
              {section}
            </button>
          ))}
          <a 
            href="https://beycemil.github.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary/20 border border-primary/50 text-white px-6 py-2 rounded-full hover:bg-primary/30 transition-colors mt-4"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
