import { useEffect, useRef, useState } from "react";

const Search = ({ onSearch, campo = "titulo", placeholder = "Buscar...", delay = 300 }) => {
  const [value, setValue] = useState("");
  const campoRef = useRef(campo);
  const onSearchRef = useRef(onSearch);

  
  useEffect(() => { campoRef.current = campo; }, [campo]);
  useEffect(() => { onSearchRef.current = onSearch; }, [onSearch]);

  
  useEffect(() => {
    const id = setTimeout(() => {
      onSearchRef.current(value, campoRef.current);
    }, delay);
    return () => clearTimeout(id);
  }, [value, delay]); 

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearchRef.current(value, campoRef.current); }} className="flex w-full">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
      />
    </form>
  );
};

export default Search;
