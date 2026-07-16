"use client";  // Asegura que este archivo es tratado como un componente de cliente

import React from 'react';
import { useRouter } from "next/navigation";

export default function Observatorioo3() {
    const router = useRouter();
    const Proyect = (to) => {
        router.push(to);
    };


  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50">
      {/* Botón regresar */}
      <div className="text-gray-500 hover:underline mb-2 flex items-center space-x-2">
                <button
                    className="p-1 text-gray-500 hover:underline mb-2 mb-2 flex items-center space-x-2 mt-4"
                    onClick={() => Proyect("/quienes_somos")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-left-circle text-red-400"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                        />
                    </svg>
                    <span className="text-gray-500 hover:text-red-400 transition">
                        Regresar
                    </span>
                </button>
            </div>
      {/* Título */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 mb-4">
          Observatorio de Salud Pública
        </h1>
        <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 font-medium">
          Promoviendo la salud, previniendo enfermedades y mejorando el bienestar colectivo
        </p>
      </div>


      {/* Sección de información del observatorio */}
      <section className="bg-white p-8 rounded-lg shadow-xl mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Acerca del Observatorio</h2>
        <p className="text-lg text-gray-600 mb-6">
          El Observatorio de Salud Pública tiene como objetivo principal el análisis de políticas de salud,
          investigaciones epidemiológicas y la promoción de la salud a nivel poblacional. Trabajamos en la identificación
          de factores que afectan la salud pública y proponemos soluciones basadas en evidencia para mejorar el bienestar
          de las comunidades a nivel nacional e internacional.
        </p>

        {/* Proyectos y áreas de estudio */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Proyectos y Áreas de Estudio</h2>
        <ul className="list-inside list-disc text-lg text-gray-600 mb-8">
          <li>Estudio sobre las políticas de prevención de enfermedades crónicas no transmisibles.</li>
          <li>Investigación sobre el impacto de las campañas de vacunación en poblaciones vulnerables.</li>
          <li>Evaluación del acceso a servicios de salud en comunidades rurales y urbanas marginales.</li>
          <li>Análisis de la eficacia de programas de salud mental en instituciones educativas y laborales.</li>
        </ul>

        {/* Datos adicionales */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Datos Relevantes</h2>
        <p className="text-lg text-gray-600 mb-6">
          El Observatorio de Salud Pública se ha posicionado como un referente en la región, con más de 150
          estudios realizados sobre las principales problemáticas de salud pública. Hemos colaborado con organismos
          internacionales y gobiernos para implementar políticas basadas en evidencia que mejoren la salud y el bienestar
          de las poblaciones.
        </p>
      </section>

      {/* Sección de contacto */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">¿Quieres más información?</h2>
        <p className="text-lg mb-4">Contacta con nosotros para conocer más sobre nuestras investigaciones y programas.</p>
        <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
          <a href="mailto:evillavicencioc@ucacue.edu.ec" className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
            evillavicencioc@ucacue.edu.ec
          </a>
        </button>
      </div>
    </div>
  );
};

