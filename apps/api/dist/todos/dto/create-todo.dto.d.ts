import { TodoPriority } from '../../entities/todo.entity';
export declare class CreateTodoDto {
    title: string;
    description?: string;
    priority?: TodoPriority;
    dueDate?: string;
}
