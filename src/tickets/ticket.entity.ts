import { Group } from './../groups/group.entity';
import { Entity, ManyToOne, Column } from 'typeorm';
import { AbstractEntity } from '../core/abstract/abstract.entity';
import { User } from '../users/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { TicketStatus } from './ticket-status.enum';

@Entity()
export class Ticket extends AbstractEntity {

    @ApiProperty({ type: User })
    @ManyToOne(type => User, user => user.tickets)
    @IsNotEmpty()
    user: User;

    @ApiProperty({ type: Group })
    @ManyToOne(type => Group, group => group.tickets, { cascade: ['insert', 'update'] })
    @IsNotEmpty()
    group: Group;

    @Column({ type: 'enum', enum: TicketStatus, default: TicketStatus.ASKED })
    status: TicketStatus;
}
