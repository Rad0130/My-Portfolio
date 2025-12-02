import { FaGraduationCap, FaUniversity, FaSchool, FaUser, FaLightbulb, FaHandsHelping } from "react-icons/fa";

const About = () => {
  const education = [
    {
      icon: <FaUniversity />,
      institution: "BRAC University",
      degree: "Bachelor of Science in Computer Science and Engineering",
      period: "2022 – Present",
      details: ["Expected Graduation: 2026", "Dhaka, Bangladesh"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaSchool />,
      institution: "Adamjee Cantonment College",
      degree: "Higher Secondary Certificate (Science)",
      period: "2021",
      details: ["GPA: 5.00", "Dhaka, Bangladesh"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaSchool />,
      institution: "Natore Govt. Boys' High School",
      degree: "Secondary School Certificate (Science)",
      period: "2019",
      details: ["GPA: 5.00", "Natore, Bangladesh"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const extracurricular = [
    {
      icon: <FaHandsHelping />,
      title: "Director of Finance",
      organization: "BRAC University Computer Club (BUCC)",
      description: "Managed budgeting, financial planning, and reporting for tech events"
    },
    {
      icon: <FaLightbulb />,
      title: "Project Architect",
      organization: "NASA Space Apps Challenge",
      description: "Led project development for space technology challenge"
    },
    {
      icon: <FaUser />,
      title: "Volunteer",
      organization: "BRAC Career Fair 2024",
      description: "Assisted in organizing and managing career fair events"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate web developer and active member of BRAC University's tech ecosystem
          </p>
        </div>

        {/* Professional Summary */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-gray-700">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
              <FaUser className="text-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Professional Summary</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Motivated Computer Science student at BRAC University specializing in Frontend and MERN Stack 
                development. Experienced in web applications, UI/UX design, data analytics, content writing, 
                and leading technical projects. Passionate about building user-centered digital products and 
                contributing to impactful tech communities.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                <FaGraduationCap className="text-xl" />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center`}>
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{edu.institution}</h3>
                        <p className="text-gray-400">{edu.degree}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                      {edu.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="text-gray-300">{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center">
                <FaHandsHelping className="text-xl" />
              </div>
              <h2 className="text-3xl font-bold">Extracurricular Activities</h2>
            </div>

            <div className="space-y-6">
              {extracurricular.map((activity, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                      {activity.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                      <p className="text-purple-300 font-medium mb-2">{activity.organization}</p>
                      <p className="text-gray-300">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* About Me Section */}
            <div className="mt-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">Personal Philosophy</h3>
              <p className="text-gray-300 leading-relaxed">
                Passionate web developer and active member of BRAC University's tech ecosystem. 
                Experienced in leadership, event management, and building meaningful community-driven projects. 
                Interested in software development, tech communities, machine learning, and future innovations. 
                Always open to collaboration and eager to contribute to impactful projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;