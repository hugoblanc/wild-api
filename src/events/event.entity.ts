import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../core/abstract/abstract.entity';
import { User } from '../users/user.entity';
import { Group } from './../groups/group.entity';

@Entity()
export class Event extends AbstractEntity {

    @ApiProperty({ required: false })
    @Column({ length: 200 })
    imageUrl: string;

    @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    @IsNotEmpty()
    startAt: Date;

    @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    @IsNotEmpty()
    endAt: Date;

    @ManyToOne(type => User, user => user.events, { cascade: ['insert', 'update'] })
    @IsNotEmpty()
    @ApiProperty({ type: User })
    user: User;

    // @ApiProperty({ type: Group })
    @ManyToOne(type => Group, group => group.events, { cascade: ['insert', 'update'] })
    @IsNotEmpty()
    group: Group;

}
