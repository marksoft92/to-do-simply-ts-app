import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Tasks/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import TextArea from "../../../components/textarea";
import AddButton from "../../../components/Buttons/AddButton";
import { findCategoryByKeywords } from "../../../utils/helpers";


const defaultValues = {
  status: false,
  description: "",
  category: "",
  icon: "",
};

const NewTaskForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(defaultValues);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { category, icon } = findCategoryByKeywords(event.target.value);
    setValues({
      ...values,
      description: event.target.value,
      category,
      icon,
    });
  };

  const handleAddTask = () => {
    const newTask = {
      ...defaultValues,
      ...values,
      id: nanoid(),
    };

    dispatch(addTask(newTask));
    setValues(defaultValues);
  };

  return (
    <>
      {/* <KeywordHighlighter value={values.description} onHandleChange={handleTextChange} /> */}
      <TextArea value={values.description} onHandleChange={handleTextChange} />
      <AddButton onHandleClick={handleAddTask} />
    </>
  );
};

export default NewTaskForm;
