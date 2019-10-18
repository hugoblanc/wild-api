import { CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Topic {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  title: string;

  @Column({ length: 150 })
  description: string;

  @Column({ length: 150 })
  resourceUrl: string;

//   npm install --save sequelize sequelize-typescript mysql2
// npm install --save-dev @types/sequelize

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;

//   @DeletedAt public deletedAt: Date;

// rattaché a un groupe ?
// catégorie ou tag ?
}
