import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";
import { fetchTasks } from "./fetchTasks";
import { ApiResponse, TasksState } from "./types";

const initialState: TasksState = {
    list: [] as ApiResponse[],
    loading: false,
    error: null,
};

export const axiosInstance = axios.create({
    maxRedirects: 0,
});

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.list.push(action.payload);
            localStorage.setItem("tasksData", JSON.stringify(state.list));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.list = state.list.concat(action.payload);
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message ?? "Wystąpił błąd podczas ładowania zadań.";
            });
    },
});

export const { addTask } = tasksSlice.actions;
export const selectTasks = (state: RootState) => state.tasks.list;
export const selectLoading = (state: RootState) => state.tasks.loading;

export default tasksSlice.reducer;