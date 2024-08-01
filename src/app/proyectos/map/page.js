"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import dynamic from "next/dynamic";
import SwitchButton from "../../../components/buttonswitch";
const Map = dynamic(() => import("../../../components/map"), { ssr: false });
const DEFAULT_CENTER = [-2.529812, -79.026034];

export default function Mapa() {
  const router = useRouter();
  const [boton1Visible, setBoton1Visible] = useState(false);
  const [boton2Visible, setBoton2Visible] = useState(false);
  const [boton3Visible, setBoton3Visible] = useState(false);
  const [isTextVisible, setTextVisibility] = useState(false);
  const [provincias, setProvincias] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [geoData, setGeoData] = useState(null);

  const toggleTextVisibility = () => {
    setTextVisibility(!isTextVisible);
  };

  const handleZoom = () => {
    const zoomLevel = window.devicePixelRatio;
    setIsZoomed(zoomLevel > 1);
  };

  useEffect(() => {
    window.addEventListener("resize", handleZoom);
    handleZoom();

    return () => {
      window.removeEventListener("resize", handleZoom);
    };
  }, []);

  const handleDownloadClick = async () => {
    try {
      const response = await axios.get("/api/data", {
        responseType: "blob",
      });

      if (response.status === 200) {
        const blob = new Blob([response.data], { type: "text/csv" });

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "data.csv";

        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        console.error("Error downloading data.");
      }
    } catch (error) {
      console.error("Error downloading data:", error);
    }
  };

  function getColor(id) {
    const colorMapping = {
      1: "blue",
      2: "green",
      3: "red",
      4: "yellow",
      5: "purple",
      6: "orange",
      7: "brown",
      8: "pink",
      9: "gray",
      10: "cyan",
      11: "magenta",
      12: "olive",
      13: "lime",
      14: "teal",
      15: "indigo",
      16: "maroon",
      17: "navy",
      18: "azure",
      19: "aquamarine",
      20: "beige",
      21: "bisque",
      22: "blanchedalmond",
      23: "blueviolet",
      24: "burlywood",
    };
    return colorMapping[id] || "gray";
  }

  async function getData() {
    try {
      const response = await axios.get("/api/data");
      const data = response.data.data;

      if (Array.isArray(data) && data.length > 0) {
        setProvincias(data);
      } else {
        console.error("No data found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchGeoJSON() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/jpmarindiaz/geo-collection/master/ecu/ecuador.geojson"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setGeoData(data);
    } catch (error) {
      console.error("Error fetching the GeoJSON data: ", error);
    }
  }

  function proyect(to) {
    router.push(to);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        await getData();
        await fetchGeoJSON();
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  if (!dataLoaded) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#C0C0C0", // Color plateado
          zIndex: 9999, // Asegura que se muestre encima de todo
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            width="100"
            height="100"
            style={{
              shapeRendering: "auto",
              display: "block",
              background: "transparent",
            }}
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <g transform="rotate(0 50 50)">
                <rect
                  fill="#fe718d"
                  height="12"
                  width="6"
                  ry="6"
                  rx="3"
                  y="24"
                  x="47"
                >
                  <animate
                    repeatCount="indefinite"
                    begin="-0.9166666666666666s"
                    dur="1s"
                    keyTimes="0;1"
                    values="1;0"
                    attributeName="opacity"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(30 50 50)">
                <rect
                  fill="#fe718d"
                  height="12"
                  width="6"
                  ry="6"
                  rx="3"
                  y="24"
                  x="47"
                >
                  <animate
                    repeatCount="indefinite"
                    begin="-0.8333333333333334s"
                    dur="1s"
                    keyTimes="0;1"
                    values="1;0"
                    attributeName="opacity"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(60 50 50)">
                <rect
                  fill="#fe718d"
                  height="12"
                  width="6"
                  ry="6"
                  rx="3"
                  y="24"
                  x="47"
                >
                  <animate
                    repeatCount="indefinite"
                    begin="-0.75s"
                    dur="1s"
                    keyTimes="0;1"
                    values="1;0"
                    attributeName="opacity"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(90 50 50)">
                <rect
                  fill="#fe718d"
                  height="12"
                  width="6"
                  ry="6"
                  rx="3"
                  y="24"
                  x="47"
                >
                  <animate
                    repeatCount="indefinite"
                    begin="-0.6666666666666666s"
                    dur="1s"
                    keyTimes="0;1"
                    values="1;0"
                    attributeName="opacity"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(120 50 50)">
                <rect
                  fill="#fe718d"
                  height="12"
                  width="6"
                  ry="6"
                  rx="3"
                  y="24"
                  x="47"
                >
                  <animate
                    repeatCount="indefinite"
                    begin="-0.5833333333333334s"
                    dur="1s"
                    keyTimes="0;1"
                    values="1;0"
                    attributeName="opacity"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(150 50 50)">
                <rect
                  fill="#fe718d"
                  height="12"
                  width="6"
                  ry="6"
                  rx="3"
                  y="24"
                  x="47"
                >
                  <animate
                    repeatCount="indefinite"
                    begin="-0.5s"
                    dur="1s"
                    keyTimes="0;1"
                    values="1;0"
                    attributeName="opacity"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(180 50 50)">
                <rect
                  fill="#fe718d"
                  height="12"
                  width="6"
                  ry="6"
                  rx="3"
                  y="24"
                  x="47"
                >
                  <animate
                    repeatCount="indefinite"
                    begin="-0.4166666666666667s"
                    dur="1s"
                    keyTimes="0;1"
                    values="1;0"
                    attributeName="opacity"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(210 50 50)">
                <rect
                  fill="#fe718d"
                  height="12"
                  width="6"
                  ry="6"
                  rx="3"
                  y="24"
                  x="47"
                >
                  <animate
                    repeatCount="indefinite"
                    begin="-0.3333333333333333s"
                    dur="1s"
                    keyTimes="0;1"
                    values="1;0"
                    attributeName="opacity"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(240 50 50)">
                <rect
                  fill="#fe718d"
                  height="12"
                  width="6"
                  ry="6"
                  rx="3"
                  y="24"
                  x="47"
                >
                  <animate
                    repeatCount="indefinite"
                    begin="-0.25s"
                    dur="1s"
                    keyTimes="0;1"
                    values="1;0"
                    attributeName="opacity"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(270 50 50)">
                <rect
                  fill="#fe718d"
                  height="12"
                  width="6"
                  ry="6"
                  rx="3"
                  y="24"
                  x="47"
                >
                  <animate
                    repeatCount="indefinite"
                    begin="-0.16666666666666666s"
                    dur="1s"
                    keyTimes="0;1"
                    values="1;0"
                    attributeName="opacity"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(300 50 50)">
                <rect
                  fill="#fe718d"
                  height="12"
                  width="6"
                  ry="6"
                  rx="3"
                  y="24"
                  x="47"
                >
                  <animate
                    repeatCount="indefinite"
                    begin="-0.08333333333333333s"
                    dur="1s"
                    keyTimes="0;1"
                    values="1;0"
                    attributeName="opacity"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(330 50 50)">
                <rect
                  fill="#fe718d"
                  height="12"
                  width="6"
                  ry="6"
                  rx="3"
                  y="24"
                  x="47"
                >
                  <animate
                    repeatCount="indefinite"
                    begin="0s"
                    dur="1s"
                    keyTimes="0;1"
                    values="1;0"
                    attributeName="opacity"
                  ></animate>
                </rect>
              </g>
            </g>
          </svg>
          <p
            style={{
              fontSize: "18px",
              color: "#333",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            Cargando datos...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/3 xl:w-1/4 bg-gray-900">
        <div className="flex flex-col h-full mt-2">
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
              zoom={8}
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
                        color: getColor(feature.properties.id_prov),
                        weight: 1,
                        fillOpacity: 0.5,
                      })}
                      onEachFeature={(feature, layer) => {
                        if (feature.properties && feature.properties.name) {
                          layer.bindPopup(`<b>${feature.properties.name}</b>`);
                        }
                      }}
                    />
                  )}
                </>
              )}
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
}
