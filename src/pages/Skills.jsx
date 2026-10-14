import { skills } from "../data";
import { Reveal, PageTitle } from "../components/Reveal";

const Skills = () => (
  <div className="container mx-auto px-4 max-w-6xl">
    <PageTitle title="Skills" sub="The tools I use to design, build and ship." />
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((s, i) => (
        <Reveal key={s.group} delay={i * 0.05}>
          <div className="glass rounded-3xl p-6 h-full overflow-hidden relative group">
            <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${s.grad} opacity-20 blur-2xl group-hover:opacity-50 transition`} />
            <h3 className={`font-display text-2xl font-bold mb-5 bg-gradient-to-r ${s.grad} bg-clip-text text-transparent`}>{s.group}</h3>
            <div className="flex flex-wrap gap-3 relative">
              {s.items.map((it) => (
                <span key={it} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:scale-110 hover:border-fuchsia-400 transition cursor-default">{it}</span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);

export default Skills;