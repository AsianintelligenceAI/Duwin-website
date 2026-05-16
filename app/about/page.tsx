import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Duwin Accounting & Finance",
  description:
    "Meet Sophia Wang — Adelaide's bilingual accountant. CA ANZ qualified, Xero certified and licensed mortgage broker. English and Mandarin services.",
};

const credentials = [
  { label: "CA ANZ",          sub: "Chartered Accountant" },
  { label: "Xero Certified",  sub: "Advisor & Payroll" },
  { label: "Tax Agent",       sub: "Registered with TPB" },
  { label: "Broker",          sub: "Licensed Mortgage Broker" },
];

const values = [
  { title: "Client-First",      body: "We listen first, advise second — your outcome always drives our decisions." },
  { title: "Accuracy",          body: "Your numbers are always correct. We hold ourselves to the highest standard." },
  { title: "Growth-Focused",    body: "We look beyond compliance to identify opportunities that move you forward." },
  { title: "Proactive",         body: "We flag issues early and offer solutions before they become problems." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-[72px] overflow-hidden" style={{ background: "#0c3c60", minHeight: 320 }}>
        <div className="absolute inset-0">
          <Image src="/bg-team.jpg" alt="" fill className="object-cover object-center opacity-25" aria-hidden />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(14,43,56,0.97) 0%, rgba(12,60,96,0.70) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-4 rounded-full" style={{ background: "#1eabc7" }} aria-hidden />
            <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#1eabc7" }}>
              Meet the Principal
            </span>
          </div>
          <h1
            className="font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-4"
            style={{ fontFamily: "var(--font-manrope)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
          >
            Sophia Wang
          </h1>
          <p className="text-[1rem] leading-[1.72] max-w-[480px]" style={{ color: "rgba(255,255,255,0.60)" }}>
            Chartered Accountant · Registered Tax Agent · Licensed Mortgage Broker
          </p>
        </div>
      </section>

      {/* ── SOPHIA ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-16 items-start">

            {/* Portrait */}
            <div className="relative">
              <div
                className="absolute -top-3 -left-3 w-full h-full rounded-2xl"
                style={{ background: "#e8f2f8" }}
                aria-hidden
              />
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 8px 32px rgba(12,60,96,.16)" }}
              >
                <Image
                  src="/sophia-photo.jpg"
                  alt="Sophia Wang — Principal, Duwin Accounting & Finance"
                  width={420}
                  height={520}
                  className="w-full object-cover object-top"
                  style={{ maxHeight: 520 }}
                  priority
                />
                {/* Bilingual badge on portrait */}
                <div
                  className="absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3 backdrop-blur-md"
                  style={{ background: "rgba(12,60,96,0.92)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <p className="text-white font-bold text-[0.9375rem]" style={{ fontFamily: "var(--font-manrope)" }}>
                    Sophia Wang
                  </p>
                  <p className="text-[0.75rem] mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>
                    B.Com (Acc.) · CA ANZ · Founder & Principal
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="pt-2 lg:pt-6">

              {/* Bilingual pill — prominent */}
              <div
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl mb-8"
                style={{ background: "#e8f2f8", border: "1px solid #d1e0eb" }}
              >
                <span className="text-[1rem] font-bold" style={{ color: "#0c3c60", fontFamily: "var(--font-manrope)" }}>
                  English
                </span>
                <span style={{ color: "#d1e0eb" }}>·</span>
                <span className="text-[1rem] font-bold" style={{ color: "#0c3c60", fontFamily: "var(--font-manrope)" }}>
                  普通话
                </span>
                <span
                  className="text-[0.65rem] font-bold tracking-[0.12em] uppercase px-2 py-0.5 rounded-full ml-1"
                  style={{ background: "#1eabc7", color: "#ffffff" }}
                >
                  Bilingual
                </span>
              </div>

              <p className="leading-[1.80] mb-6 max-w-[520px]" style={{ color: "#6b7585", fontSize: "1rem" }}>
                Sophia founded Duwin to bring big-firm expertise to Adelaide&apos;s small businesses and individuals.
                She serves clients fluently in both <strong style={{ color: "#0b0b0b", fontWeight: 600 }}>English and Mandarin</strong>, making her the trusted accountant for Adelaide&apos;s growing Chinese business community.
              </p>

              <p className="leading-[1.80] mb-10 max-w-[520px]" style={{ color: "#6b7585", fontSize: "1rem" }}>
                With qualifications spanning chartered accounting, Xero certification and mortgage broking,
                Sophia delivers a genuinely end-to-end financial partnership — all under one roof.
              </p>

              {/* Credential tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
                {credentials.map((c) => (
                  <div
                    key={c.label}
                    className="rounded-xl p-4 text-center"
                    style={{
                      background: "#f8f9fb",
                      border: "1px solid #e2e6ec",
                      borderTop: "3px solid #0c3c60",
                    }}
                  >
                    <BadgeCheck size={16} className="mx-auto mb-1.5" style={{ color: "#0c3c60" }} />
                    <p className="font-bold text-[0.8125rem]" style={{ color: "#0b0b0b", fontFamily: "var(--font-manrope)" }}>
                      {c.label}
                    </p>
                    <p className="text-[0.7rem] mt-0.5" style={{ color: "#9ba5b4" }}>{c.sub}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold text-[0.9375rem]"
                style={{ background: "#1eabc7", boxShadow: "0 1px 2px rgba(12,60,96,.20), 0 6px 20px rgba(12,60,96,.28)" }}
              >
                Book a Consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BILINGUAL FEATURE ── */}
      <section className="relative overflow-hidden py-20 px-6" style={{ background: "#0c3c60" }}>
        {/* Decorative Chinese characters */}
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 font-bold leading-none select-none pointer-events-none hidden lg:block"
          style={{
            fontFamily: "var(--font-manrope)",
            fontSize: "11rem",
            color: "rgba(255,255,255,0.04)",
            letterSpacing: "-0.02em",
          }}
          aria-hidden
        >
          双语
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-12">
            <div>
              <p
                className="text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-4"
                style={{ color: "#1eabc7" }}
              >
                Bilingual Service &nbsp;·&nbsp; 双语服务
              </p>
              <h2
                className="font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-5"
                style={{ fontFamily: "var(--font-manrope)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                We speak your language.
                <br />
                <span style={{ color: "#6ea4ca" }}>我们说中文。</span>
              </h2>
              <p className="leading-[1.75] max-w-[500px]" style={{ color: "rgba(255,255,255,0.58)", fontSize: "1rem" }}>
                Sophia provides all accounting, tax and financial services in both English and Mandarin (普通话).
                No language barrier. No misunderstanding. Just clear financial advice, in your preferred language.
              </p>
            </div>

            {/* Language badges */}
            <div className="flex lg:flex-col gap-4 shrink-0">
              <div
                className="px-6 py-4 rounded-2xl text-center"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                <p className="text-white font-extrabold text-[1.5rem]" style={{ fontFamily: "var(--font-manrope)" }}>
                  English
                </p>
                <p className="text-[0.7rem] mt-1" style={{ color: "rgba(255,255,255,0.40)" }}>Primary language</p>
              </div>
              <div
                className="px-6 py-4 rounded-2xl text-center"
                style={{ background: "rgba(13,137,191,0.18)", border: "1px solid rgba(13,137,191,0.30)" }}
              >
                <p className="font-extrabold text-[1.5rem]" style={{ fontFamily: "var(--font-manrope)", color: "#6ea4ca" }}>
                  普通话
                </p>
                <p className="text-[0.7rem] mt-1" style={{ color: "rgba(255,255,255,0.40)" }}>Mandarin Chinese</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 px-6" style={{ background: "#f8f9fb" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-6 h-px inline-block" style={{ background: "#1eabc7" }} />
              <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase" style={{ color: "#0c3c60" }}>
                Our Values
              </span>
              <span className="w-6 h-px inline-block" style={{ background: "#1eabc7" }} />
            </div>
            <h2
              className="font-extrabold leading-[1.12] tracking-[-0.025em]"
              style={{ fontFamily: "var(--font-manrope)", color: "#0b0b0b", fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
            >
              How we work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-7"
                style={{
                  border: "1px solid #e2e6ec",
                  borderTop: "3px solid #0c3c60",
                  boxShadow: "0 1px 3px rgba(12,60,96,.04)",
                }}
              >
                <h3
                  className="font-extrabold text-[1.0625rem] mb-3 tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-manrope)", color: "#0b0b0b" }}
                >
                  {v.title}
                </h3>
                <p className="text-[0.8125rem] leading-[1.65]" style={{ color: "#6b7585" }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-extrabold leading-[1.12] tracking-[-0.025em] mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "#0b0b0b", fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
          >
            Ready to get started?
          </h2>
          <p className="leading-[1.75] mb-8" style={{ color: "#6b7585", fontSize: "1rem" }}>
            Book a free consultation with Sophia — in English or Mandarin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold text-[0.9375rem]"
              style={{ background: "#1eabc7", boxShadow: "0 1px 2px rgba(12,60,96,.20), 0 6px 20px rgba(12,60,96,.28)" }}
            >
              Book a Free Consultation
            </Link>
            <a
              href="tel:0881216066"
              className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold"
              style={{ color: "#0c3c60" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 11c-.53-1.67-.76-3.4-.59-5.18A2 2 0 014.49 4h3a2 2 0 012 1.72 12.8 12.8 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 11.9a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.8 12.8 0 002.81.7A2 2 0 0122 18.92z"/>
              </svg>
              (08) 8121 6066
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
