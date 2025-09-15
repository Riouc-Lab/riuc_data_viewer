"use client";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Pagination from "../../components/pagination";
import Search from "../../components/search";
import { lista_infografia, truncateDescription } from "../../utils";

export default function Infografia() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filtrado y ordenamiento
  const filteredNoticias = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();
    return lista_infografia
      .filter((item) => {
        if (!search) return true;
        return (
          item.name.toLowerCase().includes(search) ||
          item.author.toLowerCase().includes(search)
        );
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredNoticias.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNoticias = filteredNoticias.slice(startIndex, startIndex + itemsPerPage);


  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen w-full overflow-x-hidden">
      <div className="container mx-auto px-4 py-8">
        {/* Encabezado */}
        <div className="text-center py-8">
          <div className="inline-block border-b-2 border-red-400 pb-2 px-2 max-w-full">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold bg-clip-text text-transparent text-black leading-tight break-words">
              <span className="text-black">INFOGRAFÍAS</span>{" "}
              <span className="text-red-600">RIOUC</span>
            </h1>
          </div>
          <p className="text-sm sm:text-base text-gray-400 mt-3 mb-1 max-w-sm sm:max-w-xl mx-auto px-2 text-center">
            Explora las infografías más recientes desarrolladas por nuestros investigadores.
          </p>
        </div>

        {/* Campo de búsqueda */}
        <div className="mb-8 flex sm:w-1/2 mx-auto">
          <Search
            onSearch={(texto) => {
              if (texto !== searchTerm) {
                setSearchTerm(texto);
                setCurrentPage(1);
              }
            }}
            placeholder="Buscar por título o autor..."
          />
        </div>

        {/* Lista paginada de infografías */}
        <div className="sm:bg-white p-4 sm:p-10 rounded-none sm:rounded-xl shadow-none sm:shadow-xl w-full mx-auto">
          {paginatedNoticias.length === 0 ? (
            <div className="text-center text-gray-500 text-base sm:text-lg font-semibold py-8">
              No se encontraron resultados.
            </div>
          ) : (
            <>
              {/* Grid de tarjetas */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedNoticias.map((item) => (
                  <Link
                    key={item.id}
                    href={`/Novedades/${item.id}`}
                    className="cursor-pointer"
                  >
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl flex flex-col h-full hover:text-red-500 duration-300">
                      <div className="relative w-full h-52 md:h-64 lg:h-72">
                        <Image
                          className="object-cover w-full h-full"
                          src={item.Image}
                          layout="fill"
                          priority
                          alt={item.name}
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                        <p className="text-sm text-gray-500 mt-2">
                          {item.date} - {item.author}
                        </p>
                        <p className="text-gray-600 mt-4 flex-grow text-justify">
                          {truncateDescription(item.description, 150)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Paginación separada */}
              <div className="mt-8 sm:mt-12 w-full">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </>
          )}
        </div>
      </div >
    </div >
  );
}
