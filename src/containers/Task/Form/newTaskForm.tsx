import React, { FC } from "react";
import InputForm from "../../../components/FormControler/input";
import AddButton from "../../../components/Buttons/AddButton";
import NewTaskFormLogic from "./newTaskForm.effect";

const NewTaskForm: FC = () => {
  const { values, handleTextChange, handleAddTask } = NewTaskFormLogic();
  const isValid = !!values.description

  return (
    <>
      <InputForm
        value={values.description}
        onHandleChange={handleTextChange}
        placeholder="Wpisz treść zadania do wykonania !"
      />
      <AddButton onHandleClick={handleAddTask} isValid={isValid} />
    </>
  );
};

export default NewTaskForm;
