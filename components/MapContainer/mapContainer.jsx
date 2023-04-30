import styles from "./mapContainer.module.css";
import { useState, useEffect } from "react";
// import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import Marker from "../marker/marker";

const MapContainer = dynamic(
  () => import("react-leaflet").then((module) => module.MapContainer),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((module) => module.TileLayer),
  { ssr: false, loading: () => <p>Loading...</p> }
);

export default function MapMainContainer({ location }) {
  const [center, setCenter] = useState(location);

  useEffect(() => {
    setCenter(location);
  }, [location]);

  return (
    <>
      <MapContainer
        id="map"
        center={center}
        zoom={13}
        className={styles.mapContainer}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker center={center} />
      </MapContainer>
    </>
  );
}
