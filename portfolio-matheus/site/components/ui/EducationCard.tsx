import type { Education } from "../../data/education";

interface EducationCardProps {
  item: Education;
}

export function EducationCard({
  item,
}: EducationCardProps) {
  const Icon = item.icon;

  return (
    <article className="group rounded-3xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary transition-colors group-hover:bg-foreground group-hover:text-background">
            <Icon size={22} />
          </div>

          <div>
            <p className="text-sm font-medium text-muted">
              {item.institution}
            </p>

            <h3 className="mt-2 text-lg font-bold leading-7">
              {item.course}
            </h3>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted">
            {item.period}
          </span>

          {item.status && (
            <span className="text-xs text-muted">
              {item.status}
            </span>
          )}
        </div>
      </div>

      <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
        {item.description}
      </p>
    </article>
  );
}