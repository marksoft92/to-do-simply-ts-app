import React from "react";

interface DoneButtonProps {
  onHandleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DoneButton: React.FC<DoneButtonProps> = ({ onHandleClick }) => {
  return (
    <>
      <button className="accordion__buttonText" onClick={onHandleClick}>
        Zakończ
      </button>
      ;
    </>
  );
};

export default DoneButton;
