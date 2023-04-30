import Image from "next/image";
import MapContainer from "@/components/MapContainer/mapContainer";
import Navbar from "@/components/Navbar/navbar";
import SideBar from "@/components/SideBar/sideBar";
import { useState, useEffect } from "react";
import MainContainer from "@/layouts/mainContainer/mainContainer";
import Preloader from "@/components/preloader/preloader";

export default function Home() {
  const [showSideBar, setShowSideBar] = useState(false);

  const [allowedUbication, setAllowedUbication] = useState(false);
  const [showMainView, setShowMainView] = useState(true);

  const [location, setLocation] = useState();

  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleShowMainView = () => {
    setShowMainView(!showMainView);
  };

  const handleAllowedUbication = () => {
    setAllowedUbication(!allowedUbication);
  };

  return (
    <>
      <Preloader />

      <MainContainer 
        handleShowMainView={handleShowMainView} 
        handleAllowedUbication={handleAllowedUbication}
        setLocation={setLocation}
        location={location}
        stateAllowedUbication={allowedUbication}
        state={showMainView} />

      {location && <MapContainer location={location} />}

      <Navbar
        handleShowMainView={handleShowMainView}
        handleShowSideBar={handleShowSideBar}
      />

      <SideBar
        showSideBar={showSideBar}
        handleShowSideBar={handleShowSideBar}
      />
    </>
  );
}
