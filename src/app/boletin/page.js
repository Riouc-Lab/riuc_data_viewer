"use client";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { lista_boletin } from "../../utils/modelo_boletin";

export default function Boletin() {
  const router = useRouter();
  const pathname = usePathname();

  const sortedBoletines = [...lista_boletin].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-7 mb-5">
      <div className="text-center mb-10">
        <h5 className="text-base md:text-lg text-red-500 mb-1 font-semibold">
          BOLETINES
        </h5>
        <h1 className="text-4xl md:text-6xl font-semibold p-5 mb-3 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400">
          LA RIOUC INFORMA
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mt-4 mb-1 max-w-sm sm:max-w-xl mx-auto px-2 text-center">
          Explora nuestros boletines para estar al día con las últimas novedades de la RIOUC.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sortedBoletines.map((item, index) => {
          const isActive = pathname === item.to;

          return (
            <div
              key={index}
              className="w-full max-w-md mx-auto border-2 border-black border-opacity-10 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition duration-300"
              onClick={() => router.push(item.to)}
            >
              {/* Imagen con tamaño fijo */}
              <div className="w-full h-[270px] bg-black flex items-center justify-center overflow-hidden">
                <Image
                  src={item.Image}
                  alt="Boletín"
                  width={450}
                  height={350}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Contenido textual */}
              <div className="p-6 hover:bg-black hover:text-white transition duration-270 ease-in">
                <h2 className="text-base font-medium text-indigo-300 mb-1">
                  {item.date}
                </h2>
                <h1 className="text-2xl font-semibold mb-3">{item.name}</h1>
                <p className="leading-relaxed mb-3">{item.description}</p>
                <div className="flex items-center flex-wrap">
                  <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                    <span className="flex-grow flex flex-col">Saber más</span>
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
                  </a>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    RIOUC
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
