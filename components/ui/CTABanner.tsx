import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title = "Ready to take control of your finances?",
  subtitle = "Book a free consultation with Sophia today. No obligation, just straight answers.",
  primaryLabel = "Book Free Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Call (08) 8121 6066",
  secondaryHref = "tel:0881216066",
}: CTABannerProps) {
  return (
    <section
      className="relative overflow-hidden py-20 px-6"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(12,60,96,.22) 0%, transparent 60%)," +
          "radial-gradient(ellipse 60% 80% at 80% 70%, rgba(14,43,56,.45) 0%, transparent 55%)," +
          "linear-gradient(160deg, #040e20 0%, #0c3c60 50%, #082344 100%)",
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2
          className="text-[2.25rem] font-bold text-white mb-4 leading-[1.18] tracking-[-0.025em]"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          {title}
        </h2>
        <p className="text-[1.125rem] text-brand-100 leading-[1.75] mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PrimaryButton href={primaryHref} className="bg-brand-500 hover:bg-brand-600 active:bg-brand-700">
            {primaryLabel}
          </PrimaryButton>
          <SecondaryButton href={secondaryHref} variant="white">
            {secondaryLabel}
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
