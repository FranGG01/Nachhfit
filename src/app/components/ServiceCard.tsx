type Props = {
  label: string;        
  title: string;        
  desc: string;         
  ctaHref?: string;     
  ctaText?: string;     
  icon?: React.ReactNode; 
};

export default function ServiceCard({
  label,
  title,
  desc,
  ctaHref = "#contacto",
  ctaText = "Quiero info",
  icon,
}: Props) {
  return (
    <article className="p-6 rounded-xl border border-nf-white/10 bg-nf-white/5 hover:bg-nf-white/[0.08] transition">
      <div className="text-sm text-nf-white/70 mb-2">{label}</div>
      <div className="flex items-start gap-3">
        {icon && <div className="text-2xl">{icon}</div>}
        <div>
          <h3 className="text-lg font-extrabold text-nf-white">{title}</h3>
          <p className="mt-2 text-nf-white/85">{desc}</p>
        </div>
      </div>
      <a
        href={ctaHref}
        className="inline-block mt-4 px-4 py-2 rounded-md font-bold bg-nf-yellow text-nf-black hover:brightness-95 transition"
      >
        {ctaText}
      </a>
    </article>
  );
}
