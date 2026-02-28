import {
  IsString,
  IsOptional,
  IsBoolean,
  IsEnum,
  IsISO8601,
  MaxLength,
} from 'class-validator';
import { TodoPriority } from '../../entities/todo.entity';

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  @MaxLength(200)
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;

  @IsEnum(TodoPriority)
  @IsOptional()
  priority?: TodoPriority;

  @IsISO8601()
  @IsOptional()
  dueDate?: string;
}
