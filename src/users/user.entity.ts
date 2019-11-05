import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';
import { Event } from '../events/event.entity';
import { Group } from '../groups/group.entity';
import { Ticket } from '../tickets/ticket.entity';
import { Topic } from '../topics/topic.entity';
import { Flashfolder } from './../flashcards/folders/flashfolder.entity';

@Entity()
export class User {

    @ApiProperty({ required: false })
    @PrimaryColumn()
    id: number;

    @ApiProperty()
    @Column({ length: 40 })
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @Column({ length: 30 })
    @IsNotEmpty()
    firstname: string;

    @ApiProperty()
    @Column({ length: 30 })
    @IsNotEmpty()
    lastname: string;

    @ApiProperty({ type: [Group], required: false })
    @ManyToMany(type => Group)
    @JoinTable()
    groups: Group[];

    @ApiProperty({ type: [Ticket], required: false })
    @OneToMany(type => Ticket, ticket => ticket.user)
    tickets: Ticket[];

    @ApiProperty({ type: [Event], required: false })
    @OneToMany(type => Event, event => event.user)
    events: Event[];

    @ApiProperty({ type: [Flashfolder], required: false })
    @OneToMany(type => Flashfolder, flashfolder => flashfolder.user)
    flashfolders: Flashfolder[];

    @ApiProperty({ type: [Topic], required: false })
    @OneToMany(type => Topic, topic => topic.user)
    topics: Topic[];

    @ApiProperty({ type: [Topic], required: false })
    @ManyToMany(type => Topic, topic => topic.favoriters)
    favoriteTopics: Topic[];

    @ApiProperty({ type: [Topic], required: false })
    @ManyToMany(type => Topic, topic => topic.likers)
    likedTopics: Topic[];

    assignOdysseyDTo(odysseyDTO: OdysseyMeDTO) {
        this.id = odysseyDTO.id;
        this.firstname = odysseyDTO.firstname;
        this.lastname = odysseyDTO.firstname;
        this.email = odysseyDTO.email;
        return this;
    }
}
