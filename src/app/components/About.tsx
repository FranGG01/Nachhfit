// components/About.tsx
import Section from "./Section";

export default function About() {
  return (
    <Section
      id="sobre"
      title="¿Quién soy?"
      className="bg-gradient-to-b from-nf-black to-zinc-900"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div className="order-2 md:order-1">
          <p className="text-nf-white/90 leading-relaxed">
            Soy NachhFit, entrenador personal especializado en{" "}
            <strong>fuerza</strong> y <strong>educación del movimiento</strong>.
            Mi objetivo es que aprendas a entrenar con criterio, mejores tu
            técnica y consigas resultados sostenibles.
          </p>
          <ul className="mt-5 space-y-2 text-nf-white/90">
            <li>🎓 CCAFYD (INEF)</li>
            <li>🧠 Método: progresión, técnica y adherencia</li>
            <li>📍 Madrid · Online Worldwide</li>
          </ul>
        </div>

        {/* Imagen */}
        <div className="order-1 md:order-2 aspect-video rounded-xl overflow-hidden border border-nf-white/10 relative">
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop"
            alt="Sobre NachhFit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nf-black/40 to-transparent" />
        </div>
      </div>
    </Section>
  );
}
