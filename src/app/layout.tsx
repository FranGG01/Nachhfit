import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "NachhFit — Entrenamiento Inteligente",
  description: "No te doy rutinas, te enseño a entrenar. CCAFYD (INEF).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#0B0B0B] text-zinc-100">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
