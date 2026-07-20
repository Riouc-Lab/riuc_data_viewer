"use client";  // Asegura que este archivo es tratado como un componente de cliente
 
import React from 'react';
import { useRouter } from "next/navigation";

export default function Observatorioo1() {
    const router = useRouter();
    const Proyect = (to) => {
        router.push(to);
    };

    return (
        <div className="container mx-auto px-6 py-12 bg-gray-100">
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
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 mb-4">
                    Observatorio Fenómenos Socioeconómicos
                </h1>
                <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-700 font-medium">
                    Explorando el impacto de los fenómenos socioeconómicos en nuestra sociedad
                </p>
            </div>


            {/* Sección de información del observatorio */}
            <section className="bg-white p-8 rounded-lg shadow-xl mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Acerca del Observatorio</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Este Observatorio se enfoca en analizar empleo, consumo, migraciones y emprendimientos para comprender los fenómenos asociados. María Emilia Molina de Tinto, responsable del proyecto, tiene una formación académica en administración, gestión de proyectos, logística y ciencia contable, y su interés se centra en el comportamiento del empleo y consumo.
                </p>

                {/* Proyectos y datos relevantes */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Proyectos y Áreas de Estudio</h2>
                <ul className="list-inside list-disc text-lg text-gray-600 mb-8">
                    <li>El impacto del teletrabajo, la estructuración de bases de datos empresariales para el comportamiento de las mipymes y la creación de bases informativas para el área de Derecho y Bienestar Social son áreas clave de trabajo.</li>
                    <li>Además, participa en proyectos colaborativos como: modelos de gestión universitaria, un modelo cognitivo teórico sobre la difusión del rumor, y aplicaciones interdisciplinarias de sistemas complejos en la gestión integrada de cuencas hidrográficas en los altos Andes del Macizo del Cajas.</li>
                    <li>Estos proyectos cuentan con la colaboración de instituciones como el Ministerio del Ambiente, Agua, Energía y Tecnología (MAAET) con el proyecto “Mi Barrio Verde” y la Universidad Politécnica Salesiana en el desarrollo de una plataforma tecnológica para las necesidades de las mipymes.</li>

                </ul>

                {/* Datos adicionales */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Datos Relevantes</h2>
                <p className="text-lg text-gray-600 mb-6">
                    En los últimos años, este observatorio ha recopilado más de 500 encuestas relacionadas con
                    el comportamiento económico y social en diversas poblaciones del país, permitiendo ofrecer
                    análisis detallados sobre la realidad socioeconómica.
                </p>
            </section>

            {/* Sección de contacto */}
            <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-semibold mb-4">¿Quieres más información?</h2>
                <p className="text-lg mb-4">Contáctanos para recibir más detalles sobre nuestros proyectos e investigaciones.</p>
                <button className="bg-white text-red-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
                    <a href="mailto:jtinto@ucacue.edu.ec" className="inline-block bg-white text-red-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
                        jtinto@ucacue.edu.ec
                     </a>
                </button>
            </div>
        </div>
    );
};

