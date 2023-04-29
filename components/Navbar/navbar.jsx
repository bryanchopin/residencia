import styles from "./navbar.module.css";
import { AiTwotoneHome } from "react-icons/ai";
import { MdManageAccounts, MdOutlineMiscellaneousServices } from "react-icons/md";
import {FaLocationArrow} from "react-icons/fa";

export default function Navbar({handleShowSideBar, handleSetLocation}) {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navbar}>
          <div className={styles.navLinkContainer}>
            <div className={styles.iconLink}>
              <AiTwotoneHome />
            </div>
            <div className={styles.textLink}>Home</div>
          </div>
          <div onClick={handleSetLocation} className={styles.navLinkContainer}>
            <div className={styles.iconLink}>
              <FaLocationArrow />
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
