import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  firstname: string;

  @Column({ length: 30 })
  lastname: string;

}
