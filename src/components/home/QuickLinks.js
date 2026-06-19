"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function QuickLinks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer para la detección de visibilidad y activación de animación
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    // Contenedor principal con desbordamiento oculto para prevenir scroll horizontal durante animaciones
    <section className="bg-white py-16 px-8 sm:px-16 lg:px-24 overflow-hidden">
      
      {/* Layout principal: Columnas simétricas en escritorio */}
      <div ref={sectionRef} className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-stretch gap-12">

        {/* ── Izquierda: Título y Logo ── */}
        <div
          className={`w-full lg:w-2/5 flex flex-col transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
            ¡Explora el futuro de la{" "}
            <span className="text-[#E63329] italic">innovación</span>{" "}
            con nosotros
          </h2>

          {/* Contenedor del logo con expansión vertical y centrado absoluto */}
          <div className="flex-1 w-full flex items-center justify-center mt-8">
            <Image 
              src="/img/LogoDark.png" 
              alt="Logo RIOUC" 
              width={250} 
              height={250} 
              className="object-contain" 
            />
          </div>
        </div>

        {/* ── Derecha: Grid de navegación secundaria ── */}
        <div
          className={`w-full lg:w-3/5 grid grid-cols-2 gap-4 transform transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
          }`}
          style={{ gridTemplateRows: "auto auto auto" }}
        >

          {/* Tarjeta: Boletines (Con imagen) */}
          <Link
            href="/boletin"
            className="group row-span-2 rounded-2xl bg-[#E63329] flex flex-col items-center justify-end p-6 min-h-[220px] hover:brightness-110 transition-all cursor-pointer"
          >
            <div className="flex-1 flex items-center justify-center w-full">
              <Image
                src="/img/iconoBoletines.png"
                alt="Boletines"
                width={150}
                height={150}
                className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-125"
              />
            </div>
            <span className="text-white font-bold text-lg mt-2">Boletines</span>
          </Link>

          {/* Tarjeta: Infografías (Solo texto) */}
          <Link
            href="/Novedades"
            className="group rounded-2xl bg-gray-200 flex items-center justify-center p-4 h-24 hover:bg-gray-300 transition-all cursor-pointer"
          >
            <span className="text-gray-800 font-bold text-base text-center transition-transform duration-300 ease-in-out group-hover:scale-125">
              Infografías
            </span>
          </Link>

          {/* Tarjeta: Geo-visores (Solo texto) */}
          <Link
            href="/proyectos"
            className="group rounded-2xl bg-gray-200 flex items-center justify-center p-4 h-24 hover:bg-gray-300 transition-all cursor-pointer"
          >
            <span className="text-gray-800 font-bold text-base text-center transition-transform duration-300 ease-in-out group-hover:scale-125">
              Geo-visores
            </span>
          </Link>

          {/* Tarjeta: Tendencia Educativa (Solo texto) */}
          <Link
            href="/tendenciaseducativas"
            className="group rounded-2xl bg-gray-200 flex items-center justify-center p-4 h-24 hover:bg-gray-300 transition-all cursor-pointer"
          >
            <span className="text-gray-800 font-bold text-base text-center leading-tight transition-transform duration-300 ease-in-out group-hover:scale-125">
              Tendencia<br />Educativa
            </span>
          </Link>

          {/* Tarjeta: Artículos Científicos (Con imagen) */}
          <Link
            href="/articulos"
            className="group row-span-2 rounded-2xl bg-gray-300 flex flex-col items-center justify-end p-6 min-h-[220px] hover:bg-gray-400 transition-all cursor-pointer"
          >
            <div className="flex-1 flex items-center justify-center w-full">
              <Image
                src="/img/iconoArticulos.png"
                alt="Artículos Científicos"
                width={100}
                height={100}
                className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-125"
              />
            </div>
            <span className="text-gray-800 font-bold text-base text-center leading-tight mt-2">
              Artículos<br />Científicos
            </span>
          </Link>

          {/* Tarjeta: Videos (Solo texto) */}
          <Link
            href="/vdos"
            className="group rounded-2xl bg-gray-200 flex items-center justify-center p-4 h-24 hover:bg-gray-300 transition-all cursor-pointer"
          >
            <span className="text-gray-800 font-bold text-base text-center transition-transform duration-300 ease-in-out group-hover:scale-125">
              Videos
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
}