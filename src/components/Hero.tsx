import Link from "next/link";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <h1 className="mt-4 text-4xl leading-tight text-ink sm:text-5xl">
        {site.tagline}
      </h1>
      <p className="mt-6 max-w-lg text-lg text-ink-muted">{site.home.intro}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/portfolio"
          className="inline-flex items-center rounded-full bg-sun px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-[#4a6b82] hover:text-white"
        >
          {site.home.ctaPrimary}
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center rounded-full border border-border bg-paper/60 px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-[#4a6b82] hover:bg-[#4a6b82] hover:text-white"
        >
          {site.home.ctaSecondary}
        </Link>
      </div>
    </section>
  );
}
