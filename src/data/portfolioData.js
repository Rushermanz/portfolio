export const personalInfo = {
  name: "Agnivesh",
  role: "Full-Stack Developer & Software Engineer",
  tagline: "Building Practical Digital Products & Interactive Systems",
  bio: "BCA student passionate about full-stack web technologies, game systems, and intelligent digital applications. Experienced in developing end-to-end applications with Python, React, Flask, and exploring modern AI architectures.",
  resumeUrl: "/resume.pdf",
  email: "agnivesh.dev@example.com", // updateable by user
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "India",
  status: "Open to Internships & Full-Time Roles",
  stats: [
    { label: "Hackathon Podiums", value: "2x", description: "Top 5 & 2nd Place Winner" },
    { label: "Core Projects", value: "5+", description: "From Games to Full-Stack Web" },
    { label: "Tech Stack", value: "12+", description: "Languages & Frameworks" },
    { label: "Code Mastery", value: "100%", description: "Practical hands-on focus" }
  ]
};

export const flagshipProject = {
  id: "pixel-racer",
  title: "Pixel Racer",
  subtitle: "Pixel-Art 2D Racing Game & Web Platform",
  type: "Flagship Game & Full-Stack System",
  description: "An interactive top-down 2D racing game built with Python and Pygame, backed by a Flask web architecture for player profiles, dynamic track selection, and competitive real-time leaderboard functionality.",
  tech: ["Python", "Pygame", "Flask", "SQLite", "REST APIs", "LAN / Sockets"],
  features: [
    { title: "Physics & Camera Engine", desc: "Smooth vehicle inertia, realistic rotation, collision detection, and dynamic camera following." },
    { title: "DRS Speed Zones & HUD", desc: "Interactive DRS boost zones, live speedometer HUD, minimap radar, and precise lap timers." },
    { title: "Smart Race Bots", desc: "Competitive AI-driven bots with pathfinding and obstacle avoidance across multiple tracks." },
    { title: "Web Platform & Leaderboard", desc: "Flask backend integrated with SQLite for persistent player profiles, track stats, and global rankings." },
    { title: "Multiplayer Explorations", desc: "Local Area Network (LAN) & socket-based multiplayer testing." }
  ],
  modes: ["Time Trial Mode", "Race Bots", "Custom Tracks", "Global Leaderboards"],
  githubUrl: "https://github.com",
  demoAvailable: true
};

export const projects = [
  {
    id: "student-analyzer",
    title: "Student Performance Analyzer",
    category: "Data & Analytics",
    badge: "Analytics",
    shortDesc: "Data-driven platform for analyzing academic trends, performance metrics, and delivering actionable student insights.",
    description: "A comprehensive data analysis system focused on processing student academic records. It visualizes performance distributions, tracks semester-over-semester progress trends, and calculates predictive insights for educators.",
    tags: ["Python", "Streamlit", "Data Visualization", "Data Analysis", "SQLite"],
    highlights: [
      "Dynamic performance metrics & GPA calculations",
      "Interactive charts for identifying subject-wise academic trends",
      "Automated summary generation from historical student records"
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "digital-ration",
    title: "Digital Ration Shop / PDS System",
    category: "System Design",
    badge: "Civic Tech Concept",
    shortDesc: "Modernizing the Public Distribution System (PDS) for radical transparency, quota tracking, and accessible civic services.",
    description: "An early-stage architecture concept exploring how modern digital platforms can transform ration distribution. Features family account linking, transparent subsidy info, GPS shop locator, and senior citizen home delivery support.",
    tags: ["System Design", "Python", "Full-Stack", "GPS Services", "Concept / WIP"],
    highlights: [
      "Online quota booking & real-time stock availability tracking",
      "GPS-based nearest fair price shop locator",
      "Aadhaar-based biometric concept & demand prediction algorithms",
      "Dedicated delivery assistance support for senior citizens"
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "weather-app",
    title: "Real-Time Weather Application",
    category: "Full-Stack Web",
    badge: "Web App",
    shortDesc: "Asynchronous weather intelligence dashboard featuring real-time meteorological API integration and dynamic atmospheric UI.",
    description: "A sleek, responsive frontend application built to master asynchronous data retrieval and clean API integration. Provides live weather metrics, multi-day forecasts, and dynamic visual states according to atmospheric conditions.",
    tags: ["JavaScript", "React", "REST APIs", "Async/Await", "Dynamic CSS"],
    highlights: [
      "Real-time meteorological data querying via external REST APIs",
      "Dynamic atmospheric theme adapting to sunrise, storms, or clear skies",
      "Instant location search with client-side caching"
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "footwear-ecommerce",
    title: "Footwear E-Commerce Web App",
    category: "Full-Stack Web",
    badge: "E-Commerce",
    shortDesc: "High-conversion shopping experience featuring interactive product grids, category filtering, and shopping flow.",
    description: "A modern e-commerce storefront created to practice modern UI/UX engineering, interactive product cards, responsive category filtering, and cart state management with fluid micro-interactions.",
    tags: ["React", "JavaScript", "Responsive Design", "UI/UX Engineering", "CSS Modules"],
    highlights: [
      "Interactive product cards with live image galleries and hover depth",
      "Category & price filtering with instant state updates",
      "Mobile-first responsive shopping navigation"
    ],
    githubUrl: "https://github.com"
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Advanced", icon: "🐍" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "⚡" },
      { name: "Java", level: "Proficient", icon: "☕" },
      { name: "C++", level: "Proficient", icon: "⚙️" },
      { name: "PHP", level: "Intermediate", icon: "🐘" },
      { name: "HTML5 / CSS3", level: "Advanced", icon: "🎨" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: "Layers",
    skills: [
      { name: "React", level: "Advanced", icon: "⚛️" },
      { name: "Flask", level: "Advanced", icon: "🌶️" },
      { name: "Django", level: "Proficient", icon: "🎸" },
      { name: "Pygame", level: "Advanced", icon: "🎮" },
      { name: "Streamlit", level: "Proficient", icon: "📊" },
      { name: "React Native", level: "Learning / Building", icon: "📱" },
      { name: "LangChain", level: "Exploring AI", icon: "🦜" }
    ]
  },
  {
    category: "Databases & Backend",
    icon: "Database",
    skills: [
      { name: "SQLite", level: "Advanced", icon: "🗄️" },
      { name: "REST APIs", level: "Advanced", icon: "🔌" },
      { name: "API Integration", level: "Advanced", icon: "🔗" },
      { name: "System Architecture", level: "Proficient", icon: "📐" }
    ]
  },
  {
    category: "Tools & Workflow",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: "🐙" },
      { name: "VS Code", level: "Advanced", icon: "💻" },
      { name: "Responsive Design", level: "Advanced", icon: "📱" },
      { name: "Linux / CLI", level: "Proficient", icon: "🖥️" }
    ]
  }
];

export const achievements = [
  {
    id: 1,
    title: "🥈 2nd Place Winner — Hackathon",
    category: "Hackathon Award",
    date: "Recent Milestone",
    description: "Competed in high-intensity hackathon sprint, engineering an innovative software solution under strict deadlines and securing 2nd place overall.",
    badge: "Silver Award"
  },
  {
    id: 2,
    title: "🏅 Top 5 Finish — First Hackathon",
    category: "Hackathon Debut",
    date: "Milestone",
    description: "Achieved a top 5 ranking in debut hackathon appearance against diverse collegiate and industry developer teams.",
    badge: "Top 5 Finalist"
  },
  {
    id: 3,
    title: "🎓 Full-Stack Development Practical Immersion",
    category: "Technical Training",
    date: "Continuous",
    description: "Rigorous hands-on training spanning full-stack architectures, backend APIs, state management, and real-world software assignments.",
    badge: "Practical Training"
  },
  {
    id: 4,
    title: "🚀 BCA Degree Program",
    category: "Academic Foundation",
    date: "Current Pursuit",
    description: "Pursuing Bachelor of Computer Applications with specialized focus on software development, algorithms, databases, and digital system design.",
    badge: "BCA Scholar"
  }
];

export const currentFocus = [
  "Building full-stack web applications with Python/Django/Flask & React",
  "Deepening knowledge in API design & asynchronous architecture",
  "Experimenting with LangChain & Generative AI workflows",
  "Cross-platform mobile application development with React Native",
  "Advanced algorithmic problem solving and data structures"
];
