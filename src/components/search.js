import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        placeholder="Buscar proyecto..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-black rounded-l px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        type="submit"
        className="bg-red-500 text-white rounded-r px-4 py-1"
      >
        Buscar
      </button>
    </form>
  );
};

export default Search;