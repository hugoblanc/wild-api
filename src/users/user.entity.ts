import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Group } from '../groups/group.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class User {

    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({ length: 30 })
    firstname: string;

    @ApiModelProperty()
    @Column({ length: 30 })
    lastname: string;

    @ApiModelProperty({ type: [Group]})
    @ManyToMany(type => Group)
    @JoinTable()
    groups: Group[];
}

