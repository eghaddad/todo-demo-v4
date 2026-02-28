import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    findAll(completed?: string, priority?: string, limit?: string, offset?: string): Promise<{
        data: import("../entities/todo.entity").Todo[];
        total: number;
        limit: number;
        offset: number;
    }>;
    create(createTodoDto: CreateTodoDto): Promise<import("../entities/todo.entity").Todo>;
    findOne(id: string): Promise<import("../entities/todo.entity").Todo>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<import("../entities/todo.entity").Todo>;
    remove(id: string): Promise<void>;
}
