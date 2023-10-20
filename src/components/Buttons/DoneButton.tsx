import React, { FC, MouseEvent } from "react";
import stylesCard from "../../assets/styles/containers/Task/card.module.scss";
interface DoneButtonProps {
  onHandleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const DoneButton: FC<DoneButtonProps> = ({ onHandleClick }) => {
  return (
    <>
      <button
        className={stylesCard["accordion__buttonText"]}
        onClick={onHandleClick}
      >
        Zakończ
      </button>
    </>
  );
};

export default DoneButton;
