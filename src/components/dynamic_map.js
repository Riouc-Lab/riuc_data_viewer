"use client";
import { useEffect } from "react";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";

import styles from "../assets/scss/Map.module.scss";

const { MapContainer } = ReactLeaflet;
const { LayersControl, LayerGroup, TileLayer, ScaleControl } = ReactLeaflet;

const Map = ({ children, className, width, height, ...rest }) => {
  let mapClassName = styles.map;

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    (async function init() {
      delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
        iconUrl: "leaflet/images/marker-icon.png",
        shadowUrl: "leaflet/images/marker-shadow.png",
      });
    })();
  }, []);

  return (
    <div className={mapClassName}>
      <MapContainer
        className={"static-map"}
        style={{ width: 1160, height: 875 }}
        scrollWheelZoom={true} //habilita el zoom con la rueda del mouse
        {...rest}
      >
        {/* Agregar capas en el mapa */}
        <LayersControl position="topleft" className={styles.layersControl}>
          <LayersControl.Overlay name="Mapa Satelital">
            <LayerGroup>
              <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                attribution="&amp;copy Esri &amp;mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
              />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Mapa Callejero">
            <LayerGroup>
              <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
                attribution="&amp;copy OpenStreetMap contributors"
              />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Mapa Carto">
            <LayerGroup>
              <TileLayer
                url="https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution="&amp;copy Esri &amp;mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
              />
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>

        {/* Agregar leaflet bar y leaflet ruler */}
        <div className={styles.leafletBar}>
          <div className={styles.leafletRuler}>
            <div className={styles.leafletRulerTop}></div>
            <div className={styles.leafletRulerBottom}></div>
          </div>
        </div>

        {/* Agrega el control de escala */}
        <ScaleControl imperial={true} />

        {children(ReactLeaflet, Leaflet)}
      </MapContainer>
    </div>
  );
};

export default Map;
