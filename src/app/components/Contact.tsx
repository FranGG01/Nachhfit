// src/app/components/Contact.tsx
"use client";
import Section from "./Section";

// Tipado de gtag (opcional)
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Tracking mini (si tienes GA)
function track(label: string) {
  window.gtag?.("event", "click_whatsapp", { label });
}

const PHONE = "34633809585"; // ← tu número con prefijo país

function waLink(text: string) {
  const msg = encodeURIComponent(text);
  return `https://wa.me/${PHONE}?text=${msg}`;
}

export default function Contact() {
  // Mensajes predefinidos
  const msgStart = "Hola NachhFit, quiero empezar. Te cuento mi objetivo:";
  const msgDoubt = "Hola NachhFit, tengo una duda rápida sobre los servicios.";
  const msgPrices = "Hola NachhFit, ¿me pasas info de precios y disponibilidad?";

  return (
    <Section id="contacto" title="Hablemos" className="relative bg-nf-black overflow-hidden">
      {/* Patrón de grid sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(246,199,57,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(246,199,57,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      {/* Halos animados */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(246,199,57,0.3), transparent 70%)",
            animation: "pulse-glow 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(246,199,57,0.25), transparent 70%)",
            animation: "pulse-glow 10s ease-in-out infinite 2s",
          }}
        />
      </div>

      <div className="relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nf-yellow/10 border border-nf-yellow/20 backdrop-blur-sm mb-6">
          <span className="text-2xl">💬</span>
          <span className="text-nf-yellow text-sm font-medium">Respuesta rápida por WhatsApp</span>
        </div>

        <p className="text-nf-white/80 text-lg mb-8 leading-relaxed max-w-2xl">
          Escríbeme por WhatsApp y te doy los siguientes pasos. Elige un atajo o envíame tu mensaje.
        </p>

        {/* Botones */}
        <div className="flex flex-wrap gap-4">
          <a
            href={waLink(msgStart)}
            onClick={() => track("quiero_empezar")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-xl font-bold bg-nf-yellow text-nf-black overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-nf-yellow/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              Empezar por WhatsApp
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-nf-yellow to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href={waLink(msgDoubt)}
            onClick={() => track("duda_rapida")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-xl font-semibold border-2 border-nf-white/20 text-nf-white hover:bg-nf-white/5 hover:border-nf-yellow/40 transition-all"
          >
            Duda rápida
          </a>

          <a
            href={waLink(msgPrices)}
            onClick={() => track("precios_disponibilidad")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-xl font-semibold border-2 border-nf-white/20 text-nf-white hover:bg-nf-white/5 hover:border-nf-yellow/40 transition-all"
          >
            Precios y disponibilidad
          </a>
        </div>

        {/* Nota legal */}
        <p className="mt-8 text-sm text-nf-white/60 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2h-3m-7 0H6a2 2 0 00-2 2v6a2 2 0 002 2h0m6-14V7a4 4 0 118 0v2" />
          </svg>
          Al contactar aceptas nuestra <a className="underline hover:text-nf-white" href="/legal/privacidad">Política de privacidad</a>.
        </p>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
      `}</style>
    </Section>
  );
}
