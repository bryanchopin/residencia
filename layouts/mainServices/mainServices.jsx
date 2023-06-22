import styles from "./mainServices.module.css";
import CloseBtn from "@/components/closeBtn/closeBtn";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsHospital } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import {IoChevronBackCircleSharp} from 'react-icons/io5'
import {BsFacebook} from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import { useState } from "react";

export default function MainServices({ state, handleCloseWindow }) {
  const stateContainer = state
    ? styles.mainServicesContainer
    : styles.mainServicesContainerOff;

    const [stablishment, setStablishment] = useState(false);
    const [edit, setEdit] = useState(false);
    const [share, setShare] = useState(false);
    const [options, setOptions] = useState(true);

  return (
    <section className={stateContainer}>
      <CloseBtn handleCloseWindow={handleCloseWindow} />
      {options && (
        <>
          <div className={styles.optionsContainer}>
            <div onClick={() => {setStablishment(true); setOptions(!options)}} className={styles.btnContainer}>
              <BsHospital className={styles.icon} />
            </div>
            <div onClick={() => {setEdit(true); setOptions(!options)}} className={styles.btnContainer}>
              <BiEdit className={styles.icon} />
            </div>
            <div onClick={() => {setShare(true); setOptions(!options)}} className={styles.btnContainer}>
              <AiOutlineShareAlt className={styles.icon} />
            </div>
          </div>
        </>
      )}
      {stablishment && (
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
            <textarea name="description" id="description" cols="30" rows="10"></textarea>
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
            <button type="submit">Enviar</button>
              
          </form>
          <IoChevronBackCircleSharp onClick={() => {setStablishment(false); setOptions(!options)}} className={styles.iconBack} />
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
            <textarea name="description" id="description" cols="30" rows="10"></textarea>
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
          <IoChevronBackCircleSharp onClick={() => {setEdit(false); setOptions(!options)}} className={styles.iconBack} />
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
          <IoChevronBackCircleSharp onClick={() => {setShare(false); setOptions(!options)}} className={styles.iconBack} />
        </>
      )}
    </section>
  );
}
