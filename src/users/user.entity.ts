import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Event } from '../events/event.entity';
import { Flashcard } from '../flashcards/flashcard.entity';
import { Group } from '../groups/group.entity';
import { Ticket } from '../tickets/ticket.entity';
import { Topic } from '../topics/topic.entity';

@Entity()
export class User {

    @ApiModelProperty({ required: false })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({ length: 30 })
    @IsNotEmpty()
    firstname: string;

    @ApiModelProperty()
    @Column({ length: 30 })
    @IsNotEmpty()
    lastname: string;

    @ApiModelProperty({ type: [Group], required: false })
    @ManyToMany(type => Group)
    @JoinTable()
    groups: Group[];

    @ApiModelProperty({ type: [Ticket], required: false })
    @OneToMany(type => Ticket, ticket => ticket.user)
    tickets: Ticket[];

    @ApiModelProperty({ type: [Event], required: false })
    @OneToMany(type => Event, event => event.user)
    events: Event[];

    @ApiModelProperty({ type: [Flashcard], required: false })
    @OneToMany(type => Flashcard, flashcard => flashcard.user)
    flashcards: Flashcard[];

    @ApiModelProperty({ type: [Topic], required: false })
    @OneToMany(type => Topic, topic => topic.user)
    topics: Topic[];
}
