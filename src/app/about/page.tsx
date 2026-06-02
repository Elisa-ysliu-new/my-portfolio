import type { Metadata } from "next";
import { SkillTags } from "@/components/SkillTags";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "關於我",
};

export default function AboutPage() {
  const { about } = site;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <SectionHeading title={about.heading} />

      <div className="space-y-6 text-ink-muted">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-16">
        <SectionHeading title={about.philosophy.heading} />
        <div className="grid gap-8 sm:grid-cols-3">
          {about.philosophy.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-paper/40 p-6"
            >
              <h3 className="text-lg text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading title={about.process.heading} />
        <ol className="flex flex-wrap gap-3">
          {about.process.steps.map((step, index) => (
            <li
              key={step}
              className="flex items-center gap-3 rounded-full border border-border bg-cream px-5 py-2 text-sm"
            >
              <span className="font-serif text-sun">{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <SectionHeading title="技能" />
        <SkillTags skills={about.skills} />
      </section>

      <section className="mt-16">
        <SectionHeading title="歷程" />
        <ul className="space-y-8 border-l border-border pl-6">
          {about.timeline.map((item) => (
            <li key={item.year} className="relative">
              <span className="absolute -left-[1.6rem] top-1 h-2.5 w-2.5 rounded-full bg-sun" />
              <p className="text-sm font-medium text-sage">{item.year}</p>
              <h3 className="mt-1 text-lg text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
