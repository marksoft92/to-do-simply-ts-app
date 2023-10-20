import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Tasks/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import { findCategoryByKeywords } from "../../../utils/helpers";

const defaultValues = {
    status: false,
    description: "",
    category: "",
    icon: "",
};

const NewTaskFormLogic = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState(defaultValues);

    const handleTextChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        const { category, icon } = findCategoryByKeywords(event.target.value);
        setValues({
            ...values,
            description: event.target.value,
            category,
            icon,
        });
    }, [values, setValues]);

    const handleAddTask = () => {
        const newTask = {
            ...defaultValues,
            ...values,
            id: nanoid(),
        };
        dispatch(addTask(newTask));
        setValues(defaultValues);
    };

    return { values, handleTextChange, handleAddTask };
};

export default NewTaskFormLogic