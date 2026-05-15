"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const insights = [
  {
    category: "Tax Planning",
    title: "5 Tax Planning Strategies for Adelaide SMEs in 2025",
    excerpt:
      "Proactive tax planning can significantly reduce your annual bill. Discover the strategies Sophia recommends to her business clients every year.",
    date: "12 May 2025",
    readTime: "5 min read",
    href: "/insights/tax-planning-strategies",
  },
  {
    category: "Superannuation",
    title: "Understanding SMSF: Is a Self-Managed Super Fund Right for You?",
    excerpt:
      "An SMSF gives you control over your retirement savings, but it comes with compliance obligations. Here's what you need to know before getting started.",
    date: "28 Apr 2025",
    readTime: "7 min read",
    href: "/insights/smsf-guide",
  },
  {
    category: "Bookkeeping",
    title: "How Xero Bookkeeping Saves Adelaide Business Owners Hours Each Week",
    excerpt:
      "Real-time financial visibility isn't a luxury — it's a competitive advantage. Learn how cloud bookkeeping with Xero transforms day-to-day operations.",
    date: "15 Apr 2025",
    readTime: "4 min read",
    href: "/insights/xero-bookkeeping",
  },
  {
    category: "Finance",
    title: "First Home Buyer's Guide to Getting Loan-Ready in South Australia",
    excerpt:
      "From deposit requirements to government grants, we break down everything Adelaide first home buyers need to understand before applying for a loan.",
    date: "3 Apr 2025",
    readTime: "6 min read",
    href: "/insights/first-home-buyer-guide",
  },
  {
    category: "Business Advisory",
    title: "Sole Trader vs Company: Which Structure Is Right for Your Business?",
    excerpt:
      "The right business structure can save you thousands in tax and protect your personal assets. We explain the key differences and what to consider.",
    date: "20 Mar 2025",
    readTime: "5 min read",
    href: "/insights/business-structure-guide",
  },
  {
    category: "Tax Tips",
    title: "Common Tax Deductions Adelaide Small Businesses Often Miss",
    excerpt:
      "Many small business owners leave money on the table at tax time. Here are the deductions you should be claiming — and how to make sure they hold up.",
    date: "5 Mar 2025",
    readTime: "4 min read",
    href: "/insights/missed-tax-deductions",
  },
];

const total = insights.length;

function getPerView(): number {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

export default function InsightsCarousel() {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      const pv = getPerView();
      setPerView(pv);
      setCurrent((c) => Math.min(c, total - pv));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = total - perView;
  const numDots = maxIndex + 1;

  const goTo = (i: number) => setCurrent(Math.max(0, Math.min(i, maxIndex)));

  return (
    <section className="py-28 px-6" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px inline-block" style={{ background: "#245e76" }} />
              <span
                className="text-[0.7rem] font-bold tracking-[0.18em] uppercase"
                style={{ color: "#245e76" }}
              >
                Insights
              </span>
            </div>
            <h2
              className="font-extrabold leading-[1.12] tracking-[-0.025em]"
              style={{
                fontFamily: "var(--font-manrope)",
                color: "#0b0b0b",
                fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
              }}
            >
              Financial tips &amp; insights
            </h2>
          </div>
          <Link
            href="/insights"
            className="shrink-0 text-[0.875rem] font-semibold inline-flex items-center gap-1.5 group"
            style={{ color: "#245e76" }}
          >
            View all articles
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* ── Carousel track ── */}
        <div className="overflow-hidden -mx-2.5">
          <div
            className="flex"
            style={{
              width: `${(total / perView) * 100}%`,
              transform: `translateX(-${(current / total) * 100}%)`,
              transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {insights.map((item, i) => (
              <div
                key={i}
                style={{ width: `${100 / total}%`, flexShrink: 0, padding: "0 10px" }}
              >
                <div
                  className="bg-white rounded-xl flex flex-col h-full"
                  style={{
                    border: "1px solid #e2e6ec",
                    boxShadow: "0 1px 3px rgba(36,94,118,.04), 0 4px 16px rgba(36,94,118,.07)",
                  }}
                >
                  {/* Gradient top bar */}
                  <div
                    className="h-[3px] rounded-t-xl"
                    style={{ background: "linear-gradient(90deg, #245e76, #0d89bf)" }}
                  />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category pill */}
                    <span
                      className="inline-block self-start text-[0.65rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full mb-4"
                      style={{ background: "#edf4f7", color: "#245e76" }}
                    >
                      {item.category}
                    </span>

                    {/* Title */}
                    <h3
                      className="font-extrabold leading-[1.3] tracking-[-0.015em] mb-3"
                      style={{
                        fontFamily: "var(--font-manrope)",
                        color: "#0b0b0b",
                        fontSize: "1rem",
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      className="text-[0.8125rem] leading-[1.72] flex-1"
                      style={{ color: "#6b7585" }}
                    >
                      {item.excerpt}
                    </p>

                    {/* Footer row */}
                    <div
                      className="flex items-center justify-between mt-5 pt-4"
                      style={{ borderTop: "1px solid #f0f2f5" }}
                    >
                      <div>
                        <span className="text-[0.7rem]" style={{ color: "#9ba5b4" }}>{item.date}</span>
                        <span className="mx-1.5 text-[0.7rem]" style={{ color: "#c8cfd9" }}>·</span>
                        <span className="text-[0.7rem]" style={{ color: "#9ba5b4" }}>{item.readTime}</span>
                      </div>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 text-[0.75rem] font-semibold group/link"
                        style={{ color: "#245e76" }}
                      >
                        Read more
                        <svg
                          width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden
                          className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                        >
                          <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Navigation ── */}
        <div className="flex items-center gap-5 mt-8">

          {/* Prev */}
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            aria-label="Previous"
            className="w-10 h-10 rounded-full flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 transition-colors duration-200"
            style={{
              border: `1px solid ${current === 0 ? "#e2e6ec" : "#245e76"}`,
              color: current === 0 ? "#c8cfd9" : "#245e76",
              cursor: current === 0 ? "not-allowed" : "pointer",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2.5L4.5 7 9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Segmented slider */}
          <div className="flex flex-1 gap-1.5 items-center">
            {Array.from({ length: numDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="rounded-full focus-visible:outline-none focus-visible:ring-2 transition-all duration-300"
                style={{
                  height: "6px",
                  flex: i === current ? 3 : 1,
                  background: i === current ? "#245e76" : "#e2e6ec",
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => goTo(current + 1)}
            disabled={current === maxIndex}
            aria-label="Next"
            className="w-10 h-10 rounded-full flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 transition-colors duration-200"
            style={{
              border: `1px solid ${current === maxIndex ? "#e2e6ec" : "#245e76"}`,
              color: current === maxIndex ? "#c8cfd9" : "#245e76",
              cursor: current === maxIndex ? "not-allowed" : "pointer",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2.5L9.5 7 5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}
