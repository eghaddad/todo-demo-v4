import { TodoPriority } from '../../entities/todo.entity';
export declare class UpdateTodoDto {
    title?: string;
    description?: string;
    completed?: boolean;
    priority?: TodoPriority;
    dueDate?: string;
}
