import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, animate } from "framer-motion";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { profile, stats, skills, projects } from "../data";
import { Reveal } from "../components/Reveal";

const statStyles = [
  { grad: "from-violet-600 to-fuchsia-500", glow: "shadow-fuchsia-500/40", icon: "🚀" },
  { grad: "from-sky-500 to-indigo-600", glow: "shadow-sky-500/40", icon: "🧰" },
  { grad: "from-amber-400 to-orange-600", glow: "shadow-orange-500/40", icon: "⏳" },
  { grad: "from-emerald-400 to-teal-600", glow: "shadow-emerald-500/40", icon: "👥" },
];
const chipBorders = ["border-violet-400/60", "border-fuchsia-400/60", "border-amber-400/60", "border-sky-400/60", "border-emerald-400/60"];

const Typer = ({ words }) => {
  const [i, setI] = useState(0);
  const [t, setT] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    let d = del ? 35 : 80;
    if (!del && t === w) d = 1400;
    const id = setTimeout(() => {
      if (!del && t === w) setDel(true);
      else if (del && t === "") { setDel(false); setI((i + 1) % words.length); }
      else setT(del ? w.slice(0, t.length - 1) : w.slice(0, t.length + 1));
    }, d);
    return () => clearTimeout(id);
  }, [t, del, i, words]);
  return <span className="grad-text">{t}<span className="animate-pulse text-fuchsia-400">|</span></span>;
};

const Counter = ({ to, suffix }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    const c = animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [to]);
  return <>{n}{suffix}</>;
};

const Home = () => {
  const marquee = skills.flatMap((s) => s.items).slice(0, 24);
  return (
    <div className="container mx-auto px-4">
      <section className="min-h-[80vh] grid lg:grid-cols-2 gap-12 items-center py-8">
        <div className="order-2 lg:order-1 space-y-7">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-block glass rounded-full px-4 py-1.5 text-sm text-slate-200">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
            Open to internships & freelance work
          </motion.p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
            Hi, I'm <br /><span className="grad-text">{profile.name}</span>
          </h1>
          <h2 className="font-display text-2xl md:text-4xl text-slate-200 h-12"><Typer words={profile.roles} /></h2>
          <p className="text-lg text-slate-300 max-w-xl leading-relaxed">{profile.summary}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="btn-primary">View my work <FaArrowRight /></Link>
            <a href={profile.resume} download className="btn-ghost"><FaDownload /> Resume</a>
          </div>
          <div className="flex gap-3 text-xl text-slate-300">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white hover:scale-110 transition"><FaGithub /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-sky-400 hover:scale-110 transition"><FaLinkedin /></a>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="order-1 lg:order-2 relative mx-auto w-72 sm:w-96">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-[conic-gradient(from_0deg,#8b5cf6,#ec4899,#fbbf24,#38bdf8,#8b5cf6)] blur-xl opacity-60 animate-spin-slow" />
          <div className="relative rounded-[2.5rem] p-[3px] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400">
            <img src={profile.photo} alt={profile.name} className="rounded-[2.4rem] w-full aspect-[4/5] object-cover object-top" />
          </div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -left-6 top-10 rounded-2xl px-4 py-2 text-sm font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-lg shadow-fuchsia-500/40">⚛️ React · Node</motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute -right-4 bottom-12 rounded-2xl px-4 py-2 text-sm font-semibold bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg shadow-orange-500/40">🎓 BRAC University</motion.div>
        </motion.div>
      </section>

      {/* Colorful stat cards */}
      <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-4 my-16">
        {stats.map((s, i) => (
          <div key={s.label} className={`relative overflow-hidden rounded-3xl p-6 text-center bg-gradient-to-br ${statStyles[i].grad} shadow-xl ${statStyles[i].glow} hover:-translate-y-2 hover:rotate-1 transition duration-300`}>
            <span className="absolute -top-4 -right-2 text-7xl opacity-20 select-none">{statStyles[i].icon}</span>
            <p className="relative font-display text-4xl md:text-5xl font-bold text-white drop-shadow"><Counter to={s.value} suffix={s.suffix} /></p>
            <p className="relative text-white/90 text-sm mt-1 font-medium">{s.label}</p>
          </div>
        ))}
      </Reveal>

      {/* Tech marquee */}
      <div className="overflow-hidden -mx-4 py-4 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="marquee flex w-max gap-4">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className={`glass border ${chipBorders[i % chipBorders.length]} rounded-full px-5 py-2 text-sm whitespace-nowrap`}>{m}</span>
          ))}
        </div>
      </div>

      {/* Featured work */}
      <Reveal className="my-20">
        <div className="flex items-end justify-between mb-8 gap-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold">Featured work</h2>
          <Link to="/projects" className="text-fuchsia-300 hover:text-white transition flex items-center gap-2">All projects <FaArrowRight /></Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.slice(0, 3).map((p) => (
            <Link key={p.title} to="/projects" className={`group relative overflow-hidden rounded-3xl p-6 min-h-[220px] flex flex-col justify-between bg-gradient-to-br ${p.grad} shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300`}>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/20 blur-2xl group-hover:scale-150 transition duration-500" />
              <div className="relative">
                <h3 className="font-display text-3xl font-bold text-white">{p.title}</h3>
                <p className="text-white/85">{p.type}</p>
              </div>
              <div className="relative flex flex-wrap gap-2 mt-6">
                {p.tech.slice(0, 3).map((t) => <span key={t} className="px-3 py-1 text-xs rounded-full bg-black/25 text-white">{t}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Home;