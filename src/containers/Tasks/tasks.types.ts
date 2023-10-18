import { Task } from "../Task/task.types";

export interface TasksState {
  list: Task[];
  loading: boolean;
  error: string | null;
}

export interface ApiResponse {
  tasks: Task[];
}
