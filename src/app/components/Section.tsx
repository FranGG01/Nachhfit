// components/Section.tsx
export default function Section({
  id,
  title,
  children,
  className = "",
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 border-t border-white/10 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-[#eaeaea]">{title}</h2>
        {children}
      </div>
    </section>
  );
}
