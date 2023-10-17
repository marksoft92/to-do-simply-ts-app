import React from "react";
import { ApiResponse } from "./types";
import NewTaskForm from "../Task/newTaskForm";


interface TasksListProps {
    tasks: ApiResponse[];
    loading: boolean;
}

const TasksList: React.FC<TasksListProps> = ({

}) => {


    return (
        <>
            <NewTaskForm />
        </>
    );
};

export default TasksList;