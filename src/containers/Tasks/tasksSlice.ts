import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";
import { fetchTasks } from "./fetchTasks";
import { TasksState } from "./types";

const initialState: TasksState = {
    list: [],
    loading: false,
    error: null,
};

export const axiosInstance = axios.create({
    maxRedirects: 0,
});

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message ?? "Wystąpił błąd podczas ładowania zadań.";
            });
    },
});

export const selectTasks = (state: RootState) => state.tasks.list;
export const selectLoading = (state: RootState) => state.tasks.loading;

export default tasksSlice.reducer;