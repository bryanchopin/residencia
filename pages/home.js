import Image from "next/image";
import { Inter } from "next/font/google";
import MapContainer from "@/components/MapContainer/mapContainer";
import Navbar from "@/components/Navbar/navbar";
import SideBar from "@/components/SideBar/sideBar";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function home() {
  const [showSideBar, setShowSideBar] = useState(false);

  const [location, setLocation] = useState({lat: 51.505, lng: -0.09});

  const handleLocation = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
      console.log("Ubicación obtenida: ", location);
    } catch (error) {
      console.error("Error al obtener la ubicación: ", error);
    }
  };

  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div>
      <MapContainer 
        location={location}/>

      <Navbar
        handleSetLocation={handleLocation}
        handleShowSideBar={handleShowSideBar}
      />
      <SideBar
        showSideBar={showSideBar}
        handleShowSideBar={handleShowSideBar}
      />
    </div>
  );
}
