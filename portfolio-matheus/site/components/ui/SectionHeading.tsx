import { Badge } from "../ui/Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <Badge className="mb-4">
          {eyebrow}
        </Badge>
      )}

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-8 text-muted">
          {description}
        </p>
      )}
    </div>
  );
}