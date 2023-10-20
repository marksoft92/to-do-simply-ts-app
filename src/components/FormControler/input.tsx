import React, { FC, ChangeEvent, useState } from "react";
import styles from "../../assets/styles/components/formControls/input.module.scss"
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
          className={`${styles.input} ${className}`}
          onChange={onHandleChange}

        />
        {!value && <span className={styles.place}>{placeholder}</span>}
        <span className={styles.bor}></span>
      </div>
    </div>
  );
};

export default TextArea;
