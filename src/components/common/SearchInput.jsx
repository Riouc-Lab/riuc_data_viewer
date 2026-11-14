"use client";

import { useEffect, useRef, useState } from "react";

export default function SearchInput({ 
    onSearch, 
    campo = "titulo", 
    fields = [],
    placeholder = "Buscar...",
    delay = 300,
 }) {

  const [value, setValue] = useState("");
  const [selectedField, setSelectedField] = useState(campo);
  const fieldRef = useRef(selectedField);
  const onSearchRef = useRef(onSearch);

  useEffect(() => {
    fieldRef.current = selectedField;
  }, [selectedField]);

  useEffect(() => {
    onSearchRef.current = onSearch;
  }, [onSearch]);

    useEffect(() => {
        const id = setTimeout(() => {
            onSearchRef.current?.(value, fieldRef.current);
        }, delay);
        return () => clearTimeout(id);
    }, [value, selectedField, delay]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchRef.current?.(value, fieldRef.current);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
            {fields.length > 0 && (
                <select
                    aria-label="Campo de búsqueda"
                    value={selectedField}
                    onChange={(e) => setSelectedField(e.target.value)}
                    className="border border-black rounded px-3 py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                >
                    {fields.map((f) => (
                        <option key={f.value} value={f.value}>
                            {f.label}
                        </option>
                    ))}
                </select>
            )}
            
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
            </form>
    );
 }