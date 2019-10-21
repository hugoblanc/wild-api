import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { Ticket } from '../tickets/ticket.entity';
import { Flashcard } from '../flashcards/flashcard.entity';
import { Topic } from '../topics/topic.entity';
import { Event } from '../events/event.entity';

@Entity()
export class Group {

    @ApiModelProperty()
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
    })
    id: number;

    @ApiModelProperty()
    @Column('varchar', {
        nullable: false,
        name: 'name',
    })
    name: string;

    @ApiModelProperty({ type: [Ticket], required: false })
    @OneToMany(type => Ticket, ticket => ticket.group)
    tickets: Ticket[];

    @ApiModelProperty({ type: [Event], required: false })
    @OneToMany(type => Event, event => event.group)
    events: Event[];

    @ApiModelProperty({ type: [Flashcard], required: false })
    @OneToMany(type => Flashcard, flashcard => flashcard.group)
    flashcards: Flashcard[];

    @ApiModelProperty({ type: [Topic], required: false })
    @OneToMany(type => Topic, topic => topic.group)
    topics: Topic[];

}
