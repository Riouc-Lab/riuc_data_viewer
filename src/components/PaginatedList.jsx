"use client";
import { useState, useMemo } from "react";
import Pagination from "./pagination";
import Search from "./search";

export default function PaginatedList({
  items = [],
  itemsPerPage = 12,
  searchFields = [],
  renderItem,
  title = "",
  showSearch = true,
  className = "",
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();
    if (!search || searchFields.length === 0) return items;
    return items.filter((item) =>
      searchFields.some((field) =>
        item[field]?.toLowerCase().includes(search)
      )
    );
  }, [items, searchTerm, searchFields]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginated = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={`w-full ${className}`}>
      {/* Título */}
      {title && (
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {title}
        </h2>
      )}

      {/* Buscador */}
      {showSearch && (
        <div className="mb-6">
          <Search
            onSearch={(texto) => {
              setSearchTerm(texto);
              setCurrentPage(1);
            }}
            placeholder="Buscar..."
          />
        </div>
      )}

      {/* Lista */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {paginated.map((item) => (
          <div key={item.id}>{renderItem(item)}</div>
        ))}
      </div>

      {/* Paginación */}
      {filteredItems.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {/* Sin resultados */}
      {filteredItems.length === 0 && (
        <p className="text-center text-gray-600 mt-8">
          No se encontraron resultados.
        </p>
      )}
    </div>
  );
}
