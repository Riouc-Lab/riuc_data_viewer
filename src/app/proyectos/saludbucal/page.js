"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import dynamic from "next/dynamic";
import SwitchButton from "../../../components/buttonswitch";
const Map = dynamic(() => import("../../../components/map"), { ssr: false });
const DEFAULT_CENTER = [-2.891565, -79.005958];

export default function Mapa() {
  const router = useRouter();
  const [boton1Visible, setBoton1Visible] = useState(false);
  const [boton2Visible, setBoton2Visible] = useState(false);
  const [boton3Visible, setBoton3Visible] = useState(false);
  const [isTextVisible, setTextVisibility] = useState(false);
  const [parroquias, setParroquias] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [geoData, setGeoData] = useState(null);

  // Utilidad para asignar color por nombre de parroquia
  const getColorByName = (name) => {
    const colors = {
      Bellavista: "#e41a1c",
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

  function getColor(id) {
    const colorMapping = {
      1: "blue",

    };
    return colorMapping[id] || "gray";
  }

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
        <div className="h-[calc(100vh-80px)] w-full sm:w-[410px] bg-gray-900 rounded-lg">
          <div className="flex flex-col h-full">
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
            <div className="p-4 bg-gray-800 text-white shadow-md flex justify-between items-center">
              <h1 className="text-lg font-semibold">Geovisor Interface</h1>
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={handleDownloadClick}
              >
                Descargar
              </button>
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
              <SwitchButton
                label="Botón 1"
                onClick={() => setBoton1Visible(!boton1Visible)}
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
                {({ TileLayer, GeoJSON }) => (
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