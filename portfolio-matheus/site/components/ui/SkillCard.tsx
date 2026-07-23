import type { SkillCategory } from "../../data/skills";

interface SkillCardProps {
  category: SkillCategory;
}

export function SkillCard({
  category,
}: SkillCardProps) {
  const Icon = category.icon;

  return (
    <article className="group rounded-3xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl sm:p-8">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary transition-colors group-hover:bg-foreground group-hover:text-background">
        <Icon size={22} />
      </div>

      <h3 className="text-lg font-bold">
        {category.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-muted">
        {category.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:text-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}