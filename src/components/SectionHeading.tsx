type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${className}`}>
      <h2 className="text-2xl text-ink sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-ink-muted">{subtitle}</p>
      )}
      <div className="mt-6 h-px w-12 bg-sun" />
    </div>
  );
}
