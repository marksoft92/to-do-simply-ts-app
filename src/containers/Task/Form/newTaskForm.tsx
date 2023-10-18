import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Tasks/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import TextArea from "../../../components/textarea";
import AddButton from "../../../components/Buttons/AddButton";
import categoriesData from "../../../categories.json";

const defaultValues = { status: false, description: "", category: "", icon: "" };

const NewTaskForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(defaultValues);

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValues({
      ...values,
      description: event.target.value,
      category: findCategoryByKeywords(event.target.value).category,
      icon: findCategoryByKeywords(event.target.value).icon
    });


  };
  const findCategoryByKeywords = (text: string) => {
    const categories = categoriesData.kategorie;
    let selectedCategory = "inne"; // Domyślna kategoria "inne"
    let selectedIcon = "https://cdn-icons-png.flaticon.com/512/6662/6662930.png"
    let maxMatchCount = 0;

    for (const category of categories) {
      let matchCount = 0;

      for (const keyword of category.slowa_kluczowe) {
        if (text.toLowerCase().includes(keyword)) {
          matchCount++;
        }
      }

      if (matchCount > maxMatchCount) {
        maxMatchCount = matchCount;
        selectedCategory = category.nazwa;
        selectedIcon = category.icon
      }
    }
    console.log(selectedCategory)
    return { category: selectedCategory, icon: selectedIcon };
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
