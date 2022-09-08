import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { threadId } from 'worker_threads';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'fundamentos',
      description: 'nest',
      tags: ['curso', 'node.js', 'nestjs'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find((curse) => curse.id === Number(id));
    if (!course) {
      throw new HttpException(`CURSO ${id} not found`, HttpStatus.NOT_FOUND);
    }
    console.log(course);
    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDTO: any) {
    const indice = this.courses.findIndex((curse) => curse.id === Number(id));

    this.courses[indice] = updateCourseDTO;
  }

  delete(id: string) {
    const indice = this.courses.findIndex((curse) => curse.id === Number(id));
    console.log(indice);
    if (indice < 0) {
      throw new HttpException(`CURSO ${id} not found`, HttpStatus.NOT_FOUND);
    }
    this.courses.splice(indice, 1);
    return 'Excluido com sucesso';
  }
}
