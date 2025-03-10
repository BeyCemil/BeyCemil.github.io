
interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
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

  return (
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
  );
};

export default ExperienceSection;
