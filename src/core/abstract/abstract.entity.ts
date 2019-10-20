import { CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

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

    @ApiModelProperty()
    @CreatedAt
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @ApiModelProperty()
    @UpdatedAt
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

}
