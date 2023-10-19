import React from "react";
import stylesCard from "../../assets/styles/containers/Task/card.module.scss";
interface DoneButtonProps {
  onHandleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DoneButton: React.FC<DoneButtonProps> = ({ onHandleClick }) => {
  return (
    <>
      <button
        className={stylesCard["accordion__buttonText"]}
        onClick={onHandleClick}
      >
        Zakończ
      </button>
      ;
    </>
  );
};

export default DoneButton;
