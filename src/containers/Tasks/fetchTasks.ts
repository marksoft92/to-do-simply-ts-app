import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
  try {
    const tasksData = localStorage.getItem("tasksData");
    if (tasksData) {
      const parseTasksData = JSON.parse(tasksData);

      return parseTasksData;
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
});
