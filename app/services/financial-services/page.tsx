import type { Metadata } from "next";
import { Home, TrendingUp, Warehouse, RefreshCcw, HardHat, CreditCard } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import StepBadge from "@/components/ui/StepBadge";
import CTABanner from "@/components/ui/CTABanner";
import GradientCard from "@/components/ui/GradientCard";
import CheckItem from "@/components/ui/CheckItem";

export const metadata: Metadata = {
  title: "Financial Services | Duwin Accounting & Finance",
  description:
    "Home loans, investment loans, commercial finance, refinancing, construction loans and personal loans in Adelaide SA.",
};

const whyItems = [
  "Licensed mortgage broker",
  "Wide lender panel",
  "Tax-integrated advice",
  "End-to-end management",
  "No cost to you*",
];

const services = [
  {
    icon: Home,
    title: "Home Loans",
    description:
      "Whether you are a first home buyer or upgrading, we search a wide panel of lenders to find the right home loan with a competitive rate and terms that suit your lifestyle.",
    items: [
      "First home buyer loans",
      "Owner-occupier loans",
      "Variable & fixed rates",
      "Offset accounts",
      "Redraw facilities",
      "Pre-approval support",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Loans",
    description:
      "Grow your property portfolio with the right investment loan structure — maximising your borrowing capacity while keeping your tax position optimal.",
    items: [
      "Residential investment loans",
      "Interest-only options",
      "Portfolio lending",
      "Cross-collateralisation advice",
      "Equity release",
      "SMSF property lending",
    ],
  },
  {
    icon: Warehouse,
    title: "Commercial Loans",
    description:
      "Finance your commercial property purchase, business acquisition or equipment needs with a loan structure tailored to your business.",
    items: [
      "Commercial property purchase",
      "Business acquisition finance",
      "Equipment finance",
      "Debtor finance",
      "Low-doc commercial loans",
      "Line of credit",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Refinancing",
    description:
      "If your current loan is no longer competitive, we will review your situation and find a better deal — potentially saving you thousands over the life of your loan.",
    items: [
      "Rate & fee comparison",
      "Cash-out refinancing",
      "Debt consolidation",
      "Switching loan types",
      "Equity access",
      "Exit fee analysis",
    ],
  },
  {
    icon: HardHat,
    title: "Construction Loans",
    description:
      "Building your dream home or investment property? We arrange construction loans with progressive drawdown facilities that align with your building timeline.",
    items: [
      "Owner-builder loans",
      "Progressive drawdown",
      "Build-to-rent finance",
      "Land & construction packages",
      "Knockdown rebuild loans",
      "Fixed-price contract review",
    ],
  },
  {
    icon: CreditCard,
    title: "Personal Loans",
    description:
      "Fast, flexible personal loan solutions for cars, travel, renovations or unexpected expenses — at competitive rates through our lender panel.",
    items: [
      "Unsecured personal loans",
      "Car & vehicle finance",
      "Renovation loans",
      "Debt consolidation",
      "Green loans",
      "Comparison across lenders",
    ],
  },
];

const processSteps = [
  { number: 1, title: "Initial Consultation", description: "We understand your goals, financial position and timeline." },
  { number: 2, title: "Lender Research", description: "We search our panel of lenders to find the most suitable options." },
  { number: 3, title: "Application Preparation", description: "We prepare and lodge a strong, complete application on your behalf." },
  { number: 4, title: "Approval & Settlement", description: "We manage the process through to approval and seamless settlement." },
];

export default function FinancialServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Financial Services"
        title="Finance for Your Life and Business"
        subtitle="Home loans, investment finance, commercial lending and more — we find the right solution from a wide panel of lenders, backed by our accounting expertise."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Financial Services" }]}
      />

      {/* Intro */}
      <section className="py-16 px-6 bg-white border-b border-brand-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10">
            <p className="text-neutral-600 text-[1.125rem] leading-[1.75]">
              As a firm that combines accounting expertise with mortgage broking, Duwin offers a unique advantage: we understand the full financial picture. We don&apos;t just find you a loan — we ensure it fits with your tax position, investment strategy and long-term goals. Our access to a broad lender panel means we can find competitive solutions for a wide range of circumstances.
            </p>
            <div
              className="rounded-2xl p-7 bg-brand-50 border border-brand-100"
              style={{ borderTop: "4px solid #0c3c60" }}
            >
              <p className="text-neutral-900 font-bold mb-4 text-[0.9375rem]">Why use Duwin for lending?</p>
              <ul className="space-y-3">
                {whyItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
              <p className="text-[0.75rem] text-neutral-400 mt-4">*Broker fees typically paid by lender</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Services</SectionLabel>
            <h2
              className="text-[2.25rem] font-bold text-neutral-900 leading-[1.18] tracking-[-0.025em]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Lending & Finance Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map(({ icon: Icon, title, description, items }) => (
              <GradientCard key={title} className="p-7 flex flex-col">
                <div className="w-11 h-11 bg-brand-500 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={19} className="text-white" strokeWidth={1.75} />
                </div>
                <h3
                  className="text-[1.125rem] font-bold text-neutral-900 mb-3 tracking-[-0.015em]"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {title}
                </h3>
                <p className="text-neutral-600 text-[0.875rem] leading-[1.65] mb-5 flex-1">{description}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>How It Works</SectionLabel>
            <h2
              className="text-[2.25rem] font-bold text-neutral-900 leading-[1.18] tracking-[-0.025em]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Our Lending Process
            </h2>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Connecting line (desktop only) */}
            <div
              className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px"
              style={{ background: "linear-gradient(90deg, transparent, #93bcd0 20%, #93bcd0 80%, transparent)" }}
              aria-hidden
            />
            {processSteps.map((step) => (
              <StepBadge
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to find the right finance?"
        subtitle="Book a free consultation and we'll review your options together."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="All Services"
        secondaryHref="/services"
      />
    </>
  );
}
