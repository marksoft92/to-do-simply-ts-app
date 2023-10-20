import React, { FC, MouseEvent } from "react";
import { DeleteOutlined } from "@ant-design/icons"
interface DeleteButtonProps {
  onHandleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const DeleteButton: FC<DeleteButtonProps> = ({ onHandleClick }) => {
  return <button onClick={onHandleClick}><DeleteOutlined />Usuń</button>;
};

export default DeleteButton;
