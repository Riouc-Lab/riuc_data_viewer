"use client";
import Image from "next/image";
<<<<<<< HEAD
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { lista_noticias, lista_novedades } from "../../utils/modelo_novedades";

export default function Infografía() {
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
            
            <span className="text-white">INFOGRAFÍAS </span>
            <span className="text-red-600">RIOUC</span>
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
=======
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { lista_infografia } from "../../utils/modelo_infografias";
import Pagination from "../../components/pagination";
import Search from "../../components/search";

export default function Infografia() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const truncateDescription = (description, limit) => {
    if (!description || typeof description !== "string") return "";
    return description.length <= limit
      ? description
      : description.slice(0, limit) + "...";
  };

  const handleSearch = (texto, campoBusqueda) => {
    const nuevoCampo = campoBusqueda || campo;

    // Solo actualizar si hay cambios reales
    const actualizoTexto = texto !== searchTerm;
    const actualizoCampo = nuevoCampo !== campo;

    if (actualizoTexto) setSearchTerm(texto);
    if (actualizoCampo) setCampo(nuevoCampo);
    if (actualizoTexto || actualizoCampo) setCurrentPage(1);
  };
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
          <p className="text-xs sm:text-sm text-gray-400 mt-4 max-w-sm sm:max-w-xl mx-auto px-2 text-center">
            Explora las infografías más recientes desarrolladas por nuestros investigadores.
          </p>
        </div>
        {/* Campo de búsqueda */}
        <div className="mb-8 flex justify-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:bg-white p-10 rounded-xl md:shadow-xl">
          {paginatedNoticias.length > 0 ? (
            paginatedNoticias.map((item) => (
              <Link
                key={item.id}
                href={`/Novedades/${item.id}`}
                className="cursor-pointer"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl flex flex-col h-full cursor-pointer hover:text-red-500 duration-300">
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
                    <h2 className="text-2xl font-semibold">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                      {item.date} - {item.author}
                    </p>
                    <p className="text-gray-600 mt-4 flex-grow text-justify">
                      {truncateDescription(item.description, 150)}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg mt-10 col-span-full">
              No se encontraron resultados.
            </p>
          )}
        </div>

        {/* Paginación */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
>>>>>>> afd0485 (Subida inicial: todas las secciones, boletines y PDF comprimido)
      </div>
    </div>
  );
}

