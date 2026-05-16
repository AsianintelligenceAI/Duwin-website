import Image from "next/image";

const logos = [
  { src: "/caanz_logo_horizontal.webp", alt: "Chartered Accountants ANZ", w: 130, h: 34 },
  { src: "/tpa-logo.png",               alt: "Tax Practitioners Board",   w: 78,  h: 34 },
  { src: "/Xero-logo-hires-RGB.png",    alt: "Xero",                      w: 74,  h: 34 },
  { src: "/xero-advisor-badge.png",     alt: "Xero Advisor Certified",    w: 34,  h: 34 },
];

export default function AccreditationBar() {
  return (
    <section
      className="w-full bg-white"
      style={{ borderTop: "1px solid #e2e6ec" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">

          {/* Label */}
          <p
            className="text-[0.6rem] font-bold tracking-[0.20em] uppercase shrink-0"
            style={{ color: "#b0b8c4" }}
          >
            Accredited &amp; Certified
          </p>

          {/* Divider */}
          <div
            className="hidden sm:block shrink-0 self-stretch"
            style={{ width: 1, background: "#e2e6ec" }}
            aria-hidden
          />

          {/* Logos */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="relative shrink-0"
                style={{ width: logo.w, height: logo.h }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain object-left"
                  sizes={`${logo.w}px`}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
