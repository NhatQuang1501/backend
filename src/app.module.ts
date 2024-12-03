import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { ClassModule } from './class/class.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'student_db',
      entities: [StudentEntity, ClassEntity],
      synchronize: true,
    }),
    StudentModule,
    ClassModule,
  ],
})
export class AppModule {}
