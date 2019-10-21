import { Group } from './../groups/group.entity';
import { Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../core/abstract/abstract.entity';
import { User } from '../users/user.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Ticket extends AbstractEntity {

    @ApiModelProperty({ type: User })
    @ManyToOne(type => User, user => user.tickets)
    @IsNotEmpty()
    user: User;

    @ApiModelProperty({ type: Group })
    @ManyToOne(type => Group, group => group.tickets, { cascade: ['insert', 'update'] })
    @IsNotEmpty()
    group: Group;
}
