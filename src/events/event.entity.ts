import { School } from './../school/school.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../core/abstract/abstract.entity';
import { User } from '../users/user.entity';
import { Group } from './../groups/group.entity';

@Entity()
export class Event extends AbstractEntity {

    @ApiModelProperty({ required: false })
    @Column({ length: 200, nullable: true })
    imageUrl: string;

    @ApiModelProperty({ required: false })
    @Column({ length: 200, nullable: true })
    place: string;

    @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    @IsNotEmpty()
    startAt: Date;

    @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    @IsNotEmpty()
    endAt: Date;

    @ManyToOne(type => User, user => user.events)
    @IsNotEmpty()
    @ApiModelProperty({ type: User })
    user: User;

    // @ApiModelProperty({ type: Group })
    @ManyToOne(type => Group, group => group.events, { nullable: true } )
    group: Group;

    @ApiModelProperty({ type: School, nullable: true })
    @ManyToOne(type => School, school => school.events, { nullable: true })
    school: School;

}
