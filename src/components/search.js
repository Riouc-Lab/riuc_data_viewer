import { useEffect, useState } from "react";

const Search = ({
  onSearch,
  campo = "titulo",
  placeholder = "Buscar...",
  delay = 300,
}) => {
  const [value, setValue] = useState("");

  // ① Lanza la búsqueda solo tras X ms sin teclear
  useEffect(() => {
    const id = setTimeout(() => onSearch(value, campo), delay);
    return () => clearTimeout(id); // limpia al escribir
  }, [value, delay, onSearch, campo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value, campo); // Enter aún funciona
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
        onChange={(e) => setValue(e.target.value)} // actualiza estado local
        className="w-full border border-black rounded px-4 py-2
                   focus:outline-none focus:ring-2 focus:ring-red-500 transition"
      />
    </form>
  );
};

export default Search;
