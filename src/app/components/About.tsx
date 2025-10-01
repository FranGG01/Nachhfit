"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import Section from "./Section";

export default function About() {
  return (
    <Section
      id="sobre"
      title="¿Quién soy?"
      className="bg-gradient-to-b from-nf-black to-zinc-900"
    >
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Texto */}
        <div className="order-2 md:order-1 space-y-8">
          <div className="space-y-6">
            <p className="text-lg text-nf-white/90 leading-relaxed">
              Soy <span className="text-nf-yellow font-semibold">NachhFit</span>, entrenador personal especializado en{" "}
              <strong className="text-nf-white">fuerza</strong> y <strong className="text-nf-white">educación del movimiento</strong>.
            </p>
            
            <p className="text-lg text-nf-white/90 leading-relaxed">
              Mi objetivo es que <span className="text-nf-yellow">aprendas a entrenar con criterio</span>, 
              mejores tu técnica y consigas resultados sostenibles que duren en el tiempo.
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-nf-white/5 border border-nf-white/10 hover:bg-nf-white/[0.07] hover:border-nf-yellow/20 transition-all group">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-nf-yellow/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🎓
              </div>
              <div>
                <h3 className="font-bold text-nf-white mb-1">Formación Oficial</h3>
                <p className="text-sm text-nf-white/70">CCAFYD (INEF) - Ciencias de la Actividad Física y del Deporte</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-nf-white/5 border border-nf-white/10 hover:bg-nf-white/[0.07] hover:border-nf-yellow/20 transition-all group">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-nf-yellow/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🧠
              </div>
              <div>
                <h3 className="font-bold text-nf-white mb-1">Metodología</h3>
                <p className="text-sm text-nf-white/70">Progresión inteligente · Técnica perfecta · Adherencia a largo plazo</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-nf-white/5 border border-nf-white/10 hover:bg-nf-white/[0.07] hover:border-nf-yellow/20 transition-all group">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-nf-yellow/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                📍
              </div>
              <div>
                <h3 className="font-bold text-nf-white mb-1">Ubicación</h3>
                <p className="text-sm text-nf-white/70">Sesiones presenciales en Madrid · Entrenamientos online para todo el mundo</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-nf-yellow/10 border border-nf-yellow/20 text-nf-yellow text-sm font-medium">
              Basado en ciencia
            </span>
            <span className="px-4 py-2 rounded-full bg-nf-yellow/10 border border-nf-yellow/20 text-nf-yellow text-sm font-medium">
              Técnica primero
            </span>
            <span className="px-4 py-2 rounded-full bg-nf-yellow/10 border border-nf-yellow/20 text-nf-yellow text-sm font-medium">
              Resultados duraderos
            </span>
          </div>
        </div>

        <div className="order-1 md:order-2 relative group">
          <div className="absolute -inset-4 bg-gradient-to-br from-nf-yellow/20 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Container principal */}
          <div className="relative">
<div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-nf-white/10 shadow-2xl">
              <Image
                src="/QuienSoy.jpg"
                alt="Sobre NachhFit"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nf-black/60 via-nf-black/10 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-5 rounded-xl bg-nf-black/80 backdrop-blur-md border border-nf-white/10">
                  <p className="text-nf-white font-medium text-lg italic leading-relaxed">
                    "No entreno personas, <span className="text-nf-yellow">educo atletas</span>"
                  </p>
                </div>
              </div>
            </div>

            {/* Stats flotantes */}
            <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-nf-black border border-nf-white/10 shadow-xl backdrop-blur-sm">
                <div className="text-2xl font-bold text-nf-yellow">5+</div>
                <div className="text-xs text-nf-white/60">Años</div>
              </div>
              <div className="p-4 rounded-xl bg-nf-black border border-nf-white/10 shadow-xl backdrop-blur-sm">
                <div className="text-2xl font-bold text-nf-yellow">100+</div>
                <div className="text-xs text-nf-white/60">Clientes</div>
              </div>
            </div>
          </div>

          {/* Elementos decorativos */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-nf-yellow/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute top-1/2 -right-8 w-32 h-32 bg-nf-yellow/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>
    </Section>
  );
}