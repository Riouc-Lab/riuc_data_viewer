"use client";
import Map from "@components/map";
import styles from "../../globals.css";
import React, { useState } from "react";
import SwitchButton from "@components/buttonswitch";

const DEFAULT_CENTER = [-1.598653, -78.180479];

export default function modelogeovisor() {
  const [circle1Visible, setCircle1Visible] = useState(false);

  return (
    <main style={{ scrollBehavior: "smooth" }}>
      <div className="flex space-x-3 p-3">
        <div className="h-[calc(100vh-_80px)] w-[400px] overflow-hidden rounded-lg bg-white p-3 shadow-md">
          {/* Contenido de la primera columna */}
          <div className="flex">
            <div className="w-[400px]">
              <div className="h-[calc(100vh-80px)] overflow-hidden overflow-y-auto rounded-lg bg-white p-3 shadow-md">
                <div className="border-b border-gray-300 pb-1">
                  <h2 class="text-base font-medium text-indigo-300 mb-1">
                    GeoVisor de ...
                  </h2>
                </div>
                <div className="mt-4">
                  <ul className="space-y-3">
                    {/* Capas */}

                    <h1 class="text-2xl font-semibold mb-5">Capas</h1>
                    <p class="leading-relaxed mb-5">Marcador</p>
                    {/* Botón 1 */}
                    <div className="mb-4">
                      <SwitchButton
                        isActive={circle1Visible}
                        onClick={() => setCircle1Visible(!circle1Visible)}
                      />
                    </div>
                    <p class="leading-relaxed mb-5">Capa 2</p>
                    {/* Botón 2 */}
                    <div className="mb-4">
                      <SwitchButton />
                    </div>
                    <p class="leading-relaxed mb-5">Capa 3</p>
                    {/* Botón 3 */}
                    <div className="mb-4">
                      <SwitchButton />
                    </div>
                    <p class="leading-relaxed mb-5">Capa 4</p>
                    {/* Botón 4 */}
                    <div className="mb-4">
                      <SwitchButton />
                    </div>
                    <p class="leading-relaxed mb-5">Capa 5</p>
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
                    {({ TileLayer, Marker, Popup, Circle, Polygon }) => (
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
                        <Circle
                          center={[-2.898612, -79.000625]}
                          radius={50000}
                          pathOptions={{
                            color: "red",
                            fillOpacity: circle1Visible ? 0.3 : 0, // Ajusta la opacidad del relleno
                            opacity: circle1Visible ? 1 : 0, // Ajusta la opacidad del borde
                          }}
                        >
                          <Popup>Zona circular</Popup>
                        </Circle>
                      </>
                    )}
                  </Map>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[calc(100vh-_80px)] w-[400px] overflow-hidden overflow-y-auto rounded-lg bg-white p-3 shadow-md">
          {/* Contenido de la tercera columna */}
          <div className="border-b border-gray-300 pb-1">
            <h3 className="text-xl font-semibold text-slate-700">Tablas</h3>
          </div>

          {/* Tabla 1 */}
          <div className="bg-white rounded-t-lg p-6 my-6 ">
            {/* Encabezado de la tabla 1 */}
            <div className="bg-red-400 text-white font-semibold p-2 rounded-t-lg ">
              Tabla 1
            </div>
            {/* Cuerpo de la tabla 1 */}
            <div className="bg-white rounded-b-lg p-5 border-gray-300 border">
              {/* Contenido de la tabla 1 */}
            </div>
          </div>

          {/* Tabla 2 */}
          <div className="bg-white rounded-t-lg p-6 my-6">
            {/* Encabezado de la tabla 2 */}
            <div className="bg-red-400 text-white font-semibold p-2 rounded-t-lg">
              Tabla 2
            </div>
            {/* Cuerpo de la tabla 2 */}
            <div className="bg-white rounded-b-lg p-5 border-gray-300 border">
              {/* Contenido de la tabla 2 */}
            </div>
          </div>

          {/* Tabla 3 */}
          <div className="bg-white rounded-t-lg p-6 my-6">
            {/* Encabezado de la tabla 3 */}
            <div className="bg-red-400 text-white font-semibold p-2 rounded-t-lg">
              Tabla 3
            </div>
            {/* Cuerpo de la tabla 3 */}
            <div className="bg-white rounded-b-lg p-5 border-gray-300 border">
              {/* Contenido de la tabla 3 */}
            </div>
          </div>

          {/* Tabla 4 */}
          <div className="bg-white rounded-t-lg p-6 my-6">
            {/* Encabezado de la tabla 4 */}
            <div className="bg-red-400 text-white font-semibold p-2 rounded-t-lg">
              Tabla 4
            </div>
            {/* Cuerpo de la tabla 4 */}
            <div className="bg-white rounded-b-lg p-5 border-gray-300 border">
              {/* Contenido de la tabla 4 */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
