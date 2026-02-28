import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsISO8601,
  MaxLength,
} from 'class-validator';
import { TodoPriority } from '../../entities/todo.entity';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TodoPriority)
  @IsOptional()
  priority?: TodoPriority;

  @IsISO8601()
  @IsOptional()
  dueDate?: string;
}
