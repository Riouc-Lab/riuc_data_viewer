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
  const [showTable2, setShowTable2] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


  const toggleTextVisibility = () => {
    setTextVisibility(!isTextVisible);
  };

  const handleZoom = () => {
    const zoomLevel = window.devicePixelRatio;
    setIsZoomed(zoomLevel > 1);
  };

  const handleDownloadClick = async () => {
    try {
      const response = await axios.get("http://192.168.10.11:8484/api/canarencuesta", {
        responseType: "blob", // Esto configura la respuesta como un blob
      });

      if (response.status === 200) {
        const blob = new Blob([response.data], { type: "text/csv" });

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "encuesta_Cañar.csv";

        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        console.error("Error al descargar los datos. Respuesta no exitosa.");
      }
    } catch (error) {
      console.error("Error al descargar los datos:", error);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleZoom);
    handleZoom();

    return () => {
      window.removeEventListener("resize", handleZoom);
    };
  }, []);

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
    setShowPopup((prev) => !prev); // Alterna la visibilidad del popup
  };

  const handleButtonClick1 = () => {
    setShowTable((prev) => !prev); // Alterna la visibilidad de la tabla
  };

  const handleButtonClick2 = () => {
    setShowTable2((prev) => !prev); // Alterna la visibilidad de la tabla
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
    <div className="flex flex-col lg:flex-row p-2 bg-black">
      <div className="w-full lg:w-1/3 xl:w-1/4 bg-gray-900 overflow-hidden overflow-y-auto rounded-lg">
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
              Mostrar Tabla de Datos:
            </div>
            <SwitchButton label="Botón 1" onClick={handleButtonClick} />
            <div className="flex flex-col space-y-2 text-white">
              Mostrar Numero total de empresas por Cantón:
            </div>
            <SwitchButton label="Botón 2" onClick={handleButtonClick1} />
            <div className="flex flex-col space-y-2 text-white">
              Mostrar Numero total de empresas por Parroquia:
            </div>
            <SwitchButton label="Botón 3" onClick={handleButtonClick2} />
          </div>

          {/* Tabla 1 */}
          {showTable && (
            <div className="p-4 bg-gray-800 text-white shadow-md">
              <h2 className="text-xl font-semibold mb-2">
                Empresas por Cantón
              </h2>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Canton</th>
                    <th className="text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CAÑAR</td>
                    <td>36</td>
                  </tr>
                  <tr>
                    <td>TAMBO</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>TRONCAL</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>SUSCAL</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Tabla 2 */}
          {showTable2 && (
            <div className="p-4 bg-gray-800 text-white shadow-md">
              <h2 className="text-xl font-semibold mb-2">
                Empresas por Parroquia
              </h2>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Parroquia</th>
                    <th className="text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CAÑAR</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>SAN ANTONIO</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>INGAPIRCA</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>DUCUR</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>GUALLETURO</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>TAMBO</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>SAN RAFAEL</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>YANALLPA</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>HONORATO VAZQUEZ</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>ZHUD</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>SUSCAL</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>ZHUCAY</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>JUNCAL</td>
                    <td>2</td>
                  </tr>
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
      <div className="h-[calc(100vh-80px)] w-full">
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
                        <h2 className="text-lg font-semibold">AGRO ZHUCAY</h2>
                        <p>COMERCIO DE CACAO EN GRANO Y VIVERO</p>
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
                        <h2 className="text-lg font-semibold">ASO PROAFUG</h2>
                        <p>ANIMALES MENORES</p>
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
                        <h2 className="text-lg font-semibold">ASORIC</h2>
                        <p>RECICLAJE</p>
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
                        <h2 className="text-lg font-semibold">COOPERATIVA DE PRODUCCIÓN AGROPECUARIA VIRGEN DE LA NUBE	</h2>
                        <p>NO PRODUCE</p>
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
                        <h2 className="text-lg font-semibold">COOPERATIVA AGROPECUARIA SAN ISIDRO DE VENDELECHE	</h2>
                        <p>PAPAS, MELLOCO</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACION DE CAÑACULTORES DE LA PROVINCIA DEL CAÑAR	</h2>
                        <p>BIOCOMBUSTIBLE</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN COMUNITARIA PROGRESISTA	</h2>
                        <p>DERIVADOS DE CACAO</p>
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
                        <h2 className="text-lg font-semibold">COOPERATIVA DE PRODUCCIÓN AGRÍCOLA	</h2>
                        <p>TRIGO, CEBADA, MAIZ</p>
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
                        <h2 className="text-lg font-semibold">SANTA TERESITA HUAIRA	</h2>
                        <p>LECHE</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACION SUMAK MIKUNA</h2>
                        <p>AGROECOLÓGICOS</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACION CHUQUIRAHURA	</h2>
                        <p>LECHE CRUDA</p>
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
                        <h2 className="text-lg font-semibold">COOPERATIVA DE PRODUCCIÓN AGROPECUARIA SAN ANDRÉS DE MALAL	</h2>
                        <p>PRODUCCIÓN AGROPECUARIA Y GANADERÍA</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN EL CISNE	</h2>
                        <p>VENTA DE LECHE CRUDA</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN DE PRODUCCIÓN GANADERA TOMAHUAYCO Y SIYACOCHA	</h2>
                        <p>GANADOS</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN DE PRODUCCIÓN GANADERA SISID	</h2>
                        <p>TRANSPORTE DE LECHE CRUDA</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN MUSHUK YUYAY	</h2>
                        <p>DERIVADOS DE QUINUA, CEBADA, AMARANTO, TRIGO, HABA</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACION DE GANADEROS DE PRODUCCION CULEBRILLAS	</h2>
                        <p>PRODUCCION DE LECHE</p>
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
                        <h2 className="text-lg font-semibold">AGROACAGUA	</h2>
                        <p>LECHE CRUDA</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACION DE AGRONOMOS DEL CAÑAR	</h2>
                        <p>PLANTAS EXOTICAS FORESTALES NATIVAS</p>
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
                        <h2 className="text-lg font-semibold">TEJIDOS Y ARTESANIAS ATAHUALPA	</h2>
                        <p>ARTESANIAS</p>
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
                        <h2 className="text-lg font-semibold">LUM	</h2>
                        <p>AGRICULTURA Y GANADERIA</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN DE PRODUCCIÓN AGROPECUARIA JUNCAL	</h2>
                        <p>frutos, cultivos, herbaceos</p>
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
                        <h2 className="text-lg font-semibold">COOPERATIVA 	</h2>
                        <p>Cultivos </p>
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
                        <h2 className="text-lg font-semibold">ASORIC 	 </h2>
                        <p>Procesamiento de desechos</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN DE PRODUCCIÓN GANADERA DE COLMENA ASOPROGALACOL 	 </h2>
                        <p>Lácteos</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN DE TRABAJADORES AGRÍCOLAS AUTÓNOMOS  “MANUEL FIDER”	 </h2>
                        <p>Leche, queso, productos agrícolas</p>
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
                        <h2 className="text-lg font-semibold">ASOPROGASI 	</h2>
                        <p>Recolección y venta de leche cruda</p>
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
                        <h2 className="text-lg font-semibold">ASOPROGASICHI 	</h2>
                        <p>Recolección de leche cruda</p>
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
                        <h2 className="text-lg font-semibold"> COOPERATIVA JAIME ROLDOS AGUILERA </h2>
                        <p>	Producción agropecuaria </p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN DE PRODUCCIÓN ARTESANAL ÑUKA ALLPA </h2>
                        <p>Tejidos.</p>
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
                        <h2 className="text-lg font-semibold">CHOCOZHU 	 </h2>
                        <p>Chocolate</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN DE TRABAJADORES AGRÍCOLAS CUNGAPIE	 </h2>
                        <p>Alimentos- bebidas</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN PRODUCCIÓN GANADERA “ SAN JOSÉ DE MAZANQUI”	 </h2>
                        <p>Leche</p>
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
                        <h2 className="text-lg font-semibold">SAN LUIS DE CHOCAR	</h2>
                        <p>Enfriamiento de leche </p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN VIRGEN DE PILAGATOS 	</h2>
                        <p>Criaderos de pollos </p>
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
                        <h2 className="text-lg font-semibold">LA DOLOROSA DE LLACTAHUAYCO 	</h2>
                        <p>Enfriadora de leche </p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN CAMPESINA DE PEQUEÑOS PRODUCTORES CHUYA MIKUNA 	 </h2>
                        <p>Productos agroecológicos</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN DE SERVICIOS DE RECICLAJE ARRAYAN ASOSEREA	 </h2>
                        <p>Reciclaje de botellas</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN DE PRODUCTORES AGROECOLÓGICOS QUAPAQ ÑAN 	</h2>
                        <p>Cultivo de hortalizas agroecológicas y fideos Pallarina</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN DE PRODUCCIÓN GANADERA CHUGUIN LAC	</h2>
                        <p>Enfriadora de leche</p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN DE ARTESANAS MUSHUK PAKARY	</h2>
                        <p>vestimenta típica cañari </p>
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
                        <h2 className="text-lg font-semibold">ASOCIACIÓN DE SERVICIOS DE LIMPIEZA DEL CAÑAR ASOSERLICAR	Servicio de lavado y accesorios para vehículos </h2>
                        <p>Servicio de lavado y accesorios para vehículos</p>
                      </div>
                    </Popup>
                  </Circle>

                  {/* Popup con la tabla de datos */}
                  {showPopup && (
                    <Popup position={[-2.633278, -79.026542]}>
                      <div className="p-2 bg-gray-800 text-white shadow-md max-w-xs">
                        <h2 className="text-lg font-semibold mb-2">
                          Tabla de Datos
                        </h2>
                        <table className="w-full text-sm">
                          <thead>
                            <tr>
                              <th className="text-left">Nombre</th>
                              <th className="text-left">Canton</th>
                              <th className="text-left">Parroquia</th>
                            </tr>
                          </thead>
                          <tbody>
                            {provincias.map((provincia, index) => (
                              <tr
                                key={index}
                                className="border-b border-gray-500"
                              >
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
