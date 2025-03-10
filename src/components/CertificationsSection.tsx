
import { ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  link: string;
  qualificationId?: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
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

  return (
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
  );
};

export default CertificationsSection;
