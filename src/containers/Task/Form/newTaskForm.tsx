import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Tasks/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import TextArea from "../../../components/textarea";
import AddButton from "../../../components/Buttons/AddButton";
import categoriesData from "../../../categories.json";

const defaultValues = { status: false, description: "" };

const NewTaskForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(defaultValues);

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValues({
      ...values,
      description: event.target.value,
    });

    console.log(findCategoryByKeywords(event.target.value));
  };

  const findCategoryByKeywords = (text: string) => {
    let selectedCategory = "inne"; // Domyślna kategoria "inne"

    for (const category of categoriesData.kategorie) {
      for (const keyword of category.slowa_kluczowe) {
        if (text.toLowerCase().includes(keyword)) {
          selectedCategory = category.nazwa;
          break;
        }
      }
    }

    return selectedCategory;
  };

  const handleAddTask = () => {
    dispatch(addTask({ ...values, id: nanoid() }));
    setValues(defaultValues);
  };

  return (
    <>
      <TextArea value={values.description} onHandleChange={handleTextChange} />
      <AddButton onHandleClick={handleAddTask} />
    </>
  );
};

export default NewTaskForm;
