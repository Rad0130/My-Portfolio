import { FaBriefcase, FaLaptopCode, FaChartLine, FaPenNib, FaDollarSign, FaUsers } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer & Data Collection",
      company: "Freelance / Academic Practice",
      period: "2021 – Present",
      icon: <FaLaptopCode />,
      color: "from-blue-500 to-cyan-500",
      responsibilities: [
        "Built multiple web applications using HTML, CSS, JavaScript, React, and MERN stack",
        "Conducted data collection and analysis from Facebook, Instagram, and LinkedIn",
        "Implemented responsive designs and user-friendly interfaces",
        "Collaborated on academic projects with cross-functional teams"
      ]
    },
    {
      title: "Director of Finance",
      company: "BRAC University Computer Club (BUCC)",
      period: "Dec 2024 – Present",
      icon: <FaDollarSign />,
      color: "from-green-500 to-emerald-500",
      responsibilities: [
        "Managed budgeting, financial planning, and reporting for multiple tech events",
        "Streamlined expense tracking using Excel and Google Sheets",
        "Coordinated seminars, workshops, and large-scale university events",
        "Assisted with event setup, speaker coordination, attendee flow, and volunteer management"
      ]
    },
    {
      title: "Content Writer & Blogger",
      company: "BRAC University & Personal Blog",
      period: "2021 – Present",
      icon: <FaPenNib />,
      color: "from-purple-500 to-pink-500",
      responsibilities: [
        "Authored articles covering tech, education, events, and storytelling",
        "Improved student engagement through well-researched, impactful content",
        "Created technical documentation and project case studies",
        "Developed content strategies for university publications"
      ]
    }
  ];

  const skills = [
    { name: "Web Development", level: 90 },
    { name: "Financial Management", level: 85 },
    { name: "Content Creation", level: 88 },
    { name: "Project Leadership", level: 82 },
    { name: "Team Coordination", level: 87 },
    { name: "Technical Writing", level: 86 }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Experience & Leadership
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combining technical expertise with leadership roles in academic and professional settings
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative mb-12 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} z-10`}></div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
              }`}>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center`}>
                      {exp.icon}
                    </div>
                    <div className={`${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-purple-300">{exp.company}</p>
                      <span className="text-sm text-gray-400">{exp.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="w-2 h-2 rounded-full bg-purple-500 mr-3 mt-2 flex-shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Overview */}
        <div className="mt-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-600 to-orange-600 flex items-center justify-center">
              <FaChartLine className="text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-center">Skills Development</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-purple-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 max-w-3xl mx-auto">
            <FaBriefcase className="text-4xl mx-auto mb-4 text-purple-400" />
            <h3 className="text-2xl font-bold mb-4">Looking for Opportunities</h3>
            <p className="text-gray-300 mb-6">
              I'm actively seeking opportunities to apply my skills in web development, 
              project management, and team leadership. Let's build something amazing together!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              <FaUsers />
              <span>Let's Connect</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;