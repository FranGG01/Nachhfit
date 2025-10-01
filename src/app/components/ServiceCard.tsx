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
    <article className="group relative p-6 rounded-2xl border border-nf-white/10 bg-gradient-to-br from-nf-white/5 to-nf-white/[0.02] hover:from-nf-white/10 hover:to-nf-white/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-nf-yellow/10">
      {/* Brillo sutil en hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-nf-yellow/0 via-nf-yellow/0 to-nf-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Contenido */}
      <div className="relative z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-nf-white/10 text-xs font-semibold text-nf-white/90 mb-4 tracking-wide uppercase">
          {label}
        </div>
        
        <div className="flex items-start gap-4 mb-4">
          {icon && (
            <div className="flex-shrink-0 text-3xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              {icon}
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-xl font-extrabold text-nf-white mb-2 group-hover:text-nf-yellow transition-colors duration-300">
              {title}
            </h3>
            <p className="text-nf-white/80 leading-relaxed">
              {desc}
            </p>
          </div>
        </div>
        
        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-lg font-bold bg-nf-yellow text-nf-black hover:bg-nf-yellow/90 transition-all duration-300 hover:gap-3 hover:shadow-lg hover:shadow-nf-yellow/30"
        >
          <span>{ctaText}</span>
          <svg 
            className="w-4 h-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
      
      {/* Borde brillante en hover */}
      <div className="absolute inset-0 rounded-2xl border border-nf-yellow/0 group-hover:border-nf-yellow/20 transition-colors duration-300 pointer-events-none" />
    </article>
  );
}

