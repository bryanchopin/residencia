import styles from "./sideBar.module.css";
import { useState } from "react";
import CloseBtn from "../closeBtn/closeBtn";
import axios from "axios";
import router from "next/router";


export default function SideBar({ state, handleCloseWindow }) {
  const [userLogIn, setUserLogIn] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [userLoged, setUserLoged] = useState("");

  const stateSideBar = state
    ? styles.sideBarContainer
    : styles.sideBarContainerOff;

  const handleSubmit = (e) => {

    e.preventDefault();

    if (username === "" || password === "") {
      alert("Por favor ingrese todos los campos");
      return;
    }

    if (!userLogIn) {
      axios
        .post(
          "/api/user",
          {
            userName: username,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        .then((res) => {
          alert("Usuario creado correctamente");
          router.push("/");
          setUsername("");
          setPassword("");
        })
        .catch((err) => {
          alert("Error al crear usuario");
          router.push("/");
          setUsername("");
          setPassword("");
        });
    }
    else{
      axios
      .post(
        "/api/checkUser",
        {
          userName: username,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.exists) {
          alert("Inicio de sesión exitoso");
          setUserLoged(res.data.user);
        } else {
          alert("Usuario no encontrado");
        }
        setUsername("");
        setPassword("");
      })
      .catch((err) => {
        alert("Error al verificar usuario");
        setUsername("");
        setPassword("");
      });
    }

  };



  return (
    <>
      <aside className={stateSideBar}>
        <CloseBtn handleCloseWindow={handleCloseWindow} />

        <div className={styles.titleContainer}>
          {userLogIn ? "Log In" : "Sign Up"}
        </div>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            type="text"
            id="username"
            name="username"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            id="password"
            name="password"
          />
          <button type="submit">
            {userLogIn ? "Log In" : "Sign Up"}
          </button>
        </form>


        <div className={styles.optionsContainer}>
          <div
            onClick={() => {setUserLogIn(true);}}
            className={styles.btnContainer}
          >
            Log In
          </div>
          <div className={styles.lineSeparator}></div>
          <div
            onClick={() => { setUserLogIn(false);}}
            className={styles.btnContainer}
          >
            Sign Up
          </div>
        </div>
      </aside>
    </>
  );
}
