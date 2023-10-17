
import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Tasks/tasksSlice";

const NewTaskForm = () => {
    const dispatch = useDispatch();

    const handleAddTask = () => {
        //examples for dispatch test
        const newTask = {
            name: "Nowe zadanie",
            description: "Opis nowego zadania",
            status: "Nowe",
        };

        dispatch(addTask(newTask));
    };

    return (
        <button onClick={handleAddTask}>Dodaj nowe zadanie</button>
    );
};

export default NewTaskForm;
