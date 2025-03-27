
import { useEffect, useRef } from 'react';
import GlassCard from './ui/GlassCard';

const experiences = [
  {
    title: "Indie Game Developer",
    company: "Asocion Software",
    period: "08/2023 - Present",
    description: "Solo developer responsible for Aim Zen and SUBJECTS on Steam. Key responsibilities include: • Full-stack game development using Unity and C# • Creating and optimizing 3D models and environments • Implementing responsive UI/UX designs • Managing Steam store presence and community • Conducting marketing campaigns and player engagement • Performance optimization and bug fixing"
  },
  {
    title: "3D Artist",
    company: "Various Game Development Initiatives",
    period: "07/2021 - 11/2022",
    description: "Specialized in creating engaging gaming experiences through: • Designing and creating high-quality 3D/2D assets • Seamlessly integrating assets into various game engines • Collaborating with developers to ensure optimal asset performance • Implementing art direction changes based on player feedback"
  },
  {
    title: "Event Coordinator",
    company: "Asocion (B2B)",
    period: "10/2021 - 08/2023",
    description: "Managed comprehensive business operations including: • Developing and maintaining corporate communication strategies • Creating cohesive brand identities from concept to implementation • Negotiating and managing commercial contracts • Coordinating cross-functional teams for event execution"
  }
];

const Experience = () => {
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
      id="experience" 
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-white relative">
            <span className="relative z-10">Professional Experience</span>
            <div className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/80 via-primary/40 to-transparent"></div>
          
          <div className="space-y-10 md:space-y-16 relative z-10">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 flex items-center justify-center md:justify-end md:pr-8 pl-0 mb-4 md:mb-0">
                  <div className={`text-right ${index % 2 === 1 ? 'md:text-left md:pl-8' : 'md:text-right md:pr-8'}`}>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <div className="text-primary/80 font-semibold">{exp.company}</div>
                    <div className="text-sm text-gray-400 font-mono">{exp.period}</div>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-center md:justify-start md:w-0 md:h-0 min-h-0 min-w-0">
                  <div className="w-5 h-5 rounded-full bg-primary shadow-[0_0_10px_rgba(168,85,247,0.7)] z-10"></div>
                </div>
                
                <div className="md:w-1/2 pl-8 md:pl-8 md:pr-0">
                  <GlassCard className="p-6">
                    <p className="text-gray-300 whitespace-pre-line">{exp.description}</p>
                  </GlassCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
