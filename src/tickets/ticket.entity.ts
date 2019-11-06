import { Group } from './../groups/group.entity';
import { Entity, ManyToOne, Column } from 'typeorm';
import { AbstractEntity } from '../core/abstract/abstract.entity';
import { User } from '../users/user.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { TicketStatus } from './ticket-status.enum';
import { School } from '../school/school.entity';

@Entity()
export class Ticket extends AbstractEntity {

    @ApiModelProperty({ type: User })
    @ManyToOne(type => User, user => user.tickets)
    @IsNotEmpty()
    user: User;

    @ApiModelProperty({ type: Group })
    @ManyToOne(type => Group, group => group.tickets)
    group: Group;

    @ApiModelProperty({ type: School })
    @ManyToOne(type => School, school => school.tickets)
    school: School;

    @Column({ type: 'enum', enum: TicketStatus, default: TicketStatus.ASKED })
    status: TicketStatus;
}
