import { FaGraduationCap, FaFlask, FaUsers } from "react-icons/fa";
import { education, activities, profile } from "../data";
import { Reveal, PageTitle } from "../components/Reveal";

const About = () => (
  <div className="container mx-auto px-4 max-w-6xl">
    <PageTitle title="About me" sub="Developer, event organiser and curious researcher from Dhaka." />

    <Reveal className="glass rounded-3xl p-8 mb-8 grid md:grid-cols-[auto,1fr] gap-8 items-center">
      <img src={profile.photo} alt={profile.name} className="w-40 h-40 rounded-3xl object-cover object-top mx-auto ring-4 ring-fuchsia-500/40" />
      <p className="text-lg text-slate-200 leading-relaxed">
        I specialise in Frontend and MERN stack development, with experience in UI/UX, data analytics, content writing and leading
        technical projects. I like building community-driven products, and I'm interested in software development, tech communities,
        machine learning and whatever comes next. Always open to collaboration.
      </p>
    </Reveal>

    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <h2 className="font-display text-3xl font-bold mb-6 flex items-center gap-3"><FaGraduationCap className="text-sky-400" /> Education</h2>
        <div className="relative pl-6 border-l-2 border-white/10 space-y-6">
          {education.map((e) => (
            <Reveal key={e.school}>
              <div className="relative glass rounded-2xl p-5 hover:border-fuchsia-400/50 transition">
                <span className="absolute -left-[33px] top-6 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 ring-4 ring-[#07040f]" />
                <p className="text-sm text-fuchsia-300">{e.period}</p>
                <h3 className="font-display text-xl font-bold">{e.school}</h3>
                <p className="text-slate-300">{e.degree}</p>
                <p className="text-slate-400 text-sm mt-1">{e.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold mb-6 flex items-center gap-3"><FaFlask className="text-amber-400" /> Research</h2>
          <div className="rounded-3xl p-[2px] bg-gradient-to-br from-amber-400 via-fuchsia-500 to-violet-500">
            <div className="rounded-[1.4rem] bg-[#0d0820] p-6">
              <p className="text-sm text-amber-300">Undergraduate thesis · ongoing</p>
              <h3 className="font-display text-xl font-bold mt-1">Quantifying Urban Heat Island Dynamics Using Spatio-Temporal Machine Learning Models</h3>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <h2 className="font-display text-3xl font-bold mb-6 flex items-center gap-3"><FaUsers className="text-emerald-400" /> Beyond code</h2>
          <div className="space-y-4">
            {activities.map((a) => (
              <div key={a.title + a.org} className="glass rounded-2xl p-5 hover:translate-x-1 transition">
                <h3 className="font-display font-bold text-lg">{a.title}</h3>
                <p className="text-slate-300">{a.org}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </div>
);

export default About;