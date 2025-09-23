// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative bg-nf-black overflow-hidden">
      {/* Brillo fitness de fondo */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(600px circle at 20% 10%, rgba(246,199,57,0.15), transparent 40%),
            radial-gradient(600px circle at 80% 20%, rgba(246,199,57,0.10), transparent 40%)
          `,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-nf-white">
            No te doy <span className="text-nf-yellow">rutinas</span>,<br />
            te enseño a <span className="text-nf-yellow">entrenar</span>.
          </h1>

          <p className="mt-5 text-nf-white/90">
            Entrenamiento inteligente · CCAFYD (INEF). Fuerza, técnica y salud
            para resultados sostenibles.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="#contacto"
              className="px-6 py-3 rounded-md font-bold bg-nf-yellow text-nf-black hover:brightness-95 transition"
            >
              Empieza ahora
            </a>
            <a
              href="#resultados"
              className="px-6 py-3 rounded-md border border-nf-white/20 hover:bg-nf-white/5 transition"
            >
              Ver resultados
            </a>
          </div>

          <div className="mt-6 text-nf-white/60 text-sm flex items-center gap-4">
            <span>🏋️ Sesiones 1:1 · Madrid</span>
            <span>🌍 Online Worldwide</span>
          </div>
        </div>

        {/* Imagen */}
        <div className="aspect-[4/5] rounded-xl overflow-hidden border border-nf-white/10 relative">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
            alt="NachhFit entrenando"
            className="w-full h-full object-cover"
          />
          {/* Brillo extra alrededor de la imagen */}
          <div className="absolute inset-0 bg-gradient-to-t from-nf-black/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
