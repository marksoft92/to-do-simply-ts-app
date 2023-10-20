import React, { FC, memo } from "react";
import NewTaskForm from "../Task/Form/newTaskForm";
import TaskCart from "../Task";
import { ApiResponse } from "./tasks.types";
import Empty from "../../components/Common/empty";

const TasksList: FC<ApiResponse> = memo(({ tasks }) => {
  const emptyTaskList = !!tasks.length

  return (
    <div className="flex justify-content-center flex-direction-column">
      <div className="flex align-items-center justify-content-center form-container">
        <NewTaskForm />
      </div>

      {!emptyTaskList ? (
        <Empty />
      ) : (
        <>
          {tasks.map((task) => (
            <TaskCart {...task} />
          ))}
        </>
      )}
    </div>
  );
});

export default TasksList;
