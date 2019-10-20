import { Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../core/abstract/abstract.entity';
import { User } from '../users/user.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Ticket extends AbstractEntity {

    @ApiModelProperty({type: User})
    @ManyToOne(type => User, user => user.tickets)
    user: User;

}
