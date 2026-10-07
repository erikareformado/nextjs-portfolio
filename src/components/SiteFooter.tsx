import { site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-violet/15 bg-surface/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-ink/60">
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="flex flex-wrap gap-5">
          {site.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-violet transition-colors hover:text-coral"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
