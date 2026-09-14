import Image from "next/image";

const services = [
  {
    title: "Web & App Development",
    desc: "Full-stack builds with React, Next.js, Django, FastAPI, Node.js. Fast, accessible, production-ready.",
    tag: "React · Next.js · Django",
  },
  {
    title: "Cybersecurity & Compliance",
    desc: "KDPA & ISO 27001-aligned assessments, data protection reviews, and secure system design.",
    tag: "KDPA · ISO 27001 · ISMS",
  },
  {
    title: "ICT Support & Systems",
    desc: "Network setup, hardware/software troubleshooting, system monitoring, and ICT asset management.",
    tag: "Networks · Systems · Support",
  },
  {
    title: "IT Training & Assessment",
    desc: "Certified TVET Cybersecurity Assessment Verifier. Staff training, curriculum, and capacity building.",
    tag: "TVET CDACC · Training",
  },
];

const projects = [
  {
    title: "Cybersecurity Competency Verification",
    client: "TVET CDACC (National)",
    result: "Verified PoE across 5 TVET institutions in Nairobi",
    tags: ["Cybersecurity", "Assessment", "National"],
  },
  {
    title: "Government IoT & ICT Support",
    client: "Ministry of Co-operatives & MSMEs",
    result: "Deployed & maintained IoT gateways across multiple sites",
    tags: ["IoT", "Networking", "ISO 9001"],
  },
  {
    title: "Full-Stack Web Applications",
    client: "Freelance · Multiple clients",
    result: "REST APIs, PostgreSQL, CI/CD on VPS via GitHub Actions",
    tags: ["Next.js", "Django", "PostgreSQL"],
  },
  {
    title: "ICT Training & Documentation",
    client: "Public & private sector",
    result: "Trained staff, authored user guides & technical reports",
    tags: ["Training", "Docs", "Capacity Building"],
  },
];

const certifications = [
  "Industry Practitioner — Cybersecurity Assessment Verifier, TVET CDACC",
  "Kenyan Data Protection Act (KDPA) — PSE Kenya",
  "ISO 27001 (ISMS) Foundation — PSE Kenya",
  "Cybersecurity & Emerging Technologies — Computer Pride & ICT Authority",
  "BSc Information Technology — Karatina University",
];

const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TailwindCSS", "TypeScript"] },
  { group: "Backend", items: ["Django", "FastAPI", "Node.js", "REST APIs"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "Firebase"] },
  {
    group: "Security & Ops",
    items: ["KDPA", "ISO 27001", "CI/CD", "GitHub Actions"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 w-full backdrop-blur bg-neutral-950/70 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo + name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-emerald-400/40 group-hover:border-emerald-400 transition">
              <Image
                src="/vincent.jpg"
                alt="Vincent Mulonzi"
                width={36}
                height={36}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-bold tracking-tight">Vincent Mulonzi</span>
          </a>

          <div className="hidden md:flex gap-8 text-sm text-neutral-300">
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#work" className="hover:text-white transition">
              Work
            </a>
            <a href="#credentials" className="hover:text-white transition">
              Credentials
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="text-sm bg-emerald-400 text-black px-4 py-2 rounded-full font-medium hover:bg-emerald-300 transition"
          >
            Hire me
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-24 px-6 max-w-6xl mx-auto">
        <p className="text-emerald-400 font-mono text-sm mb-4">
          {"// IT Professional · Cybersecurity · Nairobi, Kenya"}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
          Secure systems.
          <br />
          Fast interfaces.
          <br />
          <span className="text-emerald-400">Real results.</span>
        </h1>
        <p className="mt-8 text-neutral-400 text-lg max-w-2xl leading-relaxed">
          I&apos;m Vincent — a full-stack developer and{" "}
          <strong className="text-white">
            TVET CDACC-recognised Cybersecurity Assessment Verifier
          </strong>
          . I help businesses, NGOs, and government institutions build secure
          digital systems, train their teams, and stay compliant with KDPA and
          ISO 27001.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-emerald-400 text-black px-7 py-3.5 rounded-full font-semibold hover:bg-emerald-300 transition"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="border border-white/20 px-7 py-3.5 rounded-full hover:bg-white/5 transition"
          >
            See my work
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl border-t border-white/10 pt-8">
          <div>
            <p className="text-3xl font-bold text-emerald-400">2+</p>
            <p className="text-sm text-neutral-400 mt-1">Years experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-emerald-400">5</p>
            <p className="text-sm text-neutral-400 mt-1">
              TVET institutions verified
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-emerald-400">3</p>
            <p className="text-sm text-neutral-400 mt-1">
              National certifications
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 px-6 max-w-6xl mx-auto border-t border-white/10"
      >
        <div className="mb-12">
          <p className="text-emerald-400 font-mono text-sm mb-2">
            {"// services"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">What I do</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 transition group"
            >
              <span className="text-xs font-mono text-emerald-400">{s.tag}</span>
              <h3 className="text-xl font-semibold mt-3 group-hover:text-emerald-400 transition">
                {s.title}
              </h3>
              <p className="text-neutral-400 mt-3 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="py-24 px-6 max-w-6xl mx-auto border-t border-white/10"
      >
        <div className="mb-12">
          <p className="text-emerald-400 font-mono text-sm mb-2">
            {"// selected work"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Recent engagements</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 transition group"
            >
              <p className="text-xs text-neutral-500 uppercase tracking-wide">
                {p.client}
              </p>
              <h3 className="text-2xl font-semibold mt-3 group-hover:text-emerald-400 transition">
                {p.title}
              </h3>
              <p className="text-neutral-400 mt-3">{p.result}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-white/10">
        <div className="mb-12">
          <p className="text-emerald-400 font-mono text-sm mb-2">
            {"// tech stack"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Tools &amp; technologies
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((s) => (
            <div key={s.group}>
              <h3 className="font-semibold mb-4 text-emerald-400">
                {s.group}
              </h3>
              <ul className="space-y-2 text-neutral-300">
                {s.items.map((i) => (
                  <li key={i} className="text-sm">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CREDENTIALS */}
      <section
        id="credentials"
        className="py-24 px-6 max-w-6xl mx-auto border-t border-white/10"
      >
        <div className="mb-12">
          <p className="text-emerald-400 font-mono text-sm mb-2">
            {"// credentials"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Certifications &amp; education
          </h2>
        </div>
        <ul className="space-y-4 max-w-3xl">
          {certifications.map((c) => (
            <li
              key={c}
              className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10"
            >
              <span className="text-emerald-400 mt-1">✓</span>
              <span className="text-neutral-200">{c}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 max-w-3xl mx-auto text-center border-t border-white/10"
      >
        <p className="text-emerald-400 font-mono text-sm mb-2">
          {"// contact"}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let&apos;s build something secure.
        </h2>
        <p className="text-neutral-400 mb-10">
          Available for freelance projects, consulting, and cybersecurity
          assessments. Based in Nairobi — working with clients across Kenya and
          remotely.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:vincentmulonzi2@gmail.com"
            className="bg-emerald-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-emerald-300 transition"
          >
            vincentmulonzi2@gmail.com
          </a>
          <a
            href="tel:+254718583335"
            className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/5 transition"
          >
            +254 718 583 335
          </a>
        </div>
        <p className="mt-8 text-sm text-neutral-500">
          Prefer WhatsApp?{" "}
          <a
            href="https://wa.me/254718583335"
            className="text-emerald-400 hover:underline"
          >
            Message me here
          </a>
        </p>
      </section>

      <footer className="py-8 text-center text-sm text-neutral-500 border-t border-white/10">
        © {new Date().getFullYear()} Vincent Usungio Mulonzi · Nairobi, Kenya
      </footer>
    </main>
  );
}