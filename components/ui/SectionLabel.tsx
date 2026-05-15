interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-[0.6875rem] font-bold tracking-[0.16em] uppercase mb-3 ${
        light ? "text-brand-200" : "text-brand-500"
      }`}
    >
      {children}
    </span>
  );
}
