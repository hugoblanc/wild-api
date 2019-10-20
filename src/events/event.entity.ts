
import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../core/abstract/abstract.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { User } from '../users/user.entity';

@Entity()
export class Event extends AbstractEntity {

    @ApiModelProperty()
    @Column({ length: 200 })
    imageUrl: string;

    @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    startAt: Date;

    @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    endAt: Date;

    @ApiModelProperty({type: User})
    @ManyToOne(type => User, user => user.events)
    user: User;

}
