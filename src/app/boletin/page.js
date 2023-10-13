"use client";
import React, { useState } from "react";
import Image from "next/image";
import Search from "../../components/search"
import { usePathname, useRouter } from "next/navigation";
import { lista_boletin } from "../../utils/modelo_boletin";

export default function Boletin() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6; // Define el número de proyectos por página

   // Agrega botones para navegar entre páginas
   const totalPages = Math.ceil(lista_boletin.length / projectsPerPage);

   const handlePageChange = (page) => {
     setCurrentPage(page);
   };

  const handleSearch = (query) => {
    const filteredProjects = lista_boletin.filter((project) =>
      project.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredProjects);
    setCurrentPage(1); // Resetea la página actual al buscar
  };

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const projectsToDisplay =
    searchResults.length > 0 
    ? searchResults.slice(startIndex, endIndex)
    : lista_boletin.slice(startIndex, endIndex);

  return (
    <main className="flex min-h-screen flex-col items-center p-7 mb-5">
      <div className="text-center mb-10">
        <h5 className="text-base md:text-lg text-red-500 mb-1">BOLETÍN</h5>
        <h1 className="text-4xl md:text-7xl font-semibold p-5 mb-12 bg-gradient-to-r from-black to-black bg-clip-text text-transparent border-b-2 border-red-400">
          LA RIOUC INFORMA 
        </h1>
        <Search onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {projectsToDisplay.map((item) => {
          const isActive = pathname === item.to;

          return (
            // eslint-disable-next-line react/jsx-key
            <div className="">
              <div className="border-2 border-black border-opacity-10 rounded-lg overflow-hidden">
                <Image
                  className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src={item.Image}
                  alt="Next.js Logo"
                  width={600}
                  height={30}
                  priority
                />

                <div className="p-6 hover:bg-black hover:text-white transition duration-270 ease-in">
                  <h2 className="text-base font-medium text-indigo-300 mb-1">
                    {item.date}
                  </h2>
                  <h1 className="text-2xl font-semibold mb-3">{item.name}</h1>
                  <p className="leading-relaxed mb-3"> {item.description}</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                    <button
                        className={
                          isActive
                            ? "ml-4 grid text-center text-text-red-700 text-xl text-red-700 py-3 mb-2"
                            : "text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"
                        }
                        type="button"
                        onClick={() => router.push(item.to)}
                      >
                        Saber mas
                      </button>
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      RIOUC
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
        
        <nav aria-label="Page navigation example">
          <ul class="flex items-center -space-x-px h-8 text-sm p-16">
            <li>
              <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-black bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => handlePageChange(currentPage - 1)}>
                <span class="sr-only">Previous</span>
                <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
              </a>
            </li>


            {/* Mapea y muestra los números de página */}
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <a
                href="#"
                className={`${
                  currentPage === index + 1
                    ? "z-10 flex items-center justify-center px-3 h-8 leading-tight text-red-600 border border-red-300 bg-red-50 hover:bg-red-100 hover:text-red-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    : "flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}

            <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <span class="sr-only">Next</span>
                <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
            </a>
          </li>
          </ul>
        </nav>
    </main>
  );
}
