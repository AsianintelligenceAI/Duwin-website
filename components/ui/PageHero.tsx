import Link from "next/link";
import SectionLabel from "./SectionLabel";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
}

export default function PageHero({ eyebrow, title, subtitle, breadcrumbs, children }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 px-6"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 10% 50%, rgba(36,94,118,.20) 0%, transparent 60%)," +
          "radial-gradient(ellipse 50% 70% at 85% 60%, rgba(14,43,56,.35) 0%, transparent 55%)," +
          "linear-gradient(150deg, #071922 0%, #0e2b38 60%, #153c4d 100%)",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 mb-6 text-[0.8125rem] text-brand-200">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-brand-600">/</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-white transition-[opacity] duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-300 rounded"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="max-w-3xl">
          <SectionLabel light>{eyebrow}</SectionLabel>
          <h1
            className="text-[3.25rem] font-bold text-white leading-[1.10] tracking-[-0.03em] mb-5"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-[1.125rem] text-brand-100 leading-[1.75] max-w-xl">{subtitle}</p>
          )}
        </div>
        {children}
      </div>

      {/* Decorative logo watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] pointer-events-none select-none"
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt=""
          className="w-full h-full object-contain opacity-[0.07] blur-[1px]"
        />
      </div>
    </section>
  );
}
