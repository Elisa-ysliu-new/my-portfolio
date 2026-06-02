import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredProjects } from "@/data/projects";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <Hero />

      <section className="border-t border-border/60 py-16">
        <SectionHeading
          title="精選作品"
          subtitle="兩個近期專案——從研究到落地的完整歷程。"
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="text-sm text-sage transition-colors hover:text-sun"
          >
            查看更多作品 →
          </Link>
        </div>
      </section>

      <section className="border-t border-border/60 py-16">
        <blockquote className="border-l-2 border-sun pl-6 font-serif text-xl leading-relaxed text-ink italic">
          「{site.description}」
        </blockquote>
      </section>
    </div>
  );
}
