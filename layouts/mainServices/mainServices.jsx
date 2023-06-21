import styles from "./mainServices.module.css";
import CloseBtn from "@/components/closeBtn/closeBtn";

export default function MainServices({ state, handleCloseWindow }) {
  const stateContainer = state
    ? styles.mainServicesContainer
    : styles.mainServicesContainerOff;

  return (
    <section className={stateContainer}>
      <CloseBtn handleCloseWindow={handleCloseWindow} />
      <div className={styles.optionsContainer}>
        <div className={styles.btnContainer}></div>
        <div className={styles.btnContainer}></div>
        <div className={styles.btnContainer}></div>
      </div>
    </section>
  );
}
