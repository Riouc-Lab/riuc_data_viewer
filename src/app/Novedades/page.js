"use client";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import ContentCard from "../../components/cards/ContentCard";
import PaginatedGrid from "../../components/common/PaginatedGrid";
import Search from "../../components/search";
import { lista_infografia, truncateDescription } from "../../utils";

export default function Infografia() {
  const [searchTerm, setSearchTerm] = useState("");
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
            onSearch={setSearchTerm}
            placeholder="Buscar por título o autor..."
          />
        </div>

        {/* Lista paginada de infografías */}
        <div className="sm:bg-white p-4 sm:p-10 rounded-none sm:rounded-xl shadow-none sm:shadow-xl w-full mx-auto">
          <PaginatedGrid key={searchTerm} items={filteredNoticias} pageSize={itemsPerPage} renderCard={(item) => (
            <ContentCard
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
                  </ContentCard>
          )} />
        </div>
      </div >
    </div >
  );
}
