"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0b0b0b] backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo (usa Link para /) */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full grid place-items-center font-bold text-[#0B0B0B]"
            style={{ background: "#F6C739" }}
          >
            NF
          </div>
          <span className="tracking-wide font-bold text-white">NachhFit</span>
        </Link>

        {/* Links desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <a className="text-white hover:text-white/80" href="#sobre">Sobre mí</a>
          <a className="text-white hover:text-white/80" href="#servicios">Servicios</a>
          <a className="text-white hover:text-white/80" href="#resultados">Resultados</a>
          <a className="text-white hover:text-white/80" href="#contacto">Contacto</a>
          <a
            href="#contacto"
            className="px-4 py-2 rounded-md font-bold"
            style={{ background: "#F6C739", color: "#0B0B0B" }}
          >
            Empieza ahora
          </a>
        </nav>

        {/* Botón menú móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden px-3 py-2 rounded border border-white/15"
          aria-expanded={open}
          aria-label="Abrir menú"
        >
          Menú
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav className="md:hidden border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            <a onClick={() => setOpen(false)} href="#sobre">Sobre mí</a>
            <a onClick={() => setOpen(false)} href="#servicios">Servicios</a>
            <a onClick={() => setOpen(false)} href="#resultados">Resultados</a>
            <a onClick={() => setOpen(false)} href="#contacto">Contacto</a>
            <a
              onClick={() => setOpen(false)}
              href="#contacto"
              className="px-4 py-2 rounded-md text-center font-bold"
              style={{ background: "#F6C739", color: "#0B0B0B" }}
            >
              Empieza ahora
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
