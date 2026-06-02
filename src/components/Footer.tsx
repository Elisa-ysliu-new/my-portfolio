import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/60 bg-paper/50">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-10 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name} · UI/UX Designer
        </p>
        <div className="flex gap-6">
          <Link
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-sage"
          >
            Email
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-sage"
          >
            LinkedIn
          </Link>
          <Link
            href={site.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-sage"
          >
            Behance
          </Link>
        </div>
      </div>
    </footer>
  );
}
