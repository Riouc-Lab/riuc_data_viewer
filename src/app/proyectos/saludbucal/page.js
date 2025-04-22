"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import dynamic from "next/dynamic";
import SwitchButton from "../../../components/buttonswitch";
const Map = dynamic(() => import("../../../components/map"), { ssr: false });
const DEFAULT_CENTER = [-2.891565, -79.005958];

const cuadras = [
  {
    nombre: "Cuadra 1",
    descripcion: [
      "Esta es la primera cuadra.",
      "Tiene un nivel económico alto.",
      "Hay 62 habitantes."
    ],
    coordenadas: [
      [-2.892710, -79.000136],
      [-2.893670, -79.000323],
      [-2.893475, -79.001179], 
      [-2.892534, -79.000974], 
    ]
  },
  {
    nombre: "Cuadra 2",
    descripcion: [
      "Esta es la segunda cuadra.",
      "Nivel económico medio.",
      "Hay 48 habitantes."
    ],
    coordenadas: [
      [-2.892536, -79.001048], 
      [-2.893465, -79.001248], 
      [-2.893230, -79.002210], 
      [-2.892353, -79.002000], 
    ]
  },
  {
    nombre: "Cuadra 3",
    descripcion: [
      "Esta es la tercera cuadra.",
      "Nivel económico medio.",
      "Hay 35 habitantes."
    ],
    coordenadas: [
      [-2.892326, -79.002063], 
      [-2.893225, -79.002275], 
      [-2.893015, -79.003135], 
      [-2.892147, -79.002972], 
    ]
  },
  {
    nombre: "Cuadra 4",
    descripcion: [
      "Esta es la cuarta cuadra.",
      "Nivel económico bajo.",
      "Hay 20 habitantes."
    ],
    coordenadas: [
      [-2.892120, -79.003015], 
      [-2.893000, -79.003200], 
      [-2.892800, -79.004040], 
      [-2.891900, -79.003860], 
    ]
  },
  {
    nombre: "Cuadra 5",
    descripcion: [
      "Esta es la quinta cuadra.",
      "Nivel económico bajo.",
      "Hay 36 habitantes."
    ],
    coordenadas: [
      [-2.891870, -79.003920], 
      [-2.892770, -79.004100], 
      [-2.892560, -79.004980], 
      [-2.891650, -79.004810], 
    ]
  },
  // Agregar más cuadras aquí
  
  {
    nombre: "Cuadra 6",
    descripcion: [
      "Esta es la sexta cuadra.",
      "Nivel económico alto.",
      "Hay 50 habitantes."
    ],
    coordenadas: [
      [-2.891600, -79.004880], 
      [-2.892530, -79.005070], 
      [-2.892300, -79.005960], 
      [-2.891360, -79.005820], 
    ]
  },
  {
    nombre: "Cuadra 7",
    descripcion: [
      "Esta es la séptima cuadra.",
      "Nivel económico medio.",
      "Hay 45 habitantes."
    ],
    coordenadas: [
      [-2.891340, -79.005875], 
      [-2.892260, -79.006030], 
      [-2.892010, -79.006980], 
      [-2.891090, -79.006875], 
    ]
  },
];


export default function Mapa() {
  const router = useRouter();
  const [boton1Visible, setBoton1Visible] = useState(false);
  const [boton2Visible, setBoton2Visible] = useState(false);
  const [boton3Visible, setBoton3Visible] = useState(false);
  const [isTextVisible, setTextVisibility] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [geoData, setGeoData] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [mostrarCuadras, setMostrarCuadras] = useState(false);

  // Utilidad para asignar color por nombre de parroquia
  const getColorByName = (name) => {
    const colors = {
      Bellavista: "#ff9b9b",
      // Añade más parroquias aquí
    };

    // Color por defecto si no se encuentra el nombre
    return colors[name] || "#bfbfbf";
  };


  const toggleTextVisibility = () => {
    setTextVisibility(!isTextVisible);
  };

  useEffect(() => {
    window.addEventListener("resize", handleZoom);
    handleZoom();

    return () => {
      window.removeEventListener("resize", handleZoom);
    };
  }, []);

  const handleDownloadClick = async () => {
  };

  const handleDescriptionToggle = () => {
    setShowDescription((prev) => !prev); // Alterna la visibilidad de la descripción
  };

  function proyect(to) {
    router.push(to);
  }

  const handleZoom = () => {
    const zoomLevel = window.devicePixelRatio;
    setIsZoomed(zoomLevel > 1);
  };

  useEffect(() => {
    const fetchGeoJson = async () => {
      try {
        const response = await axios.get("/data/parroquias_geojson.geojson");
        setGeoData(response.data);
      } catch (error) {
        console.error("Error al cargar el GeoJSON:", error);
      }
    };

    fetchGeoJson();
  }, []);


  return (
    <main style={{ scrollBehavior: "smooth" }}>
      <div className="flex flex-col lg:flex-row p-2 bg-black">
        <div className="h-[calc(100vh-80px)] w-full sm:w-[410px] overflow-hidden overflow-y-auto rounded-lg bg-gray-900 p-3 shadow-md mb-2">

          <button
            className="p-2 text-gray-500 hover:underline mb-2 font-medium flex items-center space-x-2"
            onClick={() => proyect("/proyectos")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left-circle text-red-400"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
            <span className="text-gray-500 hover:text-red-400 transition">
              Regresar
            </span>
          </button>

          <div className="">
            <h2 className="text-base font-semibold text-white mb-1">
              Geovisor Interactivo de Salud Bucal 
            </h2>
            <button
              onClick={handleDescriptionToggle}
              className="bg-red-600 text-white py-1 px-3 rounded mb-4 mr-4"
            >
              {showDescription ? "Ocultar Descripción" : "Mostrar Descripción"}
            </button>
            <button
              className="bg-red-600 text-white py-1 px-3 rounded mb-4"
              onClick={handleDownloadClick}
            >
              Descargar
            </button>
            {showDescription && (
              <div className="mt-1 text-white text-justify">
                <p>
                  Este geovisor interactivo permite visualizar información sobre
                  la salud bucal en la parroquia de Bellavista. Los datos se
                  mostrara dividido por cuadras y categorizado en dos grupos
                  correspondientes a distintas clases socioeconómicas.
                </p>
              </div>
            )}
            <hr className="mt-6 border-t border-gray-300" />
          </div>
          <div className="overflow-auto p-4 space-y-4">
            {/* Información general */}
            <div className="text-white">
              <h2 className="text-xl font-semibold">Información General</h2>
              <p>
                Aquí puedes agregar información general sobre el uso de la
                interfaz.
              </p>
            </div>
            {/* Botones */}
            <div className="flex flex-col space-y-2 text-white">
              Mostrar Capas por cuadras.
            </div>
            <SwitchButton
              isActive={mostrarCuadras}
              onClick={() => setMostrarCuadras(!mostrarCuadras)}
            />
            <SwitchButton
              label="Botón 2"
              onClick={() => setBoton2Visible(!boton2Visible)}
            />
            <SwitchButton
              label="Botón 3"
              onClick={() => setBoton3Visible(!boton3Visible)}
            />
          </div>
          {/* Pie de página */}
          <div className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; 2024 Geovisor. Todos los derechos reservados.</p>
          </div>

        </div>
        <div className="w-full lg:w-2/3 xl:w-3/4 flex-grow bg-gray-200">
          <div className="relative w-full h-full">
            <div className="leaflet-container">
              <Map
                className="shadow-xl"
                center={DEFAULT_CENTER}
                zoom={14}
                width="full"
                height="800"
              >
                {({ TileLayer, GeoJSON, Polygon, Popup }) => (
                  <>
                    <TileLayer
                      url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {geoData && (
                      <GeoJSON
                        data={geoData}
                        style={(feature) => ({
                          fillColor: getColorByName(feature.properties.DESCRIP),
                          weight: 1,
                          opacity: 1,
                          color: "white",
                          fillOpacity: 0.7,
                        })}
                      />
                    )}
                    {mostrarCuadras &&
                      cuadras.map((cuadra, index) => (
                        <Polygon
                          key={index}
                          positions={cuadra.coordenadas}
                          pathOptions={{ color: "red", weight: 2 }}
                        >
                          <Popup>
                            <strong>{cuadra.nombre}:</strong><br />
                            {cuadra.descripcion.map((linea, i) => (
                              <span key={i}>{linea}<br /></span>
                            ))}
                          </Popup>
                        </Polygon>
                      ))}

                  </>
                )}
              </Map>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}