interface StepBadgeProps {
  number: number;
  title: string;
  description: string;
}

export default function StepBadge({ number, title, description }: StepBadgeProps) {
  return (
    <div className="flex flex-col items-center text-center relative">
      <div className="w-14 h-14 rounded-full bg-brand-700 flex items-center justify-center mb-4 relative z-10">
        <span className="text-brand-200 font-bold text-lg font-heading">
          {String(number).padStart(2, "0")}
        </span>
      </div>
      <h4 className="text-[1.0625rem] font-bold text-neutral-900 mb-2 tracking-[-0.01em]">{title}</h4>
      <p className="text-[0.9375rem] text-neutral-600 leading-[1.65]">{description}</p>
    </div>
  );
}
