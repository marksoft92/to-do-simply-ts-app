import React from "react";
import styles from "../../assets/styles/components/buttons/buttons.module.scss";
interface AddButtonProps {
  onHandleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  isValid: boolean;
}

const AddButton: React.FC<AddButtonProps> = ({ onHandleClick, isValid }) => {
  return (
    <>
      <div className={styles["container-button-marker"]}>
        <button className={styles.button} onClick={onHandleClick} disabled={!isValid}>
          <div className={styles["button__line"]}></div>
          <div className={styles["button__line"]}></div>
          <span className={styles["button__text"]}>Dodaj</span>
          <div className={styles["button__drow1"]}></div>
          <div className={styles["button__drow2"]}></div>
        </button>
      </div>
    </>
  );
};

export default AddButton;
