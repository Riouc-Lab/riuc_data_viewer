<<<<<<< HEAD
import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Buscar proyecto..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-black rounded-l px-14 py-1 focus:outline-none focus:red focus:border-red-500 transition duration-200"
      />
      <button
        type="submit"
        className="bg-red-500 text-white rounded-r px-4 py-1"
      >
        Buscar
      </button>
=======
import { useEffect, useState } from "react";

const Search = ({
  onSearch,
  campo = "titulo",
  placeholder = "Buscar...",
  delay = 300,
}) => {
  const [value, setValue] = useState("");

 useEffect(() => {
  if (!value.trim()) return;
  const id = setTimeout(() => onSearch(value, campo), delay);
  return () => clearTimeout(id);
}, [value, delay, onSearch, campo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value, campo);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full"
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border border-black rounded px-4 py-2
                   focus:outline-none focus:ring-2 focus:ring-red-500 transition"
      />
>>>>>>> afd0485 (Subida inicial: todas las secciones, boletines y PDF comprimido)
    </form>
  );
};

<<<<<<< HEAD
export default Search;
=======
export default Search;
>>>>>>> afd0485 (Subida inicial: todas las secciones, boletines y PDF comprimido)
