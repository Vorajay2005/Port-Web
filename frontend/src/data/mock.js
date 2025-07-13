export const mockData = {
  personal: {
    name: "Jay Vora",
    title: "Software Engineer & CS Student",
    tagline: "Computer Science student at Rutgers University with expertise in full-stack development, AI/ML, and innovative tech solutions. Building the future, one line of code at a time.",
    bio: "I'm a passionate Computer Science student at Rutgers University and current Software Engineer Intern at Puratech. As a member of the Rutgers Honors College with a 3.76 GPA and multiple Dean's List recognitions, I specialize in full-stack development, AI/ML applications, and mixed reality solutions. Winner of HackRU Spring 2025, I love creating innovative solutions that solve real-world problems.",
    stats: [
      { label: "GPA", value: "3.76" },
      { label: "Dean's List", value: "4x" },
      { label: "Projects Built", value: "10+" },
      { label: "Hackathons Won", value: "1st" }
    ]
  },
  
  skills: {
    frontend: [
      { name: "React.js", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Material-UI", level: 82 },
      { name: "WordPress", level: 80 }
    ],
    backend: [
      { name: "Python", level: 90 },
      { name: "Java", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "PHP", level: 87 },
      { name: "FastAPI", level: 83 },
      { name: "Laravel", level: 85 }
    ],
    database: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 88 },
      { name: "Firebase", level: 82 },
      { name: "phpMyAdmin", level: 80 },
      { name: "SQL", level: 85 }
    ],
    tools: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 78 },
      { name: "Terraform", level: 75 },
      { name: "Google Cloud", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "XAMPP", level: 85 }
    ]
  },
  
  projects: [
    {
      title: "NutriCart",
      description: "🏆 HackRU Spring 2025 Winner - Smart grocery cart system with AI-powered object detection for real-time pricing and nutrition tracking to encourage healthier choices.",
      category: "ai",
      tech: ["FastAPI", "MongoDB", "Terraform", "Python", "Swift", "TensorFlow", "OpenCV"],
      icon: "🛒",
      github: "https://github.com/Vorajay2005",
      demo: "https://demo.com"
    },
    {
      title: "CodeDNA",
      description: "GitHub 'year-in-review' web app providing personalized insights with interactive charts, secure OAuth, responsive dark UI, and admin panel for sharing coding statistics.",
      category: "web",
      tech: ["PHP", "Laravel", "Chart.js", "OAuth", "MySQL", "XAMPP", "JavaScript"],
      icon: "📊",
      github: "https://github.com/Vorajay2005",
      demo: "https://demo.com"
    },
    {
      title: "StockTrade AI",
      description: "AI-powered trading platform for Indian stocks with automated model training, technical indicators (RSI, MACD), and portfolio tracking with 70% prediction accuracy.",
      category: "ai",
      tech: ["Python", "Streamlit", "Random Forest", "Pandas", "NumPy", "Plotly", "yfinance"],
      icon: "📈",
      github: "https://github.com/Vorajay2005",
      demo: "https://demo.com"
    },
    {
      title: "Mixed Reality Healthcare",
      description: "Immersive VR/AR laparoscopic training modules and real-time patient care tools for healthcare professionals, achieving 90% positive feedback and 15% training time reduction.",
      category: "vr",
      tech: ["Unity", "C#", "Mixed Reality", "Healthcare APIs", "3D Modeling"],
      icon: "🥽",
      github: "https://github.com/Vorajay2005",
      demo: "https://demo.com"
    },
    {
      title: "Travel-Tech Websites",
      description: "Full-stack travel industry websites with robust backend functionality, responsive UI, dynamic content management, and improved performance optimization.",
      category: "web",
      tech: ["PHP", "Laravel", "HTML", "CSS", "JavaScript", "MySQL", "XAMPP"],
      icon: "✈️",
      github: "https://github.com/Vorajay2005",
      demo: "https://demo.com"
    },
    {
      title: "Campus IT Solutions",
      description: "Technical support solutions for 150+ classroom computers across Rutgers campus, resolving 100+ technical issues and improving support efficiency.",
      category: "systems",
      tech: ["Hardware", "Software Troubleshooting", "Network Management", "System Administration"],
      icon: "💻",
      github: "https://github.com/Vorajay2005",
      demo: "https://demo.com"
    }
  ],
  
  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Lead a team of 5 developers building scalable web applications. Architected microservices infrastructure serving 100k+ daily users. Mentored junior developers and established coding standards.",
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"]
    },
    {
      role: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects from conception to deployment. Implemented CI/CD pipelines reducing deployment time by 70%. Built responsive web applications with modern frameworks.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Firebase", "GCP"]
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2019 - 2020",
      description: "Created pixel-perfect, responsive websites for 20+ clients. Optimized website performance achieving 95+ Lighthouse scores. Collaborated with designers to bring creative visions to life.",
      technologies: ["React", "JavaScript", "SCSS", "Webpack", "Figma"]
    },
    {
      role: "Junior Developer",
      company: "Code Academy",
      period: "2018 - 2019",
      description: "Built foundational skills in web development while contributing to various projects. Participated in code reviews and agile development processes. Gained experience in both frontend and backend technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ],
  
  contact: {
    email: "alex.johnson@example.com",
    linkedin: "linkedin.com/in/alexjohnson",
    github: "github.com/alexjohnson",
    twitter: "@alexjohnsondev"
  }
};