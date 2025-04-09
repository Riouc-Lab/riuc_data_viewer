"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { lista_noticias, lista_novedades } from "../../utils/modelo_novedades";

export default function TendenciasEducativas() {
  const router = useRouter();

  // Limitar el numero de caracteres a mostrar en item.description
  const truncateDescription = (description, limit) => {
    if (!description || typeof description !== "string") {
      return "";
    }
    if (description.length <= limit) {
      return description;
    }
    return description.slice(0, limit) + "...";
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-black text-center py-8 mb-5 rounded-lg shadow-md">
          <Image
            className="mx-auto p-5"
            src="/img/RED-SIDEBAR.png"
            alt="RIOUC"
            width={200}
            height={85}
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            ¡<span className="text-red-600">I</span>
            <span className="text-white">NFOGRAFÍAS </span>
            <span className="text-red-600">R</span>
            <span className="text-white">IOUC</span>!
          </h1>
          <div className="h-1 w-24 bg-red-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-300 mb-4">
            Explora las últimas infografías relacionadas con nuestras investigaciones y proyectos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Iterar sobre la lista de infografías */}
          {lista_noticias.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl flex flex-col h-full"
              >
                {/* Imagen */}
                <div className="relative w-full h-52 md:h-64 lg:h-72">
                  <Image
                    className="object-cover w-full h-full"
                    src={item.Image}
                    layout="fill"
                    priority
                  />
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-semibold text-gray-800 hover:text-red-500 transition-colors duration-300">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    {item.date} - {item.author}
                  </p>
                  <p className="text-gray-600 mt-4 flex-grow">
                    {truncateDescription(item.description, 130)}
                  </p>

                  {/* Contenedor del botón con mt-auto para fijarlo abajo */}
                  <div className="pt-4 flex-shrink-0">
                    <Link href={`/Novedades/${item.id}`}>
                      <button className=" bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full">
                        Ver Infografía
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

