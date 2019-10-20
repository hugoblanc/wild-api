import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Group } from '../groups/group.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    firstname: string;

    @Column({ length: 30 })
    lastname: string;

    @ManyToMany(type => Group)
    @JoinTable()
    groups: Group[];
}

