
import { CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  title: string;

  @Column({ type: 'longtext' })
  description: string;

  @Column({ length: 200 })
  imageUrl: string;

  @Column({ type: 'timestamp' })
  startAt: Date;

  @Column({ type: 'timestamp' })
  endAt: Date;

  //   npm install --save sequelize sequelize-typescript mysql2
  // npm install --save-dev @types/sequelize

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;

  //   @DeletedAt public deletedAt: Date;

  // rattaché a un groupe ?
  // catégorie ou tag ?
}
