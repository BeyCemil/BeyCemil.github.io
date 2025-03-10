
const AdditionalInfoSection = () => {
  return (
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
  );
};

export default AdditionalInfoSection;
