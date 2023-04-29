import styles from "./mainContainer.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MainContainer() {

  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    <div className={styles.MainContainer}>
      <div className={styles.titleContainer}>
        <h1>Directorio de servicios médicos internacionales</h1>
      </div>
      <div className={styles.imageContainer}>
        <Image alt="MainLogo" src="/logoItt.png" width={150} height={150} />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Permitir Ubicación</button>
      </div>
      <div>
      {location ? (
        <p>Latitud: {location.lat}, Longitud: {location.lng}</p>
      ) : (
        <p>Obteniendo ubicación...</p>
      )}
    </div>
    </div>
  );
}
