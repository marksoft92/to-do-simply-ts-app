export interface TasksState {
    list: ApiResponse[];
    loading: boolean;
    error: string | null;
}

export interface Task {
    name: string;
    description: string;
    status: string;
}

export interface ApiResponse {
    tasks: Task;
}