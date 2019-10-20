import { CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { Group } from '../../groups/group.entity';

export class AbstractEntity {

    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({ length: 200 })
    title: string;

    @ApiModelProperty()
    @Column({ type: 'longtext' })
    description: string;

    @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    @CreatedAt
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    @UpdatedAt
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @ApiModelProperty({ type: [Group] })
    @ManyToMany(type => Group)
    @JoinTable()
    groups: Group[];

}
