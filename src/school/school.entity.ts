import { ApiModelProperty } from '@nestjs/swagger';
import { Column, PrimaryColumn, OneToMany, Entity } from 'typeorm';
import { User } from '../users/user.entity';
import { Ticket } from '../tickets/ticket.entity';

@Entity()
export class School {

    @ApiModelProperty()
    @PrimaryColumn({
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

    @ApiModelProperty({ type: [User], required: false })
    @OneToMany(type => User, user => user.school)
    users: User[];

    @ApiModelProperty({ type: [Ticket], required: false })
    @OneToMany(type => Ticket, ticket => ticket.school)
    tickets: Ticket[];

}
