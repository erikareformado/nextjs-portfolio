import Image from "next/image";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export default function PersonalDetails() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-b from-cream via-surface to-lilac/30"
    >
      <div className="hero-blob pointer-events-none absolute -top-32 -left-24 size-96 rounded-full bg-coral/20 blur-3xl" />
      <div className="hero-blob-delay pointer-events-none absolute -right-24 -bottom-32 size-[28rem] rounded-full bg-violet/20 blur-3xl" />

      <Reveal className="relative mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:py-28">
        <article className="overflow-hidden rounded-[2rem] border border-violet/10 bg-surface shadow-xl">
          <div className="grid gap-0 md:grid-cols-[minmax(0,20rem)_1fr]">
            <div className="relative aspect-4/3 bg-lilac/30 md:aspect-auto md:min-h-full">
              <Image
                src="/Erika-portrait.jpg"
                alt={`Portrait of ${site.name}`}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 20rem, 100vw"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 px-6 py-10 sm:px-10 sm:py-14">
              <div className="space-y-3">
                <p className="text-sm font-semibold tracking-wide text-violet uppercase">
                  Portfolio
                </p>
                <h1 className="name-shine font-display bg-linear-to-r from-coral via-violet to-teal bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
                  {site.name}
                </h1>
                <p className="text-lg text-ink/80">{site.role.join(" · ")}</p>
                <p className="text-sm text-ink/55">{site.location}</p>
              </div>

              <p className="max-w-xl text-base leading-7 text-ink/75">
                {site.bio}
              </p>

              <ul className="flex flex-wrap gap-2">
                {site.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-violet/15 bg-cream px-3 py-1 text-sm text-ink/80"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-2">
                {site.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : null)}
                    className="inline-flex h-11 items-center rounded-full bg-linear-to-r from-coral to-violet px-5 text-sm font-semibold text-white shadow-lg shadow-coral/20 transition hover:brightness-110"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
