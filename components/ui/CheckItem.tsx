import { Check } from "lucide-react";

interface CheckItemProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function CheckItem({ children, light = false }: CheckItemProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-500/15 flex items-center justify-center">
        <Check className="w-3 h-3 text-brand-500" strokeWidth={3} />
      </span>
      <span className={`text-[0.9375rem] leading-[1.65] ${light ? "text-brand-100" : "text-neutral-700"}`}>
        {children}
      </span>
    </li>
  );
}
