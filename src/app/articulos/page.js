"use client";

import { useState } from "react";
import ArticleCard from "../../components/articlecard";
import Pagination from "../../components/pagination";
import Search from "../../components/search";
import FilterBurger from "../../components/FilterBurger";
import { lista_articulos } from "../../utils/modelo_articulos";

export default function ArticulosCientificos() {
  // ----------------- estado -----------------
  const [query, setQuery] = useState("");
  const [campo, setCampo] = useState("titulo");
  const [currentPage, setCurrentPage] = useState(1);
  const articulosPorPagina = 6;

  // ----------------- búsqueda -----------------
  const handleSearch = (texto, campoBusqueda) => {
    setQuery(texto);
    setCampo(campoBusqueda || campo);
    setCurrentPage(1);
  };

  const normalizar = (str = "") =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  // --- Filtrado según campo seleccionado ---
  const filtrados = lista_articulos.filter((item) => {
    if (!query.trim()) return true;
    const q = normalizar(query);
    if (campo === "titulo") return normalizar(item.titulo).includes(q);
    if (campo === "autor") return normalizar(item.autor).includes(q);
    if (campo === "anio") return item.fecha.startsWith(q);
    return true;
  });

  // ----------------- paginación -----------------
  const totalPages = Math.ceil(filtrados.length / articulosPorPagina);
  const startIndex = (currentPage - 1) * articulosPorPagina;
  const listaPaginada = [...filtrados]
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    .slice(startIndex, startIndex + articulosPorPagina);

  // ----------------- render -----------------
  return (
    <main className="relative min-h-screen bg-gray-100 px-4 py-10">
      {/* Header */}
      <div className="text-center mt-8 mb-6">
        <h5 className="text-base md:text-lg text-red-500 mb-1 font-semibold">
          ARTÍCULOS CIENTÍFICOS
        </h5>
        <h1 className="text-4xl md:text-6xl font-semibold p-5 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400 inline-block">
          PUBLICACIONES RIOUC
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mt-3 mb-1 max-w-sm sm:max-w-xl mx-auto px-2 text-center">
          Explora las publicaciones científicas desarrolladas por nuestros investigadores.
        </p>
      </div>
      {/* Barra de búsqueda y filtro burger */}
      <div className="mx-auto mb-8 w-full max-w-xl px-4 flex items-center gap-4">
        <Search
          onSearch={handleSearch}
          campo={campo}
          placeholder={`Buscar por ${campo}...`}
        />
        <FilterBurger campo={campo} setCampo={setCampo} />
      </div>

      {/* Lista */}
      <div className="bg-white max-w-7xl mx-auto p-10 rounded-xl shadow-xl">
        {query.trim() && filtrados.length === 0 ? (
          <div className="text-center text-gray-500 text-lg font-semibold">
            No existen resultados para esta búsqueda.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5">
            {listaPaginada.map((item) => (
              <div key={item.id} className="h-full">
                <ArticleCard item={item} expandible />
              </div>
            ))}
          </div>
        )}

        {/* Paginación */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  );
}
