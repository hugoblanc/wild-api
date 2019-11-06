import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { AbstractEntity } from '../core/abstract/abstract.entity';
import { User } from '../users/user.entity';
import { Group } from './../groups/group.entity';

@Entity()
export class Topic extends AbstractEntity {

    @ApiModelProperty()
    @Column({ length: 150 })
    @IsNotEmpty()
    resourceUrl: string;

    @ApiModelProperty()
    @Column({ length: 150 })
    pictureUrl: string;

    @ApiModelProperty({ type: User })
    @ManyToOne(type => User, user => user.topics)
    @IsNotEmpty()
    user: User;

    @ApiModelProperty({ type: Group })
    @ManyToOne(type => Group, group => group.topics)
    @IsNotEmpty()
    group: Group;

    @ManyToMany(type => User, user => user.favoriteTopics)
    @JoinTable()
    favoriters: User[];

    @ManyToMany(type => User, user => user.favoriteTopics)
    @JoinTable()
    likers: User[];

}
