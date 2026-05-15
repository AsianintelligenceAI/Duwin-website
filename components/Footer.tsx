import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const services = [
  { label: "Accounting & Tax", href: "/services/accounting-tax" },
  { label: "Business Advisory", href: "/services/business-advisory" },
  { label: "Financial Services", href: "/services/financial-services" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0b0b0b" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="Duwin Accounting & Finance"
                width={140}
                height={56}
                className="h-12 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-[0.875rem] leading-[1.70] mb-6" style={{ color: "#8e8e8e" }}>
              Accounting you can count on. Expert financial guidance for SMEs and individuals
              across Adelaide and South Australia.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/Duwin-Accounting-Finance/100063828360841/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Duwin on Facebook"
                className="w-9 h-9 rounded flex items-center justify-center transition-[opacity] duration-150 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                style={{ background: "#1e2a2e" }}
              >
                <svg viewBox="0 0 24 24" width={15} height={15} fill="#8e8e8e">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://au.linkedin.com/company/duwin-accounting-finance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Duwin on LinkedIn"
                className="w-9 h-9 rounded flex items-center justify-center transition-[opacity] duration-150 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                style={{ background: "#1e2a2e" }}
              >
                <svg viewBox="0 0 24 24" width={15} height={15} fill="#8e8e8e">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-[0.9375rem] mb-5" style={{ fontFamily: "var(--font-manrope)" }}>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[0.875rem] transition-[color] duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 rounded"
                    style={{ color: "#8e8e8e" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-[0.9375rem] mb-5" style={{ fontFamily: "var(--font-manrope)" }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.875rem] transition-[color] duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 rounded"
                    style={{ color: "#8e8e8e" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-[0.9375rem] mb-5" style={{ fontFamily: "var(--font-manrope)" }}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-[0.875rem]" style={{ color: "#8e8e8e" }}>
                <MapPin size={15} className="shrink-0 mt-0.5" style={{ color: "#245e76" }} />
                <span>310/147 Pirie St, Adelaide SA 5000<br />(Aurora on Pirie)</span>
              </li>
              <li>
                <a
                  href="tel:0881216066"
                  className="flex gap-3 text-[0.875rem] transition-[color] duration-150 hover:text-white"
                  style={{ color: "#8e8e8e" }}
                >
                  <Phone size={15} className="shrink-0 mt-0.5" style={{ color: "#245e76" }} />
                  <span>(08) 8121 6066</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@duwin.com.au"
                  className="flex gap-3 text-[0.875rem] transition-[color] duration-150 hover:text-white"
                  style={{ color: "#8e8e8e" }}
                >
                  <Mail size={15} className="shrink-0 mt-0.5" style={{ color: "#245e76" }} />
                  <span>info@duwin.com.au</span>
                </a>
              </li>
              <li className="flex gap-3 text-[0.875rem]" style={{ color: "#8e8e8e" }}>
                <Clock size={15} className="shrink-0 mt-0.5" style={{ color: "#245e76" }} />
                <span>Mon – Fri: 9:00am – 5:30pm<br />Sat – Sun: By appointment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ borderTop: "1px solid #1e2a2e" }}
        >
          <p className="text-[0.8125rem]" style={{ color: "#8e8e8e" }}>
            © {new Date().getFullYear()} Duwin Pty Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-5 opacity-50">
            <Image src="/caanz_logo_horizontal.webp" alt="Chartered Accountants ANZ" width={100} height={28} className="h-6 w-auto object-contain brightness-0 invert" />
            <Image src="/tpa-logo.png" alt="Tax Practitioners Board" width={60} height={28} className="h-6 w-auto object-contain brightness-0 invert" />
            <Image src="/Xero-logo-hires-RGB.png" alt="Xero" width={60} height={24} className="h-5 w-auto object-contain brightness-0 invert" />
          </div>
        </div>
      </div>
    </footer>
  );
}
