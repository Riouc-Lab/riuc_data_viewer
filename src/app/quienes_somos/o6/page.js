"use client";  // Asegura que este archivo es tratado como un componente de cliente

import React from 'react';
import { useRouter } from "next/navigation";

export default function Observatorioo6() {
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
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500 mb-4">
          Observatorio Natural
        </h1>
        <div className="h-1 w-24 bg-yellow-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 font-medium">
          Estudiando la biodiversidad y el equilibrio natural del ecosistema
        </p>
      </div>

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
        <div className="space-y-6 text-lg text-gray-600 mb-8">

          {/* Proyecto 1 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-yellow-700">Identificación de procesos biogeoquímicos e hidrológicos en humedales mediante técnicas de isótopos estables: comparando ecosistemas de páramo y amazónicos en el sur de Ecuador para mitigación de gases de efecto invernadero. Universidad   Católica   de Cuenca- Universidad Estatal Amazónica y Universidad del Azuay</h3>
            <p><span className="font-semibold">Responsable:</span> Jazmin Salazar Orellana</p>
            <p><span className="font-semibold">Fecha:</span> Agosto 2018 - Agosto 2020</p>
            <p className="mt-2">Los humedales son ecosistemas clave para el secuestro y almacenamiento de carbono, pero altamente vulnerables al cambio climático y a la presión antrópica, especialmente en regiones tropicales. En el sur del Ecuador, la expansión agropecuaria ha modificado sus procesos hidrológicos y favorecido la emisión de gases de efecto invernadero (N₂O, CH₄ y CO₂). Este proyecto caracterizó y evaluó suelos y aguas en cuatro humedales andinos y amazónicos mediante análisis físico-químicos, isotópicos e hidrológicos. Se estudiarón procesos de descomposición orgánica, flujos de agua y emisiones de gases, considerando la influencia del cambio de uso del suelo. Los resultados generarón datos científicos inéditos para orientar estrategias de manejo y conservación. </p>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-yellow-700"> Hypothesis of the hyporreic refuge: description of ecological niches in macroinvertebrates with stable isotopes in the Machangara subcuenca. </h3>
            <p><span className="font-semibold">Responsable:</span> Jazmin Salazar Orellana</p>
            <p><span className="font-semibold">Fecha:</span> Septiembre 2021-Septiembre 2022</p>
            <p className="mt-2">Este estudio examina el papel de la zona hiporreica como refugio para los macroinvertebrados después de perturbaciones antropogénicas, probando la "hipótesis de refugio hiporreico". Utilizando técnicas isotópicas, se analizarán las comunidades de macroinvertebrados en la zona hiporreica de la cuenca del Machángara, evaluando la variación del nicho trófico en relación con la carga antropogénica y factores como el uso del suelo, el cambio climático y el crecimiento urbano. Se estudiarán las fuentes de alimento de los macroinvertebrados (hojarasca, materia orgánica, algas) y se analizarán los contaminantes (amonio, nitratos) mediante δ15N y δ18O. La investigación busca resaltar la importancia funcional de la zona hiporreica en la restauración y conservación de los ríos. </p>
          </div>

          {/* Proyecto 3 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-yellow-700">Análisis de la funcionalidad microbiana del suelo en un bosque seco y de intensa actividad agrícola la sur del país: Estudio base para el desarrollo de bioinsumos agrícolas. </h3>
            <p><span className="font-semibold">Responsable:</span>Jazmin Salazar</p>
            <p><span className="font-semibold">Fecha:</span>Diciembre 2023- Diciembre 2025</p>
            <p className="mt-2">El componente biológico del suelo ha sido históricamente poco estudiado, a pesar del papel esencial que desempeñan los microorganismos en los ciclos biogeoquímicos, la estructura y la fertilidad del suelo. Este proyecto surge ante la carencia de información sobre bacterias, hongos y asociaciones micorrízicas en sistemas agrícolas, buscando generar conocimiento que contribuya a mitigar la degradación del suelo y fortalecer la seguridad alimentaria. El objetivo es dilucidar la funcionalidad microbiana en suelos de bosque seco no intervenido y compararla con suelos sometidos a intensa actividad agrícola (cultivo de maíz) en la zona sur del país. Se emplearán técnicas de aislamiento e identificación de comunidades microbianas cultivables y no cultivables, incluyendo el uso de isótopos estables para enriquecer ADN y determinar la dinámica funcional de los microorganismos. Los resultados permitirán rescatar cepas nativas con potencial para el desarrollo de bioinsumos, orientando prácticas agrícolas sostenibles y estrategias de restauración de suelos degradados.</p>
          </div>

          {/* Proyecto 4 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-yellow-700">Análisis de la dinámica de flujos de alta montaña DIFLUMON</h3>
            <p><span className="font-semibold">Responsable:</span>Carlos Matovelle</p>
            <p><span className="font-semibold">Fecha:</span>Septiembre 2024- Diciembre 2025</p>
            <p className="mt-2">Este estudio tiene como objetivo evaluar los efectos del cambio climático y del cambio en el uso del suelo sobre la cantidad y calidad del agua en la microcuenca del río Tabacay, en Azogues. Se han instalado con el apoyo de la Universidad de Bayreuth 3 sitios de monitoreo en los cuales se han instalado piezómetros, tensiómetros, sensores de temperatura y humedad del suelo que nos permitirán obtener una data importante para determinar la dinámica ecosistémica.</p>
          </div>
        </div>
      </section>


      {/* Sección de contacto */}
      {/* Sección de contacto */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">¿Quieres más información?</h2>
        <p className="text-lg mb-4">
          Contáctanos para conocer más sobre nuestras investigaciones y proyectos naturales.
        </p>
        <a
          href="mailto:jazmin.salazar@ucacue.edu.ec"
          className="inline-block bg-white text-yellow-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          Contactar: 
          jazmin.salazar@ucacue.edu.ec
        </a>
      </div>
    </div>
      );
};

