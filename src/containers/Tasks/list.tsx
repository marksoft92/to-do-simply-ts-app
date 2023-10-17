import React from "react";
import { ApiResponse } from "./types";
import NewTaskForm from "../Task/newTaskForm";
import TaskCart from "../Task";


interface TasksListProps {
    tasks: ApiResponse[];
    loading: boolean;
}

const TasksList: React.FC<TasksListProps> = ({
    tasks
}) => {


    return (
        <>
            {tasks.map(task => <TaskCart {...task} />)}
            <NewTaskForm />
        </>
    );
};

export default TasksList;