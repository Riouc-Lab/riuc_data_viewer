"use client";

import { useState } from "react";
import Pagination from "../pagination";
import CardGrid from "./CardGrid";

export default function PaginatedGrid({ items, pageSize, renderCard, emptyMessage = "No se encontraron resultados." }) {
  const [page, setPage] = useState(1);
  if (!items.length) return <p role="status" className="py-8 text-center text-gray-500">{emptyMessage}</p>;

  const pages = Math.ceil(items.length / pageSize);
  const start = (page - 1) * pageSize;
  return (
    <>
      <CardGrid>{items.slice(start, start + pageSize).map(renderCard)}</CardGrid>
      <div className="my-8">
        <Pagination currentPage={page} totalPages={pages} onPageChange={setPage} />
      </div>
    </>
  );
}
