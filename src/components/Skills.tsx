const skillGroups = [
  {
    title: "Salesforce",
    skills: [
      "Salesforce Administration",
      "Apex Programming",
      "Lightning Components",
      "Lightning Experience",
      "Salesforce Flow",
      "SOQL",
      "Reports & Dashboards",
      "Data Management",
      "LWC",
      "Triggers",
    ],
    gradient: "from-coral to-mango",
    orbShadow: "shadow-coral/25",
    chip: "bg-coral/15 text-coral",
    cardAccent: "border-coral/30 shadow-coral/10",
    blob: "bg-mango/25",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    title: "Front-end",
    skills: [
      "JavaScript",
      "Vue.js",
      "React",
      "React + Next.js",
      "HTML5",
      "CSS",
      "SASS",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
    gradient: "from-violet to-teal",
    orbShadow: "shadow-teal/25",
    chip: "bg-violet/15 text-violet",
    cardAccent: "border-violet/30 shadow-violet/10",
    blob: "bg-teal/25",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-5"
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
    title: "Back-end",
    skills: ["PHP", "Laravel", "VB.NET", "C#", "C++"],
    gradient: "from-teal to-violet",
    orbShadow: "shadow-violet/25",
    chip: "bg-teal/15 text-teal",
    cardAccent: "border-teal/30 shadow-teal/10",
    blob: "bg-violet/25",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6c0 1.66-3.58 3-8 3S4 7.66 4 6s3.58-3 8-3 8 1.34 8 3Z" />
        <path d="M20 6v12c0 1.66-3.58 3-8 3s-8-1.34-8-3V6" />
        <path d="M20 12c0 1.66-3.58 3-8 3s-8-1.34-8-3" />
      </svg>
    ),
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "SQLite", "SQL Server", "MariaDB"],
    gradient: "from-mango to-coral",
    orbShadow: "shadow-mango/25",
    chip: "bg-mango/25 text-ink",
    cardAccent: "border-mango/40 shadow-mango/10",
    blob: "bg-coral/25",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <div className="relative">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-coral to-violet text-white shadow-md shadow-violet/20">
          <span className="text-sm font-bold">&lt;/&gt;</span>
        </div>

        <h3 className="font-display text-lg font-semibold text-ink">
          My Skills
        </h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} {...group} />
        ))}
      </div>
    </div>
  );
}

function SkillGroup({
  title,
  icon,
  skills,
  gradient,
  orbShadow,
  chip,
  cardAccent,
  blob,
}: {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  gradient: string;
  orbShadow: string;
  chip: string;
  cardAccent: string;
  blob: string;
}) {
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface p-5 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg ${cardAccent}`}
    >
      <div
        className={`pointer-events-none absolute -top-8 -right-8 size-20 rounded-full ${blob} opacity-40 blur-2xl transition duration-300 group-hover:opacity-100`}
      />

      <div className="relative flex items-center gap-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br ${gradient} text-white shadow-md ${orbShadow} ring-1 ring-white/25 transition duration-300 group-hover:scale-110 group-hover:rotate-3`}
        >
          {icon}
        </div>

        <h4 className="font-display text-base font-semibold text-ink">
          {title}
        </h4>
      </div>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <li
            key={skill}
            className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${chip}`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
