import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Duwin Accounting & Finance | Adelaide SA",
  description:
    "Accounting & tax, business advisory and financial services for SMEs and individuals in Adelaide. Xero certified, CA qualified.",
};

const services = [
  {
    title: "Accounting & Tax",
    description:
      "Comprehensive tax compliance and accounting solutions tailored for individuals, businesses and SMSFs. We keep you compliant and your tax minimised.",
    bg: "/bg-finance.jpg",
    href: "/services/accounting-tax",
    items: [
      "Personal Tax Returns",
      "Business Tax Returns",
      "SMSF Tax Returns",
      "BAS & IAS Lodgement",
      "Bookkeeping",
      "Payroll Management",
      "Financial Reporting",
    ],
  },
  {
    title: "Business Advisory",
    description:
      "Strategic guidance to grow, structure and optimise your business. From government grant applications to financial analysis and tax planning.",
    bg: "/bg-boardroom.jpg",
    href: "/services/business-advisory",
    items: [
      "Accessing Government Grants",
      "Due Diligence",
      "Financial Analysis",
      "Business Setup & Restructuring",
      "SMSF Setup",
      "Tax Planning",
    ],
  },
  {
    title: "Financial Services",
    description:
      "Licensed mortgage broking with access to a wide panel of lenders. Whether you're buying a home, investing in property or growing your business.",
    bg: "/bg-building.jpg",
    href: "/services/financial-services",
    items: [
      "Home Loans",
      "Investment Loans",
      "Commercial Loans",
      "Refinancing",
      "Construction Loans",
      "Personal Loans",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative overflow-hidden pt-[72px]" style={{ minHeight: 300 }}>
        <div className="absolute inset-0">
          <Image
            src="/bg-city.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
            aria-hidden
          />
          <div className="absolute inset-0" style={{ background: "rgba(11,11,11,0.75)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-4 rounded-full" style={{ background: "#1eabc7" }} aria-hidden />
            <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#1eabc7" }}>
              Our Services
            </span>
          </div>
          <h1
            className="text-[3rem] sm:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-4"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Services
          </h1>
          <p className="text-[1rem] leading-[1.70] max-w-[520px]" style={{ color: "rgba(255,255,255,0.65)" }}>
            End-to-end financial services under one roof — accounting, tax, advisory and lending
            for Adelaide&apos;s SMEs and individuals.
          </p>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-[1.625rem] sm:text-[1.875rem] font-extrabold leading-[1.3] tracking-[-0.015em]"
            style={{ fontFamily: "var(--font-manrope)", color: "#0b0b0b" }}
          >
            Giving you peace of mind through our expert financial services
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.75]" style={{ color: "#8e8e8e" }}>
            We offer the support you need to stay on top of your finances — organised books,
            accurate reporting, regulatory compliance and sound business advice.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="relative rounded-lg overflow-hidden group"
                style={{ minHeight: 380 }}
              >
                <Image
                  src={s.bg}
                  alt=""
                  fill
                  className="object-cover transition-[transform] duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  aria-hidden
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,11,11,0.94) 0%, rgba(11,11,11,0.60) 55%, rgba(11,11,11,0.20) 100%)",
                  }}
                />
                <div className="relative h-full flex flex-col justify-end p-7">
                  <h3
                    className="font-extrabold text-[1.125rem] text-white mb-2 leading-[1.3]"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[0.8125rem] leading-[1.65] mb-4" style={{ color: "rgba(255,255,255,0.70)" }}>
                    {s.description}
                  </p>
                  {/* Sub-items */}
                  <ul className="mb-5 space-y-1">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[0.75rem]" style={{ color: "rgba(255,255,255,0.60)" }}>
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "#1eabc7" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link
                      href={s.href}
                      className="inline-flex items-center px-5 py-2 rounded text-white text-[0.75rem] font-bold tracking-[0.06em] uppercase hover:opacity-90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-[opacity,transform] duration-200"
                      style={{ background: "#1eabc7", boxShadow: "0 1px 2px rgba(12,60,96,.30), 0 4px 12px rgba(12,60,96,.40)" }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET STARTED CTA ── */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0">
          <Image src="/bg-team.jpg" alt="" fill className="object-cover object-center" aria-hidden />
          <div className="absolute inset-0" style={{ background: "rgba(21,53,66,0.82)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-xl">
            <h2
              className="text-[2.5rem] sm:text-[3rem] font-extrabold text-white leading-[1.1] tracking-[-0.025em] mb-5"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Get started today
            </h2>
            <p className="text-[1rem] leading-[1.75] mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
              Not sure which service you need? Book a free consultation with Sophia and
              we&apos;ll identify exactly what support will make the biggest difference
              to your finances.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 rounded text-white font-bold text-[0.875rem] tracking-[0.06em] uppercase hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-[opacity,transform] duration-200"
              style={{ background: "#1eabc7", boxShadow: "0 1px 2px rgba(12,60,96,.30), 0 4px 16px rgba(12,60,96,.50)" }}
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
