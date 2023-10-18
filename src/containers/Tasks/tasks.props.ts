import { ApiResponse } from "./tasks.types";

export interface TasksListProps {
  tasks: ApiResponse[];
  loading: boolean;
}
