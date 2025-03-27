
import { useEffect, useRef } from 'react';
import GlassCard from './ui/GlassCard';

const AdditionalInfo = () => {
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
      id="about" 
      ref={sectionRef}
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-white relative">
            <span className="relative z-10">Additional Information</span>
            <div className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
        </div>
        
        <GlassCard className="p-8 md:p-10 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">About Me</h3>
              <div className="text-gray-300 space-y-4">
                <p>
                  I started my journey in 3D modeling at 17, diving into game development through game jams and small projects. Over time, I contributed as a 3D artist and UI/2D designer in hypercasual games, gaining experience in tools like Substance Painter and Photoshop. Later, I shifted to organizing large-scale esports events, collaborating with major companies and managing successful tournaments with impressive live audiences.
                </p>
                <p>
                  At 21, I left university to focus on game development. As a solo developer, I learned C# and released Aim Zen on Steam, which now boasts overwhelmingly positive reviews. Currently, at 22, I'm developing the SUBJECTS, a co-op horror game, while continuing to grow as a creator in the gaming industry.
                </p>
              </div>
            </div>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Design Software</h3>
                <GlassCard className="p-4" hover={false}>
                  <p className="text-gray-300">
                    Adobe Suite (Photoshop, Illustrator, After Effects), Figma, Autodesk Maya, Blender, Substance Painter, Marmoset Toolbag, Materialize, Movavi Packs, CapCut
                  </p>
                </GlassCard>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Game Development</h3>
                <GlassCard className="p-4" hover={false}>
                  <p className="text-gray-300">
                    Unity (UI Builder - UXML, USS), Unreal Engine 5, C# (.NET), Version Control (Git)
                  </p>
                </GlassCard>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
                <div className="space-y-3">
                  <GlassCard className="p-4" hover={false}>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">English</span>
                      <span className="text-gray-400 text-sm">Professional Working Proficiency</span>
                    </div>
                  </GlassCard>
                  <GlassCard className="p-4" hover={false}>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Turkish</span>
                      <span className="text-gray-400 text-sm">Native</span>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Skills & Traits</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Autodidactic', 'Entrepreneur', 'Project Manager', 'Open to Learning', 'Problem Solver', 'Team Player'].map((skill, index) => (
              <div 
                key={index}
                className="bg-black/30 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Game Development', '3D Modeling', 'Digital Art', 'VR/AR Technology', 'Game Engine Architecture'].map((interest, index) => (
              <div 
                key={index}
                className="bg-black/30 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-20 text-center">
        <p className="text-white/50 font-mono tracking-[0.2em] uppercase text-sm">MORIOR INVICTUS</p>
      </div>
    </section>
  );
};

export default AdditionalInfo;
