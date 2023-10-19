import React from "react";
import { DeleteOutlined } from "@ant-design/icons"
interface DeleteButtonProps {
  onHandleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onHandleClick }) => {
  return <button onClick={onHandleClick}><DeleteOutlined />Usuń</button>;
};

export default DeleteButton;
