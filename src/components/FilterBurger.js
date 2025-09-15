import { useState } from "react";

export default function FilterBurger({ campo, setCampo }) {
  const [open, setOpen] = useState(false); // Estado local para mostrar u ocultar el menú desplegable
  const handleOpen = () => setOpen((v) => !v); // Alterna el estado de visibilidad del menú

  const handleCampoChange = (nuevoCampo) => {   // Cambia el campo seleccionado y cierra el menú
    setCampo(nuevoCampo);
    setOpen(false); // Cerrar el dropdown al seleccionar
  };

  const opciones = [  // Lista de campos disponibles para buscar
    { value: "titulo", label: "Título" },
    { value: "autor", label: "Autor" },
    { value: "anio", label: "Año" }
  ];
   return (
    <div className="relative inline-block">
      {/* Botón que abre el menú desplegable */}
      <button
        className="flex items-center gap-2 md:gap-2 px-3 py-2 md:px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors w-auto"
        onClick={handleOpen}
        aria-label="Seleccionar campo de búsqueda"
      >
        {/* Ícono de embudo o filtro */}
        <svg 
          width="20" 
          height="20" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" 
          />
        </svg>
        {/* Texto visible solo en pantallas medianas y grandes */}
        <span className="text-sm font-medium flex-1 text-left hidden md:block">
          {opciones.find(op => op.value === campo)?.label || "Título"}
        </span>
        {/* Flecha indicadora de dropdown, rota cuando está abierto */}
        <svg 
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''} hidden md:block`}
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
       {/* Menú desplegable de opciones */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-1">
          {opciones.map((opcion) => (
            <button
              key={opcion.value}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                campo === opcion.value 
                  ? 'bg-red-50 text-red-700 font-medium' 
                  : 'text-gray-700'
              }`}
              onClick={() => handleCampoChange(opcion.value)}
            >
              <div className="flex items-center justify-between">
                <span>{opcion.label}</span>
                {/* Ícono de check para la opción activa */}
                {campo === opcion.value && (
                  <svg 
                    className="w-4 h-4 text-red-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
      {/* Overlay para cerrar al hacer clic fuera */}
      {open && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}
