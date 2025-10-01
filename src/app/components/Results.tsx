"use client";
import { useRef, useState } from "react";
import Section from "./Section";
import { RESULTS, type ResultItem } from "./resultsData";

function ResultCard({
  item,
  index,
  onOpen,
}: {
  item: ResultItem;
  index: number;
  onOpen: (i: number) => void;
}) {
  return (
    <div className="snap-start shrink-0 w-[80%] sm:w-[360px] mx-2">
      <button
        onClick={() => onOpen(index)}
        className="group block w-full rounded-2xl overflow-hidden border border-nf-white/10 bg-gradient-to-br from-nf-white/5 to-nf-white/[0.02] hover:from-nf-white/10 hover:to-nf-white/5 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:shadow-2xl hover:shadow-nf-yellow/10"
        aria-label={`Ver resultado de ${item.name}`}
      >
        <div className="aspect-[3/4] w-full relative overflow-hidden">
          <img
            src={item.image}
            alt={`Resultado de ${item.name}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradiente overlay mejorado */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-nf-black via-nf-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Badge de meses con animación */}
          <span className="absolute right-3 top-3 text-xs px-3 py-1.5 rounded-full bg-nf-yellow text-nf-black font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
            {item.months}m
          </span>
          
          {/* Indicador de "Click para ver" */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-nf-yellow text-nf-black px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-xl">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Ver detalle
            </div>
          </div>
        </div>
      </button>

      {/* Caption mejorada */}
      <div className="px-2 pt-4">
        <h4 className="font-extrabold text-nf-white text-lg">{item.name}</h4>
        <p className="text-sm text-nf-white/70 flex items-center gap-2 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-nf-yellow"></span>
          {item.goal} · {item.months} meses
        </p>
        {item.quote && (
          <p className="text-sm italic text-nf-white/60 mt-2 line-clamp-2">
            "{item.quote}"
          </p>
        )}
      </div>
    </div>
  );
}

export default function Results() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const item = openIndex !== null ? RESULTS[openIndex] : null;
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(dir: "prev" | "next") {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("div.snap-start") as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 16 : 360;
    el.scrollBy({ left: dir === "next" ? cardWidth : -cardWidth, behavior: "smooth" });
  }

  return (
    <Section id="resultados" title="Resultados" className="relative bg-nf-black overflow-hidden">
      {/* Patrón de grid sutil */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(246,199,57,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(246,199,57,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Gradientes de fondo mejorados con animación */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(246,199,57,0.3), transparent 70%)',
            animation: 'pulse-glow 8s ease-in-out infinite'
          }}
        />
        <div
          className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(246,199,57,0.25), transparent 70%)',
            animation: 'pulse-glow 10s ease-in-out infinite 2s'
          }}
        />
      </div>

      <div className="relative">
      {/* Controles mejorados */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-nf-white/60 text-sm flex items-center gap-2">
          <span className="hidden sm:inline">👆</span>
          Transformaciones reales. Haz clic en una tarjeta para verla en detalle.
        </p>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scrollByCard("prev")}
            className="group px-4 py-2 rounded-lg bg-nf-white/10 hover:bg-nf-white/15 cursor-pointer transition-all duration-300 hover:scale-105"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5 text-nf-white transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollByCard("next")}
            className="group px-4 py-2 rounded-lg bg-nf-yellow text-nf-black font-bold hover:bg-nf-yellow/90 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-nf-yellow/30"
            aria-label="Siguiente"
          >
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carrusel */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2 scroll-smooth no-scrollbar"
        style={{ scrollPaddingLeft: "0.5rem" }}
      >
        {RESULTS.map((r, i) => (
          <ResultCard key={i} item={r} index={i} onOpen={setOpenIndex} />
        ))}
      </div>
      </div>

      {/* Modal mejorado */}
      {item && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="max-w-4xl w-full rounded-3xl overflow-hidden border border-nf-white/20 bg-gradient-to-br from-zinc-900 to-nf-black shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="p-6 border-b border-nf-white/10 flex items-center justify-between backdrop-blur-sm bg-nf-white/5">
              <div>
                <h3 className="font-extrabold text-nf-white text-2xl mb-1">{item.name}</h3>
                <p className="text-sm text-nf-white/70 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-nf-yellow"></span>
                  Antes y después · {item.goal} · {item.months} meses
                </p>
              </div>
              <button
                onClick={() => setOpenIndex(null)}
                className="group px-4 py-2 rounded-lg bg-nf-white/10 hover:bg-nf-white/15 cursor-pointer transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-5 h-5 text-nf-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="hidden sm:inline font-bold text-nf-white">Cerrar</span>
              </button>
            </div>

            {/* Imagen */}
            <div className="relative bg-black">
              <img
                src={item.image}
                alt={`Resultado de ${item.name}`}
                className="w-full object-contain max-h-[70vh]"
              />
              <span className="absolute right-4 top-4 px-4 py-2 rounded-full bg-nf-yellow text-nf-black font-bold shadow-xl">
                {item.months} meses
              </span>
            </div>

            {/* Quote */}
            {item.quote && (
              <div className="p-6 border-t border-nf-white/10 bg-gradient-to-br from-nf-yellow/5 to-transparent">
                <div className="flex gap-3">
                  <svg className="w-8 h-8 text-nf-yellow/50 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="italic text-nf-white/90 text-lg leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </Section>
  );
}