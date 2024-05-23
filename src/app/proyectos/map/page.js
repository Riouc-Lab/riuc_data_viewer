"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Cargar el componente Map dinámicamente para que funcione con "use client"
const Map = dynamic(() => import("../../../components/map"), { ssr: false });

const MapPage = () => {
  const DEFAULT_CENTER = [-2.855038, -78.965722];
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    // Función para cargar los datos GeoJSON
    const fetchGeoJSON = async () => {
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
    };

    fetchGeoJSON();
  }, []);

  // Función para obtener el color según el ID
  const getColor = (id) => {
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
  };

  return (
    <main className="min-h-screen flex-col items-center justify-between p-5">
      <div className="">
        <Map
          className="shadow-xl"
          center={DEFAULT_CENTER}
          zoom={6.5}
          style={{ width: "80%", height: "44%" }}
          maxBounds={[[], []]}
          maxBoundsViscosity={1.0}
        >
          {({ TileLayer, GeoJSON }) => (
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
            </>
          )}
        </Map>
      </div>
    </main>
  );
};

export default MapPage;
