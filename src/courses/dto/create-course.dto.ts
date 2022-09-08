import { IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateCourseDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly description: string;
  @IsString({ each: true })
  readonly tags: string[];
}
