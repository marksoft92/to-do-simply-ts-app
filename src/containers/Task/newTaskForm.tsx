import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Tasks/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const defaultValues = { status: false, description: "" };

const NewTaskForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    ...defaultValues,
  });

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValues({
      ...values,
      description: event.target.value,
    });
  };

  const handleAddTask = () => {
    dispatch(addTask({ ...values, id: nanoid() }));
    setValues(defaultValues);
  };

  return (
    <>
      <textarea
        value={values.description}
        onChange={handleTextChange}
        placeholder="Wpisz tekst..."
      />
      <button onClick={handleAddTask}>Dodaj nowe zadanie</button>
    </>
  );
};

export default NewTaskForm;
