import React, { FC, ChangeEvent } from "react";
import styles from "../../assets/styles/components/formControls/textArea.module.scss"
interface TextAreaProps {
  value: string;
  onHandleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
}

const TextArea: FC<TextAreaProps> = ({ value, onHandleChange, placeholder, className }) => {
  return (
    <div className={`pos-relative`}>
      <div className={styles.main}>
        <input
          value={value}
          className={styles.input}
          onChange={onHandleChange}
        />
        <span className={styles.place}>{placeholder}</span>
        <span className={styles.bor}></span>
      </div>
    </div>
  );
};

export default TextArea;
