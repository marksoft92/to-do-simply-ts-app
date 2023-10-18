import { Task } from "../Task/task.types";

export interface TasksState {
  list: ApiResponse[];
  loading: boolean;
  error: string | null;
}

export interface ApiResponse {
  tasks: Task;
  id: string;
}
