"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import dynamic from "next/dynamic";
import SwitchButton from "../../../components/buttonswitch";
const Map = dynamic(() => import("../../../components/map"), { ssr: false });
const DEFAULT_CENTER = [-2.518898, -79.086898];

export default function Canar() {
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
  const [showTable, setShowTable] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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
      1: "",
      2: "",
      3: "indigo",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: "",
      17: "",
      18: "",
      19: "",
      20: "",
      21: "",
      22: "",
      23: "",
      24: "",
    };
    return colorMapping[id] || "#cccccc"; // Gris claro por defecto
  }

  async function getData() {
    try {
      const response = await axios.get("/api/canarencuesta");
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

  const handleButtonClick = () => {
    setShowTable(prev => !prev); // Alterna la visibilidad de la tabla
    setShowPopup(prev => !prev); // Alterna la visibilidad del popup
  };

  const handleDescriptionToggle = () => {
    setShowDescription((prev) => !prev); // Alterna la visibilidad de la descripción
  };

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
    <div className="flex flex-col lg:flex-row">
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
            <h1 className="text-lg font-semibold">
              Geovisor Interactivo Empresarial de la Provincia de Cañar
            </h1>
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
              <button
                onClick={handleDescriptionToggle}
                className="bg-green-500 text-white py-2 px-4 rounded mb-4"
              >
                {showDescription
                  ? "Ocultar Descripción"
                  : "Mostrar Descripción"}
              </button>

              {showDescription && (
                <div>
                  <p>
                    Este geovisor interactivo de la provincia de Cañar permite
                    visualizar información geográfica y estadística detallada
                    sobre diversas empresas presentes en la región. La
                    herramienta ofrece datos precisos sobre sectores clave como
                    agricultura, comercio, mano de obra, agropecuaria,
                    biocombustibles, y producción forestal, entre otros. Este
                    recurso es ideal para investigadores, planificadores y
                    tomadores de decisiones que buscan comprender mejor el
                    panorama económico y empresarial de la provincia.
                  </p>
                </div>
              )}
            </div>
            {/* Botones */}
            <div className="flex flex-col space-y-2 text-white">
              Mostrar Datos:
            </div>
            <SwitchButton label="Botón 1" onClick={handleButtonClick} />
            <SwitchButton
              label="Botón 2"
              onClick={() => setBoton2Visible(!boton2Visible)}
            />
            <SwitchButton
              label="Botón 3"
              onClick={() => setBoton3Visible(!boton3Visible)}
            />
          </div>

          {/* Tabla */}
          {showTable && (
            <div className="p-4 bg-gray-800 text-white shadow-md">
              <h2 className="text-xl font-semibold mb-2">Tabla de Datos</h2>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Nombre</th>
                    <th className="text-left">Canton</th>
                    <th className="text-left">Parroquia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Empresa 1</td>
                    <td>Descripción de la empresa 1.</td>
                    <td>Ubicación de la empresa 1.</td>
                  </tr>
                  <tr>
                    <td>Empresa 2</td>
                    <td>Descripción de la empresa 2.</td>
                    <td>Ubicación de la empresa 2.</td>
                  </tr>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          )}

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
              zoom={11.5}
              width="full"
              height="800"
            >
              {({ TileLayer, GeoJSON, Popup, Circle }) => (
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
                  <Circle
                    center={[-2.514981, -79.188904]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 1</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.556133, -78.934323]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 2</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.564466, -78.935704]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 3</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.55482, -78.941198]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 4</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.542629, -78.876681]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 5</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.459613, -79.115746]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 6</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.511664, -79.185192]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 7</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.52619, -79.133193]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 8</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.544981, -78.873027]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 9</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.50545, -78.926276]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 10</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.559385, -78.938931]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 11</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.525231, -79.127743]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 12</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.545753, -78.879921]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 13</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.547114, -78.87556]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 14</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.548304, -78.878826]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 15</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.55161, -78.936559]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 16</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.508569, -78.931051]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 17</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.514464, -78.920633]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 18</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.562911, -78.942413]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 19</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.569299, -78.938164]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 20</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.522549, -79.131214]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 21</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.557451, -78.923473]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 22</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.546956, -78.954441]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 23</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.54803, -78.983024]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 24</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.513734, -78.924774]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 25</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.555402, -78.910724]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 26</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.540817, -78.881305]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 27</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.550817, -78.876638]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 28</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.457909, -79.004842]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 29</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.541225, -78.871885]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 30</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.515235, -79.328755]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 31</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.584557, -78.873425]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 32</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.54578, -78.87123]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 33</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.463697, -79.00879]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 34</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.538125, -78.941586]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 35</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.539272, -78.868394]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 36</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.436964, -79.053755]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 37</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.434788, -79.048905]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 38</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.548352, -78.871375]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 39</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.538792, -78.875345]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 40</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.559306, -78.929795]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 41</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  <Circle
                    center={[-2.563743, -78.929581]}
                    pathOptions={{ color: "#50C878", fillColor: "#72FE9F" }}
                    radius={300}
                  >
                    <Popup>
                      <div>
                        <h2 className="text-lg font-semibold">Empresa 42</h2>
                        <p>Descripción de la empresa 1.</p>
                      </div>
                    </Popup>
                  </Circle>

                  {/* Popup con la tabla de datos */}
                  {showPopup && (
                    <Popup position={[-2.633278, -79.026542]}>
                    <div className="p-2 bg-gray-800 text-white shadow-md max-w-xs">
                      <h2 className="text-lg font-semibold mb-2">Tabla de Datos</h2>
                      <table className="w-full text-sm">
                          <thead>
                            <tr>
                              <th className="text-left">Nombre</th>
                              <th className="text-left">Canton</th>
                              <th className="text-left">Parroquia</th>
                            </tr>
                          </thead>
                          <tbody>
                            {provincias.map((provincia) => (
                              <tr key={provincia.id}>
                                <td>{provincia.nombre}</td>
                                <td>{provincia.canton}</td>
                                <td>{provincia.parroquia}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Popup>
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
