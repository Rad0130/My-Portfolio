import { Link } from "react-router-dom";
import { FaArrowRight, FaCode, FaLaptopCode, FaServer, FaDatabase, FaEnvelope, FaPhone } from "react-icons/fa";

const Home = () => {
  const stats = [
    { label: "Projects Completed", value: "4+", icon: <FaCode /> },
    { label: "Technologies", value: "10+", icon: <FaLaptopCode /> },
    { label: "Frontend Skills", value: "Expert", icon: <FaLaptopCode /> },
    { label: "Backend Skills", value: "Intermediate", icon: <FaServer /> },
  ];

  return (
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block">Hello, I'm</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
                  Shafiur Rahman
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-gray-300">
                MERN Stack Developer
              </h2>
              
              <p className="text-lg text-gray-400 max-w-xl">
                Motivated Computer Science student at BRAC University specializing in 
                Frontend and MERN Stack development. Passionate about building 
                user-centered digital products and contributing to impactful tech communities.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center space-x-2 text-purple-400">
                    {stat.icon}
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>View Projects</span>
                <FaArrowRight className="animate-bounce-horizontal" />
              </Link>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Content - Profile Card */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30"></div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <span className="text-2xl font-bold">SR</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Contact Info</h3>
                    <p className="text-gray-400">Get in touch</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center">
                      <FaEnvelope className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium">shafiurrahmanrad25@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                      <FaPhone className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-medium">+8801309634127</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center">
                      <FaDatabase className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-medium">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <p className="text-gray-400 text-center">
                    "Passionate about building user-centered digital products"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;