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
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect(); 
  }, []);

 

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