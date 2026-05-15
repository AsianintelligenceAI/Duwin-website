import type { Metadata } from "next";
import Image from "next/image";
import { Award, Heart, Target, Lightbulb, BadgeCheck, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABanner from "@/components/ui/CTABanner";
import GradientCard from "@/components/ui/GradientCard";
import CheckItem from "@/components/ui/CheckItem";

export const metadata: Metadata = {
  title: "About Us | Duwin Accounting & Finance",
  description:
    "Learn about Duwin Accounting & Finance — our story, our principal Sophia Wang, and our commitment to Adelaide SMEs and individuals.",
};

const credentials = [
  "Chartered Accountants Australia & New Zealand (CA ANZ)",
  "Xero Payroll Certified",
  "Xero Advisor Certified Individual",
  "Registered Tax Agent",
  "Licensed Mortgage Broker",
];

const standoutItems = [
  "Deep expertise in SME accounting and compliance",
  "Proactive tax planning — not just compliance",
  "End-to-end financial services under one roof",
  "Cloud-first approach with Xero",
  "Fast response times and clear communication",
  "Local Adelaide knowledge and community commitment",
];

const values = [
  {
    icon: Heart,
    title: "Client-First",
    description: "Every decision we make is guided by what is best for you. We listen first, advise second.",
  },
  {
    icon: BadgeCheck,
    title: "Accuracy",
    description: "We hold ourselves to the highest standard of precision — your numbers are always correct and compliant.",
  },
  {
    icon: Target,
    title: "Growth-Focused",
    description: "We look beyond compliance to identify opportunities that move your business and finances forward.",
  },
  {
    icon: Lightbulb,
    title: "Proactive Advice",
    description: "We don't wait for you to ask — we flag issues early and offer solutions before they become problems.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Duwin"
        subtitle="A dedicated accounting and financial services firm built around the needs of Adelaide's small businesses and individuals."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Mission */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-14 items-start">
            <div>
              <SectionLabel>Our Mission</SectionLabel>
              <h2
                className="text-[2.25rem] font-bold text-neutral-900 leading-[1.18] tracking-[-0.025em] mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Accounting that works for you
              </h2>
              <div className="space-y-5 text-[1.125rem] text-neutral-600 leading-[1.75]">
                <p>
                  At Duwin, we focus our efforts on meeting the accounting and financial demands of the SMEs and individuals who keep Adelaide&apos;s local economy running. We believe every business owner and individual deserves access to quality financial advice — not just large corporations.
                </p>
                <p>
                  We don&apos;t just keep books. We deliver accurate financial reports, ensure you stay compliant with regulatory requirements, and offer sound, strategic business advice that will see your finances and business grow.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-8 text-neutral-500 text-[0.875rem]">
                <MapPin size={15} className="text-brand-400 shrink-0" />
                <span>310/147 Pirie St, Adelaide SA 5000 (Aurora on Pirie)</span>
              </div>
            </div>

            {/* What sets us apart */}
            <div
              className="rounded-2xl p-8 border border-brand-100 bg-brand-50"
              style={{ borderTop: "4px solid #245e76" }}
            >
              <h3
                className="text-[1.25rem] font-bold text-neutral-900 mb-6 tracking-[-0.015em]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                What sets us apart
              </h3>
              <ul className="space-y-3">
                {standoutItems.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sophia */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Our Team</SectionLabel>
            <h2
              className="text-[2.25rem] font-bold text-neutral-900 leading-[1.18] tracking-[-0.025em]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Meet the Principal
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className="bg-white rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 4px 8px rgba(36,94,118,.08), 0 16px 48px rgba(36,94,118,.14), 0 32px 64px rgba(7,25,34,.12)",
                borderTop: "4px solid #245e76",
              }}
            >
              <div className="p-8 sm:p-10">
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  {/* Portrait */}
                  <div className="shrink-0">
                    <div className="w-36 h-48 rounded-2xl overflow-hidden relative">
                      <Image
                        src="/sophia.png"
                        alt="Sophia Wang — Principal, Duwin Accounting & Finance"
                        fill
                        className="object-cover object-top"
                        sizes="144px"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(to bottom, transparent 60%, rgba(14,43,56,.35) 100%)",
                        }}
                        aria-hidden
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3
                      className="text-[1.75rem] font-bold text-neutral-900 mb-1 tracking-[-0.02em]"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      Sophia Wang
                    </h3>
                    <p className="text-accent-400 font-semibold text-[0.875rem] mb-5">
                      Principal — Chartered Accountant
                    </p>
                    <p className="text-neutral-600 text-[0.9375rem] leading-[1.70] mb-6">
                      Sophia founded Duwin with a clear vision: to bring big-firm expertise to Adelaide&apos;s small businesses and individuals. With qualifications spanning chartered accounting, Xero certification and mortgage broking, Sophia offers clients a genuinely comprehensive financial partnership.
                    </p>

                    <p className="text-[0.6875rem] font-bold tracking-[0.16em] uppercase text-neutral-400 mb-3">
                      Credentials
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {credentials.map((c) => (
                        <span
                          key={c}
                          className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-700 text-[0.75rem] font-medium px-3 py-1.5 rounded-full border border-brand-100"
                        >
                          <Award size={10} />
                          {c}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                      <div className="relative h-14 w-14 shrink-0">
                        <Image
                          src="/xero-advisor-badge.png"
                          alt="Xero Advisor Certified Individual"
                          fill
                          className="object-contain"
                          sizes="56px"
                        />
                      </div>
                      <p className="text-[0.8125rem] text-neutral-500 leading-snug">
                        Xero Advisor<br />Certified Individual
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Our Values</SectionLabel>
            <h2
              className="text-[2.25rem] font-bold text-neutral-900 leading-[1.18] tracking-[-0.025em]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <GradientCard key={title} className="p-8 text-center">
                <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <Icon size={20} className="text-white" strokeWidth={1.75} />
                </div>
                <h3
                  className="text-[1.0625rem] font-bold text-neutral-900 mb-3 tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {title}
                </h3>
                <p className="text-neutral-600 text-[0.875rem] leading-[1.65]">{description}</p>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to work with us?"
        subtitle="Book a free consultation with Sophia and find out how Duwin can support your financial goals."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="Call (08) 8121 6066"
        secondaryHref="tel:0881216066"
      />
    </>
  );
}
