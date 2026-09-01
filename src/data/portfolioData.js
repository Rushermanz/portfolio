export const personalInfo = {
  name: "Agnivesh R",
  title: "Full-Stack Developer & MCA Student",
  role: "Full-Stack Developer & Software Engineer",
  tagline: "Building Practical Digital Products & Intelligent Systems",
  bio: "MCA student and Full-Stack Developer focused on building practical software, web applications, and AI-powered solutions. Takes ideas from concept to implementation, designing frontends, developing backends, working with databases and APIs, and integrating intelligent features.",
  status: "Open to Internships & Collaborative Opportunities",
  resumeUrl: "/resume.pdf",
  email: "agniveshr3@gmail.com",
  phone: "+91 8304990602",
  location: "Kochi, Kerala, India",
  github: "https://github.com/rushermanz",
  linkedin: "https://linkedin.com/in/agniveshr",
  stats: [
    { label: "Hackathon Podiums", value: "2x", description: "2nd Place & Top 5 Finalist" },
    { label: "Key Projects", value: "4+", description: "Web, Systems & Game Engines" },
    { label: "Core Skills", value: "12", description: "Frontend, Backend & Tools" },
    { label: "Internship", value: "2 Yrs", description: "Steyp Practical Immersion" }
  ]
};

export const flagshipProject = {
  id: "pixel-racer",
  title: "Pixel Racer",
  subtitle: "2D Racing Game & Web Leaderboard Platform",
  type: "2D Game Engine & Web Architecture",
  description: "Created a top-down 2D racing game using Python and Pygame, implementing core gameplay systems, AI opponents, race modes, and player progression features backed by Flask, SQLite, and LAN networking.",
  tech: ["Python", "Pygame", "Flask", "SQLite", "JavaScript", "HTML/CSS", "LAN Networking"],
  features: [
    { title: "Physics & Gameplay Mechanics", desc: "Vehicle inertia, rotation physics, collision detection, and dynamic camera system." },
    { title: "Smart Race Bots & Telemetry", desc: "Competitive AI opponents with pathfinding algorithms and real-time lap timers." },
    { title: "Flask Web & Leaderboard Backend", desc: "Flask web platform with SQLite database for player profiles and global leaderboards." }
  ],
  githubUrl: "https://github.com/rushermanz"
};

export const experience = [
  {
    id: "steyp-intern",
    role: "Student Intern",
    company: "Steyp",
    location: "Kochi, Kerala, India",
    period: "Aug 2023 – Aug 2025",
    type: "Internship",
    bullets: [
      "Architected hands-on experience in full-stack development, API integration, and Android application development through structured assignments and practical projects.",
      "Built multiple applications, including a weather application using API integration and a footwear e-commerce web application.",
      "Spearheaded participation in two hackathons, achieving a Top 5 finish in the first hackathon and 2nd place in the second, gaining practical experience in rapid development, teamwork, problem-solving, and presenting software solutions.",
      "Completed multiple development assignments covering different aspects of application development and strengthened practical programming and software development skills."
    ]
  }
];

export const education = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    field: "Computer Science",
    institution: "MES ADVANCED INSTITUTE OF MANAGEMENT AND TECHNOLOGY",
    location: "Marampally, Kochi",
    period: "Aug 2025 – Mar 2027",
    status: "Currently Pursuing"
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Computer Science",
    institution: "Bharata Mata College of Commerce and Arts",
    location: "Choondy, Aluva",
    period: "Aug 2022 – Mar 2025",
    status: "Completed"
  }
];

export const skillCategories = [
  {
    category: "Frontend Development",
    icon: "Layout",
    description: "Creating responsive, accessible, and dynamic user interfaces.",
    skills: [
      { name: "React", level: "Advanced", icon: "⚛️" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "⚡" },
      { name: "HTML5", level: "Advanced", icon: "🎨" },
      { name: "CSS3", level: "Advanced", icon: "🎯" }
    ]
  },
  {
    category: "Backend Development",
    icon: "Server",
    description: "Developing robust APIs, server logic, and database schemas.",
    skills: [
      { name: "Python", level: "Advanced", icon: "🐍" },
      { name: "Node.js", level: "Proficient", icon: "🟢" },
      { name: "APIs / RESTful Services", level: "Advanced", icon: "🔌" },
      { name: "Supabase", level: "Proficient", icon: "⚡" },
      { name: "Flask & SQLite", level: "Proficient", icon: "🗄️" }
    ]
  },
  {
    category: "Development Tools & Design",
    icon: "Wrench",
    description: "Version control, workflow optimization, and UI/UX prototyping.",
    skills: [
      { name: "Git", level: "Advanced", icon: "📦" },
      { name: "GitHub", level: "Advanced", icon: "🐙" },
      { name: "Figma", level: "Proficient", icon: "❖" },
      { name: "Canva", level: "Proficient", icon: "🖌️" }
    ]
  }
];

export const projects = [
  {
    id: "pixel-racer",
    title: "Pixel Racer",
    subtitle: "2D Racing Game & Web Leaderboard System",
    category: "Game & Web Architecture",
    badge: "Flagship Project",
    shortDesc: "A top-down 2D racing game with custom physics engine, AI bots, and Flask web platform backend.",
    description: "Created a top-down 2D racing game using Python and Pygame, implementing core gameplay systems, AI opponents, race modes, and player progression features backed by Flask, SQLite, and LAN networking.",
    tags: ["Python", "Pygame", "Flask", "SQLite", "JavaScript", "HTML/CSS", "LAN Networking"],
    highlights: [
      "Custom physics, vehicle handling, and collision detection engine",
      "Dynamic AI opponents with intelligent pathfinding",
      "Flask backend for persistent player profiles and web leaderboards",
      "Local Area Network (LAN) socket multiplayer support"
    ],
    githubUrl: "https://github.com/rushermanz"
  },
  {
    id: "digital-ration",
    title: "Digital Ration Shop",
    subtitle: "Public Distribution System (PDS) Platform",
    category: "System Design",
    badge: "Civic Tech Concept",
    shortDesc: "Digital Public Distribution System architecture for stock tracking, transparent subsidy allocation, and senior citizen assistance.",
    description: "Designed a digital Public Distribution System (PDS) concept to streamline ration booking, stock tracking, digital payments, beneficiary authentication, and subsidy information, with features focused on improving transparency, reducing queues, and making ration services more accessible to senior citizens.",
    tags: ["System Design", "Python", "Web Platform", "Civic Tech", "Process Optimization"],
    highlights: [
      "Real-time quota tracking and transparent subsidy allocation",
      "Queue-reduction algorithms and digital booking flows",
      "Dedicated accessibility and home delivery features for senior citizens",
      "Secure beneficiary authentication & digital payment framework"
    ],
    githubUrl: "https://github.com/rushermanz"
  },
  {
    id: "weather-app",
    title: "Real-Time Weather Application",
    subtitle: "Asynchronous Meteorological Dashboard",
    category: "Full-Stack Web App",
    badge: "API Integration",
    shortDesc: "Asynchronous web application providing live weather metrics, multi-day forecasts, and dynamic interface updates.",
    description: "Built a responsive weather application during internship at Steyp, mastering asynchronous data fetching and REST API integration to deliver dynamic atmospheric visual themes and location weather analysis.",
    tags: ["React", "JavaScript", "REST APIs", "Async/Await", "CSS3"],
    highlights: [
      "Asynchronous querying of global meteorological REST APIs",
      "Instant city search with client-side caching and error handling",
      "Dynamic weather UI state matching real-time atmospheric conditions"
    ],
    githubUrl: "https://github.com/rushermanz"
  },
  {
    id: "footwear-ecommerce",
    title: "Footwear E-Commerce Web App",
    subtitle: "Interactive Shopping & Product Platform",
    category: "E-Commerce Web App",
    badge: "Web App",
    shortDesc: "Interactive shopping platform featuring product catalog grids, dynamic category filtering, and shopping cart workflow.",
    description: "Engineered a modern e-commerce storefront during internship at Steyp to practice clean UI component architecture, interactive product cards, responsive category filtering, and state management.",
    tags: ["React", "JavaScript", "UI/UX Engineering", "CSS3"],
    highlights: [
      "Interactive product showcase grid with live category filters",
      "Responsive shopping cart state management",
      "Clean UI component design adhering to modern web standards"
    ],
    githubUrl: "https://github.com/rushermanz"
  }
];

export const achievements = [
  {
    id: 1,
    title: "🥈 2nd Place Winner — Web It Up 4.0",
    category: "Hackathon Award",
    date: "Talrop / Steyp",
    description: "Secured 2nd place overall in Web It Up 4.0 hackathon hosted by Talrop & Steyp, engineering and presenting an innovative full-stack software solution under tight sprint constraints.",
    badge: "2nd Place Winner"
  },
  {
    id: 2,
    title: "🏅 Top 5 Finalist — Web It Up 2.0",
    category: "Hackathon Debut",
    date: "Talrop / Steyp",
    description: "Achieved a Top 5 finalist ranking in debut hackathon appearance (Web It Up 2.0 hosted by Talrop & Steyp), demonstrating rapid prototyping, teamwork, and technical problem solving.",
    badge: "Top 5 Finalist"
  }
];
