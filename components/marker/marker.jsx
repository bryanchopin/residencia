import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";

const Marker = dynamic(
  () => import("react-leaflet").then((module) => module.Marker),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const Popup = dynamic(
  () => import("react-leaflet").then((module) => module.Popup),
  { ssr: false, loading: () => <p>Loading...</p> }
);

export default function Markers({ center }) {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    import("leaflet").then((L) => {
      const customIcon = L.icon({
        iconUrl: "/logoITT.png",
        iconSize: [70, 70],
      });
      setIcon(customIcon);
    });
  }, []);

  return (
    <>
      {icon && (
        <Marker position={center} icon={icon}>
          <Popup>
            Secretaria de salud mental. <br /> 6647517723.
          </Popup>
        </Marker>
      )}
    </>
  );
}
