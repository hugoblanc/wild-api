import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../core/abstract/abstract.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { User } from '../users/user.entity';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Topic extends AbstractEntity {

    @ApiModelProperty()
    @Column({ length: 150 })
    @IsNotEmpty()
    resourceUrl: string;

    @ApiModelProperty({ type: User })
    @ManyToOne(type => User, user => user.topics)
    @IsNotEmpty()
    user: User;

}
