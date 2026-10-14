import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { profile } from "../data";
import { Reveal, PageTitle } from "../components/Reveal";

const cards = [
  { icon: <FaEnvelope />, title: "Email", info: profile.email, href: `mailto:${profile.email}`, grad: "from-pink-500 to-orange-400" },
  { icon: <FaPhone />, title: "Phone", info: profile.phone, href: `tel:${profile.phone}`, grad: "from-emerald-400 to-cyan-500" },
  { icon: <FaLinkedin />, title: "LinkedIn", info: "shafiur-rahman-rad", href: profile.linkedin, grad: "from-sky-400 to-blue-600" },
  { icon: <FaGithub />, title: "GitHub", info: "Rad0130", href: profile.github, grad: "from-violet-500 to-fuchsia-500" },
  { icon: <FaMapMarkerAlt />, title: "Location", info: profile.location, grad: "from-amber-400 to-orange-500" },
];

const Contact = () => (
  <div className="container mx-auto px-4 max-w-4xl">
    <PageTitle title="Let's talk" sub="Have a project, internship or idea? Email is the fastest way to reach me." />
    <Reveal className="text-center mb-12 flex flex-wrap justify-center gap-4">
      <a href={`mailto:${profile.email}`} className="btn-primary"><FaEnvelope /> Send an email</a>
      <a href={profile.resume} download className="btn-ghost"><FaDownload /> Download resume</a>
    </Reveal>
    <div className="grid sm:grid-cols-2 gap-5">
      {cards.map((c, i) => {
        const inner = (
          <>
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.grad} flex items-center justify-center text-2xl shrink-0 group-hover:rotate-6 group-hover:scale-110 transition`}>{c.icon}</div>
            <div className="min-w-0">
              <h3 className="font-display font-bold text-lg">{c.title}</h3>
              <p className="text-slate-300 truncate">{c.info}</p>
            </div>
          </>
        );
        const cls = "group glass rounded-3xl p-5 flex items-center gap-4 hover:-translate-y-1 hover:border-fuchsia-400/50 transition";
        return (
          <Reveal key={c.title} delay={i * 0.05}>
            {c.href ? <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>{inner}</a> : <div className={cls}>{inner}</div>}
          </Reveal>
        );
      })}
    </div>
  </div>
);

export default Contact;