// import React, { useRef, useState, useEffect } from "react";
// import categoriesData from "../categories.json";
// import styles from "../assets/styles/components/formControls/textArea.module.scss";

// interface Category {
//   icon: string;
//   nazwa: string;
//   slowa_kluczowe: string[];
// }

// const KeywordHighlighter: React.FC = () => {
//   const categories: Category[] = categoriesData.kategorie;
//   const keywords: string[] = categories.reduce<string[]>(
//     (allKeywords, category) => allKeywords.concat(category.slowa_kluczowe),
//     []
//   );

//   const [inputText, setInputText] = useState<string>("");
//   const contentEditableRef = useRef<HTMLDivElement | null>(null);
//   const ignoreUpdate = useRef(false);

//   const handleInputChange = () => {
//     if (contentEditableRef.current && !ignoreUpdate.current) {
//       const newText: string = contentEditableRef.current.innerText || "";
//       setInputText(newText);
//     }
//   };

//   const handleBackspace = (e: React.KeyboardEvent) => {
//     if (e.key === "Backspace") {
//       ignoreUpdate.current = true; // Zablokuj aktualizację zawartości
//       setTimeout(() => {
//         ignoreUpdate.current = false; // Odblokuj aktualizację zawartości po krótkim opóźnieniu
//       }, 0);
//     }
//   };

//   useEffect(() => {
//     if (contentEditableRef.current && !ignoreUpdate.current) {
//       const text: string = contentEditableRef.current.innerText || "";
//       const rearrangedText = rearrangeText(text);
//       const highlightedText = highlightKeywords(rearrangedText, keywords);
//       contentEditableRef.current.innerHTML = highlightedText;
//     }
//   }, [inputText, keywords, ignoreUpdate.current]);

//   const highlightKeywords = (text: string, keywords: string[]): string => {
//     let highlightedText: string = text;

//     keywords.forEach((keyword) => {
//       const pattern = new RegExp(`\\b${keyword}\\b`, "gi");
//       highlightedText = highlightedText.replace(
//         pattern,
//         (match) => `<strong>${match}</strong>`
//       );
//     });

//     return highlightedText;
//   };

//   const rearrangeText = (text: string): string => {
//     const textArray = text.split("");
//     const firstChar = textArray.shift();
//     textArray.push(firstChar || "");
//     return textArray.join("");
//   };
//   const handleKeyPress = () => {
//     // @ts-ignore
//     const text: string = contentEditableRef.current.innerText || "";
//     const rearrangedText = rearrangeText(text);
//     // @ts-ignore
//     contentEditableRef.current.innerText = rearrangedText;
//   };

//   return (
//     <div
//       className={styles["prose"] + " " + "editable-content"}
//       contentEditable={true}
//       ref={contentEditableRef}
//       onInput={handleInputChange}
//       onKeyDown={handleBackspace}
//       onKeyPress={handleKeyPress}
//     />
//   );
// };

// export default KeywordHighlighter;

import React, { useState, useEffect, useRef } from "react";
import styles from "../assets/styles/components/formControls/textArea.module.scss";
import categoriesData from "../categories.json"; // Importuj obiekt JSON
const KeywordHighlighter: React.FC = () => {
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

    if (inputRef.current) {
      inputRef.current.addEventListener("input", handleInput);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("input", handleInput);
      }
    };
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        style={{
          opacity: 0,
          position: "absolute",
        }}
      />
      <div className={styles["container-button-marker"]}>
        <div className={styles["button__drow1"]}></div>
        <div className={styles["button__drow2"]}></div>
      </div>
      <div
        className={styles["prose"] + " " + styles["background"]}
        dangerouslySetInnerHTML={{ __html: highlightedText }}
        style={{
          border: "1px solid #ccc",
          padding: "5px",
          minHeight: "30px",
          lineHeight: "1.6",
        }}
        placeholder="Wprowadź tekst..."
      />
    </div>
  );
};

export default KeywordHighlighter;
