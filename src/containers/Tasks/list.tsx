import React from "react";
import NewTaskForm from "../Task/newTaskForm";
import TaskCart from "../Task";
import { TasksListProps } from "./tasks.props";

const TasksList: React.FC<TasksListProps> = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskCart key={task.id} {...task} />
      ))}
      <NewTaskForm />
    </>
  );
};

export default TasksList;
