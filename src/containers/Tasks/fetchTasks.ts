import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiResponse } from "./types";

export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
    try {
        const tasksData = localStorage.getItem("tasksData");
        if (tasksData) {
            const parseTasksData = JSON.parse(tasksData) as ApiResponse;
            return [parseTasksData];
        } else {
            return [];
        }
    } catch (error) {
        throw error;
    }
});
