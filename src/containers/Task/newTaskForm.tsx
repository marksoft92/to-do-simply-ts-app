import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Tasks/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const NewTaskForm = () => {
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const newTask = {
      id: nanoid(),
      description: "Opis nowego zadania",
      status: false,
    };

    dispatch(addTask(newTask));
  };

  return <button onClick={handleAddTask}>Dodaj nowe zadanie</button>;
};

export default NewTaskForm;
