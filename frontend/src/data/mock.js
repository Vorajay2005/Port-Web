export const mockData = {
  personal: {
    name: "Jay Vora",
    title: "Software Engineer & CS Student",
    tagline:
      "Computer Science student at Rutgers University with expertise in full-stack development, AI/ML, and innovative tech solutions. Building the future, one line of code at a time.",
    bio: "I'm a passionate Computer Science student at Rutgers University and current Software Engineer Intern at Puratech. As a member of the Rutgers Honors College with a 3.76 GPA and multiple Dean's List recognitions, I specialize in full-stack development, AI/ML applications, and mixed reality solutions. Winner of HackRU Spring 2025, I love creating innovative solutions that solve real-world problems.",
    stats: [
      { label: "GPA", value: "3.76" },
      { label: "Dean's List", value: "4x" },
      { label: "Projects Built", value: "10+" },
      { label: "Hackathons Won", value: "1st" },
    ],
  },

  skills: {
    frontend: [
      { name: "React.js", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Material-UI", level: 82 },
      { name: "WordPress", level: 80 },
      { name: "Chart.js", level: 85 },
      { name: "Streamlit", level: 80 },
    ],
    backend: [
      { name: "Python", level: 90 },
      { name: "Java", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "PHP", level: 87 },
      { name: "FastAPI", level: 83 },
      { name: "Laravel", level: 85 },
      { name: "C/C++", level: 82 },
      { name: "Flask", level: 80 },
    ],
    database: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 88 },
      { name: "Firebase", level: 82 },
      { name: "phpMyAdmin", level: 80 },
      { name: "SQL", level: 85 },
    ],
    tools: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 78 },
      { name: "Terraform", level: 75 },
      { name: "Google Cloud", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "XAMPP", level: 85 },
      { name: "MATLAB", level: 75 },
      { name: "Jupyter Notebook", level: 88 },
    ],
    aiml: [
      { name: "TensorFlow", level: 85 },
      { name: "OpenCV", level: 82 },
      { name: "Scikit-learn", level: 80 },
      { name: "XGBoost", level: 78 },
      { name: "Matplotlib", level: 85 },
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 88 },
      { name: "Random Forest", level: 80 },
    ],
  },

  projects: [
    {
      title: "NutriCart",
      description:
        "🏆 HackRU Spring 2025 Winner - Smart grocery cart system with AI-powered object detection for real-time pricing and nutrition tracking to encourage healthier choices.",
      category: "ai",
      tech: [
        "FastAPI",
        "MongoDB",
        "Terraform",
        "Python",
        "Swift",
        "TensorFlow",
        "OpenCV",
      ],
      icon: "🛒",
      github: "https://github.com/Vorajay2005/NutriCart",
      demo: "https://demo.com",
    },
    {
      title: "CodeDNA",
      description:
        "GitHub 'year-in-review' web app providing personalized insights with interactive charts, secure OAuth, responsive dark UI, and admin panel for sharing coding statistics.",
      category: "web",
      tech: [
        "PHP",
        "Laravel",
        "Chart.js",
        "OAuth",
        "MySQL",
        "XAMPP",
        "JavaScript",
      ],
      icon: "📊",
      github: "https://github.com/Vorajay2005/Code-DNA",
      demo: "https://code-dna.onrender.com",
    },
    {
      title: "StockTrade AI",
      description:
        "AI-powered trading platform for Indian stocks with automated model training, technical indicators (RSI, MACD), and portfolio tracking with 70% prediction accuracy.",
      category: "ai",
      tech: [
        "Python",
        "Streamlit",
        "Random Forest",
        "Pandas",
        "NumPy",
        "Plotly",
        "yfinance",
      ],
      icon: "📈",
      github: "https://github.com/Vorajay2005/StockTrade-AI",
      demo: "https://stocktradeai.streamlit.app",
    },

    {
      title: "CodeCanvas 🎨💻",
      category: "web",
      description:
        "A browser-based tool that converts hand-drawn flowcharts into executable code across multiple languages with real-time editing and debugging.",
      icon: "🖌️",
      tech: [
        "React",
        "Konva.js",
        "Monaco Editor",
        "PHP 8.2",
        "SQLite",
        "CSS Modules",
      ],
      github: "https://github.com/Vorajay2005/Code-Canvas",
      demo: "https://jay-canvas-coder-2024.vercel.app/",
    },
    {
      title: "QuizMasterAI 🧠📚",
      category: "ai",
      description:
        "An intelligent AI-powered study tool that converts your notes into personalized quizzes with real-time feedback, performance analytics, and gamified learning to help high school students study smarter.",
      icon: "🧠",
      tech: [
        "React 18",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "OpenAI GPT-4",
        "Framer Motion",
        "Zustand",
        "React Query",
      ],
      github: "https://github.com/Vorajay2005/QuizMasterAI",
      demo: "http://localhost:5173",
    },

    {
      title: "Lost & Found AI System 🧠📦",
      category: "ai",
      description:
        "A Flask-based AI web app that matches lost and found items using NLP and ML. It supports image uploads, smart text preprocessing, and AI-powered matching with a modern UI.",
      icon: "🔍",
      tech: [
        "Python",
        "Flask",
        "HTML5",
        "CSS3",
        "JavaScript",
        "SQLite",
        "scikit-learn",
        "NLTK",
      ],
      github: "https://github.com/Vorajay2005/TraceAI",
      demo: "http://localhost:5000",
    },
    {
      title: "Resume Analyzer 📄🤖",
      category: "ai",
      description:
        "An AI-powered resume analyzer that evaluates your resume against job descriptions with 95% accuracy, offering detailed improvement suggestions and ATS optimization using NLP and ML.",
      icon: "📄",
      tech: [
        "Python",
        "FastAPI",
        "React",
        "Tailwind CSS",
        "Docker",
        "spaCy",
        "scikit-learn",
        "sentence-transformers",
      ],
      github: "https://github.com/Vorajay2005/Resume-Analyzer",
      demo: "http://localhost:3000",
    },
    {
      title: "TravelFlow 🌍",
      category: "web",
      description:
        "A modern, responsive travel website that helps users discover destinations, explore packages, and plan getaways, built with HTML, CSS, and JavaScript with beautiful animations and interactive features.",
      icon: "🧳",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap 5.3.0",
        "Font Awesome 6.4.0",
        "Leaflet.js",
      ],
      github: "https://github.com/Vorajay2005/TravelFlow",
      demo: "https://travel-flow.netlify.app/",
    },
  ],

  experience: [
    {
      role: "Software Engineer Intern",
      company: "Puratech Consultancy Solutions Pvt Ltd",
      period: "Jun 2025 – Present",
      description:
        "Developing full-stack travel-tech websites using PHP, Laravel, HTML, CSS, JavaScript, MySQL. Designing backend APIs and database schemas while enhancing functionality and performance of existing client websites.",
      technologies: [
        "PHP",
        "Laravel",
        "JavaScript",
        "MySQL",
        "XAMPP",
        "HTML",
        "CSS",
      ],
    },
    {
      role: "Information Technology Support Specialist",
      company: "Digital Classroom Services - Rutgers University",
      period: "Sep 2024 – May 2025",
      description:
        "Coordinated setup and configuration of 150+ classroom computers across campus. Assessed and resolved 100+ technical issues, performed proactive maintenance in 30+ rooms, improving reliability and instructor experience.",
      technologies: [
        "Hardware Support",
        "Software Troubleshooting",
        "Network Management",
        "System Administration",
      ],
    },
    {
      role: "Design Research Intern",
      company: "Innovation, Design & Entrepreneurship Academy",
      period: "Jun 2024 – Aug 2024",
      description:
        "Developed mixed reality applications for healthcare professionals, improving training and patient care by 20%. Built VR/AR laparoscopic training modules reducing training time by 15%. Delivered functional MR prototype with 90% positive feedback.",
      technologies: [
        "Mixed Reality",
        "Unity",
        "C#",
        "VR/AR Development",
        "Healthcare Tech",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Vashishth Technologies",
      period: "Oct 2021 - Dec 2021",
      description:
        "Collaborated with a dedicated team of 4 professionals to design and develop a comprehensive data de-duplication system, significantly enhancing data storage efficiency. Implemented algorithms to remove 30%+ redundant data from large datasets, improving storage utilization by 30% through system optimization and efficient data management.",
      technologies: [
        "Python",
        "SQL",
        "Data Structures",
        "Algorithms",
        "Data Deduplication",
        "System Optimization",
        "Git",
        "Linux",
      ],
    },
  ],

  contact: {
    email: "vorajay2005@gmail.com",
    phone: "732-558-9028",
    linkedin: "https://linkedin.com/in/vorajay2027",
    github: "https://github.com/Vorajay2005",
  },

  achievements: [
    {
      title: "1st Place - HackRU Spring 2025",
      description:
        "Best project in health track for building an AI-powered nutrition cart (NutriCart)",
      date: "2025",
      icon: "🏆",
    },
    {
      title: "Honors College Peer Mentor & E-Board Member",
      description:
        "Mentored first-year students and helped lead events and outreach programs",
      date: "2024-2025",
      icon: "🎓",
    },
    {
      title: "Dean's List - Multiple Semesters",
      description: "Fall 2023, Spring 2024, Fall 2024, Spring 2025",
      date: "2023-2025",
      icon: "📚",
    },
    {
      title: "Rutgers Honors College Member",
      description:
        "Selected member of prestigious honors program with 3.76 GPA",
      date: "2023-2027",
      icon: "🌟",
    },
  ],
};
