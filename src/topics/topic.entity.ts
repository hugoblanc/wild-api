import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { AbstractEntity } from '../core/abstract/abstract.entity';
import { User } from '../users/user.entity';
import { Group } from './../groups/group.entity';

@Entity()
export class Topic extends AbstractEntity {

    @ApiProperty()
    @Column({ length: 150 })
    @IsNotEmpty()
    resourceUrl: string;

    @ApiProperty({ type: User })
    @ManyToOne(type => User, user => user.topics)
    @IsNotEmpty()
    user: User;

    @ApiProperty({ type: Group })
    @ManyToOne(type => Group, group => group.topics, { cascade: ['insert', 'update'] })
    @IsNotEmpty()
    group: Group;

    @ManyToMany(type => User, user => user.favoriteTopics)
    @JoinTable()
    favoriters: User[];

    @ManyToMany(type => User, user => user.favoriteTopics)
    @JoinTable()
    likers: User[];

}
