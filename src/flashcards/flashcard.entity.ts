import { CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flashcard {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  firstSide: string;

  @Column({ length: 200 })
  secondSide: string;

  @Column({ length: 200 })
  imageUrl: string;

//   npm install --save sequelize sequelize-typescript mysql2
// npm install --save-dev @types/sequelize

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;

//   @DeletedAt public deletedAt: Date;

// rattaché a un groupe ?
// catégorie ou tag ?
}
