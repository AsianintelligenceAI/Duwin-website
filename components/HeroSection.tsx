import Image from "next/image";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";


export default function HeroSection() {
  return (
    <AuroraBackground
      className="pt-[72px] overflow-hidden block"
      style={{ background: "#e8f2f8", minHeight: "100vh" }}
      showRadialGradient={true}
    >
      {/* ── Ambient gradient blobs ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #0c3c60 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #1eabc7 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.025]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0c3c60" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_560px] items-center gap-0 py-12 lg:py-0"
          style={{ minHeight: "calc(100vh - 72px)" }}
        >

          {/* ── Left — text content ── */}
          <div className="flex flex-col justify-center pr-0 lg:pr-12 py-16 lg:py-20">

            {/* Label */}
            <div
              className="flex items-center gap-2 mb-7"
              style={{ animation: "fadeIn 0.5s ease forwards", opacity: 0, animationDelay: "100ms" }}
            >
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-6 h-px" style={{ background: "#1eabc7" }} />
                <span
                  className="text-[0.7rem] font-bold tracking-[0.18em] uppercase"
                  style={{ color: "#0c3c60" }}
                >
                  Adelaide&apos;s Trusted Accountants
                </span>
              </div>
            </div>

            {/* H1 */}
            <h1
              className="font-extrabold leading-[1.08] tracking-[-0.03em] mb-7"
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "clamp(2.6rem, 5vw, 3.75rem)",
                color: "#0b0b0b",
                animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
                opacity: 0,
                animationDelay: "200ms",
              }}
            >
              Accounting You
              <br />
              <span className="text-shimmer">Can Count On.</span>
            </h1>

            {/* Subtitle */}
            <p
              className="leading-[1.78] mb-10 max-w-[500px]"
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.0625rem)",
                color: "#6b7585",
                animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
                opacity: 0,
                animationDelay: "320ms",
              }}
            >
              Expert accounting, tax, business advisory and financial services
              for SMEs and individuals in Adelaide. We keep your compliance on
              track and your business growing.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                animation: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
                opacity: 0,
                animationDelay: "440ms",
              }}
            >
              <Link
                href="/contact"
                className="btn-primary btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold text-[0.9375rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  background: "#1eabc7",
                  boxShadow: "0 1px 2px rgba(30,171,199,.25), 0 6px 20px rgba(30,171,199,.35)",
                }}
              >
                Book a Free Consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="btn-outline inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-[0.9375rem] border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ color: "#0c3c60", borderColor: "#d1e0eb", background: "transparent" }}
              >
                Explore Our Services
              </Link>
            </div>

          </div>

          {/* ── Right — Sophia portrait panel ── */}
          <div
            className="relative hidden lg:flex items-end justify-center overflow-visible"
            style={{
              width: "560px",
              height: "560px",
              animation: "fadeIn 0.8s ease forwards",
              opacity: 0,
              animationDelay: "300ms",
            }}
          >
            {/* Photo background panel */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src="/pexels-mohamed-hamdi-510308652-16282306.jpg"
                alt=""
                fill
                className="object-cover object-center"
                sizes="560px"
                aria-hidden
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(7,25,34,0.75) 0%, rgba(7,25,34,0.25) 55%, rgba(7,25,34,0.10) 100%)",
                }}
                aria-hidden
              />
            </div>

            {/* Sophia portrait */}
            <div
              className="relative w-[460px] h-[660px] z-10"
              style={{
                animation: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
                opacity: 0,
                animationDelay: "450ms",
              }}
            >
              <Image
                src="/sophia.png"
                alt="Sophia Wang — Founder & Principal, Duwin Accounting & Finance"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                priority
                sizes="460px"
              />
            </div>


            {/* Name card */}
            <div
              className="absolute bottom-5 left-5 z-20"
              style={{
                animation: "fadeIn 0.6s ease forwards",
                opacity: 0,
                animationDelay: "900ms",
              }}
            >
              <div
                className="px-4 py-3 rounded-xl text-xs font-semibold backdrop-blur-sm"
                style={{
                  background: "rgba(255,255,255,0.88)",
                  color: "#0c3c60",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.10), 0 8px 24px rgba(12,60,96,0.12)",
                  border: "1px solid rgba(12,60,96,0.12)",
                }}
              >
                <span style={{ display: "block", fontSize: "0.65rem", color: "#9ba5b4", marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Principal
                </span>
                Sophia Wang, B.Com (Acc.) CA
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        aria-hidden
        style={{
          animation: "fadeIn 0.6s ease forwards",
          opacity: 0,
          animationDelay: "1100ms",
        }}
      >
        <span className="text-[0.65rem] font-semibold tracking-[0.16em] uppercase" style={{ color: "#9ba5b4" }}>
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, #0c3c60, transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>
    </AuroraBackground>
  );
}
