"use client";
import Map from "@components/map";
import styles from "../../globals.css";
import React, { useState } from 'react';
import SwitchButton from '@components/buttonswitch';


export default function canastabasica() {
  const DEFAULT_CENTER = [-2.855038, -78.965722];

const [button1Active, setButton1Active] = useState(false);
const [button2Active, setButton2Active] = useState(false);
const [button3Active, setButton3Active] = useState(false);
const [button4Active, setButton4Active] = useState(false);
const [button5Active, setButton5Active] = useState(false);


  return (
    <main className="items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold">Canasta Básica</h1>
        <div className="flex items-center justify-center min-h-screen">
                
                <div class="h-[calc(100vh_-_80px)] w-[350px] overflow-hidden overflow-y-auto rounded-lg bg-white p-3 shadow-md">
                        <div class="h-full border-2 border-black border-opacity-10 rounded-lg overflow-hidden shadow-mb">
                                <div class="h-full p-6 hover:bg-red-500 hover:text-white transition duration-270 ease-in">
                                        <h2 class="text-base font-medium text-indigo-300 mb-1">GeoVisor</h2>
                                            <h1 class="text-2xl font-semibold mb-5">CAPAS</h1>
                                                <p class="leading-relaxed mb-5">CAPA 1</p> 
                                                        {/* Botón 1 */}
                                                        <div className="mb-4"><SwitchButton isActive={button1Active} onClick={() => setButton1Active(!button1Active)} /></div>
                                                <p class="leading-relaxed mb-5">CAPA 2</p> 
                                                        {/* Botón 2 */}
                                                        <div className="mb-4"><SwitchButton isActive={button2Active} onClick={() => setButton2Active(!button2Active)} /></div>
                                                    <p class="leading-relaxed mb-5">CAPA 3</p> 
                                                        {/* Botón 3 */}
                                                        <div className="mb-4"><SwitchButton isActive={button3Active} onClick={() => setButton3Active(!button3Active)} /></div>
                                                    <p class="leading-relaxed mb-5">CAPA 4</p>
                                                        {/* Botón 4 */}
                                                        <div className="mb-4"><SwitchButton isActive={button4Active} onClick={() => setButton4Active(!button4Active)} /></div>
                                                    <p class="leading-relaxed mb-5">CAPA 5</p>
                                                        {/* Botón 5 */}
                                                        <div className="mb-4"><SwitchButton isActive={button5Active} onClick={() => setButton5Active(!button5Active)} /></div>

                                        <div class="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-1">
                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    RIOUC
                                            </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    C2MAD
                                                </span>
                                        </div>
                                </div>
                        </div>
                </div>

                    <div class="h-[calc(100vh_-_80px)] w-[1400px] overflow-hidden overflow-y-auto rounded-lg bg-white p-3 shadow-md">
                            <Map
                                className="rounded-lg shadow-xl"
                                center={DEFAULT_CENTER}
                                zoom={10}
                                width="600"
                                height="400"
                            >
                                {({ TileLayer, Marker, Popup, Polygon }) => (
                                <>
                                    <TileLayer
                                    //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    //url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                                    //url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                                    url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    <Marker position={[-2.855038, -78.965722]}>
                                        <Popup>CIITT</Popup>
                                    </Marker>
                                    
                                </>
                                )}
                            </Map>  
                </div>

        </div>
    </main>
  );
}
