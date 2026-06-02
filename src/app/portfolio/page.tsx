import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "作品集",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <SectionHeading
        title={site.portfolio.heading}
        subtitle={site.portfolio.subheading}
      />
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
