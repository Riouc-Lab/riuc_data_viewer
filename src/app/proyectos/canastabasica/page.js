"use client";
import Map from "@components/map";
import styles from "../../globals.css";
import React, { useState } from "react";
import SwitchButton from "@components/buttonswitch";

export default function canastabasica() {
  const DEFAULT_CENTER = [-2.855038, -78.965722];

  const [button1Active, setButton1Active] = useState(false);
  const [button2Active, setButton2Active] = useState(false);
  const [button3Active, setButton3Active] = useState(false);
  const [button4Active, setButton4Active] = useState(false);
  const [button5Active, setButton5Active] = useState(false);

  return (
    <main className="fixed scroll-behavior-smooth">
      <div className="flex space-x-3 p-3">
        <div className="h-[calc(100vh-80px)] w-[400px] overflow-hidden overflow-y-auto rounded-lg bg-white p-3 shadow-md">
          <div className="border-b border-gray-300 pb-1">
            <h3 className="text-xl font-semibold text-slate-700">
              Canasta Basica
            </h3>
          </div>
          <div className="mt-6">
            <ul className="space-y-3">
              {/* Capas */}

              <h2 class="text-base font-medium text-indigo-300 mb-1">
                GeoVisor
              </h2>
              <h1 class="text-2xl font-semibold mb-5">CAPAS</h1>
              <p class="leading-relaxed mb-5">CAPA 1</p>
              {/* Botón 1 */}
              <div className="mb-4">
                <SwitchButton
                  isActive={button1Active}
                  onClick={() => setButton1Active(!button1Active)}
                />
              </div>
              <p class="leading-relaxed mb-5">CAPA 2</p>
              {/* Botón 2 */}
              <div className="mb-4">
                <SwitchButton
                  isActive={button2Active}
                  onClick={() => setButton2Active(!button2Active)}
                />
              </div>
              <p class="leading-relaxed mb-5">CAPA 3</p>
              {/* Botón 3 */}
              <div className="mb-4">
                <SwitchButton
                  isActive={button3Active}
                  onClick={() => setButton3Active(!button3Active)}
                />
              </div>
              <p class="leading-relaxed mb-5">CAPA 4</p>
              {/* Botón 4 */}
              <div className="mb-4">
                <SwitchButton
                  isActive={button4Active}
                  onClick={() => setButton4Active(!button4Active)}
                />
              </div>
              <p class="leading-relaxed mb-5">CAPA 5</p>
              {/* Botón 5 */}
              <div className="mb-4">
                <SwitchButton
                  isActive={button5Active}
                  onClick={() => setButton5Active(!button5Active)}
                />
              </div>
            </ul>
          </div>
        </div>

        <div className="h-[calc(100vh-80px)] overflow-hidden rounded-lg">
          {/* Mapa */}
          <Map
            className="rounded-lg shadow-xl"
            center={DEFAULT_CENTER}
            zoom={12} //7.5
            width="850"
            height="400"
            //dragging={false} // Deshabilitar arrastrar
            //doubleClickZoom={false} // Deshabilitar zoom con doble clic
            //scrollWheelZoom={false} // Deshabilitar zoom con rueda de desplazamiento
            //touchZoom={false} // Deshabilitar zoom táctil
            //tap={false} // Deshabilitar toques
            //zoomControl={false} // Deshabilitar control de zoom
          >
            {({ TileLayer, Marker, Popup, Circle}) => (
              <>
                <TileLayer
                  //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  //url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                  //url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                  url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                
                {/* Marcador 1 */}
              <Marker position={[-2.855038, -78.965722]}>
                <Popup>
                  <div className="popup-content">
                    <h3>CIITT</h3>
                    <img src="/img/ciitt-centro.png" alt="Ubicación" />
                    <p>Centro de Investigación, Innovación y Transferencia de Tecnología.</p>
                  </div>
                </Popup>
              </Marker>

                {/* Polígono circular */}
                <Circle center={[-2.898612, -79.000625]} radius={5000} pathOptions={{ color: 'red' }}>
                  <Popup>Zona circular</Popup>
                </Circle>
                
                {/* Marcador 2 con zona circular */}
                <Marker position={[-2.852039, -79.014585]}>
                  <Popup>
                    <div className="popup-content">
                      <h3>Área Destacada</h3>
                      <p>Esta área tiene una importancia especial.</p>
                    </div>
                  </Popup>
                  <Circle center={[-2.852039, -79.014585]} radius={1000} pathOptions={{ color: 'blue' }} />
                </Marker>

              </>
            )}
          </Map>
        </div>
      </div>
    </main>
  );
}
