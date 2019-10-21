import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class AbstractEntity {

    @ApiModelProperty({ required: false })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({ length: 200 })
    @IsNotEmpty()
    title: string;

    @ApiModelProperty()
    @Column({ type: 'longtext' })
    @IsNotEmpty()
    description: string;

    @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    @CreatedAt
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    @UpdatedAt
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

}
