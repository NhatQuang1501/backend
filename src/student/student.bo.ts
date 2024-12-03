import { Injectable } from '@nestjs/common';
import { StudentDao } from './student.dao';
import { StudentEntity } from './student.entity';

@Injectable()
export class StudentBo {
  constructor(private readonly studentDao: StudentDao) {}

  async create(student: StudentEntity): Promise<StudentEntity> {
    return this.studentDao.create(student);
  }

  async findAll(): Promise<StudentEntity[]> {
    return this.studentDao.findAll();
  }

  async findOne(id: number): Promise<StudentEntity> {
    return this.studentDao.findOne(id);
  }

  async update(id: number, student: StudentEntity): Promise<void> {
    return this.studentDao.update(id, student);
  }

  async delete(id: number): Promise<void> {
    return this.studentDao.delete(id);
  }
}
