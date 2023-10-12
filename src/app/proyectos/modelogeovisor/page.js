"use client";
import Map from "@components/map";
import styles from "../../globals.css";
import React, { useState, useEffect } from "react";
import SwitchButton from "@components/buttonswitch";
import { usePathname, useRouter } from "next/navigation";
import capas from "/src/components/capas_provincias_ec.js";
import axios from "axios";
const DEFAULT_CENTER = [-1.598653, -78.180479];

export default function modelogeovisor() {
  const [highlightedLayer, setHighlightedLayer] = useState(null);
  const router = useRouter();
  const [circle1Visible, setCircle1Visible] = useState(false);
  const [circle2Visible, setCircle2Visible] = useState(false);
  const [circle3Visible, setCircle3Visible] = useState(false);
  const [isTextVisible, setTextVisibility] = useState(false);
  const [provincias, setProvincias] = useState([]);
  const toggleTextVisibility = () => {
    setTextVisibility(!isTextVisible);
  };

  function proyect(to) {
    router.push(to);
  }

  async function getcapas() {
    return await axios.get(
      //"https://s3.us-east-1.amazonaws.com/hdx-production-filestore/resources/6fa37b41-ad28-40a6-9641-3b4efd4dbe13/ecuador.geojson?AWSAccessKeyId=AKIAXYC32WNAS5V67V55&Signature=qZS93nRSiV9zACfUmIO0atkwdq0%3D&Expires=1696956756"
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

  //funcion para resaltar provincias
  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    });
    layer.bindPopup("<p>Población: " + feature.properties.Poblacion + "</p>");
  }

  function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      weight: 3,
      color: "red",
      dashArray: "",
      fillOpacity: 0.5,
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }

    setHighlightedLayer(layer);
  }

  function resetHighlight(e) {
    var layer = e.target;
    layer.setStyle({
      weight: 0.5,
      color: "purple",
      fillColor: "purple",
      fillOpacity: 0.1,
    });
  }

  return (
    <main style={{ scrollBehavior: "smooth" }}>
      <div className="flex space-x-3 p-2">
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
                  <h2 className="text-base font-medium text-black mb-1">
                    GeoVisor de Canasta Básica
                  </h2>
                  <button
                    className="text-red-400 hover:underline font-medium"
                    onClick={toggleTextVisibility}
                  >
                    {isTextVisible
                      ? "Ocultar Descripcion"
                      : "Mostrar Descripcion"}
                  </button>
                  {isTextVisible && (
                    <div className="mt-2 text-gray-700 text-justify">
                      {/* Aquí coloca el texto que deseas mostrar u ocultar */}
                      Este proyecto consiste en una herramienta interactiva y
                      visualmente impactante que tiene como objetivo principal
                      proporcionar una perspectiva detallada y accesible sobre
                      los datos relacionados con la canasta básica en el país de
                      Ecuador a lo largo de diversos años. Este geovisor
                      aprovecha las capacidades de la tecnología geoespacial y
                      la visualización de datos para ofrecer a los usuarios una
                      comprensión profunda de cómo los precios y la
                      disponibilidad de los elementos esenciales en la canasta
                      básica han evolucionado con el tiempo en diferentes
                      regiones del país.
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <ul className="space-y-3">
                    {/* Capas */}

                    <h1 className="text-2xl font-semibold mb-5">Capas</h1>
                    <p className="leading-relaxed mb-5">
                      Marcador ciudad de Cuenca
                    </p>
                    {/* Botón 1 */}
                    <div className="mb-4">
                      <SwitchButton
                        isActive={circle1Visible}
                        onClick={() => setCircle1Visible(!circle1Visible)}
                      />
                    </div>
                    <p className="leading-relaxed mb-5">
                      Marcador ciudad de Guayaquil
                    </p>
                    {/* Botón 2 */}
                    <div className="mb-4">
                      <SwitchButton
                        isActive={circle2Visible}
                        onClick={() => setCircle2Visible(!circle2Visible)}
                      />
                    </div>
                    <p className="leading-relaxed mb-5">
                      Marcador ciudad de Quito
                    </p>
                    {/* Botón 3 */}
                    <div className="mb-4">
                      <SwitchButton
                        isActive={circle3Visible}
                        onClick={() => setCircle3Visible(!circle3Visible)}
                      />
                    </div>
                    <p className="leading-relaxed mb-5">Capa 4</p>
                    {/* Botón 4 */}
                    <div className="mb-4">
                      <SwitchButton />
                    </div>
                    <p className="leading-relaxed mb-5">Capa 5</p>
                    {/* Botón 5 */}
                    <div className="mb-4">
                      <SwitchButton />
                    </div>
                  </ul>
                </div>
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
                    className=" shadow-xl"
                    center={DEFAULT_CENTER}
                    zoom={6.5}
                    width="full"
                    height="800"
                    //dragging={false} // Deshabilitar arrastrar
                    //doubleClickZoom={false} // Deshabilitar zoom con doble clic
                    //scrollWheelZoom={false} // Deshabilitar zoom con rueda de desplazamiento
                    //touchZoom={false} // Deshabilitar zoom táctil
                    //tap={false} // Deshabilitar toques
                    //zoomControl={false} // Deshabilitar control de zoom
                  >
                    {({
                      TileLayer,
                      Marker,
                      Popup,
                      Circle,
                      Polygon,
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
                          data={provincias}
                          onEachFeature={onEachFeature}
                          style={() => ({
                            color: "purple",
                            weight: 0.5,
                            fillColor: "purple",
                            fillOpacity: 0.1,
                          })}
                        />

                        <Circle
                          center={[-2.898612, -79.000625]}
                          radius={30000}
                          pathOptions={{
                            color: "red",
                            fillOpacity: circle1Visible ? 0.3 : 0, // Ajusta la opacidad del relleno
                            opacity: circle1Visible ? 1 : 0, // Ajusta la opacidad del borde
                          }}
                        >
                          <Popup>Ciudad de Cuenca.</Popup>
                        </Circle>
                        <Circle
                          center={[-2.148725, -79.892557]}
                          radius={30000}
                          pathOptions={{
                            color: "blue",
                            fillOpacity: circle2Visible ? 0.3 : 0, // Ajusta la opacidad del relleno
                            opacity: circle2Visible ? 1 : 0, // Ajusta la opacidad del borde
                          }}
                        >
                          <Popup>Ciudad de Guayaquil.</Popup>
                        </Circle>
                        <Circle
                          center={[-0.171487, -78.440852]}
                          radius={30000}
                          pathOptions={{
                            color: "green",
                            fillOpacity: circle3Visible ? 0.3 : 0, // Ajusta la opacidad del relleno
                            opacity: circle3Visible ? 1 : 0, // Ajusta la opacidad del borde
                          }}
                        >
                          <Popup>Ciudad de Quito.</Popup>
                        </Circle>
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
            <h3 className="text-xl text-base font-medium text-black mb-1">
              Tablas
            </h3>
          </div>

          {/* Tabla 1 */}
          <div className="bg-white rounded-t-lg p-1 my-6 ">
            {/* Encabezado de la tabla 1 */}
            <div className="bg-red-500 text-white text-base font-medium p-2 rounded-t-lg ">
              Población
            </div>
            {/* Cuerpo de la tabla 1 */}
            <div className="bg-white rounded-b-lg p-5 border-gray-300 border">
              {/* Contenido de la tabla 1 */}
              {circle1Visible && <p>Cuenca: 603.269 habitantes</p>}
              {circle2Visible && <p>Guayaquil: 2,698 millones habitantes</p>}
              {circle3Visible && <p>Quito: 2,011 millones habitantes</p>}
            </div>
          </div>

          {/* Tabla 2 */}
          <div className="bg-white rounded-t-lg p-1 my-6">
            {/* Encabezado de la tabla 2 */}
            <div className="bg-red-500 text-white text-base font-medium p-2 rounded-t-lg">
              Metros sobre el nivel del mar
            </div>
            {/* Cuerpo de la tabla 2 */}
            <div className="bg-white rounded-b-lg p-5 border-gray-300 border">
              {/* Contenido de la tabla 2 */}
              {circle1Visible && <p>Cuenca: 2.538 m.s.n.m </p>}
              {circle2Visible && <p>Guayaquil: 4 m s. n. m.</p>}
              {circle3Visible && <p>Quito: 2.850 m s. n. m.</p>}
            </div>
          </div>

          {/* Tabla 3 */}
          <div className="bg-white rounded-t-lg p-1 my-6">
            {/* Encabezado de la tabla 3 */}
            <div className="bg-red-500 text-white text-base font-medium p-2 rounded-t-lg">
              Superficie en hectareas
            </div>
            {/* Cuerpo de la tabla 3 */}
            <div className="bg-white rounded-b-lg p-5 border-gray-300 border">
              {/* Contenido de la tabla 3 */}
              {circle1Visible && <p>Cuenca: Superficie de 15.730 ha </p>}
              {circle2Visible && <p>Guayaquil:Superficie de 34.450 ha</p>}
              {circle3Visible && <p>Quito:Superficie de 37.240 ha</p>}
            </div>
          </div>

          {/* Tabla 4 */}
          <div className="bg-white rounded-t-lg p-1 my-6">
            {/* Encabezado de la tabla 4 */}
            <div className="bg-red-500 text-white text-base font-medium p-2 rounded-t-lg">
              Temperatura
            </div>
            {/* Cuerpo de la tabla 4 */}
            <div className="bg-white rounded-b-lg p-5 border-gray-300 border">
              {/* Contenido de la tabla 4 */}
              {circle1Visible && (
                <p>
                  Cuenca: Temperaturas que oscilan entre los 14ºC y los 18ºC.
                </p>
              )}
              {circle2Visible && (
                <p>
                  Guayaquil: Temperaturas que oscilan entre los 23ºC y los 32ºC.
                </p>
              )}
              {circle3Visible && (
                <p>Quito: Temperaturas que oscilan entre los 8ºC y los 21ºC.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
