import styles from "./mainContainer.module.css";
import Image from "next/image";
import { useEffect } from "react";

export default function MainContainer({
  handleShowMainView,
  state,
  stateAllowedUbication,
  handleAllowedUbication,
  setLocation,
  location
}) {
  useEffect(() => {
    if (stateAllowedUbication) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
        },
        () => {
          console.log("No se pudo obtener la ubicación");
        }
      );
    }
  }, [stateAllowedUbication]);

const handleClick = () => {
  handleAllowedUbication();

  if(location && stateAllowedUbication)
    handleShowMainView();
}

  const stateMainView = state ? styles.MainContainer : styles.MainContainerOff;

  return (
    <div className={stateMainView}>
      <div className={styles.titleContainer}>
        <h1>Directorio de servicios médicos internacionales</h1>
      </div>
      <div className={styles.imageContainer}>
        <Image priority={true} alt="MainLogo" src="/logoItt.png" width={150} height={150} />
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handleClick} className={styles.button}>
          {location && stateAllowedUbication ? "Ingresar" : "Obtener Ubicación"}
        </button>
      </div>
      <div>
        {location && stateAllowedUbication ? (
          <p>
            Latitud: {location.lat}, Longitud: {location.lng}
          </p>
        ) : (
          <p>Obteniendo ubicación...</p>
        )}
      </div>
    </div>
  );
}
