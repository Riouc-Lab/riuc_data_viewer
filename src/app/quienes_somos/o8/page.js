"use client";  // Asegura que este archivo es tratado como un componente de cliente

import React from 'react';
import { useRouter } from "next/navigation";

export default function Observatorioo8() {
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
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 mb-4">
          Observatorio de Género
        </h1>
        <div className="h-1 w-24 bg-purple-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 font-medium">
          Análisis e investigación sobre género para promover una sociedad más equitativa
        </p>
      </div>


      {/* Sección de información del observatorio */}
      <section className="bg-white p-8 rounded-lg shadow-xl mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Acerca del Observatorio</h2>
        <p className="text-lg text-gray-600 mb-6">
          El Observatorio de Género es un espacio académico orientado al análisis y seguimiento de las desigualdades de género
           en la educación superior y en distintos contextos sociales. A través de la recopilación, sistematización y difusión de
            información, promueve la reflexión crítica, la generación de conocimiento y la visibilización del aporte de las mujeres
             en la academia.
        </p>

        {/* Proyectos y áreas de estudio */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Proyectos y Áreas de Estudio</h2>
        <ul className="list-inside list-disc text-lg text-gray-600 mb-8">
          <li>Brechas de género en la educación superior</li>
          <li>Participación y liderazgo de las mujeres en la academia.</li>
          <li>Violencia simbólica y dinámicas de género en espacios universitarios.</li>
          <li>Análisis de políticas públicas y procesos sociales con enfoque de género.</li>
        </ul>

        {/* Datos adicionales */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Datos Relevantes</h2>
        <p className="text-lg text-gray-600 mb-6">
          Este observatorio ha recopilado y sistematizado información proveniente de más de <strong>400 </strong> 
          encuestas relacionadas con la violencia simbólica, aplicadas en diversas poblaciones del país, lo que ha permitido generar análisis preliminares y 
          evidencia empírica sobre esta problemática en contextos sociales y académicos. Asimismo, se han desarrollado infografías, 
          materiales de divulgación y productos audiovisuales, orientados a sensibilizar sobre la importancia de reconocer y visibilizar 
          las desigualdades de género. Estas iniciativas buscan promover la reflexión sobre los estereotipos de género, fortalecer el 
          empoderamiento de las mujeres y fomentar espacios de articulación con actores del sector académico, público y privado, contribuyendo 
          así a la generación y difusión de conocimiento en torno a la igualdad de género.
        </p>
      </section>

      {/* Sección de contacto */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">¿Quieres más información?</h2>
        <p className="text-lg mb-4">Contáctanos para conocer más sobre nuestros proyectos del Observatorio de Género. </p>
        <button className="bg-white text-indigo-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
          <a
          href="mailto:jreyesr@ucacue.edu.ec"
          className="inline-block bg-white text-purple-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          jreyesr@ucacue.edu.ec
        </a>
        </button>
      </div>
    </div>
  );
};
