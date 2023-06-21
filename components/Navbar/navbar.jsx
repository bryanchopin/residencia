import styles from "./navbar.module.css";
import { AiTwotoneHome } from "react-icons/ai";
import {
  MdManageAccounts,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import {IoExit} from "react-icons/io5";
import {CgMenuGridR} from "react-icons/cg";
export default function Navbar({ handleShowSideBar, handleShowMainView, handleShowServices }) {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navbar}>
          <div onClick={handleShowMainView} className={styles.navLinkContainer}>
            <div className={styles.iconLink}>
              <IoExit />
            </div>
            <div className={styles.textLink}>Exit</div>
          </div>
          <div onClick={handleShowServices} className={styles.navLinkContainer}>
            <div className={styles.iconLink}>
              <CgMenuGridR fontSize={"1.8em"} />
            </div>
            <div className={styles.textLink}>Services</div>
          </div>
          <div onClick={handleShowSideBar} className={styles.navLinkContainer}>
            <div className={styles.iconLink}>
              <MdManageAccounts />
            </div>
            <div className={styles.textLink}>Account</div>
          </div>
        </div>
      </div>
    </>
  );
}
