import Link from "next/link";

interface PrimaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function PrimaryButton({
  href,
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
}: PrimaryButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-500 text-white font-semibold text-[0.9375rem] " +
    "transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] " +
    "hover:-translate-y-[1px] hover:bg-brand-600 " +
    "active:translate-y-0 active:scale-[0.98] active:bg-brand-700 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 " +
    "disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none " +
    className;

  const style = {
    boxShadow: "0 1px 2px rgba(36,94,118,.20), 0 4px 12px rgba(36,94,118,.30)",
  };

  if (href) {
    return (
      <Link href={href} className={base} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base} style={style}>
      {children}
    </button>
  );
}
