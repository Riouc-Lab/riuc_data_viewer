"use client";
import Map from "@components/map";
import styles from "../../globals.css";
import React, { useState } from "react";


const DEFAULT_CENTER = [-1.598653, -78.180479];

export default function modelogeovisor() {
  return (
    <main style={{ scrollBehavior: "smooth" }}>
      <div className="flex space-x-3 p-3">
        <div className="h-[calc(100vh-_80px)] w-[400px] overflow-hidden  rounded-lg bg-white p-3 shadow-md">
          {/* Contenido de la primera columna */}
          <div className="flex">
            <div className="w-[400px]">
              <div className="h-[calc(100vh-80px)] overflow-hidden overflow-y-auto rounded-lg bg-white p-3 shadow-md">
                <div className="border-b border-gray-300 pb-1">
                  <h3 className="text-xl font-semibold text-slate-700">
                    Capas
                  </h3>
                </div>
                <div className="mt-6">
                  <ul className="space-y-3">
                    <li className="rounded-lg bg-gray-50 px-3 py-2 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      <div className="flex items-center justify-between space-x-2">
                        <div className="flex-1">
                          <p className="font-medium text-slate-700">Capa 1</p>
                        </div>
                        <div className="flex h-6 w-10 items-center justify-center text-emerald-500">
                          <button
                            className="bg-gray-300 relative inline-flex h-5 w-10 items-center rounded-full"
                            id="headlessui-switch-:r7:"
                            role="switch"
                            type="button"
                            tabindex="0"
                            aria-checked="false"
                            data-headlessui-state=""
                          >
                            <span className="translate-x-1 inline-block h-3.5 w-3.5 transform rounded-full bg-white transition"></span>
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="rounded-lg bg-gray-50 px-3 py-2 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      <div className="flex items-center justify-between space-x-2">
                        <div className="flex-1">
                          <p className="font-medium text-slate-700">Capa 2</p>
                        </div>
                        <div className="flex h-6 w-10 items-center justify-center text-emerald-500">
                          <button
                            className="bg-gray-300 relative inline-flex h-5 w-10 items-center rounded-full"
                            id="headlessui-switch-:r8:"
                            role="switch"
                            type="button"
                            tabindex="0"
                            aria-checked="false"
                            data-headlessui-state=""
                          >
                            <span className="translate-x-1 inline-block h-3.5 w-3.5 transform rounded-full bg-white transition"></span>
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="rounded-lg bg-gray-50 px-3 py-2 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      <div className="flex items-center justify-between space-x-2">
                        <div className="flex-1">
                          <p className="font-medium text-slate-700">Capa 3</p>
                        </div>
                        <div className="flex h-6 w-10 items-center justify-center text-emerald-500">
                          <button
                            className="bg-gray-300 relative inline-flex h-5 w-10 items-center rounded-full"
                            id="headlessui-switch-:r9:"
                            role="switch"
                            type="button"
                            tabindex="0"
                            aria-checked="false"
                            data-headlessui-state=""
                          >
                            <span className="translate-x-1 inline-block h-3.5 w-3.5 transform rounded-full bg-white transition"></span>
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="rounded-lg bg-gray-50 px-3 py-2 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      <div className="flex items-center justify-between space-x-2">
                        <div className="flex-1">
                          <p className="font-medium text-slate-700">Capa 4</p>
                        </div>
                        <div className="flex h-6 w-10 items-center justify-center text-emerald-500">
                          <button
                            className="bg-gray-300 relative inline-flex h-5 w-10 items-center rounded-full"
                            id="headlessui-switch-:ra:"
                            role="switch"
                            type="button"
                            tabindex="0"
                            aria-checked="false"
                            data-headlessui-state=""
                          >
                            <span className="translate-x-1 inline-block h-3.5 w-3.5 transform rounded-full bg-white transition"></span>
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="rounded-lg bg-gray-50 px-3 py-2 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      <div className="flex items-center justify-between space-x-2">
                        <div className="flex-1">
                          <p className="font-medium text-slate-700">Capa 5</p>
                        </div>
                        <div className="flex h-6 w-10 items-center justify-center text-emerald-500">
                          <button
                            className="bg-gray-300 relative inline-flex h-5 w-10 items-center rounded-full"
                            id="headlessui-switch-:rb:"
                            role="switch"
                            type="button"
                            tabindex="0"
                            aria-checked="false"
                            data-headlessui-state=""
                          >
                            <span className="translate-x-1 inline-block h-3.5 w-3.5 transform rounded-full bg-white transition"></span>
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="rounded-lg bg-gray-50 px-3 py-2 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      <div className="flex items-center justify-between space-x-2">
                        <div className="flex-1">
                          <p className="font-medium text-slate-700">Capa 6</p>
                        </div>
                        <div className="flex h-6 w-10 items-center justify-center text-emerald-500">
                          <button
                            className="bg-gray-300 relative inline-flex h-5 w-10 items-center rounded-full"
                            id="headlessui-switch-:rc:"
                            role="switch"
                            type="button"
                            tabindex="0"
                            aria-checked="false"
                            data-headlessui-state=""
                          >
                            <span className="translate-x-1 inline-block h-3.5 w-3.5 transform rounded-full bg-white transition"></span>
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="rounded-lg bg-gray-50 px-3 py-2 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md">
                      <div className="flex items-center justify-between space-x-2">
                        <div className="flex-1">
                          <p className="font-medium text-slate-700">Capa 7</p>
                        </div>
                        <div className="flex h-6 w-10 items-center justify-center text-emerald-500">
                          <button
                            className="bg-gray-300 relative inline-flex h-5 w-10 items-center rounded-full"
                            id="headlessui-switch-:rd:"
                            role="switch"
                            type="button"
                            tabindex="0"
                            aria-checked="false"
                            data-headlessui-state=""
                          >
                            <span className="translate-x-1 inline-block h-3.5 w-3.5 transform rounded-full bg-white transition"></span>
                          </button>
                        </div>
                      </div>
                    </li>
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
                  <h3 className="text-xl font-semibold text-slate-700">
                    Tablas
                  </h3>
                </div>
        </div>
      </div>
    </main>
  );
}
