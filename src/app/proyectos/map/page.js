"use client"
import Map from '@components/map';
import styles from '../../globals.css'
export default function MapPage() {
    const DEFAULT_CENTER = [38.907132, -77.036546]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">
      <Map
        className={styles.homeMap}
        width="800"
        height="400"
        center={DEFAULT_CENTER}
        zoom={12}
      >
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
