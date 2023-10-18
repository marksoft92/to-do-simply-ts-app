import React from "react";

interface DeleteButtonProps {
  onHandleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onHandleClick }) => {
  return <button onClick={onHandleClick}>Usuń</button>;
};

export default DeleteButton;
