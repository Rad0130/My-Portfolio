import { FaExternalLinkAlt, FaGithub, FaReact, FaFire, FaDatabase, FaShoppingCart } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNodedotjs } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "AutoTrust – Second-Hand Car Marketplace",
      description: "A comprehensive marketplace platform for buying and selling second-hand cars with advanced features.",
      tech: ["MERN Stack", "JWT Auth", "Cloudinary", "Context API"],
      icons: [<FaReact />, <SiMongodb />, <SiNodedotjs />, <FaShoppingCart />],
      features: [
        "Admin dashboard for listing approval",
        "JWT authentication system",
        "Installment calculator",
        "Image upload with Multer + Cloudinary",
        "Wishlist and filtering system"
      ],
      liveLink: "https://auto-trust-version2-0.vercel.app",
      githubLink: "https://github.com/Rad0130/Auto-Trust-version2.0.git",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "MovieMaster – Online Movie Library",
      description: "Full-stack movie platform with comprehensive features for movie enthusiasts.",
      tech: ["React", "MongoDB", "Node.js", "Firebase"],
      icons: [<FaReact />, <SiMongodb />, <SiNodedotjs />, <FaFire />],
      features: [
        "Watchlist functionality",
        "Genre-based browsing",
        "User rating system",
        "Google Sign-In authentication",
        "RESTful API with Express"
      ],
      liveLink: "https://movie-master-145da.web.app",
      githubLink: "https://github.com/Rad0130/Movie-Master-Pro.git",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Skill-Up – Local Skill Exchange",
      description: "Platform for local skill sharing and learning with booking system and ratings.",
      tech: ["React.js", "Firebase", "Tailwind", "DaisyUI"],
      icons: [<FaReact />, <FaFire />, <SiTailwindcss />],
      features: [
        "Firebase authentication",
        "Skill session booking",
        "User rating system",
        "Protected routes",
        "Toast notifications"
      ],
      liveLink: "https://skill-up-cd4af.web.app",
      githubLink: "https://github.com/Rad0130/Skill-UP.git",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Hero-App – App Store Platform",
      description: "Interactive app store platform with analytics and installation management.",
      tech: ["React", "Recharts", "LocalStorage"],
      icons: [<FaReact />],
      features: [
        "App browsing and filtering",
        "Installation persistence",
        "Review charts with Recharts",
        "Custom error pages",
        "Installation management"
      ],
      liveLink: "https://hero-apps.surge.sh",
      githubLink: "https://github.com/Rad0130/Hero-App.git",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing my expertise in building modern web applications with cutting-edge technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-[1.02] group`}
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      {project.icons.map((icon, i) => (
                        <span key={i} className="text-xl text-gray-400 hover:text-white transition-colors duration-300">
                          {icon}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                      title="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-800/70 rounded-full text-sm border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-purple-500 mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-300 mb-6">
            Interested in seeing more projects or collaborating?
          </p>
          <a
            href="https://github.com/Rad0130"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            <FaGithub />
            <span>View GitHub Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;