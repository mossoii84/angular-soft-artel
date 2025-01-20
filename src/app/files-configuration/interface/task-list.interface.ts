import { TaskStatus } from "../enums/task-status.enum";

export interface Task {
    id: number;
    taskName: string;
    author: string;
    taskId: string;
    timeRequired: string;
    status: TaskStatus[];
    type: string;
  }