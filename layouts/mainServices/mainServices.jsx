import styles from "./mainServices.module.css";
import CloseBtn from "@/components/closeBtn/closeBtn";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsHospital } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { useState } from "react";
import { set } from "mongoose";

export default function MainServices({ state, handleCloseWindow, location }) {
  const stateContainer = state
    ? styles.mainServicesContainer
    : styles.mainServicesContainerOff;

  const [stablishment, setStablishment] = useState(false);
  const [edit, setEdit] = useState(false);
  const [share, setShare] = useState(false);
  const [options, setOptions] = useState(true);

  const [stablishmentData, setStablishmentData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    web: "",
    description: "",
    schedule: "",
    category: "",
    subCategory: "",
  });

  const [markerData, setMarkerData] = useState({
    name: "",
    location: location,
  });

  const handleChange = (e) => {
    setStablishmentData({
      ...stablishmentData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmitNew = async (e) => {
  //   e.preventDefault();

  //   // Validar campos requeridos
  //   if (
  //     !stablishmentData.name ||
  //     !stablishmentData.address ||
  //     !stablishmentData.phone ||
  //     !stablishmentData.email
  //   ) {
  //     alert("Por favor, complete todos los campos obligatorios.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post("/api/stablishment", stablishmentData);
  //     console.log(response.data);
  //     // Realizar acciones adicionales después de enviar el formulario
  //   } catch (error) {
  //     if (error.response) {
  //       // El servidor ha respondido con un código de error
  //       console.error("Error de respuesta:", error.response.data);
  //     } else if (error.request) {
  //       // No se recibió una respuesta del servidor
  //       console.error("No se recibió respuesta del servidor");
  //     } else {
  //       // Ocurrió un error durante la solicitud
  //       console.error("Error al enviar la solicitud:", error.message);
  //     }
  //     // Manejar el error de alguna manera
  //   }
  // };

  // const handleSubmitEdit = async (e) => {
  //   e.preventDefault();

  //   // Validar campos requeridos
  //   if (
  //     !stablishmentData.name ||
  //     !stablishmentData.address ||
  //     !stablishmentData.phone ||
  //     !stablishmentData.email
  //   ) {
  //     alert("Por favor, complete todos los campos obligatorios.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.put("/api/stablishment", stablishmentData);
  //     console.log(response.data);
  //     // Realizar acciones adicionales después de enviar el formulario
  //   } catch (error) {
  //     if (error.response) {
  //       // El servidor ha respondido con un código de error
  //       console.error("Error de respuesta:", error.response.data);
  //     } else if (error.request) {
  //       // No se recibió una respuesta del servidor
  //       console.error("No se recibió respuesta del servidor");
  //     } else {
  //       // Ocurrió un error durante la solicitud
  //       console.error("Error al enviar la solicitud:", error.message);
  //     }
  //     // Manejar el error de alguna manera
  //   }
  // };

  // const handleSubmitMarker = async (e) => {
  //   e.preventDefault();

  //   //update marker name

  //   setMarkerData({
  //     ...markerData,
  //     name: stablishmentData.name,
  //   });

  //   try {
  //     const response = await axios.put("/api/marker", markerData);
  //     console.log(response.data);
  //     // Realizar acciones adicionales después de enviar el formulario
  //   } catch (error) {
  //     if (error.response) {
  //       // El servidor ha respondido con un código de error
  //       console.error("Error de respuesta:", error.response.data);
  //     } else if (error.request) {
  //       // No se recibió una respuesta del servidor
  //       console.error("No se recibió respuesta del servidor");
  //     } else {
  //       // Ocurrió un error durante la solicitud
  //       console.error("Error al enviar la solicitud:", error.message);
  //     }
  //     // Manejar el error de alguna manera
  //   }
  // };

  return (
    <section className={stateContainer}>
      <CloseBtn handleCloseWindow={handleCloseWindow} />
      {options && (
        <>
          <div className={styles.optionsContainer}>
            <div
              onClick={() => {
                setStablishment(true);
                setOptions(!options);
              }}
              className={styles.btnContainer}
            >
              <BsHospital className={styles.icon} />
            </div>
            <div
              onClick={() => {
                setEdit(true);
                setOptions(!options);
              }}
              className={styles.btnContainer}
            >
              <BiEdit className={styles.icon} />
            </div>
            <div
              onClick={() => {
                setShare(true);
                setOptions(!options);
              }}
              className={styles.btnContainer}
            >
              <AiOutlineShareAlt className={styles.icon} />
            </div>
          </div>
        </>
      )}
      {stablishment && (
        <>
          <form
            className={styles.formStablishment}
            // onSubmit={(e) => {
            //   handleSubmitNew();
            //   handleSubmitMarker();
            //   e.preventDefault();
            // }}
          >
            <label htmlFor="name">Nombre del establecimiento</label>
            <input
              type="text"
              name="name"
              id="name"
              value={stablishmentData.name}
              onChange={handleChange}
            />
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              name="address"
              id="address"
              value={stablishmentData.address}
              onChange={handleChange}
            />
            <label htmlFor="phone">Teléfono</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={stablishmentData.phone}
              onChange={handleChange}
            />
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="text"
              name="email"
              id="email"
              value={stablishmentData.email}
              onChange={handleChange}
            />
            <label htmlFor="web">Sitio web</label>
            <input
              type="text"
              name="web"
              id="web"
              value={stablishmentData.web}
              onChange={handleChange}
            />
            <label htmlFor="description">Descripción</label>
            <textarea
              name="description"
              id="description"
              value={stablishmentData.description}
              onChange={handleChange}
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="schedule">Horario</label>
            <input
              type="text"
              name="schedule"
              id="schedule"
              value={stablishmentData.schedule}
              onChange={handleChange}
            />
            <button type="submit">Enviar</button>
          </form>

          <IoChevronBackCircleSharp
            onClick={() => {
              setStablishment(false);
              setOptions(!options);
            }}
            className={styles.iconBack}
          />
        </>
      )}
      {edit && (
        <>
          <form className={styles.formStablishment} action="">
            <label htmlFor="name">Nombre del establecimiento</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="address">Dirección</label>
            <input type="text" name="address" id="address" />
            <label htmlFor="phone">Teléfono</label>
            <input type="text" name="phone" id="phone" />
            <label htmlFor="email">Correo electrónico</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="web">Sitio web</label>
            <input type="text" name="web" id="web" />
            <label htmlFor="description">Descripción</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="schedule">Horario</label>
            <input type="text" name="schedule" id="schedule" />
            <label htmlFor="category">Categoría</label>
            {/* <select name="category" id="category">
              <option value="1">Categoría 1</option>
              <option value="2">Categoría 2</option>
              <option value="3">Categoría 3</option>
              <option value="4">Categoría 4</option>
            </select>
            <label htmlFor="subCategory">Subcategoría</label>
            <select name="subCategory" id="subCategory">
              <option value="1">Subcategoría 1</option>
              <option value="2">Subcategoría 2</option>
              <option value="3">Subcategoría 3</option>
              <option value="4">Subcategoría 4</option>
            </select> */}
            <button type="submit">Editar</button>
          </form>
          <IoChevronBackCircleSharp
            onClick={() => {
              setEdit(false);
              setOptions(!options);
            }}
            className={styles.iconBack}
          />
        </>
      )}
      {share && (
        <>
          <article className={styles.socialMediaBar}>
            <BsFacebook className={styles.iconSocial} />
            <FaWhatsapp className={styles.iconSocial} />
            <AiOutlineTwitter className={styles.iconSocial} />
            <AiOutlineInstagram className={styles.iconSocial} />
          </article>
          <IoChevronBackCircleSharp
            onClick={() => {
              setShare(false);
              setOptions(!options);
            }}
            className={styles.iconBack}
          />
        </>
      )}
    </section>
  );
}
