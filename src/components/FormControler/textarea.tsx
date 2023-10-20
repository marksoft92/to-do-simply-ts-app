import React, { FC, ChangeEvent } from "react";
import styles from "../../assets/styles/components/formControls/textArea.module.scss"
interface TextAreaProps {
  value: string;
  onHandleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  placeholder?: string;
}

const TextArea: FC<TextAreaProps> = ({ value, onHandleChange, placeholder, className }) => {
  return (
    <div className={`pos-relative`}>
      <textarea
        value={value}
        className={`${styles["textarea"]} ${className}`}
        onChange={onHandleChange}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
