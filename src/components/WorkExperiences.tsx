import Reveal from "@/components/Reveal";

const experiences = [
  {
    company: "Accenture Philippines, Inc.",
    role: "Senior Software Engineer",
    period: "2024 — Present",
    summary:
      "Develop and maintain applications and systems across the software development life cycle, automate complex manual processes, create system reports and documentation, conduct user training, enhance existing systems, and guide development teams toward successful project delivery.",
    highlights: ["Salesforce Development", "Salesforce Configuration"],
    accent: "border-coral/30 bg-surface shadow-coral/10",
    dot: "bg-coral",
  },
  {
    company: "Ingram Micro, Inc.", 
    role: "Front-end Developer",
    period: "2021 — 2024",
    summary:
      "Develop responsive and user-friendly web applications by translating user stories and design mockups into functional interfaces. Integrate RESTful APIs, collaborate with UX/UI and cross-functional teams, document development processes, and ensure alignment with project goals. Provide team training on Vue.js, React.js, Bootstrap, and Tailwind CSS best practices.",
    highlights: ["React", "Tailwind CSS", "Next js", "Vue js", "Bootstrap"],
    accent: "border-violet/30 bg-surface shadow-violet/10",
    dot: "bg-violet",
  },
  {
    company: "Fujitsu Die Tech of the Philippines, Inc.",
    role: "Software Engineer",
    period: "2016-2021",
    summary:
      "Develop and maintain applications and systems throughout the software development life cycle, focusing on automating and simplifying complex manual processes. Create system reports, documentation, manuals, and project updates; conduct user training; enhance existing systems; and guide development teams toward successful project delivery.",
    highlights: ["HTML", "JavaScript", "vb.net", "Laravel", "PHP", "Vue.js"],
    accent: "border-teal/30 bg-surface shadow-teal/10",
    dot: "bg-teal",
  },
];

export default function WorkExperiences() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-linear-to-b from-lilac/40 to-cream"
    >
      <Reveal className="mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:py-24">
        <header className="mb-12 max-w-2xl space-y-3">
          <p className="text-sm font-semibold tracking-wide text-violet uppercase">
            Experience
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            My Professional Journey
          </h2>
        </header>

        <ul className="grid gap-6 lg:grid-cols-3">
          {experiences.map((job) => (
            <li key={`${job.company}-${job.period}`} className="flex">
              <article
                className={`flex h-full flex-col rounded-2xl border p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl ${job.accent}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`size-3 rounded-full ${job.dot}`} />
                  <p className="text-sm font-medium text-violet">{job.period}</p>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  {job.role}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-ink/70">
                  {job.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.highlights.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-cream px-3 py-1 text-sm font-medium text-ink/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
