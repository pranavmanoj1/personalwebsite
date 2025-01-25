import React, { useState } from 'react';
import { Github, Linkedin, Mail, Terminal, Code2, Brain, ExternalLink, ChevronRight, Book, Award } from 'lucide-react';

function App() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = {
    'Backend Development': {
      icon: <Terminal className="mb-2 text-blue-400" />,
      description: 'Building robust server-side applications and RESTful APIs',
      technologies: ['Node.js', 'Python', 'APIs', 'Django','SQL']
    },
    'Frontend Development': {
      icon: <Code2 className="mb-2 text-blue-400" />,
      description: 'Creating responsive and intuitive user interfaces',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    
  };

  const projects = [
    {
      icon: <Brain className="mb-4 text-blue-400" />,
      title: 'Detoxify',
      description: 'A short form content platform meant to deliver a less toxic feed to users.',
      longDescription: 'Designed and developed Detoxify, a social media platform, featuring feeds with a more user well being focused design, reels functionality, and a clean, user-focused interface built with React and Chakra UI',
      technologies: ['React', 'Firebase', 'Chakra UI', 'Zustand'],
      link: 'https://detoxify-social-media.vercel.app',
      link2: 'https://github.com/pranavmanoj1/Detoxify'
    },
    
  ];

  const education = [
    {
      school: 'Rice University',
      degree: 'B.S. in Computer Science',
      period: '2023 - 2027',
      courses: ["Data Structures and Algorithms", "Computational Thinking", "Tech Product Design and development", "Calculus", "Linear Algebra", "Intro to Design and Innovation", "Computer Organization", "Program Design"]
    }
  ];

  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">

            <div className="space-x-6">
              {['about', 'experience', 'education', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize hover:text-blue-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-5xl font-bold mb-4">Pranav Manoj</h1>
            <h2 className="text-2xl text-gray-300 mb-8">Learner, Dreamer, Doer</h2>
          </div>
          <p className="text-xl text-gray-400 mb-8">
            Computer Science student at Rice University, passionate about building scalable applications and exploring new technologies.
          </p>
          <div className="flex space-x-6">
            {[
              { icon: <Github size={24} />, href: 'https://github.com/pranavmanoj1' },
              { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/pranav-manoj-797a71340/' },
              { icon: <Mail size={24} />, href: 'mailto:pm58@rice.edu' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="hover:text-blue-400 transform hover:scale-110 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="group">
                <img
                  src="IMG_1689 2.png"
                  alt="Developer workspace"
                  className="rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <p className="text-gray-300 mb-6">
                  I'm a Computer Science student at Rice University with a strong foundation in full-stack development.
                  Currently focusing on building scalable web applications and exploring machine learning technologies.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(skills).map(([name, skill]) => (
                    <div
                      key={name}
                      className="bg-gray-700 p-4 rounded-lg cursor-pointer transform hover:scale-105 transition-all"
                      onMouseEnter={() => setHoveredSkill(name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {skill.icon}
                      <h3 className="font-semibold mb-2">{name}</h3>
                      {hoveredSkill === name ? (
                        <p className="text-sm text-gray-400">{skill.description}</p>
                      ) : (
                        <p className="text-sm text-gray-400">
                          {skill.technologies.join(', ')}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Education Section */}
      <section id="education" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6 transform hover:scale-105 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.school}</h3>
                    <p className="text-gray-400">{edu.degree}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">{edu.period}</p>
           
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-600 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 cursor-pointer transform hover:scale-105 transition-all"
                  onMouseEnter={() => setActiveProject(index)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  {project.icon}
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {project.title}
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="text-blue-400" />
                    </a>
                    </h3>
                  <p className="text-gray-400 mb-4">
                    {activeProject === index ? project.longDescription : project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ChevronRight size={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-6">
            I'm always open to new opportunities and collaborations.
          </p>
          <a
            href="mailto:pm58@rice.edu"
            className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            <Mail className="mr-2" size={20} />
            Contact Me
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;