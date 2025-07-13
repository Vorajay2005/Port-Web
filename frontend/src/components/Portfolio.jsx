import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, ExternalLink, Mail, Linkedin, Twitter, Code, Database, Cloud, Smartphone } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { mockData } from '../data/mock';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState('all');
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const roles = ['CS Student', 'Software Engineer', 'AI/ML Developer', 'Full Stack Developer'];

  // Typewriter effect
  useEffect(() => {
    const currentText = roles[currentRole];
    let index = 0;
    
    const timer = setInterval(() => {
      if (index <= currentText.length) {
        setTypedText(currentText.slice(0, index));
        index++;
      } else {
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setTypedText('');
        }, 2000);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentRole]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const filteredProjects = activeProject === 'all' 
    ? mockData.projects 
    : mockData.projects.filter(project => project.category === activeProject);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.1),transparent_50%)]" />
        
        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {mockData.personal.name}
          </h1>
          <div className="text-2xl md:text-4xl text-gray-300 mb-8 h-12">
            <span className="text-blue-400">I'm a </span>
            <span className="text-white font-semibold">{typedText}</span>
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            {mockData.personal.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Let's Connect
            </Button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <div className="text-8xl">👨‍💻</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <h3 className="text-3xl font-semibold mb-6 text-white">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {mockData.personal.bio}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {mockData.personal.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-gray-800 border-gray-700">
              <TabsTrigger value="frontend" className="data-[state=active]:bg-blue-600">Frontend</TabsTrigger>
              <TabsTrigger value="backend" className="data-[state=active]:bg-purple-600">Backend</TabsTrigger>
              <TabsTrigger value="database" className="data-[state=active]:bg-green-600">Database</TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-orange-600">Tools</TabsTrigger>
            </TabsList>
            
            {Object.entries(mockData.skills).map(([category, skills]) => (
              <TabsContent key={category} value={category} className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skill, index) => (
                    <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          {category === 'frontend' && <Code className="w-6 h-6 text-blue-400" />}
                          {category === 'backend' && <Database className="w-6 h-6 text-purple-400" />}
                          {category === 'database' && <Database className="w-6 h-6 text-green-400" />}
                          {category === 'tools' && <Cloud className="w-6 h-6 text-orange-400" />}
                          <h3 className="font-semibold text-white">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ${
                              category === 'frontend' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                              category === 'backend' ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                              category === 'database' ? 'bg-gradient-to-r from-green-400 to-green-600' :
                              'bg-gradient-to-r from-orange-400 to-orange-600'
                            }`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-400 mt-2 block">{skill.level}% Proficiency</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'web', 'ai', 'vr', 'systems'].map((category) => (
              <Button
                key={category}
                variant={activeProject === category ? "default" : "outline"}
                className={`capitalize ${
                  activeProject === category 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                    : 'border-gray-600 text-gray-300 hover:bg-gray-800'
                }`}
                onClick={() => setActiveProject(category)}
              >
                {category === 'all' ? 'All Projects' : 
                 category === 'vr' ? 'VR/AR' : 
                 category === 'ai' ? 'AI/ML' : 
                 category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-6xl">{project.icon}</div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-400">
                      {project.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            {mockData.experience.map((exp, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white">{exp.role}</CardTitle>
                      <CardDescription className="text-blue-400">{exp.company}</CardDescription>
                      <div className="text-sm text-gray-400">{exp.period}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-gray-600 text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or ways to be part of your vision.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400">{mockData.contact.email}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Linkedin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                <p className="text-gray-400">{mockData.contact.linkedin}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Github className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
                <p className="text-gray-400">{mockData.contact.github}</p>
              </CardContent>
            </Card>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-xl"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 bg-black/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 {mockData.personal.name}. Built with React, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;