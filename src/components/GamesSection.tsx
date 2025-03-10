
import { ExternalLink } from "lucide-react";

interface Game {
  title: string;
  description: string;
  image: string;
  link: string;
}

const GamesSection = () => {
  const games: Game[] = [
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

  return (
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
  );
};

export default GamesSection;
