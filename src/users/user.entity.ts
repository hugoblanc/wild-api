import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';
import { Event } from '../events/event.entity';
import { Group } from '../groups/group.entity';
import { Ticket } from '../tickets/ticket.entity';
import { Topic } from '../topics/topic.entity';
import { Flashfolder } from './../flashcards/folders/flashfolder.entity';

@Entity()
export class User {

    @ApiModelProperty({ required: false })
    @PrimaryColumn()
    id: number;

    @ApiModelProperty()
    @Column({ length: 40 })
    @IsNotEmpty()
    email: string;

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

    @ApiModelProperty({ type: [Flashfolder], required: false })
    @OneToMany(type => Flashfolder, flashfolder => flashfolder.user)
    flashfolders: Flashfolder[];

    @ApiModelProperty({ type: [Topic], required: false })
    @OneToMany(type => Topic, topic => topic.user)
    topics: Topic[];

    assignOdysseyDTo(odysseyDTO: OdysseyMeDTO) {
        this.id = odysseyDTO.id;
        this.firstname = odysseyDTO.firstname;
        this.lastname = odysseyDTO.firstname;
        this.email = odysseyDTO.email;
        return this;
    }
}
