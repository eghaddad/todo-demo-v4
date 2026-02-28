import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosService {
    private readonly todoRepository;
    constructor(todoRepository: Repository<Todo>);
    findAll(filters: {
        completed?: boolean;
        priority?: string;
        limit: number;
        offset: number;
    }): Promise<{
        data: Todo[];
        total: number;
        limit: number;
        offset: number;
    }>;
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    findOne(id: string): Promise<Todo>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo>;
    remove(id: string): Promise<void>;
}
