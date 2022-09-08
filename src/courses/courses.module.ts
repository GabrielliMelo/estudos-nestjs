import { Module } from '@nestjs/common';
import { CourseService } from './course-service/course.service';
import { CoursesController } from './course-controller/courses.controller';

@Module({
  controllers: [CoursesController],
  providers: [CourseService],
})
export class CoursesModule {}
