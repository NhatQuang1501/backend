import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentEntity } from './student.entity';

@Injectable()
export class StudentDao {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {}

  create(student: StudentEntity): Promise<StudentEntity> {
    return this.studentRepository.save(student);
  }

  findAll(): Promise<StudentEntity[]> {
    return this.studentRepository.find();
  }

  findOne(id: number): Promise<StudentEntity> {
    return this.studentRepository.findOne(id);
  }

  update(id: number, student: StudentEntity): Promise<void> {
    return this.studentRepository.update(id, student).then(() => {});
  }

  delete(id: number): Promise<void> {
    return this.studentRepository.delete(id).then(() => {});
  }
}
