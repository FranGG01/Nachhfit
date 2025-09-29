import Section from "./Section";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <Section id="servicios" title="Servicios" className="bg-gradient-to-b from-zinc-900 to-nf-black">
      <div className="grid md:grid-cols-3 gap-6">
        <ServiceCard
          label="Online"
          title="Entrenamiento Online"
          desc="Plan individualizado, vídeos de técnica y feedback semanal por chat/llamada."
          icon={"🌐"}
        />
        <ServiceCard
          label="Presencial"
          title="Sesiones 1:1"
          desc="Trabajo técnico y de fuerza en Madrid. Mejora postura, progresión y seguridad."
          icon={"🏋️‍♂️"}
        />
        <ServiceCard
          label="Asesoría"
          title="Asesoría puntual"
          desc="Revisión de tu técnica + guía de progresión en una única sesión."
          icon={"🧠"}
        />
      </div>
    </Section>
  );
}
