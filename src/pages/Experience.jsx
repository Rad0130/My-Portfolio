import { Link } from "react-router-dom";
import { experience } from "../data";
import { Reveal, PageTitle } from "../components/Reveal";

const Experience = () => (
  <div className="container mx-auto px-4 max-w-4xl">
    <PageTitle title="Experience" sub="Where I've built, led and written." />
    <div className="relative pl-8 md:pl-10 border-l-2 border-white/10 space-y-8">
      {experience.map((e) => (
        <Reveal key={e.role}>
          <div className="relative glass rounded-3xl p-6 hover:border-fuchsia-400/50 transition">
            <span className={`absolute -left-[45px] md:-left-[53px] top-7 w-5 h-5 rounded-full bg-gradient-to-r ${e.grad} ring-4 ring-[#07040f]`} />
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${e.grad} text-black`}>{e.period}</span>
            <h3 className="font-display text-2xl font-bold mt-3">{e.role}</h3>
            <p className="text-fuchsia-300 mb-3">{e.org}</p>
            <ul className="space-y-2 text-slate-300">
              {e.points.map((p) => <li key={p} className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />{p}</li>)}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
    <Reveal className="text-center mt-16">
      <div className="glass rounded-3xl p-10">
        <h3 className="font-display text-3xl font-bold grad-text mb-3">Let's build something</h3>
        <p className="text-slate-300 mb-6">Looking for internships and projects in web development and team leadership.</p>
        <Link to="/contact" className="btn-primary">Get in touch</Link>
      </div>
    </Reveal>
  </div>
);

export default Experience;