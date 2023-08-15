"use client";
import Map from "@components/map";
import styles from "../../globals.css";
export default function MapPage() {
  const DEFAULT_CENTER = [-2.855038, -78.965722];
  return (
    <main className="min-h-screen flex-col items-center justify-between p-40">
      <Map
        className={styles.homeMap}
        width="800"
        height="400"
        center={DEFAULT_CENTER}
        zoom={11}
      >
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              //url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
              //url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
              url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={DEFAULT_CENTER}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </>
        )}
      </Map>
    </main>
  );
}
