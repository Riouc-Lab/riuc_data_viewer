"use client"; // Necesario en Next.js para usar useState y useEffect

import { useState, useEffect } from "react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  // Activamos la animación justo cuando el componente se carga en la pantalla
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="group relative w-full h-screen overflow-hidden bg-black">

      {/* ── Video fullscreen ── */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full pointer-events-none scale-[1.15] sm:scale-[1.2]"
          src="https://www.youtube.com/embed/EkX00rNBbFw?autoplay=1&mute=1&loop=1&playlist=EkX00rNBbFw&controls=0&rel=0&modestbranding=1&playsinline=1&disablekb=1"
          title="RIOUC background video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* ── Overlay de Hover (Sombreado y Botón) ── */}
      <a
        href="https://www.youtube.com/watch?v=EkX00rNBbFw"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-700 group-hover:opacity-100 cursor-pointer"
      >
        <span className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-sm tracking-wide font-medium transform translate-y-4 transition-all duration-500 group-hover:translate-y-0 hover:bg-white/20 hover:border-white/60 hover:scale-105">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-5 h-5"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Ver video
        </span>
      </a>

      {/* ── Branding: ANMADO DESDE EL LADO ── */}
      {/* Usamos template literals `` para alternar las clases de Tailwind según el estado de 'isMounted' */}
      <div 
        className={`absolute bottom-0 left-0 z-20 w-full sm:w-auto pointer-events-none transform transition-all duration-1000 ease-out ${
          isMounted 
            ? "translate-x-0 opacity-100" 
            : "-translate-x-16 opacity-0"
        }`}
      >

        {/* Bloque rojo con el título */}
        <div className="bg-[#E63329] px-5 py-3 inline-block pointer-events-auto">
          <h1 className="text-white font-black uppercase text-5xl sm:text-6xl leading-none tracking-tight">
            RIOUC
          </h1>
        </div>

        {/* Subtítulo sobre franja blanca */}
        <div className="bg-white px-5 py-2 w-full pointer-events-auto">
          <p className="text-gray-700 text-sm sm:text-base font-medium whitespace-nowrap">
            La Red de Investigación y Observatorios de la Universidad Católica de Cuenca
          </p>
        </div>

      </div>

    </section>
  );
}