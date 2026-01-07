import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
     {
      title: 'RechargePro – MERN Stack Recharge Management System',
      description: 'RechargePro is a MERN stack recharge platform with User, Company, and Admin roles, featuring secure authentication and Razorpay payment integration.Includes role-based dashboards where users recharge, companies manage plans, and admins monitor platform data.',
      image: '/rechargePro.png',
      technologies: ['Rect.js','Node.js', 'Tailwind css','MongoDB'],
      liveUrl : "https://student-management-system-frontend-eoj1.onrender.com/",
      githubUrl: 'https://github.com/AchalParab1902/RechargePro',
      featured: true,
    },
     {
      title: 'Student Management Authentication System',
      description: 'Developed a secure MERN-based authentication system with login/signup, role-based access (admin & student), protected routes, and MongoDB integration. Implemented validations and dashboards using React, Node.js, Express, and JWT authentication.',
      image: '/SMS.png',
      technologies: ['Rect.js','Node.js', 'Tailwind css','MongoDB'],
      liveUrl : "https://student-management-system-frontend-eoj1.onrender.com/",
      githubUrl: 'https://github.com/AchalParab1902/Student_Management_System',
      featured: true,
    },
    {
      title: 'TaskTracker',
      description: 'Developed a full-stack ToDo application featuring secure authentication, forgot password via Nodemailer, and complete CRUD operations for tasks with priority and status management.Built a responsive dashboard with data visualizations using chart libraries, backed by RESTful APIs in Node.js and Express.js with MongoDB for efficient data handling.',
      image: '/ToDoApp.png',
      technologies: ['Rect.js','Node.js', 'Tailwind css','MongoDB'],
      liveUrl : "https://interractive-story-telling.vercel.app/",
      githubUrl: 'https://github.com/AchalParab1902/Interractive_Story_telling',
      featured: true,
    },
    {
      title: 'Interractive Story Telling',
      description: 'Implemented dynamic and interactive features including seamless page navigation, a play/pause voice narration system, and smooth animations to enhance user engagement and deliver an immersive storytelling experience.',
      image: '/Story.png',
      technologies: ['HTML','CSS', 'JavaScript'],
      liveUrl : "https://interractive-story-telling.vercel.app/",
      githubUrl: 'https://github.com/AchalParab1902/Interractive_Story_telling',
      featured: true,
    },
    
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-red-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work and side projects. Each project represents
            a unique challenge and learning experience.
          </p>
        </div>

        {/* Featured Projects */}
       {/* <div className="mb-8 space-y-4"> */}
<div className="w-full max-w-9xl p-4 mb-6 space-y-4">
  <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
    <Folder className="text-blue-400 mr-3" size={24} />
    Featured Projects
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {featuredProjects.map((project, index) => (
      <div key={index} className="bg-slate-800/50 rounded-2xl">
               <div className="relative group rounded-t-2xl overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                    >   
                      <ExternalLink size={18} className="mr-2" />
                      Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                    >   
                      <Github size={18} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {/* <div>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <Folder className="text-purple-400 mr-3" size={24} />
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <Folder className="text-purple-400 flex-shrink-0" size={24} />
                  <div className="flex items-center space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{project.title}</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-xs border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-400 text-xs px-2 py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;