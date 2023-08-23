"use client";
import Map from "@components/map";
import styles from "../../globals.css";
import React, { useState } from "react";
import SwitchButton from "@components/buttonswitch";

export default function canastabasica() {
  const DEFAULT_CENTER = [-2.855038, -78.965722];

  const [marker1Visible, setMarker1Visible] = useState(false);
  const [circle1Visible, setCircle1Visible] = useState(false);
  const [polygonVisible, setPolygonVisible] = useState(false);
  const [button4Active, setButton4Active] = useState(false);
  const [button5Active, setButton5Active] = useState(false);

  const cityPolygon = [
    [-2.871360, -79.077560], // Vértice 1
    [-2.877275, -78.979509], // Vértice 2
    [-2.894891, -78.959296], // Vértice 3
    [-2.922150, -79.001181], // Vértice 4
    [-2.926864, -79.042209], // Vértice 5
    // ... más coordenadas de vértices si es necesario
  ];
  
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
              <p class="leading-relaxed mb-5">Marcador</p>
              {/* Botón 1 */}
              <div className="mb-4">
                <SwitchButton
                  isActive={marker1Visible}
                  onClick={() => setMarker1Visible(!marker1Visible)}
                />
              </div>
              <p class="leading-relaxed mb-5">Zona circular</p>
              {/* Botón 2 */}
              <div className="mb-4">
                <SwitchButton
                  isActive={circle1Visible}
                  onClick={() => setCircle1Visible(!circle1Visible)}
                />
              </div>
              <p class="leading-relaxed mb-5">Poligono de la ciudad</p>
              {/* Botón 3 */}
              <div className="mb-4">
                <SwitchButton
                  isActive={polygonVisible}
                  onClick={() => setPolygonVisible(!polygonVisible)}
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
            {({ TileLayer, Marker, Popup, Circle, Polygon}) => (
              <>
                <TileLayer
                  //url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                  //url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                  url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
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
                
                {/* Marcador 1 */}
              <Marker position={[-2.855038, -78.965722]} alt="CIIT" opacity={marker1Visible ? 1 : 0}>
                <Popup>
                  <div className="popup-content">
                    <h3>CIITT</h3>
                    <img src="/img/ciitt-centro.png"/>
                    <p>Centro de Investigación, Innovación y Transferencia de Tecnología.</p>
                  </div>
                </Popup>
              </Marker>
              

                {/* Polígono circular */}
                <Circle center={[-2.898612, -79.000625]} 
                radius={5000}
                pathOptions={{
                  color: 'red',
                  fillOpacity: circle1Visible ? 0.3 : 0, // Ajusta la opacidad del relleno
                  opacity: circle1Visible ? 1 : 0, // Ajusta la opacidad del borde
                }}>
                  <Popup>Zona circular</Popup>
                </Circle>
                

                {/* Polígono de la ciudad */}
                <Polygon
                  positions={cityPolygon}
                  pathOptions={{ color: "blue", 
                  fillOpacity: polygonVisible ? 0.3 : 0, // Ajusta la opacidad del relleno
                  opacity: polygonVisible ? 0.8 : 0, // Ajusta la opacidad del borde
                }}
                >
                  <Popup>
                    Cuenca
                  </Popup>
                </Polygon>
                
              </>
            )}
          </Map>
        </div>
      </div>
    </main>
  );
}
