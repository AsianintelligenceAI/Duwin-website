"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";

/* ─── data ───────────────────────────────────────────────── */
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
      "An SMSF gives you control over your retirement savings, but comes with compliance obligations. Here's what you need to know before getting started.",
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
      "From deposit requirements to government grants, we break down everything Adelaide first home buyers need before applying for a home loan.",
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

/* ─── constants ──────────────────────────────────────────── */
const CARD_W = 420;
const CARD_H = 370;
const GAP    = 24;
const PAD    = 60;  // viewport-edge padding at start/end
const N      = insights.length;
const TRACK_W = N * CARD_W + (N - 1) * GAP; // 2640px

/* ─── component ──────────────────────────────────────────── */
export default function InsightsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrubRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const fillRef  = useRef<HTMLDivElement>(null);

  /* All drag state in refs — zero re-renders during drag */
  const xPos      = useRef(PAD);
  const cardDrag  = useRef(false);
  const scrubDrag = useRef(false);
  const didDrag   = useRef(false);
  const dragStart = useRef(0);
  const xAtDrag   = useRef(0);
  const vel       = useRef(0);
  const prevCX    = useRef(0);
  const raf       = useRef<number | null>(null);

  /* ── bounds ── */
  const bounds = useCallback(() => {
    const vw = window.innerWidth;
    return {
      xMax: PAD,
      xMin: Math.min(PAD, vw - PAD - TRACK_W),
    };
  }, []);

  /* ── core position setter — direct DOM, no setState ── */
  const move = useCallback((raw: number) => {
    const { xMin, xMax } = bounds();
    const x = Math.max(xMin, Math.min(xMax, raw));
    xPos.current = x;

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${x}px)`;
    }

    /* sync scrubber */
    const { xMin: mn, xMax: mx } = bounds();
    const pct = mx === mn ? 0 : (mx - x) / (mx - mn);
    if (scrubRef.current && thumbRef.current) {
      const sw   = scrubRef.current.offsetWidth;
      const tw   = thumbRef.current.offsetWidth;
      const left = pct * (sw - tw);
      thumbRef.current.style.left = `${left}px`;
      if (fillRef.current) fillRef.current.style.width = `${left + tw}px`;
    }
  }, [bounds]);

  /* ── mount + resize ── */
  useEffect(() => {
    move(PAD);
    const onResize = () => move(xPos.current);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [move]);

  /* ════════════════════════════════════════
     CARD DRAG
  ════════════════════════════════════════ */
  const onCardDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (raf.current) cancelAnimationFrame(raf.current);
    cardDrag.current  = true;
    didDrag.current   = false;
    dragStart.current = e.clientX;
    xAtDrag.current   = xPos.current;
    vel.current       = 0;
    prevCX.current    = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  }, []);

  const onCardMove = useCallback((e: React.PointerEvent) => {
    if (!cardDrag.current) return;
    vel.current = e.clientX - prevCX.current;
    prevCX.current = e.clientX;
    const dx = e.clientX - dragStart.current;
    if (Math.abs(dx) > 5) didDrag.current = true;
    move(xAtDrag.current + dx);
  }, [move]);

  const onCardUp = useCallback(() => {
    if (!cardDrag.current) return;
    cardDrag.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
    /* momentum */
    let v = vel.current * 6;
    const tick = () => {
      if (Math.abs(v) < 0.3) return;
      v *= 0.92;
      move(xPos.current + v);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  }, [move]);

  /* prevent navigation when drag occurred */
  const onClickCapture = useCallback((e: React.MouseEvent) => {
    if (didDrag.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  /* ════════════════════════════════════════
     SCRUBBER
  ════════════════════════════════════════ */
  const scrubPct = useCallback((clientX: number) => {
    if (!scrubRef.current || !thumbRef.current) return 0;
    const r  = scrubRef.current.getBoundingClientRect();
    const tw = thumbRef.current.offsetWidth;
    return Math.max(0, Math.min(1, (clientX - r.left - tw / 2) / (r.width - tw)));
  }, []);

  const moveFromPct = useCallback((pct: number) => {
    const { xMin, xMax } = bounds();
    move(xMax - pct * (xMax - xMin));
  }, [bounds, move]);

  const onScrubDown = useCallback((e: React.PointerEvent) => {
    e.stopPropagation();
    if (raf.current) cancelAnimationFrame(raf.current);
    scrubDrag.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    if (thumbRef.current) thumbRef.current.style.cursor = "grabbing";
    moveFromPct(scrubPct(e.clientX));
  }, [moveFromPct, scrubPct]);

  const onScrubMove = useCallback((e: React.PointerEvent) => {
    if (!scrubDrag.current) return;
    moveFromPct(scrubPct(e.clientX));
  }, [moveFromPct, scrubPct]);

  const onScrubUp = useCallback(() => {
    scrubDrag.current = false;
    if (thumbRef.current) thumbRef.current.style.cursor = "grab";
  }, []);

  const onTrackClick = useCallback((e: React.MouseEvent) => {
    moveFromPct(scrubPct(e.clientX));
  }, [moveFromPct, scrubPct]);

  /* ════════════════════════════════════════
     RENDER
  ════════════════════════════════════════ */
  return (
    <section className="py-28" style={{ background: "#ffffff" }}>

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
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
      </div>

      {/* ── Card track — position:absolute so it doesn't extend layout width ── */}
      <div className="relative" style={{ height: CARD_H }}>
        <div
          ref={trackRef}
          className="absolute top-0 left-0 flex"
          style={{
            gap: GAP,
            height: "100%",
            willChange: "transform",
            cursor: "grab",
            userSelect: "none",
          }}
          onPointerDown={onCardDown}
          onPointerMove={onCardMove}
          onPointerUp={onCardUp}
          onPointerCancel={onCardUp}
          onClickCapture={onClickCapture}
        >
          {insights.map((item, i) => (
            <div
              key={i}
              className="rounded-xl flex flex-col overflow-hidden shrink-0"
              style={{
                width: CARD_W,
                height: "100%",
                background: "#ffffff",
                border: "1px solid #e2e6ec",
                boxShadow: "0 1px 3px rgba(36,94,118,.04), 0 6px 24px rgba(36,94,118,.09)",
              }}
            >
              {/* Top gradient bar */}
              <div
                className="shrink-0"
                style={{
                  height: 3,
                  background: "linear-gradient(90deg, #245e76, #0d89bf)",
                }}
              />

              <div className="flex flex-col flex-1 p-6 overflow-hidden">
                {/* Category pill */}
                <span
                  className="self-start text-[0.65rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full mb-4 shrink-0"
                  style={{ background: "#edf4f7", color: "#245e76" }}
                >
                  {item.category}
                </span>

                {/* Title */}
                <h3
                  className="font-extrabold leading-[1.3] tracking-[-0.015em] mb-3 shrink-0"
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
                  className="text-[0.8125rem] leading-[1.72] flex-1 overflow-hidden"
                  style={{ color: "#6b7585" }}
                >
                  {item.excerpt}
                </p>

                {/* Footer */}
                <div
                  className="flex items-center justify-between mt-4 pt-4 shrink-0"
                  style={{ borderTop: "1px solid #f0f2f5" }}
                >
                  <div>
                    <span className="text-[0.7rem]" style={{ color: "#9ba5b4" }}>{item.date}</span>
                    <span className="mx-1.5 text-[0.7rem]" style={{ color: "#c8cfd9" }}>·</span>
                    <span className="text-[0.7rem]" style={{ color: "#9ba5b4" }}>{item.readTime}</span>
                  </div>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-[0.75rem] font-semibold"
                    style={{ color: "#245e76" }}
                  >
                    Read more
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scrubber ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-10">
        {/* Track */}
        <div
          ref={scrubRef}
          className="relative rounded-full cursor-pointer"
          style={{ height: 6, background: "#e8ecf1" }}
          onClick={onTrackClick}
        >
          {/* Fill */}
          <div
            ref={fillRef}
            className="absolute inset-y-0 left-0 rounded-full pointer-events-none"
            style={{ background: "linear-gradient(90deg, #245e76, #0d89bf)", width: 0 }}
          />
          {/* Thumb — draggable pill */}
          <div
            ref={thumbRef}
            className="absolute top-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: 52,
              height: 22,
              background: "#245e76",
              boxShadow: "0 2px 8px rgba(36,94,118,.45), 0 0 0 3px rgba(36,94,118,.12)",
              cursor: "grab",
              left: 0,
            }}
            onPointerDown={onScrubDown}
            onPointerMove={onScrubMove}
            onPointerUp={onScrubUp}
            onPointerCancel={onScrubUp}
          />
        </div>

        {/* Labels */}
        <div className="flex items-center justify-between mt-3.5">
          <span
            className="text-[0.65rem] font-semibold tracking-[0.10em] uppercase flex items-center gap-1.5"
            style={{ color: "#b0b8c4" }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
              <path d="M6 1.5L2.5 5 6 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Drag to explore
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
              <path d="M4 1.5L7.5 5 4 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="text-[0.65rem] font-medium" style={{ color: "#b0b8c4" }}>
            {N} articles
          </span>
        </div>
      </div>

    </section>
  );
}
