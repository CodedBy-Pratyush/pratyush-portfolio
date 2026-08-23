// portfolioData.js
// This file is the ONLY source of truth the AI is allowed to talk about.
// To update the portfolio, edit this file. No other code needs to change.

const portfolioData = {
  name: "Pratyush Banerjee",
  location: "Kolkata, India",
  email: "pratyushbanerjee75@gmail.com",
  phone: "+91 7699897880",
  linkedin: "linkedin.com/in/pratyush-banerjee-0a0642284",
  github: "github.com/CodedBy-Pratyush",

  role: "Full Stack Developer (Fresher / Intern)",
  focusAreas: [
    "MERN stack",
    "Backend development",
    "AI/LLM integration",
    "LLM-powered applications",
    "REST APIs",
    "Database systems",
    "System design",
    "DSA",
  ],
  targetRoles: [
    "Full Stack Developer Intern",
    "Backend Developer Intern",
    "Software Developer Intern",
    "Junior Full Stack Developer",
    "Junior Backend Developer",
  ],

  skills: {
    languages: ["Java", "JavaScript ES6+", "SQL", "C++"],
    frontend: ["React.js", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "RESTful API Design"],
    databases: ["MongoDB", "PostgreSQL", "MySQL"],
    ai: [
      "Google Gemini API",
      "Groq API",
      "Multi-LLM Orchestration",
      "Prompt Engineering",
      "RAG basics",
    ],
    tools: ["Git", "GitHub", "Postman", "Docker", "VS Code"],
    csFundamentals: [
      "Data Structures & Algorithms using Java",
      "OOP",
      "DBMS",
      "System Design",
    ],
  },

  education: {
    degree: "B.Tech - Computer Science & Engineering",
    specialisation: "AI/ML",
    university: "Sister Nivedita University",
    location: "Kolkata, India",
    duration: "2024-2028",
    currentStatus: "2nd year undergraduate student",
    coursework: [
      "Data Structures & Algorithms",
      "DBMS",
      "OOP",
      "Computer Networks",
      "Operating Systems",
    ],
  },

  projects: [
    {
      id: "deepseek-clone",
      name: "DeepSeek Clone",
      category: "Conversational AI Platform",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "LLM Streaming APIs"],
      description:
        "A real-time conversational AI platform with streaming LLM responses, token-level handling, markdown rendering and MongoDB-backed multi-turn chat history.",
      features: [
        "Real-time conversational AI",
        "Streaming LLM responses",
        "Token-level handling",
        "Markdown rendering",
        "MongoDB-backed chat sessions",
        "Multi-turn chat history",
        "JWT authentication",
        "API rate limiting",
        "Indexed MongoDB queries",
        "Modular Express middleware",
      ],
      results: [
        "Under 300ms time-to-first-token, measured during local testing only.",
        "Roughly 40% reduction in chat-history retrieval latency compared with the project's own stated baseline (a local/project measurement, not an industry benchmark).",
      ],
      status: "Completed (personal project)",
      github: "",
      liveDemo: "",
    },
    {
      id: "compilerx",
      name: "CompilerX",
      category: "AI-Powered Multi-Language Online Compiler",
      technologies: ["React", "Node.js", "Express.js", "Groq API", "Google Gemini API"],
      description:
        "An online compiler supporting 8+ programming languages, with isolated code execution and two AI models working together: Groq for fast syntax feedback and Gemini for deeper code explanations and optimization advice.",
      features: [
        "8+ programming languages",
        "Isolated code execution",
        "Groq API integration",
        "Gemini API integration",
        "Syntax correction",
        "Streaming inline feedback",
        "Code optimization explanations",
        "Async compilation jobs",
        "Structured compilation errors",
        "Modular REST backend",
      ],
      aiArchitecture: {
        groq: "Fast syntax-related feedback.",
        gemini: "Deep code explanation and optimization.",
      },
      results: [
        "Roughly 60% reduction in debugging time, reported during user testing (an estimated, user-testing result, not a formal benchmark).",
      ],
      status: "Completed (personal project)",
      github: "",
      liveDemo: "",
    },
    {
      id: "resumeforge-ai",
      name: "ResumeForge AI",
      category: "ATS Resume Analyzer & Builder",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Groq API", "Gemini API"],
      description:
        "A resume builder and ATS analyzer that scores resumes, extracts keywords, rewrites bullet points against a job description, and tracks ATS score history over time.",
      features: [
        "Resume builder",
        "ATS analysis",
        "Keyword extraction",
        "ATS scoring",
        "Job-description optimization",
        "AI bullet rewriting",
        "Resume templates",
        "Versioned ATS scores",
        "Session history",
        "PDF export",
        "Full CRUD",
        "Real-time preview",
      ],
      aiArchitecture: {
        groq: "Fast keyword extraction and ATS-related processing.",
        gemini: "Context-aware rewriting and optimization.",
      },
      results: [],
      status: "Completed (personal project)",
      github: "",
      liveDemo: "",
    },
    {
      id: "upi-without-internet",
      name: "UPI Without Internet",
      category: "Offline P2P Transaction Processor",
      technologies: [],
      description:
        "An in-progress backend architecture and research project exploring how peer-to-peer transactions could work offline. This is NOT a production payment system and does not process real money.",
      features: [],
      currentWork: [
        "Cryptographically signed offline ledger",
        "Transaction reconciliation",
        "Pending transaction resolution",
        "Double-spend prevention research",
        "CRDT research",
        "Bluetooth/NFC communication research",
      ],
      results: [],
      status: "IN PROGRESS - architecture and research stage, not completed or production-ready",
      github: "",
      liveDemo: "",
    },
  ],

  achievements: [
    "Built and shipped 3 full-stack AI-integrated applications independently.",
    "Active GitHub contributor.",
    "Regularly solves DSA problems using Java.",
    "Exploring system design and high-concurrency backend concepts.",
    "Exploring LLM orchestration patterns.",
    "Building projects beyond formal academic coursework.",
  ],
};

module.exports = portfolioData;
