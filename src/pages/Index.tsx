
import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [binaryColumns, setBinaryColumns] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    // Create binary rain columns
    const columns = Array.from({ length: 25 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      delay: Math.random() * -20
    }));
    setBinaryColumns(columns);
  }, []);

  const generateBinaryString = () => {
    return Math.round(Math.random()).toString();
  };

  const games = [
    {
      title: "Aim Zen",
      description: "Where precision meets rhythm. Master your aim through an innovative blend of musical challenges, classic training modes, and customizable experiences designed for both competitive players and casual enthusiasts.\n\nTechnical Aspects:\n• User-Generated Content System\n• In-Game Level Editor\n• Global & Track Specific Leaderboard System\n• Level & XP System\n• Low Rendering Time with High Fidelity Visuals\n• Steam Integration (Cloud & Achievements)",
      image: "placeholder.svg",
      link: "https://store.steampowered.com/app/2791290/Aim_Zen__Rhythmic_Aim_Trainer/",
    },
    {
      title: "SUBJECTS",
      description: "A co-op survival horror game set in a shifting dystopian facility.\n\nTechnical Aspects:\n• Generative map system\n• Peer-to-Peer Netcode\n• Full-size localization\n• Extended Lore for Game Universe\n• Realistic IK system\n• Directing Background Lore & Creatives",
      image: "placeholder.svg",
      link: "https://store.steampowered.com/app/3292370/SUBJECTS/",
    },
  ];

  const experiences = [
    {
      title: "Indie Game Developer",
      company: "Asocion Software",
      period: "08/2023 - Present",
      description: "Solo developer responsible for Aim Zen and SUBJECTS on Steam. Key responsibilities include:\n• Full-stack game development using Unity and C#\n• Creating and optimizing 3D models and environments\n• Implementing responsive UI/UX designs\n• Managing Steam store presence and community\n• Conducting marketing campaigns and player engagement\n• Performance optimization and bug fixing"
    },
    {
      title: "3D Artist",
      company: "Various Game Development Initiatives",
      period: "07/2021 - 11/2022",
      description: "Specialized in creating engaging gaming experiences through:\n• Designing and creating high-quality 3D/2D assets\n• Seamlessly integrating assets into various game engines\n• Collaborating with developers to ensure optimal asset performance\n• Implementing art direction changes based on player feedback"
    },
    {
      title: "Event Coordinator",
      company: "Asocion (B2B)",
      period: "10/2021 - 08/2023",
      description: "Managed comprehensive business operations including:\n• Developing and maintaining corporate communication strategies\n• Creating cohesive brand identities from concept to implementation\n• Negotiating and managing commercial contracts\n• Coordinating cross-functional teams for event execution"
    }
  ];

  const certifications = [
    {
      title: "General English Certification Test",
      issuer: "International Business Management Institute (IBMI)",
      link: "https://www.ibm-institute.com/verify/",
      qualificationId: "404347-161-982-7205"
    },
    {
      title: "Game Design",
      issuer: "California Institute of the Arts",
      link: "https://www.coursera.org/account/accomplishments/certificate/B2DAGZW4YCY5",
      qualificationId: "B2DAGZW4YCY5"
    },
    {
      title: "C# with Microsoft",
      issuer: "FreeCodeCamp",
      link: "https://www.freecodecamp.org/certification/CemilBey/foundational-c-sharp-with-microsoft"
    },
    {
      title: "Low Poly Art for Video Games",
      issuer: "Michigan State University - Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/EDKFEJJBDRDE"
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="shader-background" />
      <div className="rainbow-light" />
      
      {/* Binary Rain Effect */}
      <div className="binary-rain">
        {binaryColumns.map(column => (
          <div
            key={column.id}
            className="binary-column"
            style={{
              left: `${column.left}%`,
              animationDelay: `${column.delay}s`
            }}
          >
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="binary-digit">
                {generateBinaryString()}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10 [&_h1]:text-shadow [&_h2]:text-shadow [&_h3]:text-shadow [&_p]:text-shadow [&_a]:text-shadow">
        {/* Header */}
        <header className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-4">
            <img src="placeholder.svg" alt="Profile" className="w-16 h-16 rounded-full" />
            <div>
              <h1 className="text-2xl font-bold text-white">Cemil Buğra Uzunkaya</h1>
              <a href="https://beycemil.github.io" className="text-gray-400 hover:text-white transition-colors">
                beycemil.github.io
              </a>
            </div>
          </div>
          <div>
            <a 
              href="https://flowcv.com/resume/dt7clncdsc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              CV
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto mb-32 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">EVERY BIT SHAPES A PIXEL EVERY PIXEL TELLS A STORY</h2>
          <p className="text-xl text-gray-300 mb-12">
            Full-Stack Indie Game Developer specializing in creating immersive digital experiences.<br />
            Combining technical expertise with artistic vision to bring virtual worlds to life.
          </p>

          <div className="flex justify-center gap-6 mt-8">
            <a 
              href="https://github.com/BeyCemil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/cemilbey/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:cemilbugrauzunkaya@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* Games Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-8">Released Games</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {games.map((game, index) => (
              <a 
                key={index}
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 hover:scale-105 transition-transform duration-300"
              >
                <img src={game.image} alt={game.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                <p className="text-gray-300 whitespace-pre-line">{game.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-8">Professional Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400">{exp.period}</span>
                </div>
                <p className="text-gray-300 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-8">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 hover:bg-white/5 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400">{cert.issuer}</p>
                {cert.qualificationId && (
                  <p className="text-gray-400 text-sm mt-2">ID: {cert.qualificationId}</p>
                )}
                <ExternalLink className="mt-4 text-gray-400" size={20} />
              </a>
            ))}
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-8">Additional Information</h2>
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Design Software</h3>
                <p className="text-gray-300">
                  Adobe Suite (Photoshop, Illustrator, After Effects), Figma, Autodesk Maya, Blender, Substance Painter, Marmoset Toolbag, Materialize, Movavi Packs, CapCut
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Game Development</h3>
                <p className="text-gray-300">
                  Unity (UI Builder - UXML, USS), Unreal Engine 5, C# (.NET), Version Control (Git)
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">About Me</h3>
              <div className="space-y-6 mb-8">
                <p className="text-gray-300">
                  I started my journey in 3D modeling at 17, diving into game development through game jams and small projects. Over time, I contributed as a 3D artist and UI/2D designer in hypercasual games, gaining experience in tools like Substance Painter and Photoshop. Later, I shifted to organizing large-scale esports events, collaborating with major companies and managing successful tournaments with impressive live audiences.
                </p>
                <p className="text-gray-300">
                  At 21, I left university to focus on game development. As a solo developer, I learned C# and released Aim Zen on Steam, which now boasts overwhelmingly positive reviews. Currently, at 22, I'm developing the SUBJECTS, a co-op horror game, while continuing to grow as a creator in the gaming industry.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Skills & Traits</h4>
                  <div className="space-y-2">
                    {["Autodidactic", "Entrepreneur", "Project Manager", "Open to Learning", "Problem Solver", "Team Player"].map((trait, index) => (
                      <div key={index} className="text-gray-300 text-center p-2 bg-white/5 rounded-lg">
                        {trait}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Languages</h4>
                  <div className="space-y-2">
                    <div className="text-gray-300 p-2 bg-white/5 rounded-lg">
                      <span className="font-medium">English:</span> Professional Working Proficiency
                    </div>
                    <div className="text-gray-300 p-2 bg-white/5 rounded-lg">
                      <span className="font-medium">Turkish:</span> Native
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Interests</h4>
                  <div className="space-y-2">
                    {["Game Development", "3D Modeling", "Digital Art", "VR/AR Technology", "Game Engine Architecture"].map((interest, index) => (
                      <div key={index} className="text-gray-300 text-center p-2 bg-white/5 rounded-lg">
                        {interest}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Motto at bottom */}
      <div className="fixed bottom-8 left-0 right-0 text-center z-10">
        <p className="text-white uppercase opacity-50 font-bold tracking-wider code-font">MORIOR INVICTUS</p>
      </div>
    </div>
  );
};

export default Index;
