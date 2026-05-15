import { type LucideIcon } from "lucide-react";
import Link from "next/link";
import GradientCard from "./GradientCard";
import CheckItem from "./CheckItem";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  href: string;
}

export default function ServiceCard({ icon: Icon, title, description, items, href }: ServiceCardProps) {
  return (
    <GradientCard className="flex flex-col p-8">
      <div className="w-12 h-12 rounded-xl bg-brand-500 flex items-center justify-center mb-5 flex-shrink-0">
        <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
      </div>
      <h3 className="text-[1.375rem] font-bold text-neutral-900 mb-3 tracking-[-0.015em] leading-[1.28]">{title}</h3>
      <p className="text-[0.9375rem] text-neutral-600 leading-[1.65] mb-5">{description}</p>
      <ul className="space-y-2 mb-6 flex-1">
        {items.map((item) => (
          <CheckItem key={item}>{item}</CheckItem>
        ))}
      </ul>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-brand-500 font-semibold text-[0.9375rem] hover:text-brand-400 transition-[opacity] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 rounded"
      >
        Learn more
        <span className="transition-[transform] duration-150 group-hover:translate-x-0.5">→</span>
      </Link>
    </GradientCard>
  );
}
