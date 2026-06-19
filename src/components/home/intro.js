"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Intro() {
  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      // [Ajuste de Inicio - Parte 1]:
      // Subimos el threshold de 0.2 a 0.5. 
      // Esto significa que la animación no empezará hasta que al menos 
      // el 50% del bloque entero esté dentro del monitor del usuario.
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect(); 
  }, []);

  useEffect(() => {
    let timer;
    let startDelay; // Variable para controlar el retraso del contador

    if (isVisible) {
      let currentCount = 1;
      const targetCount = 8;
      const duration = 1200; 
      const stepTime = duration / targetCount; 

      // [Ajuste de Inicio - Parte 2]:
      // Envolvemos el contador en un setTimeout de 600ms.
      // Esto permite que el efecto "Slide-in" (que dura 1000ms) termine casi por 
      // completo antes de que los números y el latido comiencen.
      startDelay = setTimeout(() => {
        
        timer = setInterval(() => {
          currentCount += 1;
          setCount(currentCount);
          setIsPulsing(true);

          setTimeout(() => {
            setIsPulsing(false);
          }, 75);

          if (currentCount >= targetCount) {
            clearInterval(timer);
          }
        }, stepTime);

      }, 600); // <-- Los 600ms de retraso clave
    }

    // Limpiamos los dos temporizadores para evitar fugas de memoria si el componente se desmonta rápido
    return () => {
      clearTimeout(startDelay);
      clearInterval(timer);
    };
  }, [isVisible]);

  return (
    <section className="bg-white py-16 px-8 sm:px-16 lg:px-24 overflow-hidden">
      
      <div 
        ref={sectionRef} 
        className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center gap-12"
      >

        {/* ── Imagen con badge ── */}
        <div 
          className={`relative w-full lg:w-1/2 shrink-0 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
          }`}
        >
          <Image
            src="/img/ciitt.png"
            alt="Edificio RIOUC"
            width={500}
            height={380}
            className="w-full h-auto object-cover rounded-sm"
          />

          {/* Badge animado */}
          <div 
            className={`absolute bottom-5 right-5 w-28 h-28 sm:w-28 sm:h-28 rounded-full bg-[#E63329] shadow-lg flex flex-col items-center justify-center transform transition-transform duration-75 ease-in-out ${
              isPulsing ? "scale-110" : "scale-100"
            }`}
          >
            <span className="text-white font-black text-1xl sm:text-2xl leading-none">
              {count}
            </span>
            <span className="text-white text-[6px] sm:text-[8px] font-semibold mt-1 uppercase text-center">
              Observatorios
            </span>
          </div>
        </div>

        {/* ── Texto ── */}
        <div 
          className={`w-full lg:w-1/2 transform transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
          }`}
        >
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed text-justify">
            <strong>
              La Red de Investigación y de Observatorios de la Universidad de
              Cuenca (RIOUC) conecta ciencia, tecnología e innovación para
              comprender los desafíos y oportunidades de nuestra región.
            </strong>
            <br />
            <br />
            A través de ocho observatorios especializados, generamos evidencia,
            analizamos tendencias y transformamos datos en conocimiento
            estratégico. Nuestro trabajo contribuye a la toma de decisiones
            informadas, al desarrollo de soluciones innovadoras y a la creación
            de impacto positivo en la sociedad, las instituciones y el sector
            productivo.
          </p>
        </div>

      </div>
    </section>
  );
}