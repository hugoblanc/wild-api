import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from '../events/event.entity';
import { Flashcard } from '../flashcards/flashcard.entity';
import { Group } from '../groups/group.entity';
import { Ticket } from '../tickets/ticket.entity';
import { Topic } from '../topics/topic.entity';

@Entity()
export class User {

    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({ length: 30 })
    firstname: string;

    @ApiModelProperty()
    @Column({ length: 30 })
    lastname: string;

    @ApiModelProperty({ type: [Group] })
    @ManyToMany(type => Group)
    @JoinTable()
    groups: Group[];

    @ApiModelProperty({ type: [Ticket] })
    @ApiModelPropertyOptional()
    @OneToMany(type => Ticket, ticket => ticket.user)
    tickets: Ticket[];

    @ApiModelProperty({ type: [Event] })
    @ApiModelPropertyOptional()
    @OneToMany(type => Event, event => event.user)
    events: Event[];

    @ApiModelProperty({ type: [Flashcard] })
    @ApiModelPropertyOptional()
    @OneToMany(type => Flashcard, flashcard => flashcard.user)
    flashcards: Flashcard[];

    @ApiModelProperty({ type: [Topic] })
    @ApiModelPropertyOptional()
    @OneToMany(type => Topic, topic => topic.user)
    topics: Topic[];
}
