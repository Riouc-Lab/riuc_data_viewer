// Mapa de calor sobre ingresos económicos
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';
import { useEffect, useRef } from 'react';

export default function HeatLayer({ visible }) {
  const map = useMap();
  const heatLayerRef = useRef(null);

  useEffect(() => {
    if (!visible) {
      if (heatLayerRef.current) {
        map.removeLayer(heatLayerRef.current);
        heatLayerRef.current = null;
      }
      return;
    }

    fetch(`/data/PUNTOS_BELLAVISTA.geojson?nocache=${Date.now()}`)
      .then(res => res.json())
      .then(geojson => {
        const heatData = geojson.features.map(f => {
          const [lng, lat] = f.geometry.coordinates;
          const nivel = f.properties.nivel || 1;
          const intensidad = (nivel - 1) / 4; // Normaliza de 1–5 a 0–1
          return [lat, lng, intensidad];
        });

        if (heatLayerRef.current) {
          map.removeLayer(heatLayerRef.current);
        }

        const newHeatLayer = L.heatLayer(heatData, {
          radius: 18,
          blur: 14,
          minOpacity: 0.4,
          gradient: {
            0.0: "#d73027",   // Nivel 1 - rojo intenso
            0.25: "#fc8d59",  // Nivel 2 - naranja
            0.5: "#fee08b",   // Nivel 3 - amarillo claro
            0.75: "#91cf60",  // Nivel 4 - verde lima
            1.0: "#1a9850"    // Nivel 5 - verde oscuro
          }
        }).addTo(map);

        heatLayerRef.current = newHeatLayer;
      });

    return () => {
      if (heatLayerRef.current) {
        map.removeLayer(heatLayerRef.current);
        heatLayerRef.current = null;
      }
    };
  }, [visible, map]);

  useEffect(() => {
    if (heatLayerRef.current) {
      heatLayerRef.current.setOptions({ opacity: visible ? 1 : 0 });
    }
  }, [visible]);

  return null;
}
