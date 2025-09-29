"use client";

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-nf-black overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <div className="space-y-8">
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nf-yellow/10 border border-nf-yellow/20 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-nf-yellow animate-pulse" />
              <span className="text-nf-yellow text-sm font-medium">Entrenador Personal Certificado</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] text-nf-white">
                No te doy{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-nf-yellow">rutinas</span>
                  <span 
                    className="absolute bottom-2 left-0 w-full h-3 bg-nf-yellow/20 -rotate-1"
                    style={{ zIndex: 0 }}
                  />
                </span>
                ,<br />
                te enseño a{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-nf-yellow">entrenar</span>
                  <span 
                    className="absolute bottom-2 left-0 w-full h-3 bg-nf-yellow/20 rotate-1"
                    style={{ zIndex: 0 }}
                  />
                </span>
                .
              </h1>

              <p className="text-lg sm:text-xl text-nf-white/80 leading-relaxed max-w-xl">
                Entrenamiento inteligente basado en ciencia. CCAFYD (INEF). 
                Fuerza, técnica y salud para resultados <strong className="text-nf-yellow font-semibold">sostenibles</strong>.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="group relative px-8 py-4 rounded-lg font-bold bg-nf-yellow text-nf-black overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-nf-yellow/30"
              >
                <span className="relative z-10">Empieza ahora</span>
                <div className="absolute inset-0 bg-gradient-to-r from-nf-yellow to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a
                href="#resultados"
                className="px-8 py-4 rounded-lg font-semibold border-2 border-nf-white/20 text-nf-white hover:bg-nf-white/5 hover:border-nf-yellow/40 transition-all"
              >
                Ver resultados
              </a>
            </div>

            {/* Info rápida */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-nf-white/70">
                <span className="text-2xl">🏋️</span>
                <span className="text-sm font-medium">Sesiones 1:1 · Madrid</span>
              </div>
              <div className="flex items-center gap-2 text-nf-white/70">
                <span className="text-2xl">🌍</span>
                <span className="text-sm font-medium">Online Worldwide</span>
              </div>
            </div>

            {/* Stats rápidas */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-nf-white/10">
              <div>
                <div className="text-3xl font-bold text-nf-yellow">5+</div>
                <div className="text-sm text-nf-white/60">Años exp.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-nf-yellow">100+</div>
                <div className="text-sm text-nf-white/60">Clientes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-nf-yellow">98%</div>
                <div className="text-sm text-nf-white/60">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Imagen con efectos */}
          <div className="relative group">
            {/* Glow effect detrás */}
            <div className="absolute -inset-4 bg-gradient-to-r from-nf-yellow/20 to-nf-yellow/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Container de imagen */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-nf-white/10 shadow-2xl">
              <Image
                src=""
                alt="NachhFit entrenando"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-nf-black via-nf-black/20 to-transparent opacity-60" />
              
              {/* Badge flotante */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-nf-black/80 backdrop-blur-md border border-nf-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-nf-yellow font-bold text-lg">CCAFYD (INEF)</div>
                    <div className="text-nf-white/70 text-sm">Ciencias de la Actividad Física</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-nf-yellow/20 flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-nf-yellow/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-nf-yellow/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}