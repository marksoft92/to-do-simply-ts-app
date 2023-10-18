import React from "react";

interface TextAreaProps {
  value: string;
  onHandleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onHandleChange }) => {
  return (
    <textarea
      value={value}
      onChange={onHandleChange}
      placeholder="Wpisz tekst..."
    />
  );
};

export default TextArea;
