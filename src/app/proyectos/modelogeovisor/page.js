"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Map from "../../../components/map";
import SwitchButton from "../../../components/buttonswitch";

const DEFAULT_CENTER = [-1.598653, -78.180479];

export default function modelogeovisor() {
  const router = useRouter();
  const [boton1Visible, setBoton1Visible] = useState(false);
  const [boton2Visible, setBoton2Visible] = useState(false);
  const [boton3Visible, setBoton3Visible] = useState(false);
  const [isTextVisible, setTextVisibility] = useState(false);
  const [provincias, setProvincias] = useState([]);
  const [poblacion, setPoblacion] = useState([]);
  const toggleTextVisibility = () => {
    setTextVisibility(!isTextVisible);
  };
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  const handleDownloadClick = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/poblacion", {
        responseType: "blob", // Esto configura la respuesta como un blob
      });

      if (response.status === 200) {
        const blob = new Blob([response.data], { type: "text/csv" });

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "poblacion.csv";

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

  // Asociar datos de población con las capas GeoJSON
  const provinciasConPoblacion = provincias.map((provinciaGeoJSON) => {
    const idProvGeoJSON = provinciaGeoJSON.properties.id_prov;
    const poblacionData = poblacion
      ? poblacion.find((data) => data.id_provincia === idProvGeoJSON)
      : null;

    return {
      ...provinciaGeoJSON,
      properties: {
        ...provinciaGeoJSON.properties,
        poblacion: poblacionData ? poblacionData.poblacion_prov : 0,
      },
    };
  });

  async function getPoblacion() {
    try {
      const response = await axios.get("http://localhost:3000/api/poblacion");
      const poblacionData = response.data.data;

      if (Array.isArray(poblacionData) && poblacionData.length > 0) {
        // Verifica que poblacionData sea un array no vacío
        setPoblacion(poblacionData);
      } else {
        console.error("No se encontraron datos de población.");
      }
    } catch (error) {
      console.error("Error al obtener datos de población:", error);
    }
  }

  function proyect(to) {
    router.push(to);
  }

  async function getcapas() {
    return await axios.get(
      //GEOJSON CANTONES
      //"https://s3.us-east-1.amazonaws.com/hdx-production-filestore/resources/6fa37b41-ad28-40a6-9641-3b4efd4dbe13/ecuador.geojson?AWSAccessKeyId=AKIAXYC32WNAS5V67V55&Signature=qZS93nRSiV9zACfUmIO0atkwdq0%3D&Expires=1696956756"
      //GEOJSON PROVINCIAS
      "https://raw.githubusercontent.com/jpmarindiaz/geo-collection/master/ecu/ecuador.geojson"
    );
  }

  getcapas().then((res) => {
    let prov = res.data.features;
    if (provincias.length == 0) {
      setProvincias(prov);
      console.log(prov);
    }
  });

  getPoblacion().then((res) => {
    let result = res;
    console.log(result);
  });

  useEffect(() => {
    async function fetchData() {
      try {
        await Promise.all([getcapas(), getPoblacion()]);

        // Cuando ambas solicitudes se completen, establecemos dataLoaded en true
        setDataLoaded(true);
      } catch (error) {
        console.error("Error al obtener datos:", error);
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
          backgroundColor: "#f0f0f0", // Color de fondo
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
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-arrow-clockwise mb-3"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
          </svg>
          <p>Cargando datos...</p>
        </div>
      </div>
    );
  }

  return (
    <main style={{ scrollBehavior: "smooth" }}>
      <div className="flex flex-wrap justify-center p-2">
        <div className="h-[calc(100vh-_80px)] w-[410px] overflow-hidden overflow-y-auto rounded-lg bg-white p-3 shadow-md">
          {/* Contenido de la primera columna */}
          <div className="flex">
            <div className="w-[400px]">
              <div className="flex flex-col">
                <button
                  className="p-2 text-gray-500 hover:underline mb-2 font-medium mb-2 flex items-center space-x-2"
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

                <div className="border-b border-gray-300 pb-1">
                  <h2 className="text-base font-semibold text-black mb-1">
                    GeoVisor Población del Ecuador año 2020
                  </h2>
                  <button
                    className="text-red-400 hover:underline font-medium mb-2"
                    onClick={toggleTextVisibility}
                  >
                    {isTextVisible
                      ? "Ocultar Descripcion"
                      : "Mostrar Descripcion"}
                  </button>
                  {isTextVisible && (
                    <div className="mt-2 text-gray-700">
                      {/* Aquí coloca el texto que deseas mostrar u ocultar */}
                      Este proyecto consiste en una herramienta interactiva y
                      visualmente impactante que tiene como objetivo principal
                      proporcionar una perspectiva detallada y accesible sobre
                      los datos relacionados con la población en el país de
                      Ecuador. Este geovisor aprovecha las capacidades de la
                      tecnología geoespacial y la visualización de datos para
                      ofrecer a los usuarios una comprensión profunda de a
                      demografía ecuatoriana en el año 2020. A través de mapas
                      interactivos y gráficos informativos, los usuarios podrán
                      explorar de manera intuitiva la distribución geográfica de
                      la población
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <ul className="space-y-3">
                    {/* Capas */}

                    <h1 className="text-2xl font-semibold mb-5">Capas</h1>
                    <p className="leading-relaxed mb-5">
                      Población Total del Ecuador
                    </p>
                    {/* Botón 1 */}
                    <div className="mb-4">
                      <SwitchButton
                        isActive={boton1Visible}
                        onClick={() => setBoton1Visible(!boton1Visible)}
                      />
                    </div>
                    <p className="leading-relaxed mb-5">
                      Población por cada provincia
                    </p>
                    {/* Botón 2 */}
                    <div className="mb-4">
                      <SwitchButton
                        isActive={boton2Visible}
                        onClick={() => setBoton2Visible(!boton2Visible)}
                      />
                    </div>
                    <p className="leading-relaxed mb-5">
                      Población de Zona no delimitada
                    </p>
                    {/* Botón 3 */}
                    <div className="mb-4">
                      <SwitchButton
                        isActive={boton3Visible}
                        onClick={() => setBoton3Visible(!boton3Visible)}
                      />
                    </div>
                  </ul>
                </div>
                {/* Botón de Descarga (Añadido al final de la primera columna de capas) */}
                <button
                  className="mt-10 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  onClick={handleDownloadClick}
                >
                  Descargar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[calc(100vh-_80px)] overflow-hidden rounded-lg bg-white shadow-md">
          {/* Contenido de la segunda columna */}
          <div className="">
            <div className="">
              <div className="leaflet-container h-full w-full">
                <div className="">
                  <Map
                    selectedProvince={selectedProvince}
                    setSelectedProvince={setSelectedProvince}
                    className=" shadow-xl"
                    center={DEFAULT_CENTER}
                    zoom={6.5}
                    width="full"
                    height="800"
                  >
                    {({
                      TileLayer,
                      GeoJSON,
                    }) => (
                      <>
                        <TileLayer
                          //url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                          //url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                          //url="https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png"
                          //url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"  // Mapa claro
                          //url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" // Mapa satelital
                          //url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"  // Mapa topográfico
                          //url="https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg" // Mapa acuarela
                          //url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png" // Mapa wikimedia
                          //url="https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" // Mapa carto
                          //url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png" // Mapa oscuro
                          //url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}" // Mapa callejero
                          //url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png" // Mapa toner

                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />

                        <GeoJSON
                          key="provincias"
                          data={provinciasConPoblacion}
                          style={(feature) => ({
                            color:
                              selectedProvince === feature ? "red" : "gray",
                            weight: selectedProvince === feature ? 1 : 0.6,
                            fillColor: getColor(feature.properties.id_prov), // Asigna un color basado en el id
                            fillOpacity:
                              selectedProvince === feature ? 0.8 : 0.4,
                          })}
                          onEachFeature={(feature, layer) => {
                            layer.on("click", () => {
                              setSelectedProvince(feature);
                            });
                          }}
                        />
                      </>
                    )}
                  </Map>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[calc(100vh-_80px)] w-[300px] overflow-hidden overflow-y-auto rounded-lg bg-white p-3 shadow-md">
          {/* Contenido de la tercera columna */}
          <div className="border-b border-gray-300 pb-1">
            <h3 className="text-xl text-base font-semibold text-black mb-1">
              Tablas
            </h3>
          </div>

          {/* Tabla 1 */}
          <div className="bg-white rounded-t-lg p-1 my-6 ">
            {/* Encabezado de la tabla 1 */}
            <div className="bg-red-500 text-white text-base p-2 rounded-t-lg ">
              Población Total del Ecuador
            </div>
            {/* Cuerpo de la tabla 1 */}
            <div className="bg-white rounded-b-lg p-5 border-gray-300 border">
              {/* Contenido de la tabla 1 */}
              {boton1Visible && (
                <p>
                  En el país del Ecuador la población <strong>TOTAL</strong> es
                  de 17510643 habitantes.
                </p>
              )}
            </div>
          </div>

          {/* Tabla 2 */}
          <div className="bg-white rounded-t-lg p-1 my-6">
            {/* Encabezado de la tabla 2 */}
            <div className="bg-red-500 text-white text-base p-2 rounded-t-lg">
              Población por cada provincia
            </div>
            {/* Cuerpo de la tabla 2 */}
            <div className="bg-white rounded-b-lg p-5 border-gray-300 border">
              {/* Contenido de la tabla 2 */}
              {boton2Visible && (
                <p>
                  <strong>AZUAY:</strong> 881394 <br />
                  <strong>BOLIVAR:</strong> 209933 <br />
                  <strong>CAÑAR:</strong> 281396 <br />
                  <strong>CARCHI:</strong> 186869 <br />
                  <strong>COTOPAXI:</strong> 488716 <br />
                  <strong>CHIMBORAZO:</strong> 524004 <br />
                  <strong>EL ORO:</strong> 715751 <br />
                  <strong>ESMERALDAS:</strong> 643654 <br />
                  <strong>GUAYAS:</strong> 4387434 <br />
                  <strong>IMBABURA:</strong> 476257 <br />
                  <strong>LOJA:</strong> 521154 <br />
                  <strong>LOS RIOS:</strong> 921763 <br />
                  <strong>MANABI:</strong> 1562079 <br />
                  <strong>MORONA SANTIAGO:</strong> 196535 <br />
                  <strong>NAPO:</strong> 133705 <br />
                  <strong>PASTAZA:</strong> 114202 <br />
                  <strong>PICHINCHA:</strong> 3228233 <br />
                  <strong>TUNGURAHUA:</strong> 590600 <br />
                  <strong>ZAMORA CHINCHIPE:</strong> 120416 <br />
                  <strong>GALAPAGOS:</strong> 33042 <br />
                  <strong>SUCUMBIOS:</strong> 230503 <br />
                  <strong>ORELLANA:</strong> 161338 <br />
                  <strong>SANTO DOMINGO DE LOS TSACHILAS:</strong> 458580 <br />
                  <strong>SANTA ELENA:</strong> 401178
                </p>
              )}
            </div>
          </div>

          {/* Tabla 3 */}
          <div className="bg-white rounded-t-lg p-1 my-6 ">
            {/* Encabezado de la tabla 1 */}
            <div className="bg-red-500 text-white text-base p-2 rounded-t-lg ">
              Zona no delimitada
            </div>
            {/* Cuerpo de la tabla 1 */}
            <div className="bg-white rounded-b-lg p-5 border-gray-300 border">
              {/* Contenido de la tabla 1 */}
              {boton3Visible && (
                <p>
                  En el país del Ecuador la población de{" "}
                  <strong>ZONA NO DELIMITADA</strong> es de 41907 habitantes.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
