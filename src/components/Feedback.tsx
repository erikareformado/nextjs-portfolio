"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { getAvatarGradient } from "@/lib/get-avatar-gradient";
import { getInitials } from "@/lib/get-initials";
import { useMediaQuery } from "@/lib/use-media-query";

const PER_PAGE_MOBILE = 2;
const PER_PAGE_DESKTOP = 3;

const feedback = [
  {
    quote:"Thank you for your hard work in quickly resolving incidents, closing out tickets, and nearly completing the Workflow Rules to Flow Activity. Also, thank you for your invaluable help in reducing the tickets. Keep up the great work! ",
    name: "Stephanie S.",
    role: "Development Specialist · Accenture",
    accent: "border-violet/30 shadow-violet/10",
    gradient: "from-violet to-teal",
    blob: "bg-teal/25",
  },
  {
    quote:"Thank you, Erika, for all the hard work you’ve shared in project. You are a fast learner for first time Salesforce Dev. Along with learning Salesforce Dev you were able to sub-lead the team. You have influence team’s positivity with your smile. Please keep on shinning and spreading good vibes. Kudos!.",
    name: "Mary Dazell L.",
    role: "Project Manager · Accenture",
    accent: "border-coral/30 shadow-coral/10",
    gradient: "from-coral to-mango",
    blob: "bg-mango/25",
  },
  {
    quote: "Hi Erika! Thank you for being such an amazing teammate. Thank you for helping me with the team. What I appreciate most is your willingness to jump in and help, no matter how busy things get. It truly makes a difference, and it's a big part of what keeps our team moving forward. I really appreciate all your efforts and contributions to the project.",
    name: "Jenette L.",
    role: "Team Lead · Accenture",
    accent: "border-teal/30 shadow-teal/10",
    gradient: "from-teal to-violet",
    blob: "bg-violet/25",
  },
  {
    quote: "Erika has been a vital contributor to the success of the project. Her exceptional dedication, ownership, and unwavering commitment have played a significant role in ensuring the project's successful delivery. Beyond her individual contributions, Erika consistently demonstrates strong leadership qualities, stepping up to act as Team Lead whenever the Development Lead is on leave and ensuring the team remains aligned, productive, and focused on project goals.",
    name: "Mary Dazell L.",
    role: "Project Manager · Accenture",
    accent: "border-mango/40 shadow-mango/10",
    gradient: "from-mango to-coral",
    blob: "bg-coral/25",
  },
  {
    quote: "Erika not only delivers her own work on time and with high quality, but also proactively manages team activities, monitors ticket progress, and fosters effective communication across all team members. Her reliability, professionalism, and collaborative approach have made her a role model within the team and a trusted partner in project execution.",
    name: "Mary Dazell L.",
    role: "Project Manager · Accenture",
    accent: "border-mango/40 shadow-mango/10",
    gradient: "from-mango to-coral",
    blob: "bg-coral/25",
  },
    {
    quote: "Erika's leadership, accountability, and dedication have had a lasting positive impact on both the project and the team. Her commitment to excellence, willingness to go above and beyond, and ability to inspire those around her make her truly deserving of recognition.",
   name: "Mary Dazell L.",
    role: "Project Manager · Accenture",
    accent: "border-mango/40 shadow-mango/10",
    gradient: "from-mango to-coral",
    blob: "bg-coral/25",
  },
  {
    quote: "What makes Erika's contributions even more remarkable is her resilience and determination. Throughout her pregnancy and upon returning to work, she continued to perform at a high level, ensuring that no commitments were missed and that project deliverables remained on track. She demonstrated an admirable ability to balance personal responsibilities while maintaining focus, professionalism, and excellence in delivery.",
    name: "Mary Dazell L.",
    role: "Project Manager · Accenture",
    accent: "border-mango/40 shadow-mango/10",
    gradient: "from-mango to-coral",
    blob: "bg-coral/25",
  },
];

export default function Feedback() {
  const isDesktop = useMediaQuery("(min-width: 64rem)");
  const perPage = isDesktop ? PER_PAGE_DESKTOP : PER_PAGE_MOBILE;
  const totalPages = Math.ceil(feedback.length / perPage);
  const [requestedPage, setPage] = useState(0);
  const page = Math.min(requestedPage, totalPages - 1);
  const start = page * perPage;
  const visible = feedback.slice(start, start + perPage);

  return (
    <section
      id="feedback"
      className="relative scroll-mt-24 overflow-hidden bg-linear-to-t from-cream to-lilac/30"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-violet/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-coral/15 blur-3xl" />

      <Reveal className="relative mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:py-24">
        <header className="mb-12 max-w-2xl space-y-3">
          <p className="text-sm font-semibold tracking-wide text-violet uppercase">
            What people say
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Feedback from Colleagues
          </h2>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <li key={`${item.name}-${item.quote}`} className="flex">
              <article
                className={`group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border bg-surface p-7 shadow-lg transition duration-300 hover:-translate-y-1.5 hover:shadow-xl ${item.accent}`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-4 right-4 font-display text-[7rem] leading-none text-ink/5 select-none"
                >
                  &quot;
                </span>

                <div
                  className={`pointer-events-none absolute -top-10 -right-10 size-28 rounded-full ${item.blob} opacity-40 blur-2xl transition duration-300 group-hover:opacity-100`}
                />

                <span
                  className={`relative mb-6 h-1 w-12 rounded-full bg-linear-to-r ${item.gradient}`}
                />

                <p className="relative flex-1 text-sm leading-7 text-ink/70 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="relative mt-6 flex items-center gap-3 border-t border-violet/10 pt-5">
                  <span
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${getAvatarGradient(item.name)} text-sm font-semibold text-white shadow-md ring-2 ring-white/30`}
                  >
                    {getInitials(item.name)}
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold text-ink">
                      {item.name}
                    </p>
                    <p className="text-xs text-ink/50">{item.role}</p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => setPage((value) => Math.max(0, value - 1))}
            disabled={page === 0}
            aria-label="Previous testimonials"
            className="inline-flex size-10 items-center justify-center rounded-full border border-violet/20 bg-surface text-ink transition hover:border-coral/40 hover:text-coral disabled:cursor-not-allowed disabled:opacity-40"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index)}
                aria-label={`Go to page ${index + 1}`}
                aria-current={index === page ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === page
                    ? "w-8 bg-linear-to-r from-coral to-violet"
                    : "w-2.5 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPage((value) => Math.min(totalPages - 1, value + 1))}
            disabled={page === totalPages - 1}
            aria-label="Next testimonials"
            className="inline-flex size-10 items-center justify-center rounded-full border border-violet/20 bg-surface text-ink transition hover:border-coral/40 hover:text-coral disabled:cursor-not-allowed disabled:opacity-40"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </Reveal>
    </section>
  );
}