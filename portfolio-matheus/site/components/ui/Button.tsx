import Link from "next/link";

import type {
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

interface ButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: `
      bg-foreground
      text-background
      hover:scale-[1.02]
      hover:opacity-90
    `,

    secondary: `
      border
      border-border
      bg-secondary/50
      text-foreground
      hover:bg-secondary
    `,

    ghost: `
      text-muted
      hover:bg-secondary
      hover:text-foreground
    `,
  };

  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-5
        py-3
        text-sm
        font-medium
        transition-all
        duration-300
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Link>
  );
}