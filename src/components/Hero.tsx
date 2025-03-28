
import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="min-h-screen pt-28 pb-20 px-6 flex flex-col justify-center items-center relative circular-glow"
    >
      <div className="max-w-5xl mx-auto w-full space-y-8 text-center relative z-10">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-primary/30 p-1 backdrop-blur-sm bg-black/30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
              <span className="text-4xl font-mono font-bold text-white/90">CB</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white text-shadow relative z-10">
          <span>Cemil Buğra Uzunkaya</span>
        </h1>
        
        <div className="flex items-center justify-center space-x-2 relative z-10">
          <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-primary/50"></div>
          <p className="text-xl text-primary/90 font-mono">Full-Stack Indie Game Developer</p>
          <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>
        
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mt-12 mb-6 text-white/90 max-w-3xl mx-auto leading-tight text-glow relative z-10">
          EVERY BIT SHAPES A PIXEL
          <br />
          EVERY PIXEL TELLS A STORY
        </h2>
        
        <div className="flex justify-center space-x-6 mt-10 relative z-10">
          <a 
            href="https://github.com/BeyCemil" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={28} className="hover:text-primary" />
          </a>
          <a 
            href="https://www.linkedin.com/in/cemilbey/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} className="hover:text-primary" />
          </a>
          <a 
            href="mailto:cemilbugrauzunkaya@gmail.com" 
            className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={28} className="hover:text-primary" />
          </a>
        </div>
        
        <div className="flex justify-center mt-16 relative z-10">
          <button 
            onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white/70 group flex flex-col items-center hover:text-white transition-all duration-300"
          >
            <span className="animate-bounce mb-1">⌄</span>
            <span className="text-sm font-mono group-hover:text-primary transition-colors">Scroll to explore</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
