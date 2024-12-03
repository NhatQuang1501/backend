import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { StudentEntity } from '../student/student.entity';

@Entity()
export class ClassEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => StudentEntity, (student) => student.class)
  students: StudentEntity[];
}