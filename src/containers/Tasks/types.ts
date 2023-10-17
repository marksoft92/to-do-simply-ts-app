export interface TasksState {
    list: ApiResponse[];
    loading: boolean;
    error: string | null;
}

export interface Task {
    name: string;
    description: number;
    status: string;
}

export interface ApiResponse {
    tasks: Task[];
}