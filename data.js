/* Shared content for the round 2 prototypes. Same facts as content/site.json. */
window.SITE = (function () {
  var A = 'assets/';
  function shots(game, list) { return list.map(function (n) { return A + game + '/' + n + '.jpg'; }); }

  var cats = {
    online:      { name: 'Online',      color: '#4cc9f0' },
    tools:       { name: 'Tools',       color: '#f9c74f' },
    simulation:  { name: 'Simulation',  color: '#90be6d' },
    progression: { name: 'Progression', color: '#f9844a' },
    world:       { name: 'World',       color: '#43aa8b' },
    narrative:   { name: 'Narrative',   color: '#c77dff' },
    technical:   { name: 'Technical',   color: '#f25c78' }
  };

  var games = [
    {
      id: 'aimzen', title: 'Aim Zen', object: 'AimZen',
      role: 'Solo Game Developer', status: 'Released', studio: 'Asocion Software',
      desc: 'Where precision meets rhythm. Master your aim through an innovative blend of musical challenges, classic training modes, and customizable experiences designed for both competitive players and casual enthusiasts.',
      steam: 'https://store.steampowered.com/app/2791290/Aim_Zen__Rhythmic_Aim_Trainer/',
      shots: shots('aimzen', ['01', '02', '03', '04', '05', '07']),
      clip: A + 'clips/aimzen.mp4', poster: A + 'clips/aimzen-poster.jpg'
    },
    {
      id: 'tidehaven', title: 'Tidehaven: Ale & Trade', object: 'Tidehaven',
      role: 'Lead Developer & Technical Producer', status: 'Released', studio: "Bunch'o'Nerds",
      desc: 'Medieval sim meets smart idle play. Build and automate your tavern into a lively town. Make it yours with tons of decorations. Dig for ore, gamble, breed rare horses, or take risks with smuggling quests.',
      steam: 'https://store.steampowered.com/app/3691420/Tidehaven_Ale__Trade/',
      shots: shots('tidehaven', ['01', '02', '03', '04', '08'])
    },
    {
      id: 'ikag', title: 'I Know a Guy: Shady Life Simulator', object: 'IKnowAGuy',
      role: 'Lead Developer & Technical Producer', status: 'Released', studio: "Bunch'o'Nerds",
      version: '1.0', milestone: '100,000+ copies sold', devNote: 'I was the only developer on this project.',
      desc: 'Run your pizza shop up front and handle shady business out back. Help hand-crafted NPCs with favors that never go as planned. Play solo or online co-op with up to four players and expand your operation across Hobarey Town.',
      steam: 'https://store.steampowered.com/app/4173620/I_Know_a_Guy_Shady_Life_Simulator/',
      shots: shots('ikag', ['01', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13']),
      clip: A + 'clips/ikag.mp4', poster: A + 'clips/ikag-poster.jpg'
    },
    {
      id: 'subjects', title: 'SUBJECTS', object: 'Subjects',
      role: 'Solo Game Developer', status: 'Cancelled', studio: 'Asocion Software',
      desc: 'A co-op survival horror game set in a shifting dystopian facility. Become one of the SUBJECTS that being tested with countless challenges, missions and difficulties. Up to 4 players.',
      note: 'Development was cancelled. It stays here for the systems built along the way.',
      steam: null,
      shots: shots('subjects', ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'])
    }
  ];

  var raw = [
    ['aimzen', 'User Generated Content System', 'tools'],
    ['aimzen', 'In Game Level Editor', 'tools'],
    ['aimzen', 'Global and Track Specific Leaderboards', 'online'],
    ['aimzen', 'Level and XP System', 'progression'],
    ['aimzen', 'Low Rendering Time with High Fidelity Visuals', 'technical'],
    ['aimzen', 'Steam Integration (Cloud & Achievements)', 'online'],
    ['tidehaven', 'Complex Automation Systems', 'simulation'],
    ['tidehaven', 'Medieval Economy Simulation', 'simulation'],
    ['tidehaven', 'Inn Customization Engine', 'tools'],
    ['tidehaven', 'Town Building Mechanics', 'world'],
    ['tidehaven', 'Resource Management Systems', 'simulation'],
    ['tidehaven', 'Progressive Upgrade Framework', 'progression'],
    ['ikag', 'Small Scale Open World Design', 'world'],
    ['ikag', 'Bethesda Style Dialogue System', 'narrative'],
    ['ikag', 'Comprehensive Simulation Infrastructure', 'simulation'],
    ['ikag', 'Advanced Trajectory System for Throwing Mini Games', 'technical'],
    ['ikag', 'Dynamic Day Night Cycle', 'world'],
    ['ikag', 'Emergent Gameplay Mechanics', 'simulation'],
    ['subjects', 'Peer to Peer Netcode', 'online'],
    ['subjects', 'Full Size Localization', 'narrative'],
    ['subjects', 'Extended Lore for the Game Universe', 'narrative'],
    ['subjects', 'Realistic IK System', 'technical'],
    ['subjects', 'Directing Background Lore and Creatives', 'narrative']
  ];
  var systems = raw.map(function (r, i) {
    return { id: 's' + (i + 1), game: r[0], name: r[1], cat: r[2] };
  });

  var career = [
    {
      id: 'bunch', object: 'BunchONerds', title: 'Co-founder & Technical Producer', company: "Bunch'o'Nerds", period: '2025 to now',
      summary: 'Co-founder of the studio. Lead developer of I Know a Guy: Shady Life Simulator and Tidehaven: Ale & Trade, while still running the technical side of every project as Technical Producer.',
      points: [
        'Lead developer of I Know a Guy: Shady Life Simulator, released as 1.0 with more than 100,000 copies sold',
        'Lead developer of Tidehaven: Ale & Trade',
        'Overseeing technical development pipelines and workflows',
        'Coordinating cross-functional teams and project timelines',
        'Implementing quality assurance processes and standards',
        'Managing technical documentation and knowledge sharing',
        'Facilitating communication between development and business teams',
        'Ensuring project deliverables meet technical and creative requirements'
      ]
    },
    {
      id: 'asocion', object: 'AsocionSoftware', title: 'Indie Game Developer', company: 'Asocion Software', period: '2023 to now',
      summary: 'Solo developer of Aim Zen, released on Steam, and SUBJECTS, which was cancelled during development.',
      points: [
        'Full-stack game development using Unity and C#',
        'Creating and optimizing 3D models and environments',
        'Implementing responsive UI/UX designs',
        'Managing Steam store presence and community',
        'Conducting marketing campaigns and player engagement',
        'Performance optimization and bug fixing'
      ]
    },
    {
      id: 'artist', object: 'ThreeDArtist', title: '3D Artist', company: 'Various Game Development Initiatives', period: '2021 to 2022',
      summary: 'Specialized in creating engaging gaming experiences through:',
      points: [
        'Designing and creating high-quality 3D/2D assets',
        'Seamlessly integrating assets into various game engines',
        'Collaborating with developers to ensure optimal asset performance',
        'Implementing art direction changes based on player feedback'
      ]
    },
    {
      id: 'events', object: 'EventCoordinator', title: 'Event Coordinator', company: 'Asocion (B2B)', period: '2021 to 2023',
      summary: 'Managed comprehensive business operations including:',
      points: [
        'Developing and maintaining corporate communication strategies',
        'Creating cohesive brand identities from concept to implementation',
        'Negotiating and managing commercial contracts',
        'Coordinating cross-functional teams for event execution'
      ]
    }
  ];

  var certs = [
    { title: 'General English Certification Test', issuer: 'International Business Management Institute (IBMI)', link: 'https://www.ibm-institute.com/verify/', id: '404347-161-982-7205' },
    { title: 'Game Design', issuer: 'California Institute of the Arts', link: 'https://www.coursera.org/account/accomplishments/certificate/B2DAGZW4YCY5', id: 'B2DAGZW4YCY5' },
    { title: 'C# with Microsoft', issuer: 'FreeCodeCamp', link: 'https://www.freecodecamp.org/certification/CemilBey/foundational-c-sharp-with-microsoft' },
    { title: 'Low Poly Art for Video Games', issuer: 'Michigan State University, Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/EDKFEJJBDRDE' }
  ];

  return {
    person: {
      name: 'Cemil Buğra Uzunkaya', handle: 'BeyCemil', email: 'uzunkayacemil18@gmail.com',
      tagline: 'Full-Stack Indie Game Developer. Co-founder of Bunch\'o\'Nerds.',
      logo: A + 'logo.png',
      links: {
        github: 'https://github.com/BeyCemil',
        linkedin: 'https://www.linkedin.com/in/cemilbey/',
        artstation: 'https://www.artstation.com/cemilbey'
      }
    },
    cats: cats, games: games, systems: systems, career: career, certs: certs,
    game: function (id) { return games.filter(function (g) { return g.id === id; })[0]; }
  };
})();

/* Code numbers come from the first party C# in the local git repos (third party plugins excluded), counted on 2026-10-29. */
(function () {
  var CODE = {
 "ikag": {
  "lines": 329858,
  "files": 636,
  "types": 1146,
  "areas": [
   {
    "name": "Editor tools",
    "files": 107,
    "lines": 52407
   },
   {
    "name": "Interface and HUD",
    "files": 60,
    "lines": 52224
   },
   {
    "name": "Core managers and data",
    "files": 82,
    "lines": 45141
   },
   {
    "name": "Shady orders, debt and missions",
    "files": 108,
    "lines": 42124
   },
   {
    "name": "Kitchen machines and pizza",
    "files": 88,
    "lines": 40157
   },
   {
    "name": "NPCs and customers",
    "files": 36,
    "lines": 33780
   },
   {
    "name": "Open world and everything else",
    "files": 106,
    "lines": 29494
   },
   {
    "name": "Player and interaction",
    "files": 15,
    "lines": 14156
   },
   {
    "name": "Save system",
    "files": 9,
    "lines": 8194
   },
   {
    "name": "Steam co-op networking",
    "files": 15,
    "lines": 8121
   },
   {
    "name": "Dev tools",
    "files": 10,
    "lines": 4060
   }
  ]
 },
 "tidehaven": {
  "lines": 72294,
  "files": 182,
  "types": 300,
  "areas": [
   {
    "name": "Town building and grid",
    "files": 31,
    "lines": 12751
   },
   {
    "name": "Editor tools",
    "files": 24,
    "lines": 11366
   },
   {
    "name": "Menus and interface",
    "files": 30,
    "lines": 10822
   },
   {
    "name": "Everything else",
    "files": 37,
    "lines": 9056
   },
   {
    "name": "Townsfolk AI",
    "files": 21,
    "lines": 9017
   },
   {
    "name": "Stable, blacksmith and outside logic",
    "files": 15,
    "lines": 7098
   },
   {
    "name": "Events and quests",
    "files": 11,
    "lines": 4317
   },
   {
    "name": "Save system",
    "files": 5,
    "lines": 2810
   },
   {
    "name": "Economy and stock",
    "files": 2,
    "lines": 2582
   },
   {
    "name": "Talents and unlocks",
    "files": 6,
    "lines": 2475
   }
  ]
 },
 "aimzen": {
  "lines": 131597,
  "files": 575,
  "types": 847,
  "areas": [
   {
    "name": "Automated tests",
    "files": 159,
    "lines": 39509
   },
   {
    "name": "Dev probes",
    "files": 75,
    "lines": 27047
   },
   {
    "name": "Beatmap editing",
    "files": 118,
    "lines": 24253
   },
   {
    "name": "Menus and HUD on RmlUi",
    "files": 44,
    "lines": 13132
   },
   {
    "name": "Targets and scoring",
    "files": 64,
    "lines": 8878
   },
   {
    "name": "Audio analysis",
    "files": 38,
    "lines": 5845
   },
   {
    "name": "Everything else",
    "files": 36,
    "lines": 5532
   },
   {
    "name": "Editor tools",
    "files": 22,
    "lines": 4456
   },
   {
    "name": "Backend, leaderboards and Steam",
    "files": 13,
    "lines": 1910
   },
   {
    "name": "Community content",
    "files": 6,
    "lines": 1035
   }
  ]
 },
 "subjects": {
  "lines": 26180,
  "files": 87,
  "types": 107,
  "areas": [
   {
    "name": "Terminals and interactables",
    "files": 16,
    "lines": 4950
   },
   {
    "name": "Everything else",
    "files": 24,
    "lines": 4218
   },
   {
    "name": "Game flow, power and sanity managers",
    "files": 8,
    "lines": 3785
   },
   {
    "name": "Enemies and bosses",
    "files": 9,
    "lines": 3736
   },
   {
    "name": "Items, inventory and usables",
    "files": 9,
    "lines": 3455
   },
   {
    "name": "Menus",
    "files": 3,
    "lines": 2009
   },
   {
    "name": "Character and stats",
    "files": 4,
    "lines": 1649
   },
   {
    "name": "Editor tools",
    "files": 6,
    "lines": 1191
   },
   {
    "name": "Lobby and relay networking",
    "files": 8,
    "lines": 1187
   }
  ]
 }
};
  var COLOR = { aimzen: '#4cc9f0', tidehaven: '#e0a458', ikag: '#ff8a4c', subjects: '#e5486a' };
  window.SITE.games.forEach(function (g) { g.code = CODE[g.id]; g.color = COLOR[g.id]; });
  // The games are listed in the order they were started (first git commit): Aim Zen 2024-01, SUBJECTS 2024-10, Tidehaven 2025-02, I Know a Guy 2025-07.
  var STARTED = ['aimzen', 'subjects', 'tidehaven', 'ikag'];
  window.SITE.games.sort(function (x, y) { return STARTED.indexOf(x.id) - STARTED.indexOf(y.id); });
  window.SITE.totals = { lines: 559929, files: 1480, types: 2400 };
})();
