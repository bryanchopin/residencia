import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import styles from "./marker.module.css";
import axios from "axios";
import { BsHospital } from "react-icons/bs";

const Marker = dynamic(
  () => import("react-leaflet").then((module) => module.Marker),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const Popup = dynamic(
  () => import("react-leaflet").then((module) => module.Popup),
  { ssr: false, loading: () => <p>Loading...</p> }
);

export default function Markers({ center }) {
  const [icons, setIcons] = useState(null);
  const [markersUbication, setMarkersUbication] = useState([]);

  useEffect(() => {
    import("leaflet").then((L) => {
      const customIcon = L.icon({
        iconUrl: "/ubication.png",
        iconSize: [70, 70],
      });
      const customIconService = L.icon({
        iconUrl: "/hospitalLogo.png",
        iconSize: [70, 70],
      });
      setIcons({
        iconLocal: customIcon,
        iconService: customIconService,
      });
    });

    axios
      .get("/api/marker")
      .then(function (response) {
        setMarkersUbication(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {icons && (
        <Marker position={center} icon={icons.iconLocal}>
          {/* <Popup>
            <div className={styles.popUpContainer}>
              <BsHospital fontSize={"3em"} />
              Secretaria de salud mental. <br /> 6647517723.
            </div>
          </Popup> */}
        </Marker>
      )}

      {markersUbication.map((marker) => (
        <Marker
          key={marker.id}
          position={[marker.latitude, marker.longitude]}
          icon={icons.iconService}
        >
          <Popup>
            <div className={styles.popUpContainer}>
              <BsHospital fontSize={"3em"} />
              {marker.name}
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}