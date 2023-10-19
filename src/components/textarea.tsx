import React from "react";
import styles from "../assets/styles/components/formControls/input.module.scss";

interface TextAreaProps {
  value: string;
  onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onHandleChange }) => {
  console.log(styles);
  return (
    <div className={`${styles["png-background"]} pos-relative`}>
      <input
        value={value}
        className={`${styles.input}`}
        onChange={onHandleChange}
        placeholder="Wpisz tekst..."
      />
    </div>
  );
};

export default TextArea;
