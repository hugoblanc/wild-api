import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class AbstractEntity {

    @ApiProperty({ required: false })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ length: 200 })
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @Column({ type: 'longtext' })
    @IsNotEmpty()
    description: string;

    @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    @CreateDateColumn({type: 'timestamp'})
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    @UpdateDateColumn({type: 'timestamp'})
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

}
