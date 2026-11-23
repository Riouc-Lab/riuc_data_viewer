"use client";
import 'leaflet.fullscreen';
import 'leaflet.fullscreen/dist/Control.FullScreen.css';
import { useEffect } from "react";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../../assets/scss/Map.module.scss";

const { MapContainer, LayersControl, LayerGroup, TileLayer, ScaleControl } = ReactLeaflet;
const InfoBox = ({ content }) => {
  return (
    <div className="info-box">
      <div className="info-content">
        <div>{content}</div>
      </div>
    </div>
  );
};
const Map = ({
  selectedProvince,
  children,
  className,
  width,
  height,
  ...rest
}) => {
  let mapClassName = styles.map;

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    (async function init() {
      delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/images/marker-icon-2x.png",
        iconUrl: "/leaflet/images/marker-icon.png",
        shadowUrl: "/leaflet/images/marker-shadow.png",
      });
    })();
  }, []);

  return (
    <div className={mapClassName}>
      <MapContainer
        className={"static-map"}
        style={{ width: '100%', height: 995 }} // Ajusta el alto del mapa (height: 995)
        scrollWheelZoom={true} //habilita el zoom con la rueda del mouse
        fullscreenControl={true} // Opciones adicionales: fullscreenControl={{ pseudoFullscreen: false }}
        {...rest}
      >
        <InfoBox
          content={
            selectedProvince ? (
              <div className="">
                <p className="text-lg font-semibold text-gray-500">
                  {selectedProvince
                    ? selectedProvince.properties.dpa_despro
                    : ""}{" "}
                </p>
                <p className="text-sm text-gray-600">
                  Población:{" "}
                  {selectedProvince
                    ? selectedProvince.properties.poblacion
                    : ""}
                </p>
              </div>
            ) : (
              <p className="text-lg font-semibold text-red-600">
                Interactúa con el mapa
              </p>
            )
          }
        />

        {/* Agregar capas en el mapa */}
        <LayersControl position="topleft" className={styles.layersControl}>
          <LayersControl.BaseLayer checked name="OpenStreetMap">
            <TileLayer
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Esri Satelital">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Esri Callejero">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"
            />
          </LayersControl.BaseLayer>
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
