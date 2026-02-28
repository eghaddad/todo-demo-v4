import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAll(filters: {
    completed?: boolean;
    priority?: string;
    limit: number;
    offset: number;
  }) {
    const queryBuilder = this.todoRepository.createQueryBuilder('todo');

    if (filters.completed !== undefined) {
      queryBuilder.andWhere('todo.completed = :completed', {
        completed: filters.completed,
      });
    }

    if (filters.priority) {
      queryBuilder.andWhere('todo.priority = :priority', {
        priority: filters.priority,
      });
    }

    const [data, total] = await queryBuilder
      .orderBy('todo.createdAt', 'DESC')
      .skip(filters.offset)
      .take(filters.limit)
      .getManyAndCount();

    return {
      data,
      total,
      limit: filters.limit,
      offset: filters.offset,
    };
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(createTodoDto);
    if (createTodoDto.dueDate) {
      todo.dueDate = new Date(createTodoDto.dueDate);
    }
    return this.todoRepository.save(todo);
  }

  async findOne(id: string): Promise<Todo> {
    const todo = await this.todoRepository.findOne({ where: { id } });
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.findOne(id);

    Object.assign(todo, updateTodoDto);

    if (updateTodoDto.dueDate) {
      todo.dueDate = new Date(updateTodoDto.dueDate);
    }

    return this.todoRepository.save(todo);
  }

  async remove(id: string): Promise<void> {
    const todo = await this.findOne(id);
    await this.todoRepository.remove(todo);
  }
}
