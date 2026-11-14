"use client";
import React, { useState } from "react";
import Image from "next/image";
import { lista_proyectos } from "../../utils/modelo_proyectos";
import Search from "../../components/common/Search";
import ContentCard from "../../components/cards/ContentCard";
import PaginatedGrid from "../../components/common/PaginatedGrid";


export default function Proyectos() {
  const [query, setQuery] = useState("");
  const results = lista_proyectos.filter((item) => item.name.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <main className="flex min-h-screen flex-col items-center p-7 mb-5">
      <div className="text-center mb-10">
        <h5 className="text-base md:text-lg text-red-500 mb-1 font-semibold">
          RIOUC
        </h5>
        <h1 className="text-4xl md:text-7xl font-semibold p-5 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400">
          GEOVISORES
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mt-3 mb-3 max-w-sm sm:max-w-xl mx-auto px-2 text-center">
          Explora los proyectos de visualización geoespacial de los diferentes observatorios.
        </p>
        <Search onSearch={setQuery} />
      </div>

      <PaginatedGrid key={query} items={results} pageSize={9} renderCard={(item) => (
        <ContentCard key={item.id} href={item.to} className="border-2 border-black border-opacity-10 rounded-lg overflow-hidden">
                <Image
                  className="w-[670px] h-[360px] object-cover"
                  src={item.Image}
                  alt="Vista previa del mapa"
                  width={600}
                  height={300}
                  priority
                />

                <div className="p-6 hover:bg-black hover:text-white transition duration-270 ease-in">
                  <h2 className="text-base font-medium text-indigo-300 mb-1">
                    {item.date}
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">{item.name}</h1>
                  <p className="leading-relaxed mb-3"> {item.description}</p>
                  <div className="flex items-center flex-wrap ">
                    <span className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      <span className="flex-grow flex flex-col">Saber mas</span>

                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                    <span className="text-red-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      {item.additionalDescription}
                    </span>
                  </div>
                </div>
        </ContentCard>
      )} />

      <a
        href="https://www.bce.fin.ec/informacioneconomica/ultimas-publicaciones"
        className="flex items-center space-x-2 mt-12 transition-transform transform hover:scale-105"
      >
        <h2 className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer">
          Explora las Estadísticas Nacionales Económicas Actualizadas
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          className="bg-blue-600 text-white rounded-full p-1"
        >
          <path d="M 7 2.015625 L 20.160156 14.34375 L 14.785156 14.828125 L 13.808594 14.917969 L 14.214844 15.8125 L 17.476563 22.957031 L 15.070313 24.015625 L 11.957031 16.792969 L 11.566406 15.882813 L 10.84375 16.5625 L 7.027344 20.144531 L 7 2.015625 M 7 0.015625 C 6.730469 0.015625 6.460938 0.0664063 6.203125 0.179688 C 5.472656 0.496094 5 1.21875 5 2.015625 L 5.027344 20.144531 C 5.027344 20.941406 5.503906 21.660156 6.230469 21.976563 C 6.488281 22.085938 6.757813 22.140625 7.023438 22.140625 C 7.523438 22.140625 8.015625 21.953125 8.394531 21.601563 L 10.855469 19.289063 L 13.234375 24.804688 C 13.445313 25.296875 13.84375 25.679688 14.339844 25.875 C 14.574219 25.96875 14.820313 26.015625 15.070313 26.015625 C 15.34375 26.015625 15.617188 25.957031 15.875 25.84375 L 18.28125 24.785156 C 18.769531 24.570313 19.15625 24.167969 19.34375 23.667969 C 19.535156 23.167969 19.519531 22.613281 19.296875 22.125 L 16.796875 16.65625 L 20.339844 16.332031 C 21.125 16.261719 21.796875 15.738281 22.050781 14.992188 C 22.308594 14.246094 22.101563 13.421875 21.527344 12.882813 L 8.367188 0.554688 C 7.988281 0.199219 7.496094 0.015625 7 0.015625 Z"></path>
        </svg>
      </a>


    </main>
  );
}
