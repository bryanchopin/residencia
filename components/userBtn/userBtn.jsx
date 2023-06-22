import styles from "./userBtn.module.css"
import {AiOutlineUser} from "react-icons/ai"


export default function UserBtn({handleOpenWindow}) {
    return(
        <div className={styles.UserBtn}>
            <AiOutlineUser className={styles.icon}/>
        </div>
    )

}