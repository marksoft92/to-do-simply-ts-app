import React from "react";
import NewTaskForm from "../Task/Form/newTaskForm";
import TaskCart from "../Task";
import { ApiResponse } from "./tasks.types";
import Empty from "../../components/Common/empty";

const TasksList: React.FC<ApiResponse> = ({ tasks }) => {
  const emptyTaskList = !!tasks.length
  console.log(emptyTaskList)
  return (
    <div className="flex justify-content-center flex-direction-column">
      <div className="flex align-items-center justify-content-center form-container">
        <NewTaskForm />
      </div>

      {!emptyTaskList ? (
        <Empty />
      ) : (
        <div>
          {tasks.map((task) => (
            <TaskCart {...task} />
          ))}
        </div>
      )}

    </div>
  );
};

export default TasksList;
