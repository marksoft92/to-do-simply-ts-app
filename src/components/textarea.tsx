import React from "react";
import styles from "../assets/styles/components/formControls/input.module.scss";

interface TextAreaProps {
  value: string;
  onHandleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onHandleChange }) => {
  console.log(styles);
  return (
    <div className={`${styles["png-background"]} pos-relative`}>
      <textarea
        value={value}
        className={`${styles.input} top20`}
        onChange={onHandleChange}
        placeholder="Wpisz zadanie do wykonania..."
        style={{
          resize: "vertical"
        }}></textarea>
    </div>
  );
};

export default TextArea;
