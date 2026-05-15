"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Accounting & Tax", href: "/services/accounting-tax" },
      { label: "Business Advisory", href: "/services/business-advisory" },
      { label: "Financial Services", href: "/services/financial-services" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "#245e76",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
        boxShadow: scrolled ? "0 2px 16px rgba(7,25,34,0.30)" : "none",
        transition: "box-shadow 300ms ease",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
          >
            <Image
              src="/logo.png"
              alt="Duwin Accounting & Finance"
              width={160}
              height={56}
              className="h-12 w-auto object-contain brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <button
                    className="flex items-center gap-1 text-[0.9rem] font-medium transition-[color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded py-1"
                    style={{
                      color: pathname.startsWith("/services")
                        ? "rgba(255,255,255,1)"
                        : "rgba(255,255,255,0.75)",
                    }}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown size={14} className="transition-[transform] duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-[opacity,transform] duration-200 -translate-y-1 group-hover:translate-y-0">
                    <div
                      className="bg-white rounded-lg border border-neutral-200 py-2 min-w-[220px]"
                      style={{ boxShadow: "0 4px 8px rgba(7,25,34,0.12), 0 16px 40px rgba(7,25,34,0.16)" }}
                    >
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-[0.875rem] text-neutral-500 hover:bg-neutral-50 hover:text-brand-500 font-medium transition-[color] duration-150"
                      >
                        All Services
                      </Link>
                      <div className="border-t border-neutral-100 my-1" />
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-[0.875rem] transition-[color] duration-150 hover:bg-neutral-50 hover:text-brand-500 text-neutral-600"
                          style={pathname === child.href ? { color: "#245e76", fontWeight: 600 } : {}}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.9rem] font-medium transition-[color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded py-1"
                  style={{
                    color: pathname === link.href
                      ? "rgba(255,255,255,1)"
                      : "rgba(255,255,255,0.75)",
                    fontWeight: pathname === link.href ? 600 : undefined,
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="tel:0881216066"
              className="hidden xl:inline-flex items-center gap-2 text-[0.875rem] font-medium transition-[color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded py-1"
              style={{ color: "rgba(255,255,255,0.80)" }}
            >
              <Phone size={14} />
              08 8121 6066
            </a>
            <div className="hidden xl:block w-px h-4 opacity-20" style={{ background: "#ffffff" }} />
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded font-semibold text-[0.875rem] transition-[opacity,transform] duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-500"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.30)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.10)",
              }}
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded text-white/80 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-[opacity] duration-150"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden py-4 space-y-1"
            style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
          >
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    className="flex items-center justify-between w-full px-3 py-2.5 rounded font-medium transition-[color] duration-150 hover:bg-white/10"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-[transform] duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 space-y-1 mt-1">
                      <Link href={link.href} className="block px-3 py-2 rounded text-[0.875rem] hover:bg-white/10 transition-[color] duration-150" style={{ color: "rgba(255,255,255,0.70)" }}>
                        All Services
                      </Link>
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block px-3 py-2 rounded text-[0.875rem] hover:bg-white/10 transition-[color] duration-150" style={{ color: "rgba(255,255,255,0.70)" }}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2.5 rounded font-medium hover:bg-white/10 transition-[color] duration-150"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-2">
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3 rounded font-semibold text-[0.875rem] hover:opacity-90 transition-[opacity] duration-150"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
