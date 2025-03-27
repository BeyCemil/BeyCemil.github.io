
import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const Games = () => {
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
      id="games" 
      ref={sectionRef}
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-white relative">
            <span className="relative z-10">Released Games</span>
            <div className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Game 1 */}
          <GlassCard className="overflow-hidden">
            <div className="h-56 bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white">Aim Zen</h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">Aim Zen</h3>
                <a 
                  href="https://store.steampowered.com/app/2791290/Aim_Zen__Rhythmic_Aim_Trainer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="text-sm">Steam</span>
                  <ExternalLink size={14} />
                </a>
              </div>
              
              <p className="text-gray-300 mb-6">
                Where precision meets rhythm. Master your aim through an innovative blend of musical challenges, classic training modes, and customizable experiences designed for both competitive players and casual enthusiasts.
              </p>
              
              <div>
                <h4 className="text-lg font-semibold text-white/90 mb-3">Technical Aspects:</h4>
                <ul className="text-gray-300 space-y-1 list-disc list-inside ml-1">
                  <li>User-Generated Content System</li>
                  <li>In-Game Level Editor</li>
                  <li>Global & Track Specific Leaderboard System</li>
                  <li>Level & XP System</li>
                  <li>Low Rendering Time with High Fidelity Visuals</li>
                  <li>Steam Integration (Cloud & Achievements)</li>
                </ul>
              </div>
            </div>
          </GlassCard>
          
          {/* Game 2 */}
          <GlassCard className="overflow-hidden">
            <div className="h-56 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white">SUBJECTS</h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">SUBJECTS</h3>
                <a 
                  href="https://store.steampowered.com/app/3292370/SUBJECTS/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="text-sm">Steam</span>
                  <ExternalLink size={14} />
                </a>
              </div>
              
              <p className="text-gray-300 mb-6">
                A co-op survival horror game set in a shifting dystopian facility.
              </p>
              
              <div>
                <h4 className="text-lg font-semibold text-white/90 mb-3">Technical Aspects:</h4>
                <ul className="text-gray-300 space-y-1 list-disc list-inside ml-1">
                  <li>Generative map system</li>
                  <li>Peer-to-Peer Netcode</li>
                  <li>Full-size localization</li>
                  <li>Extended Lore for Game Universe</li>
                  <li>Realistic IK system</li>
                  <li>Directing Background Lore & Creatives</li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Games;
