import {
  Award,
  CalendarDays,
} from "lucide-react";

import type { Course } from "../../data/courses";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({
  course,
}: CourseCardProps) {
  return (
    <article className="group rounded-2xl border border-border bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary">
          <Award size={19} />
        </div>

        <span className="flex items-center gap-1 text-xs text-muted">
          <CalendarDays size={13} />

          {course.year}
        </span>
      </div>

      <h3 className="mt-5 font-semibold leading-6">
        {course.title}
      </h3>

      <p className="mt-2 text-sm font-medium text-muted">
        {course.institution}
      </p>

      <p className="mt-4 text-sm leading-6 text-muted">
        {course.description}
      </p>
    </article>
  );
}