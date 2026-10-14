import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { profile } from "../data";
import Background from "./Background";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const link = ({ isActive }) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30" : "text-slate-300 hover:text-white hover:bg-white/10"
    }`;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <motion.div style={{ scaleX: progress }} className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400" />

      {/* Interactive background */}
      <Background />

      <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
        <nav className={`mx-auto max-w-5xl rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-300 ${scrolled ? "glass shadow-2xl shadow-black/40" : "bg-transparent"}`}>
          <NavLink to="/" className="font-display text-xl font-bold grad-text">Rad.</NavLink>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <NavLink key={n.path} to={n.path} end className={link}>{n.name}</NavLink>
            ))}
          </div>
          <button className="md:hidden text-xl p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden glass rounded-3xl mt-2 p-3 mx-auto max-w-5xl flex flex-col gap-1">
            {navItems.map((n) => (
              <NavLink key={n.path} to={n.path} end className={link}>{n.name}</NavLink>
            ))}
          </motion.div>
        )}
      </header>

      {/* key on pathname replays the entrance animation for each page */}
      <motion.main key={pathname} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="relative z-10 pt-28">
        <Outlet />
      </motion.main>

      <footer className="relative z-10 mt-24 border-t border-white/10">
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-bold grad-text">{profile.name}</p>
            <p className="text-slate-400 text-sm">Full Stack Developer · Dhaka, Bangladesh</p>
          </div>
          <div className="flex gap-3 text-xl">
            {[
              [profile.github, <FaGithub />, "GitHub"],
              [profile.linkedin, <FaLinkedin />, "LinkedIn"],
              [`mailto:${profile.email}`, <FaEnvelope />, "Email"],
              [`tel:${profile.phone}`, <FaPhone />, "Phone"],
            ].map(([href, icon, label]) => (
              <a key={label} href={href} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                 className="w-11 h-11 rounded-full glass flex items-center justify-center hover:scale-110 hover:bg-fuchsia-500/30 transition-all">
                {icon}
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-slate-500 text-sm pb-8">© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </div>
  );
};

export default Layout;