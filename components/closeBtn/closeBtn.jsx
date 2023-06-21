import styles from "./closeBtn.module.css"

export default function CloseBtn({ handleCloseWindow }){
    return(
        <div onClick={handleCloseWindow} className={styles.closeBtnContainer}><span>X</span></div>
    )
}