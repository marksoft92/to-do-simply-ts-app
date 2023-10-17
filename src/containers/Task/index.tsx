import React from "react";

import NewTaskForm from "../Task/newTaskForm";
import { Task } from "../Tasks/types";


interface TaskCartProps {
    tasks: Task
}

const TaskCart: React.FC<TaskCartProps> = (props) => {
    console.log('props', props)

    return (
        <>
            <div>"xx"</div>
        </>
    );
};

export default TaskCart;