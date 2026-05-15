import Link from "next/link";

interface SecondaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "brand" | "white";
}

export default function SecondaryButton({
  href,
  onClick,
  children,
  className = "",
  variant = "brand",
}: SecondaryButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-[0.9375rem] border-2 " +
    "transition-[transform,box-shadow,opacity] duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] " +
    "hover:-translate-y-[1px] " +
    "active:translate-y-0 active:scale-[0.98] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ";

  const variants = {
    brand: "border-brand-400 text-brand-400 hover:bg-brand-50 focus-visible:ring-brand-400",
    white: "border-white/70 text-white hover:bg-white/10 focus-visible:ring-white",
  };

  const cls = base + variants[variant] + " " + className;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
