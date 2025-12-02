import { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Floating Animated Text */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-0 animate-float-left">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-2xl opacity-10 font-bold">
            React.js
          </span>
        </div>
        <div className="absolute top-20 right-0 animate-float-right">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 text-2xl opacity-10 font-bold">
            MERN Stack
          </span>
        </div>
        <div className="absolute bottom-20 left-10 animate-float-left-slow">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 text-2xl opacity-10 font-bold">
            Tailwind CSS
          </span>
        </div>
        <div className="absolute bottom-10 right-10 animate-float-right-slow">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 text-2xl opacity-10 font-bold">
            JavaScript
          </span>
        </div>
      </div>

      {/* Header/Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Shafiur Rahman
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 transition-all duration-300 hover:text-purple-300 ${
                    location.pathname === item.path
                      ? "text-purple-400 font-semibold"
                      : "text-gray-300"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transform transition-transform duration-300 ${
                      location.pathname === item.path
                        ? "scale-x-100"
                        : "scale-x-0"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 space-y-4 bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 animate-slideDown">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-purple-600 to-pink-700 text-white"
                      : "hover:bg-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content - THIS IS WHERE PAGES RENDER */}
      <main className="relative z-10 pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Shafiur Rahman
              </h3>
              <p className="text-gray-400">MERN Stack Developer</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com/Rad0130" target="_blank" rel="noopener noreferrer" 
                 className="text-2xl hover:text-purple-400 transition-transform duration-300 hover:scale-110">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/shafiur-rahman-rad" target="_blank" rel="noopener noreferrer"
                 className="text-2xl hover:text-blue-400 transition-transform duration-300 hover:scale-110">
                <FaLinkedin />
              </a>
              <a href="mailto:shafiurrahmanrad25@gmail.com"
                 className="text-2xl hover:text-red-400 transition-transform duration-300 hover:scale-110">
                <FaEnvelope />
              </a>
              <a href="tel:+8801309634127"
                 className="text-2xl hover:text-green-400 transition-transform duration-300 hover:scale-110">
                <FaPhone />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Shafiur Rahman Rad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;