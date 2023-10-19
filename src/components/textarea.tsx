import React from "react";
import styles from "../assets/styles/components/formControls/textArea.module.scss"

interface TextAreaProps {
  value: string;
  onHandleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onHandleChange }) => {
  ;
  return (
    <div className={` pos-relative`}>
      <textarea
        value={value}
        className={`${styles["textarea"]} top20`}
        onChange={onHandleChange}
        placeholder="Wpisz zadanie do wykonania..."
        style={{
          resize: "vertical"
        }}></textarea>
    </div>
  );
};

export default TextArea;
