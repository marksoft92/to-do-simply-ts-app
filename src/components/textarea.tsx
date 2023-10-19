import React from "react";
import styles from "../assets/styles/components/formControls/textArea.module.scss";

interface TextAreaProps {
  value: string;
  onHandleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onHandleChange }) => {
  console.log(styles);
  return (
    <input
      value={value}
      className={styles.prose}
      //   onChange={onHandleChange}
      placeholder="Wpisz tekst..."
    />
  );
};

export default TextArea;
