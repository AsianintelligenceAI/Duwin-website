import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import GradientCard from "@/components/ui/GradientCard";
import CheckItem from "@/components/ui/CheckItem";
import { CheckCircle, Calculator, TrendingUp, Landmark } from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────── */

const services = [
  {
    title: "Accounting & Tax",
    tagline: "Compliance covered. Tax minimised.",
    description:
      "Personal & business tax returns, SMSF, BAS & IAS lodgement, bookkeeping, payroll management and financial reporting — all under one roof.",
    bg: "/bg-finance.jpg",
    href: "/services/accounting-tax",
    items: ["Personal & Business Tax", "SMSF Tax Returns", "BAS & IAS Lodgement", "Bookkeeping & Payroll"],
    icon: Calculator,
    gradient: "linear-gradient(135deg, #245e76 0%, #1c4d62 100%)",
    number: "01",
  },
  {
    title: "Business Advisory",
    tagline: "Strategy that drives growth.",
    description:
      "Strategic guidance to grow, structure and optimise your business. Government grants, due diligence, financial analysis and tax planning.",
    bg: "/bg-boardroom.jpg",
    href: "/services/business-advisory",
    items: ["Government Grant Access", "Due Diligence", "Business Structuring", "Tax Planning"],
    icon: TrendingUp,
    gradient: "linear-gradient(135deg, #0e2b38 0%, #245e76 100%)",
    number: "02",
  },
  {
    title: "Financial Services",
    tagline: "Finance for life and business.",
    description:
      "Licensed mortgage broking with access to a wide panel of lenders. Home, investment, commercial, construction and personal loans.",
    bg: "/bg-building.jpg",
    href: "/services/financial-services",
    items: ["Home & Investment Loans", "Commercial Loans", "Refinancing", "Construction Loans"],
    icon: Landmark,
    gradient: "linear-gradient(135deg, #1c4d62 0%, #3579a0 100%)",
    number: "03",
  },
];

const whyItems = [
  { title: "Chartered Accountant",   sub: "CA ANZ — the gold standard in professional accounting" },
  { title: "Xero Certified",         sub: "Advisor & Payroll certified for real-time financial visibility" },
  { title: "Tax Agent & Broker",     sub: "Registered tax agent and licensed mortgage broker in one firm" },
  { title: "Bilingual Service",      sub: "Fluent in English and Mandarin for Adelaide's diverse community" },
  { title: "Direct Access",          sub: "No call centres — you speak directly with Sophia every time" },
  { title: "Proactive Advice",       sub: "We flag opportunities, manage risks and plan your year ahead" },
];

const credentials = [
  { value: "CA ANZ",   label: "Chartered Accountant" },
  { value: "Xero",     label: "Advisor & Payroll Certified" },
  { value: "3-in-1",   label: "Accounting · Advisory · Finance" },
  { value: "Adelaide", label: "Pirie St, SA 5000" },
];

const sophiaCredentials = [
  { title: "Chartered Accountant",   sub: "CA ANZ Member" },
  { title: "Registered Tax Agent",   sub: "Tax Practitioners Board" },
  { title: "Xero Certified",         sub: "Advisor & Payroll" },
  { title: "Mortgage Broker",        sub: "Licensed Financial Services" },
];

/* ─── PAGE ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* ═══════════════════════════════════════════════
          ABOUT SOPHIA
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "#f8f9fb" }}>
        <ScrollReveal>
          <div className="relative overflow-hidden py-20 px-6" style={{ background: "#0e2b38", minHeight: "180px" }}>
            <div className="absolute inset-0">
              <Image src="/bg-team.jpg" alt="" fill className="object-cover object-center opacity-60" aria-hidden />
              <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(14,43,56,0.97) 0%, rgba(14,43,56,0.85) 35%, rgba(14,43,56,0.30) 70%, rgba(14,43,56,0.05) 100%)" }} />
            </div>
            <div className="relative max-w-7xl mx-auto max-w-[55%]">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-px inline-block" style={{ background: "#5bc8e8" }} />
                <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#5bc8e8" }}>
                  Meet Our Principal
                </span>
              </div>
              <h2
                className="font-extrabold leading-[1.12] tracking-[-0.025em]"
                style={{ fontFamily: "var(--font-manrope)", fontSize: "clamp(1.875rem, 3vw, 2.5rem)", color: "#ffffff", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
              >
                The person behind your finances
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <ScrollReveal variant="reveal-left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl" style={{ background: "#edf4f7", zIndex: 0 }} />
                <div className="relative z-10 rounded-2xl overflow-hidden" style={{ boxShadow: "0 4px 8px rgba(36,94,118,.08), 0 20px 60px rgba(36,94,118,.16)", maxHeight: 480 }}>
                  <Image
                    src="/sophia.png"
                    alt="Sophia Wang — Founder & Principal, Duwin Accounting & Finance"
                    width={500}
                    height={600}
                    className="w-full object-cover object-top"
                    style={{ maxHeight: 480 }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-6 py-5" style={{ background: "linear-gradient(to top, rgba(14,43,56,0.92) 0%, transparent 100%)" }}>
                    <p className="text-white font-bold text-[1rem]" style={{ fontFamily: "var(--font-manrope)" }}>Sophia Wang</p>
                    <p className="text-[0.75rem] font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>Founder &amp; Principal Accountant</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="reveal-right">
              <div className="pt-2">
                <h3
                  className="font-extrabold tracking-[-0.02em] mb-1"
                  style={{ fontFamily: "var(--font-manrope)", color: "#0b0b0b", fontSize: "1.875rem" }}
                >
                  Sophia Wang
                </h3>
                <p className="font-medium mb-7 text-[0.8125rem]" style={{ color: "#6b7585" }}>
                  B.Com (Accounting), University of Adelaide &nbsp;·&nbsp; CA ANZ &nbsp;·&nbsp; Registered Tax Agent &nbsp;·&nbsp; Mortgage Broker
                </p>
                <p className="leading-[1.78] mb-4" style={{ color: "#6b7585", fontSize: "0.9375rem" }}>
                  Sophia is the founder and principal accountant at Duwin. She brings a wide array of experience spanning many years serving clients across multiple industries in South Australia — from SMEs and sole traders to property investors and SMSF trustees.
                </p>
                <p className="leading-[1.78] mb-10" style={{ color: "#6b7585", fontSize: "0.9375rem" }}>
                  Dedicated to minimising financial stress and optimising wealth, Sophia ensures you can focus on what matters most. She is fluent in both English and Mandarin, making Duwin accessible to Adelaide&apos;s diverse business community.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-10">
                  {sophiaCredentials.map((c) => (
                    <div
                      key={c.title}
                      className="card-hover rounded-xl p-4"
                      style={{ background: "#ffffff", border: "1px solid #e2e6ec", borderLeft: "3px solid #245e76", boxShadow: "0 1px 3px rgba(36,94,118,.05)" }}
                    >
                      <p className="font-bold text-[0.875rem]" style={{ color: "#0b0b0b", fontFamily: "var(--font-manrope)" }}>{c.title}</p>
                      <p className="text-[0.75rem] mt-0.5" style={{ color: "#6b7585" }}>{c.sub}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold text-[0.9375rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ background: "#245e76", boxShadow: "0 1px 2px rgba(36,94,118,.20), 0 6px 20px rgba(36,94,118,.28)" }}
                >
                  Book a Consultation with Sophia
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6" style={{ background: "#f8f9fb" }}>
        <div className="max-w-7xl mx-auto">

          <ScrollReveal className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px inline-block" style={{ background: "#245e76" }} />
              <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#245e76" }}>
                What We Do
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2
                className="font-extrabold leading-[1.12] tracking-[-0.025em]"
                style={{ fontFamily: "var(--font-manrope)", color: "#0b0b0b", fontSize: "clamp(1.875rem, 3vw, 2.5rem)" }}
              >
                Comprehensive financial services<br className="hidden sm:block" /> under one roof
              </h2>
              <Link
                href="/services"
                className="shrink-0 text-[0.875rem] font-semibold inline-flex items-center gap-1.5 group"
                style={{ color: "#245e76" }}
              >
                View all services
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ScrollReveal
                key={s.title}
                delay={([`delay-100`, `delay-200`, `delay-300`] as const)[i]}
              >
                <GradientCard className="flex flex-col overflow-hidden">
                  {/* Coloured header panel */}
                  <div
                    className="relative flex items-center justify-center h-[110px] overflow-hidden flex-shrink-0"
                    style={{ background: s.gradient }}
                  >
                    <span
                      className="absolute right-5 top-1/2 -translate-y-1/2 font-extrabold select-none pointer-events-none leading-none"
                      style={{ fontSize: "5rem", color: "rgba(255,255,255,0.10)", fontFamily: "var(--font-manrope)" }}
                    >
                      {s.number}
                    </span>
                    <s.icon size={32} strokeWidth={1.5} className="text-white relative z-10" />
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-7">
                    <h3
                      className="font-extrabold text-[1.125rem] leading-[1.25] mb-2.5 tracking-[-0.015em]"
                      style={{ fontFamily: "var(--font-manrope)", color: "#0b0b0b" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-[0.875rem] leading-[1.65] mb-5" style={{ color: "#6b7585" }}>
                      {s.description}
                    </p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {s.items.map((item) => (
                        <CheckItem key={item}>{item}</CheckItem>
                      ))}
                    </ul>
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded"
                      style={{ color: "#245e76" }}
                    >
                      Explore service
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden
                        className="transition-transform duration-150 group-hover/link:translate-x-1">
                        <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </GradientCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHY DUWIN
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <ScrollReveal variant="reveal-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-px inline-block" style={{ background: "#245e76" }} />
                <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#245e76" }}>
                  Why Choose Duwin
                </span>
              </div>
              <h2
                className="font-extrabold leading-[1.12] tracking-[-0.025em] mb-5"
                style={{ fontFamily: "var(--font-manrope)", color: "#0b0b0b", fontSize: "clamp(1.875rem, 3vw, 2.5rem)" }}
              >
                Your financial partner<br />in Adelaide
              </h2>
              <p className="leading-[1.78] mb-10" style={{ color: "#6b7585", fontSize: "1rem" }}>
                At Duwin, we focus on meeting the accounting and financial demands of SMEs
                and individuals that keep our local economy running. We deliver organised
                books, useful financial reports and sound business advice that will see
                your business grow.
              </p>
              <div className="space-y-3">
                {whyItems.map((item) => (
                  <div key={item.title} className="feature-card flex items-start gap-4 p-4 rounded-xl cursor-default">
                    <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: "#245e76" }} />
                    <div>
                      <p className="font-semibold text-[0.9rem]" style={{ color: "#0b0b0b", fontFamily: "var(--font-manrope)" }}>
                        {item.title}
                      </p>
                      <p className="text-[0.8125rem] leading-[1.6] mt-0.5" style={{ color: "#6b7585" }}>
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/about"
                  className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold text-[0.9375rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{
                    background: "#245e76",
                    boxShadow: "0 1px 2px rgba(36,94,118,.20), 0 6px 20px rgba(36,94,118,.28)",
                  }}
                >
                  Meet Sophia
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="reveal-right">
              <div className="relative h-[540px] rounded-2xl overflow-hidden">
                <Image
                  src="/bg-boardroom.jpg"
                  alt="Duwin office"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(145deg, rgba(36,94,118,0.28) 0%, rgba(0,0,0,0.08) 100%)" }} />
                <div
                  className="absolute bottom-6 left-6 right-6 rounded-xl p-5 backdrop-blur-md"
                  style={{ background: "rgba(36,94,118,0.90)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 8px 32px rgba(0,0,0,0.20)" }}
                >
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="rgba(255,255,255,0.3)" aria-hidden className="mb-3">
                    <path d="M0 14V8.4C0 5.6.9 3.3 2.7 1.5 4.5.5 6.6 0 9 0v2.8c-1.6 0-2.9.5-3.9 1.4C4.1 5.1 3.6 6.3 3.6 7.8V9H7V14H0zm11 0V8.4c0-2.8.9-5.1 2.7-6.9C15.5.5 17.6 0 20 0v2.8c-1.6 0-2.9.5-3.9 1.4-1 .9-1.5 2.1-1.5 3.6V9H18V14h-7z"/>
                  </svg>
                  <p className="text-white text-[0.875rem] font-medium leading-[1.6]">
                    My goal is to minimise financial stress for my clients and optimise their wealth so they can get on with life and enjoy their business.
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-8 h-8 rounded-full overflow-hidden relative shrink-0">
                      <Image src="/sophia.png" alt="" fill className="object-cover object-top" />
                    </div>
                    <p className="text-[0.75rem] font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>
                      Sophia Wang — Founder &amp; Principal
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CREDENTIALS BAR
      ═══════════════════════════════════════════════ */}
      <ScrollReveal variant="reveal-scale">
        <section className="relative overflow-hidden py-16 px-6" style={{ background: "#245e76" }}>
          <svg aria-hidden className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none">
            <defs>
              <pattern id="cred-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cred-dots)" />
          </svg>
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {credentials.map((c, i) => (
                <div key={c.label} className={`text-center ${i < credentials.length - 1 ? "lg:border-r lg:border-white/15" : ""}`}>
                  <div className="font-extrabold text-white mb-1.5" style={{ fontFamily: "var(--font-manrope)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                    {c.value}
                  </div>
                  <div className="text-[0.8125rem] font-medium" style={{ color: "rgba(255,255,255,0.62)" }}>
                    {c.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════ */}
      <ScrollReveal variant="reveal-scale">
        <section className="relative overflow-hidden py-28 px-6">
          <div className="absolute inset-0">
            <Image src="/bg-city.jpg" alt="" fill className="object-cover object-center" aria-hidden />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(14,43,56,0.92) 0%, rgba(11,11,11,0.82) 100%)" }} />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(36,94,118,0.35) 0%, transparent 70%)", filter: "blur(60px)" }}
              aria-hidden
            />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #0d89bf)" }} aria-hidden />
              <span className="text-[0.65rem] font-bold tracking-[0.20em] uppercase" style={{ color: "#0d89bf" }}>Get Started</span>
              <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #0d89bf, transparent)" }} aria-hidden />
            </div>
            <h2
              className="font-extrabold text-white leading-[1.08] tracking-[-0.03em] mb-6"
              style={{ fontFamily: "var(--font-manrope)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
            >
              Ready to take control<br />of your finances?
            </h2>
            <p className="leading-[1.78] mb-12 mx-auto max-w-[480px]" style={{ color: "rgba(255,255,255,0.58)", fontSize: "1.0625rem" }}>
              Book a free consultation with Sophia and discover how Duwin can simplify
              your accounting, optimise your tax and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-cta btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-[1rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                style={{ background: "#245e76", boxShadow: "0 1px 2px rgba(36,94,118,.30), 0 8px 24px rgba(36,94,118,.50)" }}
              >
                Book a Free Consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a
                href="tel:0881216066"
                className="phone-link inline-flex items-center gap-2 text-[0.9375rem] font-semibold"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 11c-.53-1.67-.76-3.4-.59-5.18A2 2 0 014.49 4h3a2 2 0 012 1.72 12.8 12.8 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 11.9a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.8 12.8 0 002.81.7A2 2 0 0122 18.92z"/>
                </svg>
                (08) 8121 6066
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
