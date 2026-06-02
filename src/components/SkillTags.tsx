type SkillTagsProps = {
  skills: readonly string[];
};

export function SkillTags({ skills }: SkillTagsProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li
          key={skill}
          className="rounded-full border border-border bg-cream px-4 py-1.5 text-sm text-ink-muted"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
