import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "dark" | "light" | "ghost";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-sage text-cream hover:bg-forest shadow-sm",
  secondary:
    "border border-ink/25 text-ink hover:bg-ink hover:text-cream hover:border-ink",
  dark: "bg-ink text-cream hover:bg-forest shadow-sm",
  light: "bg-cream text-ink hover:bg-linen shadow-sm",
  ghost: "text-ink hover:bg-ink/[0.06]",
};

const SIZES: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-[0.95rem]",
  lg: "h-[3.4rem] px-9 text-base",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight " +
  "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

/**
 * Pill button used site-wide. Renders a Next.js `<Link>` when `href` is set,
 * otherwise a native `<button>`.
 */
export function Button(props: ButtonProps | LinkProps) {
  const {
    variant = "primary",
    size = "md",
    fullWidth,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    BASE,
    VARIANTS[variant],
    SIZES[size],
    fullWidth && "w-full",
    className,
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorRest } = rest as LinkProps;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonProps)}>
      {children}
    </button>
  );
}
