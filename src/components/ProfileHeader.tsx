
import { Github, Linkedin, Mail } from "lucide-react";

const ProfileHeader = () => {
  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center mb-20">
        <div className="flex items-center gap-4">
          <img src="/lovable-uploads/7ac1f179-ebc3-4009-80e3-adb7c6d81faa.png" alt="Profile" className="w-16 h-16 rounded-full object-cover" />
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
    </>
  );
};

export default ProfileHeader;
