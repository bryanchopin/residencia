import styles from "./mapContainer.module.css";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const MapContainer = dynamic(
  () => import("react-leaflet").then((module) => module.MapContainer),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((module) => module.TileLayer),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const Marker = dynamic(
  () => import("react-leaflet").then((module) => module.Marker),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const Popup = dynamic(
  () => import("react-leaflet").then((module) => module.Popup),
  { ssr: false, loading: () => <p>Loading...</p> }
);

export default function MapMainContainer({ location }) {
  return (
    <MapContainer
      id="map"
      center={location}
      zoom={13}
      className={styles.mapContainer}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker
        position={location}
        // icon={iconDefault}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
