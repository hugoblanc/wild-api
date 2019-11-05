import { ApiProperty } from '@nestjs/swagger';
import { Flashfolder } from '../flashcards/folders/flashfolder.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Event } from '../events/event.entity';
import { Ticket } from '../tickets/ticket.entity';
import { Topic } from '../topics/topic.entity';
import { User } from '../users/user.entity';

@Entity()
export class Group {

    @ApiProperty()
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
    })
    id: number;

    @ApiProperty()
    @Column('varchar', {
        nullable: false,
        name: 'name',
    })
    name: string;

    @ApiProperty({ type: [Ticket], required: false })
    @OneToMany(type => Ticket, ticket => ticket.group)
    tickets: Ticket[];

    @ApiProperty({ type: [Event], required: false })
    @OneToMany(type => Event, event => event.group)
    events: Event[];

    @ApiProperty({ type: [Flashfolder], required: false })
    @OneToMany(type => Flashfolder, flashfolder => flashfolder.group)
    flashfolders: Flashfolder[];

    @ApiProperty({ type: [Topic], required: false })
    @OneToMany(type => Topic, topic => topic.group)
    topics: Topic[];

}
