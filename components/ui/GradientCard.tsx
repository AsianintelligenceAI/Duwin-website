"use client";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const shadowCard = "0 1px 2px rgba(36,94,118,.06), 0 4px 12px rgba(36,94,118,.10), 0 12px 32px rgba(36,94,118,.08)";
const shadowFloat = "0 4px 8px rgba(36,94,118,.08), 0 16px 48px rgba(36,94,118,.14), 0 32px 64px rgba(7,25,34,.12)";

export default function GradientCard({ children, className = "", hover = true }: GradientCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-brand-100 ${className}`}
      style={{
        boxShadow: shadowCard,
        transition: hover ? "transform 300ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 300ms ease" : undefined,
      }}
      onMouseEnter={
        hover
          ? (e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = shadowFloat;
            }
          : undefined
      }
      onMouseLeave={
        hover
          ? (e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = shadowCard;
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
