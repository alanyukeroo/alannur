interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  noRule?: boolean;
}

export default function SectionHeading({
  children,
  className = "",
  noRule = false,
}: SectionHeadingProps) {
  return (
    <h2
      className={`${noRule ? "" : "section-heading"} ${noRule ? "font-serif font-black text-2xl uppercase tracking-wide" : ""} ${className}`}
    >
      {children}
    </h2>
  );
}
