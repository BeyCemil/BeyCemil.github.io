
import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const certifications = [
  {
    title: "General English Certification Test",
    issuer: "International Business Management Institute (IBMI)",
    link: "https://www.ibm-institute.com/verify/",
    id: "404347-161-982-7205"
  },
  {
    title: "Game Design",
    issuer: "California Institute of the Arts",
    link: "https://www.coursera.org/account/accomplishments/certificate/B2DAGZW4YCY5",
    id: "B2DAGZW4YCY5"
  },
  {
    title: "C# with Microsoft",
    issuer: "FreeCodeCamp",
    link: "https://www.freecodecamp.org/certification/CemilBey/foundational-c-sharp-with-microsoft",
    id: ""
  },
  {
    title: "Low Poly Art for Video Games",
    issuer: "Michigan State University - Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/EDKFEJJBDRDE",
    id: "EDKFEJJBDRDE"
  }
];

const Certifications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
      id="certifications" 
      ref={sectionRef}
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-white relative">
            <span className="relative z-10">Certifications</span>
            <div className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <GlassCard key={index} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              
              <div className="text-gray-300 mb-2">
                {cert.issuer}
              </div>
              
              {cert.id && (
                <div className="text-sm text-gray-400 font-mono">
                  ID: {cert.id}
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
