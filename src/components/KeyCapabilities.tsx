import Reveal from "@/components/Reveal";

const capabilities = [
  {
    title: "Front-end",
    description:
      "Building responsive, accessible, and user-friendly interfaces from designs and user stories.",
    accent: "border-violet/30 shadow-violet/10",
    gradient: "from-violet to-teal",
    blob: "bg-teal/25",
    orbShadow: "shadow-teal/25",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 9l-3 3 3 3" />
        <path d="M16 9l3 3-3 3" />
        <path d="M13 5l-2 14" />
      </svg>
    ),
  },
  {
    title: "Software Development",
    description:
      "Developing and enhancing Salesforce solutions using Apex, Lightning Components, LWC, Flow, SOQL, and Salesforce automation.",
    accent: "border-coral/30 shadow-coral/10",
    gradient: "from-coral to-mango",
    blob: "bg-mango/25",
    orbShadow: "shadow-coral/25",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="M2 12l10 5 10-5" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "API Integration",
    description:
      "Integrating REST APIs with front-end applications to provide seamless communication between client and backend services.",
    accent: "border-teal/30 shadow-teal/10",
    gradient: "from-teal to-violet",
    blob: "bg-violet/25",
    orbShadow: "shadow-violet/25",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.88 14.12a3 3 0 0 0 4.24 0l4.24-4.24a3 3 0 1 0-4.24-4.24l-1.42 1.42" />
        <path d="M14.12 9.88a3 3 0 0 0-4.24 0L5.64 14.12a3 3 0 1 0 4.24 4.24l1.42-1.42" />
      </svg>
    ),
  },
  {
    title: "Application Support",
    description:
      "Supporting knowledge transfer and conducting training sessions on development practices, frameworks, and implementation strategies.",
    accent: "border-mango/40 shadow-mango/10",
    gradient: "from-mango to-coral",
    blob: "bg-coral/25",
    orbShadow: "shadow-mango/25",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="m4.93 4.93 4.24 4.24" />
        <path d="m14.83 14.83 4.24 4.24" />
        <path d="m19.07 4.93-4.24 4.24" />
        <path d="m9.17 14.83-4.24 4.24" />
      </svg>
    ),
  },
  {
    title: "Technical Training",
    description:
      "Coaching developers, onboarding teams, and documenting processes so teams ship faster.",
    accent: "border-lilac/50 shadow-lilac/10",
    gradient: "from-coral to-violet",
    blob: "bg-violet/25",
    orbShadow: "shadow-coral/25",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
        <path d="M22 10v6" />
      </svg>
    ),
  },
];

export default function KeyCapabilities() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-b from-mango/15 to-cream"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-violet/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-coral/15 blur-3xl" />

      <Reveal className="relative mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:py-24">
        <header className="mb-12 max-w-2xl space-y-3">
          <p className="text-sm font-semibold tracking-wide text-violet uppercase">
            Key Capabilities
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What I do best
          </h2>
          {/* <p className="text-base leading-7 text-ink/70">
            A blend of engineering, integration, and enablement skills I use to
            deliver and support software end to end.
          </p> */}
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((capability, index) => (
            <li key={capability.title} className="group relative flex">
              <article
                className={`relative flex h-full w-full flex-col overflow-hidden rounded-3xl border bg-surface p-6 shadow-lg transition duration-300 hover:-translate-y-1.5 hover:shadow-xl ${capability.accent}`}
              >
                <div
                  className={`pointer-events-none absolute -top-10 -right-10 size-28 rounded-full ${capability.blob} opacity-40 blur-2xl transition duration-300 group-hover:opacity-100`}
                />

                <span className="absolute top-5 right-5 font-display text-sm font-semibold text-ink/20 transition-colors duration-300 group-hover:text-ink/50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${capability.gradient} text-white shadow-lg ${capability.orbShadow} ring-1 ring-white/25 transition duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {capability.icon}
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {capability.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-ink/70">
                  {capability.description}
                </p>

                <span
                  className={`mt-6 block h-1 w-10 rounded-full bg-linear-to-r ${capability.gradient} opacity-80 transition-all duration-300 group-hover:w-full`}
                />
              </article>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}