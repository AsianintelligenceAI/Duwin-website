import type { Metadata } from "next";
import { FileText, BookOpen, Users, BarChart2, Building2, Briefcase } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABanner from "@/components/ui/CTABanner";
import GradientCard from "@/components/ui/GradientCard";
import CheckItem from "@/components/ui/CheckItem";

export const metadata: Metadata = {
  title: "Accounting & Tax Services | Duwin Accounting & Finance",
  description:
    "Personal, business and SMSF tax returns, BAS & IAS lodgement, bookkeeping, payroll and financial reporting in Adelaide SA.",
};

const whyItems = [
  "Registered Tax Agent",
  "Xero Advisor Certified",
  "CA qualified accountants",
  "Fast turnaround",
  "Proactive tax planning",
];

const services = [
  {
    icon: FileText,
    title: "Personal Tax Returns",
    description:
      "Accurate and maximised personal income tax returns for employees, investors, sole traders, rental property owners and more. We ensure every deduction you are entitled to is claimed.",
    items: [
      "Salary & wages income",
      "Investment & rental income",
      "Capital gains tax",
      "Work-related deductions",
      "Dividend and trust income",
      "Shares and crypto",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Tax Returns",
    description:
      "End-of-year tax returns for companies, partnerships, trusts and sole traders — prepared accurately and submitted on time.",
    items: [
      "Company tax returns",
      "Partnership tax returns",
      "Trust tax returns",
      "Sole trader returns",
      "Fringe benefits tax (FBT)",
      "Tax minimisation strategies",
    ],
  },
  {
    icon: Building2,
    title: "SMSF Tax Returns",
    description:
      "Self Managed Super Fund tax return preparation, compliance and lodgement — keeping your fund audit-ready and compliant with ATO requirements.",
    items: [
      "SMSF annual return",
      "ATO compliance",
      "Fund audit coordination",
      "Contribution reporting",
      "Pension phase reporting",
      "SMSF establishment support",
    ],
  },
  {
    icon: BarChart2,
    title: "BAS & IAS Lodgement",
    description:
      "Timely and accurate Business Activity Statements and Instalment Activity Statements — minimising penalties and keeping your GST obligations in order.",
    items: [
      "Monthly & quarterly BAS",
      "GST reconciliation",
      "PAYG withholding",
      "Instalment activity statements",
      "ATO portal lodgement",
      "Amended statements",
    ],
  },
  {
    icon: BookOpen,
    title: "Bookkeeping",
    description:
      "Organised, accurate bookkeeping using Xero — giving you a real-time view of your financial position and making tax time effortless.",
    items: [
      "Xero setup & management",
      "Bank reconciliations",
      "Accounts payable & receivable",
      "Expense categorisation",
      "Month-end close",
      "Historical cleanup",
    ],
  },
  {
    icon: Users,
    title: "Payroll Management",
    description:
      "Compliant payroll processing and STP reporting — so your team is paid correctly and your obligations to the ATO are always met.",
    items: [
      "Single Touch Payroll (STP)",
      "Payroll processing",
      "Leave management",
      "Superannuation compliance",
      "PAYG summaries",
      "Award rate compliance",
    ],
  },
];

export default function AccountingTaxPage() {
  return (
    <>
      <PageHero
        eyebrow="Accounting & Tax"
        title={`Compliance Covered.\nTax Minimised.`}
        subtitle="From personal returns to complex business tax — we handle every aspect of your accounting and tax obligations with precision and care."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Accounting & Tax" }]}
      />

      {/* Intro */}
      <section className="py-16 px-6 bg-white border-b border-brand-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10">
            <p className="text-neutral-600 text-[1.125rem] leading-[1.75]">
              Tax obligations can be complex and time-consuming. At Duwin, we take that burden off your shoulders — preparing accurate returns, lodging on time and identifying every legitimate deduction and concession available to you. As registered tax agents and Xero-certified advisors, we combine technical expertise with cloud technology to deliver a seamless experience.
            </p>
            <div
              className="rounded-2xl p-7 bg-brand-50 border border-brand-100"
              style={{ borderTop: "4px solid #0c3c60" }}
            >
              <p className="text-neutral-900 font-bold mb-4 text-[0.9375rem]">Why choose Duwin for tax?</p>
              <ul className="space-y-3">
                {whyItems.map((item) => (
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
              Accounting & Tax Services
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
        title="Let's handle your tax together"
        subtitle="Contact us today to book your appointment or ask a question."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="All Services"
        secondaryHref="/services"
      />
    </>
  );
}
