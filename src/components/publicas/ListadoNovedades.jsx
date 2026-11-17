"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import ContentCard from "../cards/ContentCard";
import PaginatedGrid from "../common/PaginatedGrid";
import Search from "../common/Search";
import { truncateDescription } from "../../utils";

export default function ListadoNovedades({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 8;

  const filteredNoticias = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();
    if (!search) return items;
    return items.filter((item) => {
      const titulo = (item.titulo || "").toLowerCase();
      const autor = (item.autor || "").toLowerCase();
      return titulo.includes(search) || autor.includes(search);
    });
  }, [items, searchTerm]);

  return (
    <>
      <div className="mb-8 flex sm:w-1/2 mx-auto">
        <Search
          onSearch={setSearchTerm}
          placeholder="Buscar por título o autor..."
        />
      </div>

      <div className="sm:bg-white p-4 sm:p-10 rounded-none sm:rounded-xl shadow-none sm:shadow-xl w-full mx-auto">
        <PaginatedGrid
          key={searchTerm}
          items={filteredNoticias}
          pageSize={itemsPerPage}
          emptyMessage="No se encontraron novedades."
          renderCard={(item) => (
            <ContentCard
              key={item.id}
              href={`/Novedades/${item.numero}`}
              className="cursor-pointer"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl flex flex-col h-full hover:text-red-500 duration-300">
                <div className="relative w-full h-52 md:h-64 lg:h-72 bg-gray-100">
                  {item.imagen_url && (
                    <Image
                      className="object-cover w-full h-full"
                      src={item.imagen_url}
                      fill
                      unoptimized
                      alt={item.titulo}
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-semibold">{item.titulo}</h2>
                  <p className="text-sm text-gray-500 mt-2">
                    {[item.fecha_publicacion, item.autor].filter(Boolean).join(" - ")}
                  </p>
                  {item.resumen && (
                    <p className="text-gray-600 mt-4 flex-grow text-justify">
                      {truncateDescription(item.resumen, 150)}
                    </p>
                  )}
                </div>
              </div>
            </ContentCard>
          )}
        />
      </div>
    </>
  );
}
