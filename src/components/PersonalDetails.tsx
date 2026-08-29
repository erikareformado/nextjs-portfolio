import Image from "next/image";

const profile = {
  name: "Erika Manzano",
  role: "Front-end Developer",
  location: "Manila, Philippines",
  email: "reformanzo.erika@gmail.com",
  bio: "I design and build calm, reliable web products — from polished interfaces to the APIs behind them. Currently open to freelance and full-time roles.",
  skills: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
  links: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Email", href: "mailto:jordan.hale@example.com" },
  ],
};

export default function PersonalDetails() {
  return (
    <section className="w-full max-w-4xl">
      <article className="overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div className="grid gap-0 md:grid-cols-[minmax(0,18rem)_1fr]">
          <div className="relative aspect-[3/4] bg-zinc-200 md:aspect-auto md:min-h-full dark:bg-zinc-800">
            <Image
              src="/dummy-portrait.png"
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 18rem, 100vw"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 px-6 py-8 sm:px-10 sm:py-12">
            <div className="space-y-3">
              <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
                Portfolio
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
                {profile.name}
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                {profile.role}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {profile.location}
              </p>
            </div>

            <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {profile.bio}
            </p>

            <ul className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {skill}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              {profile.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex h-11 items-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
