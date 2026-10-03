import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

const channelLinks = site.links.filter((link) => link.href.startsWith("http"));

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-linear-to-b from-cream to-lilac/30"
    >
      <Reveal className="mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:py-24">
        <div className="overflow-hidden rounded-[2rem] border border-violet/10 bg-surface shadow-xl">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-teal uppercase">
                <span className="size-2 rounded-full bg-teal" />
                Open to new opportunities
              </p>

              <div className="space-y-4">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Let us build something{" "}
                  <span className="text-violet">reliable</span> together
                </h2>
                <p className="text-base leading-7 text-ink/70">
                  I am available for freelance projects and full-time
                  front-end or Salesforce development roles. Share the
                  requirements and I will reply with an approach and timeline.
                </p>
              </div>

              <dl className="grid gap-3 border-t border-violet/10 pt-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-ink/50 uppercase">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm font-medium text-ink transition hover:text-violet"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-ink/50 uppercase">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-ink">
                    {site.location}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col justify-center gap-4 rounded-3xl border border-violet/10 bg-cream/70 p-6 sm:p-8">
              <div className="space-y-1">
                <h3 className="font-display text-xl font-semibold text-ink">
                  Start a conversation
                </h3>
                <p className="text-sm leading-6 text-ink/60">
                  I typically respond within one business day.
                </p>
              </div>

              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-violet px-6 text-sm font-semibold text-white shadow-lg shadow-violet/25 transition hover:bg-coral"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                Email me
              </a>

              <ul className="grid gap-3 sm:grid-cols-2">
                {channelLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-violet/20 bg-surface text-sm font-semibold text-ink transition hover:border-violet/50 hover:text-violet"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
