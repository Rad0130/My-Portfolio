import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../data";
import { Reveal, PageTitle } from "../components/Reveal";

const Projects = () => (
  <div className="container mx-auto px-4 max-w-6xl">
    <PageTitle title="Projects" sub="Full-stack apps that are live right now. Click through and try them." />
    <div className="grid lg:grid-cols-2 gap-8">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={(i % 2) * 0.1}>
          <article className="group h-full rounded-3xl p-[2px] bg-white/10 hover:bg-gradient-to-br hover:from-violet-500 hover:via-fuchsia-500 hover:to-amber-400 transition-all duration-500 hover:-translate-y-2">
            <div className="h-full rounded-[1.4rem] bg-[#0d0820] p-7 flex flex-col">
              <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${p.grad} mb-5 group-hover:w-full transition-all duration-500`} />
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-display text-3xl font-bold">{p.title}</h3>
                  <p className="text-slate-400">{p.type}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <a href={p.live} target="_blank" rel="noopener noreferrer" title="Live demo" aria-label={`${p.title} live demo`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-fuchsia-500 transition"><FaExternalLinkAlt /></a>
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" title="Source code" aria-label={`${p.title} source`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-violet-500 transition"><FaGithub /></a>}
                </div>
              </div>
              <p className="text-slate-300 my-5">{p.desc}</p>
              <ul className="space-y-2 mb-6 text-slate-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3"><span className={`w-2 h-2 rounded-full bg-gradient-to-r ${p.grad}`} />{f}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tech.map((t) => <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10">{t}</span>)}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
    <Reveal className="text-center mt-14">
      <a href="https://github.com/Rad0130" target="_blank" rel="noopener noreferrer" className="btn-primary"><FaGithub /> More on GitHub</a>
    </Reveal>
  </div>
);

export default Projects;