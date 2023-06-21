import styles from "./sideBar.module.css";
import { useState } from "react";
import CloseBtn from "../closeBtn/closeBtn";

export default function SideBar({state, handleCloseWindow }) {

  const [userLogIn, setUserLogIn] = useState(false)

  const stateSideBar = state 
  ? styles.sideBarContainer 
  : styles.sideBarContainerOff;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enviado")
  }

  // const handleStateUser = () => { setUserLogIn(!userLogIn) }

  return(
    <>
      <aside className={stateSideBar}>

        <CloseBtn
          handleCloseWindow={handleCloseWindow}/>
        
        {/* <picture className={styles.imageContainer}></picture> */}
        <div className={styles.titleContainer}>
           {userLogIn ? "Log In" : "Sign Up"}
        </div>
        <form className={styles.formContainer} action="">
          <label htmlFor="">Username</label>
          <input placeholder="Username" type="text" name="Username"/>
          <label htmlFor="password">Password</label>
          <input placeholder="Password" type="password" name="Password"/>
          <button onSubmit={handleSubmit} type="submit">
            {userLogIn ? "Log In" : "Sign Up"}
          </button>
        </form>
        <div className={styles.optionsContainer}>
          <div onClick={()=>{setUserLogIn(true)}} className={styles.btnContainer}>Log In</div>
          <div className={styles.lineSeparator}></div>
          <div onClick={()=>{setUserLogIn(false)}} className={styles.btnContainer}>Sign Up</div>
        </div>
        {/* <article className={styles.btnContainer}></article> */}
      </aside>
    </>
  )

}
