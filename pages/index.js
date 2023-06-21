import Image from "next/image";

import { useState, useEffect } from "react";

import MainContainer from "@/layouts/mainContainer/mainContainer";
import MainServices from "@/layouts/mainServices/mainServices";

import Preloader from "@/components/preloader/preloader";
import MapContainer from "@/components/MapContainer/mapContainer";
import Navbar from "@/components/Navbar/navbar";
import SideBar from "@/components/SideBar/sideBar";
import UserBtn from "@/components/userBtn/userBtn";

export default function Home() {

  const [showSideBar, setShowSideBar] = useState(false);
  const [showMainView, setShowMainView] = useState(true);
  const [showServices, setShowServices] = useState(false);

  const [allowedUbication, setAllowedUbication] = useState(false);
  const [location, setLocation] = useState();


  return (
    <>

      <Preloader />


      <MainContainer 
        location={location}
        setLocation={setLocation}
        stateAllowedUbication={allowedUbication}
        handleShowMainView={()=>{setShowMainView(!showMainView)}}
        handleAllowedUbication={()=>{setAllowedUbication(!allowedUbication)}}
        state={showMainView} />

      {location && <MapContainer location={location} />}

      <UserBtn />

      <Navbar
        handleShowMainView={()=>{setShowMainView(!showMainView)}}
        handleShowSideBar={()=>{setShowSideBar(!showSideBar)}}
        handleShowServices={()=>{setShowServices(!showServices)}}
      />

      <MainServices
        state={showServices}
        handleCloseWindow={()=>{setShowServices(!showServices)}}
      />

      <SideBar
        state={showSideBar}
        handleCloseWindow={()=>{setShowSideBar(!showSideBar)}}
      />
    </>
  );
}
