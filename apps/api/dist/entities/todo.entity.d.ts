export declare enum TodoPriority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high"
}
export declare class Todo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    priority: TodoPriority;
    dueDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
