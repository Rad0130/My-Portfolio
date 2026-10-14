const base = import.meta.env.BASE_URL;

export const profile = {
  name: "Shafiur Rahman Rad",
  roles: ["Full Stack Developer", "MERN Stack Builder", "UI Crafter", "ML Explorer"],
  email: "shafiurrahmanrad12@gmail.com",
  phone: "+8801309634127",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/Rad0130",
  linkedin: "https://www.linkedin.com/in/shafiur-rahman-rad",
  photo: `${base}rad.png`,
  resume: `${base}Shafiur_Rahman_Rad_Resume.pdf`,
  summary:
    "Final-year Computer Science student at BRAC University who turns ideas into fast, polished MERN apps. I also lead teams, manage finances for tech events, and research how machine learning can explain urban heat.",
};

export const stats = [
  { value: 4, suffix: "+", label: "Live projects" },
  { value: 15, suffix: "+", label: "Tools & technologies" },
  { value: 4, suffix: "", label: "Years of building" },
  { value: 3, suffix: "", label: "Leadership roles" },
];

export const projects = [
  {
    title: "City-Fixer",
    type: "Civic issue reporting platform",
    desc: "Residents report civic problems and track their resolution, with secure login and online payments.",
    tech: ["React", "MongoDB", "Firebase", "JWT", "Stripe", "Tailwind", "DaisyUI"],
    features: ["JWT-based authorization", "Stripe payments", "Forms with React Hook Form"],
    live: "https://city-fixer-3e3be.web.app",
    github: null,
    grad: "from-fuchsia-500 to-orange-400",
  },
  {
    title: "AutoTrust",
    type: "Second-hand car marketplace",
    desc: "Buy and sell used cars with admin-verified listings and a built-in installment calculator.",
    tech: ["MERN", "JWT", "Cloudinary", "Multer", "Context API"],
    features: ["Admin approval dashboard", "Installment calculator", "Wishlist and filters"],
    live: "https://auto-trust-version2-0.vercel.app",
    github: "https://github.com/Rad0130/Auto-Trust-version2.0.git",
    grad: "from-sky-400 to-violet-500",
  },
  {
    title: "MovieMaster",
    type: "Online movie library",
    desc: "A full-stack movie hub with watchlists, genre browsing and ratings.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    features: ["Google Sign-In", "Watchlist", "Frontend on Vercel, API on Render"],
    live: "https://movie-master-145da.web.app",
    github: "https://github.com/Rad0130/Movie-Master-Pro.git",
    grad: "from-violet-500 to-pink-500",
  },
  {
    title: "Skill-Up",
    type: "Local skill exchange",
    desc: "Browse local skills, read ratings and book learning sessions.",
    tech: ["React", "Firebase", "Tailwind", "DaisyUI", "Swiper.js"],
    features: ["Email + Google OAuth", "Protected routes", "Booking with toast alerts"],
    live: "https://skill-up-cd4af.web.app",
    github: "https://github.com/Rad0130/Skill-UP.git",
    grad: "from-emerald-400 to-cyan-500",
  },
];

export const experience = [
  {
    role: "Lead Generation Intern",
    org: "Klozer.io · Remote",
    period: "Aug 2026 – Present",
    points: ["Generate leads for mid-sized companies and connect them with clients."],
    grad: "from-amber-400 to-orange-500",
  },
  {
    role: "Web Development & Data Collection",
    org: "Freelance / Academic Practice",
    period: "2021 – Present",
    points: [
      "Built web apps with React, Next.js, MongoDB and Firebase; strong in the MERN stack.",
      "Collected and analysed data from Facebook, Instagram and LinkedIn.",
    ],
    grad: "from-sky-400 to-violet-500",
  },
  {
    role: "Director of Finance",
    org: "BRAC University Computer Club (BUCC)",
    period: "2022 – 2025",
    points: [
      "Planned budgets and reports for multiple tech events.",
      "Tracked expenses in Excel and Google Sheets.",
      "Coordinated seminars, workshops and large university events.",
    ],
    grad: "from-emerald-400 to-cyan-500",
  },
  {
    role: "Content Writer & Blogger",
    org: "BRAC University & Personal Blog",
    period: "2021 – Present",
    points: ["Wrote about tech, education, events and storytelling for student audiences."],
    grad: "from-fuchsia-500 to-pink-500",
  },
];

export const education = [
  {
    school: "BRAC University",
    degree: "B.Sc. in Computer Science and Engineering",
    period: "2022 – 2026 (expected)",
    note: "Thesis: Quantifying Urban Heat Island Dynamics Using Spatio-Temporal Machine Learning Models (defense pending)",
  },
  { school: "Adamjee Cantonment College", degree: "HSC, Science", period: "2021", note: "GPA 5.00" },
  { school: "Natore Govt. Boys' High School", degree: "SSC, Science", period: "2019", note: "GPA 5.00" },
];

export const activities = [
  { title: "Project Architect", org: "NASA Space Apps Challenge" },
  { title: "Volunteer", org: "BRAC Career Fair 2024" },
  { title: "Participant", org: "Prompt Engineering Workshop, Traction Robotics Club" },
];

export const skills = [
  { group: "Languages", items: ["Python", "Java", "JavaScript", "C"], grad: "from-sky-400 to-violet-500" },
  { group: "Frontend", items: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "DaisyUI", "Swiper.js"], grad: "from-fuchsia-500 to-pink-500" },
  { group: "Backend & Database", items: ["Node.js", "Express.js", "CORS", "MongoDB", "MySQL"], grad: "from-emerald-400 to-cyan-500" },
  { group: "Tools & Platforms", items: ["GitHub", "Linux", "Firebase", "Vercel", "Render", "Netlify", "Cloudflare", "Railway", "Canva", "Postman"], grad: "from-amber-400 to-orange-500" },
  { group: "Also good at", items: ["Prompt Engineering", "Content Writing", "Data Entry", "UI/UX", "Team Leadership", "Research & Analysis"], grad: "from-violet-500 to-pink-500" },
];