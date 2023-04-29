import styles from "./sideBar.module.css";
import { useState } from "react";

export default function SideBar({showSideBar, handleShowSideBar }) {

  const stateSideBar = showSideBar 
  ? styles.sideBarContainer 
  : styles.sideBarContainerOff;

  return(
    <>
      <div onClick={handleShowSideBar} className={stateSideBar}>
      </div>
    </>
  )

}
