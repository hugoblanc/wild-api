import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ticket } from '../tickets/ticket.entity';
import { Topic } from '../topics/topic.entity';
import { User } from '../users/user.entity';

@Entity()
export class Comment {

    @ApiModelProperty({ required: false })
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.comments)
    @IsNotEmpty()
    @ApiModelProperty({ type: User })
    user: User;

    @ManyToOne(type => Topic, topic => topic.comments)
    @ApiModelProperty({ type: Topic })
    topic: Topic;

    @ManyToOne(type => Ticket, ticket => ticket.comments)
    @ApiModelProperty({ type: Ticket })
    ticket: Ticket;

    @ApiModelProperty()
    @Column({ type: 'longtext' })
    @IsNotEmpty()
    description: string;

    @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    @CreateDateColumn({type: 'timestamp'})
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

}
