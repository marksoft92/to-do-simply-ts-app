import React from "react";
import NewTaskForm from "../Task/Form/newTaskForm";
import TaskCart from "../Task";
import { ApiResponse } from "./tasks.types";

const TasksList: React.FC<ApiResponse> = ({ tasks }) => {
  return (
    <>
      <NewTaskForm />
      {tasks.map((task) => (
        <TaskCart {...task} />
      ))}
    </>
  );
};

export default TasksList;
