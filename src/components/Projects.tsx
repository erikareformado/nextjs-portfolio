import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "Northwind Dashboard",
    description:
      "A product analytics interface with filters, charts, and a component library shared across teams.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    cover: "from-coral via-fuchsia-400 to-violet",
  },
  {
    title: "Harbor Client Portal",
    description:
      "A client-facing portal for project status, files, and billing — designed for clarity on mobile and desktop.",
    tags: ["React", "Accessibility"],
    cover: "from-teal via-sky-400 to-violet",
  },
  {
    title: "Studio Marketing Site",
    description:
      "A fast marketing site with case studies, motion, and a CMS-backed blog for a design studio.",
    tags: ["Next.js", "CMS"],
    cover: "from-mango via-coral to-rose-500",
  },
   {
    title: "Studio Marketing Site",
    description:
      "A fast marketing site with case studies, motion, and a CMS-backed blog for a design studio.",
    tags: ["Next.js", "CMS"],
    cover: "from-mango via-coral to-rose-500",
  },
   {
    title: "Studio Marketing Site",
    description:
      "A fast marketing site with case studies, motion, and a CMS-backed blog for a design studio.",
    tags: ["Next.js", "CMS"],
    cover: "from-mango via-coral to-rose-500",
  },
  {
    title: "Studio Marketing Site",
    description:
      "A fast marketing site with case studies, motion, and a CMS-backed blog for a design studio.",
    tags: ["Next.js", "CMS"],
    cover: "from-mango via-coral to-rose-500",
  },
];

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-24 bg-night text-white">
      <Reveal className="mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:py-24">
        <header className="mb-12 max-w-2xl space-y-3">
          <p className="text-sm font-semibold tracking-wide text-mango uppercase">
            Selected work
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects I am proud of
          </h2>
        </header>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li
              key={index}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 transition hover:-translate-y-1 hover:border-mango/40 hover:shadow-xl hover:shadow-violet/20"
            >
              <div
                className={`mb-4 h-36 rounded-2xl bg-linear-to-br ${project.cover} opacity-90 transition group-hover:opacity-100`}
              />
              <div className="flex flex-1 flex-col px-2 pb-3">
                <h3 className="font-display text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-white/70">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-lilac"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
