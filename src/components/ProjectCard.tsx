import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-paper/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-border/40">
      <div
        className={`aspect-[16/10] bg-gradient-to-br ${project.gradient}`}
        role="img"
        aria-label={`${project.title} 專案預覽`}
      />
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-cream px-3 py-0.5 text-xs text-sage"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-xl text-ink">{project.title}</h3>
        <p className="mt-2 text-sm text-ink-muted">{project.description}</p>
        <p className="mt-3 text-sm font-medium text-sage">{project.outcome}</p>
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-sm text-ink transition-colors group-hover:text-sun"
        >
          查看案例
          <span className="ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
