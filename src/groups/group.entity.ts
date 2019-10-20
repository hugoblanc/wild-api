import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Group {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
    })
    id: number;

    @Column('varchar', {
        nullable: false,
        name: 'name',
    })
    name: string;

}
