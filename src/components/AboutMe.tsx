import Reveal from "@/components/Reveal";
import Skills from "./Skills";

export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-24 bg-linear-to-b from-coral/10 to-cream">
      <Reveal className="mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <header className="mb-6 max-w-2xl space-y-3">
              <p className="text-sm font-semibold tracking-wide text-violet uppercase">
                About
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Turning ideas into{" "}
                <span className="block">functional applications</span>
              </h2>
            </header>

            <div className="space-y-4 text-base leading-7 text-ink/75">
              <p>
                I am a software developer specializing in creating reliable,
                user-focused applications and enterprise solutions. Throughout
                my career, I have worked with cross-functional teams, UX/UI
                designers, developers, and stakeholders to transform
                requirements and design concepts into functional software.
              </p>

              <p>
                I have experience with{" "}
                <span className="font-medium text-coral">
                  Salesforce, Vue.js, React, Laravel, PHP, REST APIs, SQL
                  databases, and modern CSS frameworks.
                </span>
              </p>

              <p>
                I also enjoy providing technical support, troubleshooting
                application issues, conducting developer training, and
                documenting technical processes.
              </p>
            </div>
          </div>

          <Skills />
        </div>
      </Reveal>
    </section>
  );
}