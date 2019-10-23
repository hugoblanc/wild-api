import { ApiModelProperty } from '@nestjs/swagger';
import { Flashfolder } from '../flashcards/folders/flashfolder.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from '../events/event.entity';
import { Ticket } from '../tickets/ticket.entity';
import { Topic } from '../topics/topic.entity';

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

    @ApiModelProperty({ type: [Flashfolder], required: false })
    @OneToMany(type => Flashfolder, flashfolder => flashfolder.group)
    flashfolders: Flashfolder[];

    @ApiModelProperty({ type: [Topic], required: false })
    @OneToMany(type => Topic, topic => topic.group)
    topics: Topic[];

}
