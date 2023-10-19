import React, { useState, useEffect, useRef } from "react";
import styles from "../assets/styles/components/formControls/textArea.module.scss";
import categoriesData from "../categories.json"; // Importuj obiekt JSON

interface KeywordHighlighterProps {
  value: string;
  onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const KeywordHighlighter: React.FC<KeywordHighlighterProps> = ({ value, onHandleChange }) => {
  const [highlightedText, setHighlightedText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleInput = () => {
      if (inputRef.current) {
        let text = inputRef.current.value;
        categoriesData.kategorie.forEach((category) => {
          category.slowa_kluczowe.forEach((keyword) => {
            const pattern = new RegExp(`\\b${keyword}\\b`, "gi");
            text = text.replace(
              pattern,
              (match) => `<strong>${match}</strong>`
            );
          });
        });
        setHighlightedText(text);
      }
    };

    // Przypisz inputRef.current do zmiennej lokalnej
    const currentInputRef = inputRef.current;

    if (currentInputRef) {
      currentInputRef.addEventListener("input", handleInput);
    }

    return () => {
      if (currentInputRef) {
        currentInputRef.removeEventListener("input", handleInput);
      }
    };
  }, []);

  return (
    <div className={`pos-relative`}>
      <input
        ref={inputRef}
        type="text"

        onChange={onHandleChange}
        style={{
          width: '100%',
          height: '100%',
          fontSize: '16px',
          opacity: 0,
          position: 'absolute',
        }}
      />


      <div
        className={styles["prose"] + " " + styles["background"]}
        dangerouslySetInnerHTML={{ __html: highlightedText }}
        style={{
          width: '100%',
          height: '100%',
          fontSize: '16px',
          border: '1px solid #ccc',
          padding: '5px',
          minHeight: '30px',
          lineHeight: '1.6',
        }}

      />
    </div>
  );
};

export default KeywordHighlighter;
