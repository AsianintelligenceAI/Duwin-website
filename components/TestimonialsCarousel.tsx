"use client";
import { useRef, useEffect, useCallback } from "react";

const reviews = [
  {
    name: "Jenny L.",
    location: "Adelaide SA",
    time: "2 weeks ago",
    rating: 5,
    text: "Working with Sophia has been a game changer for our small business. She handles everything from BAS to tax planning and is always proactive about deadlines. Cannot recommend Duwin highly enough.",
    initial: "J",
    color: "#e67e22",
  },
  {
    name: "Michael C.",
    location: "North Adelaide SA",
    time: "1 month ago",
    rating: 5,
    text: "Sophia is incredibly knowledgeable and made the whole tax process completely stress-free. She found deductions I had no idea about. Best accountant I've ever had — wish I found her sooner.",
    initial: "M",
    color: "#2980b9",
  },
  {
    name: "Wei Z.",
    location: "Burnside SA",
    time: "3 weeks ago",
    rating: 5,
    text: "As a small business owner from China, finding Sophia was a blessing. She speaks fluent Mandarin which made everything so much clearer for our family business. Truly a one-of-a-kind service in Adelaide.",
    initial: "W",
    color: "#27ae60",
  },
  {
    name: "David K.",
    location: "Unley SA",
    time: "2 months ago",
    rating: 5,
    text: "Duwin sorted out our SMSF compliance after my previous accountant retired. Quick, professional, no fuss — exactly what you want. Sophia is thorough and always available when you need her.",
    initial: "D",
    color: "#8e44ad",
  },
  {
    name: "Sarah M.",
    location: "Norwood SA",
    time: "1 month ago",
    rating: 5,
    text: "Switched from a big city firm and the difference is night and day. Sophia actually knows our business, picks up the phone and genuinely cares about outcomes. 10/10 would recommend to anyone.",
    initial: "S",
    color: "#c0392b",
  },
  {
    name: "James T.",
    location: "Prospect SA",
    time: "3 months ago",
    rating: 4,
    text: "Sorted our company restructure and mortgage all through Duwin. Having accounting and finance broking under one roof saved us so much time. Sophia explains everything clearly with zero jargon.",
    initial: "J",
    color: "#16a085",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path
            d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 8.885l-3.09 1.624.59-3.44L2 4.632l3.455-.502L7 1z"
            fill={i <= rating ? "#f59e0b" : "rgba(255,255,255,0.18)"}
          />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

const CARD_W = 380;
const GAP = 20;
const PAD = 60;

export default function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const drag = useRef({
    active: false,
    startX: 0,
    startScroll: 0,
    velX: 0,
    lastX: 0,
    lastT: 0,
    didDrag: false,
    raf: 0,
  });

  const clamp = useCallback((val: number, min: number, max: number) => Math.max(min, Math.min(max, val)), []);

  const getMax = useCallback(() => {
    const vw = containerRef.current?.offsetWidth ?? window.innerWidth;
    const trackW = reviews.length * (CARD_W + GAP) - GAP + PAD * 2;
    return Math.min(0, vw - trackW);
  }, []);

  const move = useCallback((x: number) => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translateX(${x}px)`;
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    cancelAnimationFrame(drag.current.raf);
    const el = e.currentTarget as HTMLElement;
    el.setPointerCapture(e.pointerId);
    const cur = new DOMMatrix(getComputedStyle(trackRef.current!).transform).m41;
    drag.current = { active: true, startX: e.clientX, startScroll: cur, velX: 0, lastX: e.clientX, lastT: Date.now(), didDrag: false, raf: 0 };
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.didDrag = true;
    const now = Date.now();
    drag.current.velX = (e.clientX - drag.current.lastX) / Math.max(1, now - drag.current.lastT);
    drag.current.lastX = e.clientX;
    drag.current.lastT = now;
    move(clamp(drag.current.startScroll + dx, getMax(), PAD));
  }, [move, clamp, getMax]);

  const onPointerUp = useCallback(() => {
    if (!drag.current.active) return;
    drag.current.active = false;
    let vel = drag.current.velX * 14;
    const cur = new DOMMatrix(getComputedStyle(trackRef.current!).transform).m41;
    let pos = cur;
    const tick = () => {
      vel *= 0.93;
      pos = clamp(pos + vel, getMax(), PAD);
      move(pos);
      if (Math.abs(vel) > 0.5) drag.current.raf = requestAnimationFrame(tick);
    };
    drag.current.raf = requestAnimationFrame(tick);
  }, [move, clamp, getMax]);

  useEffect(() => {
    if (trackRef.current) move(PAD);
    return () => cancelAnimationFrame(drag.current.raf);
  }, [move]);

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: "#0e1628" }}
    >
      {/* Subtle grid texture */}
      <svg aria-hidden className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]">
        <defs>
          <pattern id="rev-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rev-grid)" />
      </svg>

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(12,60,96,0.22) 0%, transparent 70%)", filter: "blur(60px)" }}
        aria-hidden
      />

      {/* Header */}
      <div className="text-center mb-14 px-6">
        <h2
          className="font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6"
          style={{ fontFamily: "var(--font-manrope)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          What our clients say
        </h2>

        {/* Google badge */}
        <div
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          <GoogleIcon />
          <span className="font-bold text-white text-[0.9375rem]">4.9</span>
          <span style={{ color: "rgba(255,255,255,0.30)" }}>·</span>
          <div className="flex items-center gap-0.5">
            {[1,2,3,4].map(i => (
              <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="#f59e0b" aria-hidden>
                <path d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 8.885l-3.09 1.624.59-3.44L2 4.632l3.455-.502L7 1z"/>
              </svg>
            ))}
            <svg width="13" height="13" viewBox="0 0 14 14" aria-hidden>
              <defs>
                <linearGradient id="half">
                  <stop offset="90%" stopColor="#f59e0b"/>
                  <stop offset="90%" stopColor="rgba(255,255,255,0.18)"/>
                </linearGradient>
              </defs>
              <path d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 8.885l-3.09 1.624.59-3.44L2 4.632l3.455-.502L7 1z" fill="url(#half)"/>
            </svg>
          </div>
          <span style={{ color: "rgba(255,255,255,0.30)" }}>·</span>
          <span className="text-[0.8125rem] font-medium" style={{ color: "rgba(255,255,255,0.60)" }}>10+ Google reviews</span>
        </div>
      </div>

      {/* Draggable carousel */}
      <div
        ref={containerRef}
        className="relative select-none cursor-grab active:cursor-grabbing"
        style={{ height: 240, touchAction: "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          ref={trackRef}
          className="absolute top-0 flex"
          style={{ gap: GAP, willChange: "transform" }}
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              className="shrink-0 flex flex-col justify-between rounded-2xl p-6"
              style={{
                width: CARD_W,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(4px)",
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-[0.9375rem] shrink-0"
                    style={{ background: r.color }}
                  >
                    {r.initial}
                  </div>
                  <div>
                    <p className="font-bold text-white text-[0.9375rem] leading-tight">{r.name}</p>
                    <p className="text-[0.75rem] mt-0.5" style={{ color: "rgba(255,255,255,0.40)" }}>
                      {r.location} · {r.time}
                    </p>
                  </div>
                </div>
                <GoogleIcon />
              </div>

              <StarRating rating={r.rating} />

              {/* Review text */}
              <p
                className="text-[0.875rem] leading-[1.65] mt-4"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Read all link */}
      <div className="text-center mt-12 px-6">
        <a
          href="https://www.google.com/search?q=Duwin+Accounting+Finance+Adelaide+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[0.9rem] font-semibold pb-px"
          style={{
            color: "rgba(255,255,255,0.65)",
            borderBottom: "1px solid rgba(255,255,255,0.20)",
            transition: "color 200ms ease, border-color 200ms ease",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(255,255,255,0.60)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "rgba(255,255,255,0.20)"; }}
        >
          Read all reviews on Google
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
