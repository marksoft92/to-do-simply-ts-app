import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchTasks } from "./fetchTasks";
import { TasksState } from "./tasks.types";
import { sortTasksByStatus, updateLocalStorage } from "../../utils/helpers";

const initialState: TasksState = {
  list: [],
  loading: false,
  error: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
      updateLocalStorage(state);
    },
    markTaskAsCompleted: (state, action) => {
      const taskId = action.payload;
      const taskToMark = state.list.find((task) => task.id === taskId);

      if (taskToMark) {
        taskToMark.status = true;
        updateLocalStorage(state);
      }
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      const updatedList = state.list.filter((task) => task.id !== taskId);
      state.list = updatedList;
      updateLocalStorage(state);
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
        state.list = sortTasksByStatus(state.list.concat(action.payload));
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? "Wystąpił błąd podczas ładowania zadań.";
      });
  },
});

export const { addTask, markTaskAsCompleted, deleteTask } = tasksSlice.actions;
export const selectTasks = (state: RootState) => state.tasks.list;
export const selectLoading = (state: RootState) => state.tasks.loading;

export default tasksSlice.reducer;
