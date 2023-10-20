import React, { FC, ChangeEvent } from "react";
import styles from "../../assets/styles/components/formControls/input.module.scss"
interface TextInputProps {
  value: string;
  onHandleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
}

const TextInput: FC<TextInputProps> = ({ value, onHandleChange, placeholder, className }) => {
  return (
    <div className={`pos-relative`}>
      <div className={styles.main}>
        <input
          value={value}
          className={`${styles.input} ${className}`}
          onChange={onHandleChange}
          data-testid="text-input"
        />
        {!value && <span className={styles.place}>{placeholder}</span>}
        <span className={styles.bor}></span>
      </div>
    </div>
  );
};

export default TextInput;
