import Image from "next/image";
import MapContainer from "@/components/MapContainer/mapContainer";
import Navbar from "@/components/Navbar/navbar";
import SideBar from "@/components/SideBar/sideBar";
import { useState, useEffect } from "react";


export default function Home(props) {
  const [showSideBar, setShowSideBar] = useState(false);

  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 });

  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div>
      <MapContainer location={location}/>

      <Navbar
        // handleSetLocation={getLocation}
        handleShowSideBar={handleShowSideBar}
      />
      <SideBar
        showSideBar={showSideBar}
        handleShowSideBar={handleShowSideBar}
      />
    </div>
  );
}
