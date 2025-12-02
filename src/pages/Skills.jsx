import { FaCode, FaPalette, FaDatabase, FaTools, FaUsers, FaLightbulb } from "react-icons/fa";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "C"],
      icon: <FaCode />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "DaisyUI", "Swiper.js"],
      icon: <FaPalette />,
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Backend & Database",
      skills: ["Node.js", "Express.js", "CORS", "MongoDB", "MySQL"],
      icon: <FaDatabase />,
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Tools & Platforms",
      skills: ["GitHub", "Linux", "Firebase", "Vercel", "Render", "Netlify", "Cloudflare", "Railway", "Canva", "Postman"],
      icon: <FaTools />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const softSkills = [
    { skill: "Communication", level: 90 },
    { skill: "Team Leadership", level: 85 },
    { skill: "Problem-Solving", level: 95 },
    { skill: "Critical Thinking", level: 88 },
    { skill: "Research & Analysis", level: 92 },
    { skill: "Collaboration", level: 87 }
  ];

  const otherSkills = [
    "Data Entry",
    "Prompt Engineering",
    "Content Writing",
    "UI/UX Design",
    "Project Management",
    "Event Coordination"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mastery in modern web technologies and development tools
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {technicalSkills.map((category, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-gray-800/70 rounded-full border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Soft Skills with Progress Bars */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center">
                <FaUsers className="text-xl" />
              </div>
              <h2 className="text-3xl font-bold">Soft Skills</h2>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700">
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.skill}</span>
                      <span className="text-purple-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-600 to-orange-600 flex items-center justify-center">
                <FaLightbulb className="text-xl" />
              </div>
              <h2 className="text-3xl font-bold">Other Skills</h2>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700">
              <div className="grid grid-cols-2 gap-4">
                {otherSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                  >
                    <div className="absolute -right-6 -top-6 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <span className="relative z-10">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-xl font-bold mb-3">Expertise</h4>
                <p className="text-gray-300">
                  Specialized in creating responsive web applications with modern frameworks,
                  implementing efficient database solutions, and collaborating in agile development teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;