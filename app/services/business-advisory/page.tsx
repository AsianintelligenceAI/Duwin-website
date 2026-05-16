import type { Metadata } from "next";
import { Banknote, Search, LineChart, Building, PieChart, CalendarClock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABanner from "@/components/ui/CTABanner";
import GradientCard from "@/components/ui/GradientCard";
import CheckItem from "@/components/ui/CheckItem";

export const metadata: Metadata = {
  title: "Business Advisory | Duwin Accounting & Finance",
  description:
    "Strategic business advisory services in Adelaide: government grants, due diligence, financial analysis, business setup and tax planning.",
};

const approachItems = [
  "Proactive, not reactive",
  "Data-driven recommendations",
  "Tax-effective structures",
  "Long-term thinking",
  "Tailored to your goals",
];

const services = [
  {
    icon: Banknote,
    title: "Government Grant Applications",
    description:
      "Identifying and securing government grants and incentives for your business. We research eligible programs, prepare compelling applications and manage the lodgement process.",
    items: [
      "State & federal grant research",
      "Eligibility assessment",
      "Application preparation",
      "Documentation support",
      "R&D tax incentive",
      "Small business grants",
    ],
  },
  {
    icon: Search,
    title: "Due Diligence",
    description:
      "Thorough financial and commercial due diligence before you buy a business, enter a partnership or make a major investment — so you know exactly what you are getting into.",
    items: [
      "Financial statement review",
      "Revenue & cost verification",
      "Tax compliance check",
      "Liability identification",
      "Cash flow analysis",
      "Risk assessment report",
    ],
  },
  {
    icon: LineChart,
    title: "Financial Analysis",
    description:
      "In-depth financial modelling and analysis to give you a clear picture of your business performance, profitability and future trajectory.",
    items: [
      "Profitability analysis",
      "Cash flow forecasting",
      "Budget preparation",
      "Variance analysis",
      "Break-even analysis",
      "KPI reporting",
    ],
  },
  {
    icon: Building,
    title: "Business Setup & Structuring",
    description:
      "Get your business started on the right foot with the optimal legal and tax structure — minimising risk and maximising efficiency from day one.",
    items: [
      "Entity type advice",
      "ABN & ACN registration",
      "GST registration",
      "Business name registration",
      "Tax structure optimisation",
      "Shareholders agreements",
    ],
  },
  {
    icon: PieChart,
    title: "Business Restructuring",
    description:
      "When your business needs to evolve, we guide you through restructuring with minimal tax impact and maximum operational efficiency.",
    items: [
      "Corporate restructuring",
      "Asset protection strategies",
      "Trust restructuring",
      "Succession planning",
      "Business sale preparation",
      "Director changes",
    ],
  },
  {
    icon: CalendarClock,
    title: "Tax Planning",
    description:
      "Proactive, year-round tax planning to legally minimise your tax burden — so you keep more of what you earn.",
    items: [
      "Year-end tax planning",
      "Income splitting strategies",
      "Superannuation contributions",
      "Timing of income & expenses",
      "Investment structure advice",
      "Small business concessions",
    ],
  },
];

export default function BusinessAdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Advisory"
        title="Strategy That Drives Growth"
        subtitle="Beyond compliance — we are your strategic partner, helping you make smarter decisions, secure funding and build a business that lasts."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Business Advisory" }]}
      />

      {/* Intro */}
      <section className="py-16 px-6 bg-white border-b border-brand-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10">
            <p className="text-neutral-600 text-[1.125rem] leading-[1.75]">
              Great businesses are built on sound advice and smart strategy. At Duwin, we go well beyond preparing your tax return — we work alongside you to understand your goals, analyse your numbers and provide the strategic guidance needed to reach the next level. Whether you are starting out, growing fast or planning an exit, we have the expertise to help.
            </p>
            <div
              className="rounded-2xl p-7 bg-brand-50 border border-brand-100"
              style={{ borderTop: "4px solid #0c3c60" }}
            >
              <p className="text-neutral-900 font-bold mb-4 text-[0.9375rem]">Our advisory approach</p>
              <ul className="space-y-3">
                {approachItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
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
              Business Advisory Services
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

      <CTABanner
        title="Ready to build a better business?"
        subtitle="Let's discuss your goals and map out a plan together."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="All Services"
        secondaryHref="/services"
      />
    </>
  );
}
