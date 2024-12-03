import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ClassEntity } from '../class/class.entity';

@Entity()
export class StudentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ClassEntity, (classEntity) => classEntity.students)
  class: ClassEntity;
}