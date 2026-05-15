import { Award, Shield, Star } from "lucide-react";

const stats = [
  { icon: Star, value: "10+", label: "Years Experience" },
  { icon: Award, value: "CA", label: "Qualified Accountants" },
  { icon: Shield, value: "Xero", label: "Certified Advisors" },
];

export default function TrustBar() {
  return (
    <section className="py-14 px-6 bg-brand-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-brand-600">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col sm:flex-row items-center gap-4 sm:px-12 first:pl-0 last:pr-0">
              <div className="w-12 h-12 rounded-xl bg-brand-600/60 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-brand-200" strokeWidth={1.5} />
              </div>
              <div className="text-center sm:text-left">
                <div
                  className="text-[2rem] font-bold text-accent-400 leading-none mb-1"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {value}
                </div>
                <div className="text-[0.875rem] text-brand-200 font-medium">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
