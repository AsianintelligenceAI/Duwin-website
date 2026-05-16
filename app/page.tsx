import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import AccreditationBar from "@/components/AccreditationBar";
import ScrollReveal from "@/components/ScrollReveal";
import InsightsCarousel from "@/components/InsightsCarousel";
import GradientCard from "@/components/ui/GradientCard";
import CheckItem from "@/components/ui/CheckItem";
import { Calculator, TrendingUp, Landmark } from "lucide-react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

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
    gradient: "linear-gradient(135deg, #0c3c60 0%, #0a3050 100%)",
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
    gradient: "linear-gradient(135deg, #0c3c60 0%, #147285 100%)",
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
    gradient: "linear-gradient(135deg, #0a3050 0%, #39729b 100%)",
    number: "03",
  },
];


const credentials = [
  { value: "CA ANZ",   label: "Chartered Accountant" },
  { value: "Xero",     label: "Advisor & Payroll Certified" },
  { value: "3-in-1",   label: "Accounting · Advisory · Finance" },
  { value: "Adelaide", label: "Pirie St, SA 5000" },
];


/* ─── PAGE ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <HeroSection />
      <AccreditationBar />

      {/* ═══════════════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════════════ */}
      <section className="py-28 px-6" style={{ background: "#f8f9fb" }}>
        <div className="max-w-7xl mx-auto">

          <ScrollReveal className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px inline-block" style={{ background: "#1eabc7" }} />
              <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#0c3c60" }}>
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
                style={{ color: "#0c3c60" }}
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
                      style={{ color: "#0c3c60" }}
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
          ABOUT SOPHIA — editorial split
      ═══════════════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden" style={{ minHeight: 600 }}>

        {/* Left — full-bleed photo, no border-radius */}
        <div className="relative" style={{ minHeight: 480 }}>
          <Image
            src="/sophia-photo.jpg"
            alt="Sophia Wang — Founder & Principal, Duwin Accounting & Finance"
            fill
            className="object-cover object-center"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
          {/* Subtle gradient at bottom for readability */}
          <div
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(14,43,56,0.22), transparent)" }}
            aria-hidden
          />
        </div>

        {/* Right — white, vertically centred, minimal */}
        <ScrollReveal variant="reveal-right" wrapperClass="flex items-center bg-white px-10 lg:px-20 py-20">
          <div className="max-w-[420px]">

            {/* Eyebrow */}
            <p
              className="text-[0.65rem] font-bold tracking-[0.22em] uppercase mb-8"
              style={{ color: "#9ba5b4" }}
            >
              Meet Our Principal
            </p>

            {/* Name + vertical accent */}
            <div className="flex items-start gap-5 mb-6">
              <div
                className="shrink-0 mt-2"
                style={{ width: 3, height: 56, background: "#1eabc7", borderRadius: 2 }}
                aria-hidden
              />
              <h2
                className="font-extrabold leading-[1.05] tracking-[-0.035em]"
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontSize: "clamp(2.5rem, 4vw, 3.25rem)",
                  color: "#0b0b0b",
                }}
              >
                Sophia
                <br />Wang
              </h2>
            </div>

            {/* Role line */}
            <p
              className="text-[0.7rem] font-bold tracking-[0.16em] uppercase mb-8"
              style={{ color: "#0c3c60" }}
            >
              CA ANZ · Registered Tax Agent · Mortgage Broker
            </p>

            {/* One-sentence bio */}
            <p
              className="leading-[1.80] mb-8"
              style={{ color: "#6b7585", fontSize: "1rem" }}
            >
              Sophia founded Duwin to give Adelaide&apos;s small businesses and individuals
              direct access to a fully qualified accountant — fluent in both{" "}
              <strong style={{ color: "#0b0b0b", fontWeight: 600 }}>English and Mandarin</strong>.
            </p>

            {/* Bilingual pill */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-10"
              style={{ background: "#e8f2f8", border: "1px solid #d1e0eb" }}
            >
              <span className="text-[0.75rem] font-semibold" style={{ color: "#0c3c60" }}>English</span>
              <span style={{ color: "#d1e0eb", fontSize: "0.75rem" }}>·</span>
              <span className="text-[0.75rem] font-semibold" style={{ color: "#0c3c60" }}>普通话</span>
            </div>

            {/* Ghost CTA */}
            <div className="flex items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[0.875rem] font-semibold group"
                style={{ color: "#0c3c60" }}
              >
                Full profile
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-[0.875rem] font-semibold"
                style={{ background: "#1eabc7", boxShadow: "0 1px 2px rgba(30,171,199,.20), 0 4px 14px rgba(30,171,199,.30)" }}
              >
                Book a Consultation
              </Link>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════ */}
      <TestimonialsCarousel />

      {/* ═══════════════════════════════════════════════
          INSIGHTS
      ═══════════════════════════════════════════════ */}
      <InsightsCarousel />

      {/* ═══════════════════════════════════════════════
          CREDENTIALS BAR
      ═══════════════════════════════════════════════ */}
      <ScrollReveal variant="reveal-scale">
        <section className="relative overflow-hidden py-16 px-6" style={{ background: "#1eabc7" }}>
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
              style={{ background: "radial-gradient(ellipse, rgba(12,60,96,0.35) 0%, transparent 70%)", filter: "blur(60px)" }}
              aria-hidden
            />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #1eabc7)" }} aria-hidden />
              <span className="text-[0.65rem] font-bold tracking-[0.20em] uppercase" style={{ color: "#1eabc7" }}>Get Started</span>
              <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #1eabc7, transparent)" }} aria-hidden />
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
                style={{ background: "#1eabc7", boxShadow: "0 1px 2px rgba(30,171,199,.30), 0 8px 24px rgba(30,171,199,.50)" }}
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
