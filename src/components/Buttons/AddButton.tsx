import React from "react";

interface AddButtonProps {
  onHandleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onHandleClick }) => {
  return <button onClick={onHandleClick}>Dodaj nowe zadanie</button>;
};

export default AddButton;
