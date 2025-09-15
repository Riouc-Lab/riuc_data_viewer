<<<<<<< HEAD
"use client";  // Asegura que este archivo es tratado como un componente de cliente
=======
"use client";
>>>>>>> afd0485 (Subida inicial: todas las secciones, boletines y PDF comprimido)

import React from 'react';
import { useRouter } from "next/navigation";

<<<<<<< HEAD
export default function Observatorioo6() {
    const router = useRouter();
    const Proyect = (to) => {
        router.push(to);
    };

=======
export default function ObservatorioNatural() {
  const router = useRouter();
  const Proyect = (to) => {
    router.push(to);
  };

  // Función para abrir el cliente de correo
  const handleContactClick = () => {
    window.location.href = "mailto:jazmin.salazar@ucacue.edu.ec";
  };
>>>>>>> afd0485 (Subida inicial: todas las secciones, boletines y PDF comprimido)

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50">
      {/* Botón regresar */}
      <div className="text-gray-500 hover:underline mb-2 flex items-center space-x-2">
<<<<<<< HEAD
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
=======
        <button
          className="p-1 text-gray-500 hover:underline mb-2 flex items-center space-x-2 mt-4"
          onClick={() => Proyect("/quienes_somos")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className="bi bi-arrow-left-circle text-red-400" viewBox="0 0 16 16">
            <path fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg>
          <span className="text-gray-500 hover:text-red-400 transition">Regresar</span>
        </button>
      </div>

      {/* Título principal */}
>>>>>>> afd0485 (Subida inicial: todas las secciones, boletines y PDF comprimido)
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500 mb-4">
          Observatorio Natural
        </h1>
        <div className="h-1 w-24 bg-yellow-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 font-medium">
          Estudiando la biodiversidad y el equilibrio natural del ecosistema
        </p>
      </div>

<<<<<<< HEAD
      {/* Sección de información del observatorio */}
      <section className="bg-white p-8 rounded-lg shadow-xl mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Acerca del Observatorio</h2>
        <p className="text-lg text-gray-600 mb-6">
          El Observatorio Natural se dedica a la observación, estudio y conservación de la biodiversidad en diversos
          ecosistemas naturales. A través de investigaciones científicas, buscamos entender los procesos ecológicos y
          promover la protección de especies en peligro, así como la restauración de hábitats naturales.
        </p>

        {/* Proyectos y áreas de estudio */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Proyectos y Áreas de Estudio</h2>
        <ul className="list-inside list-disc text-lg text-gray-600 mb-8">
          <li>Monitoreo de la biodiversidad y sus cambios en el ecosistema.</li>
          <li>Estudios sobre la preservación de especies autóctonas en peligro de extinción.</li>
          <li>Investigación sobre la restauración de hábitats y la regeneración natural.</li>
          <li>Estudio de los impactos del cambio climático en los ecosistemas naturales.</li>
        </ul>

        {/* Datos adicionales */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Datos Relevantes</h2>
        <p className="text-lg text-gray-600 mb-6">
          Nuestro trabajo se enfoca en la investigación colaborativa con instituciones de conservación y organizaciones
          internacionales. Mediante la implementación de técnicas de monitoreo, garantizamos el seguimiento de la salud
          ecológica y buscamos mejorar las políticas públicas sobre conservación.
        </p>
      </section>

=======
      {/* Sección de proyectos */}
      <section className="bg-white p-8 rounded-lg shadow-xl mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Proyectos Vinculados a la RIOUC</h2>

        {/* Proyecto 1 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-yellow-700">Dinámica de flujos de alta montaña (DIFLUMON)</h3>
          <p className="text-gray-600"><strong>Responsable:</strong> Carlos Matovelle</p>
          <p className="text-gray-600"><strong>Fechas:</strong> Septiembre 2024 - Diciembre 2025</p>
          <p className="text-gray-600 mt-2">Evaluación de la calidad del agua en la microcuenca del río Tabacay, con sensores instalados para monitoreo climático y del suelo.</p>
        </div>

        {/* Proyecto 2 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-yellow-700">Funcionalidad microbiana del suelo en bosque seco</h3>
          <p className="text-gray-600"><strong>Responsable:</strong> Jazmin Salazar</p>
          <p className="text-gray-600"><strong>Fechas:</strong> Diciembre 2023 - Diciembre 2025</p>
          <p className="text-gray-600 mt-2">Comparación de suelos agrícolas y no intervenidos para identificar microorganismos con potencial en bioinsumos agrícolas sostenibles.</p>
        </div>

        {/* Proyecto 3 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-yellow-700">Hypothesis of the hyporreic refuge</h3>
          <p className="text-gray-600"><strong>Responsable:</strong> Jazmin Salazar Orellana</p>
          <p className="text-gray-600"><strong>Fechas:</strong> Septiembre 2021 - Septiembre 2022</p>
          <p className="text-gray-600 mt-2">Estudio de macroinvertebrados en la zona hiporreica del río Machángara, analizando nichos tróficos y contaminantes mediante isótopos estables.</p>
        </div>

        {/* Proyecto 4 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-yellow-700">Identificación de procesos biogeoquímicos e hidrológicos en humedales</h3>
          <p className="text-gray-600"><strong>Responsable:</strong> Jazmin Salazar Orellana</p>
          <p className="text-gray-600"><strong>Fechas:</strong> Agosto 2018 - Agosto 2020</p>
          <p className="text-gray-600 mt-2">Los humedales son clave para el secuestro de carbono. Este proyecto evaluó suelos y aguas en humedales andinos y amazónicos, generando datos inéditos para estrategias de conservación.</p>
        </div>
      </section>



>>>>>>> afd0485 (Subida inicial: todas las secciones, boletines y PDF comprimido)
      {/* Sección de contacto */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">¿Quieres más información?</h2>
        <p className="text-lg mb-4">Contáctanos para conocer más sobre nuestras investigaciones y proyectos naturales.</p>
<<<<<<< HEAD
        <button className="bg-white text-yellow-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
=======
        <p className="text-lg font-bold mb-4">📧 jazmin.salazar@ucacue.edu.ec</p>
        <button
          onClick={handleContactClick}
          className="bg-white text-yellow-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
        >
>>>>>>> afd0485 (Subida inicial: todas las secciones, boletines y PDF comprimido)
          Contactar
        </button>
      </div>
    </div>
  );
<<<<<<< HEAD
};

=======
}
>>>>>>> afd0485 (Subida inicial: todas las secciones, boletines y PDF comprimido)
