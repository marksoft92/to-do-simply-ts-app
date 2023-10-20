import React, { FC } from "react";
import TextArea from "../../../components/FormControler/textarea";
import AddButton from "../../../components/Buttons/AddButton";
import NewTaskFormLogic from "./newTaskForm.effect";

const NewTaskForm: FC = () => {
  const { values, handleTextChange, handleAddTask } = NewTaskFormLogic();
  const isValid = !!values.description

  return (
    <>
      <TextArea
        value={values.description}
        onHandleChange={handleTextChange}
        placeholder="Wisz treść zadania do wykonania !"
        className="top20"
      />
      <AddButton onHandleClick={handleAddTask} isValid={isValid} />
    </>
  );
};

export default NewTaskForm;
