import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../core/abstract/abstract.entity';
import { User } from '../users/user.entity';
import { Group } from './../groups/group.entity';

@Entity()
export class Flashcard extends AbstractEntity {

    @ApiModelProperty()
    @Column({ type: 'longtext' })
    secondDescription: string;

    @ApiModelProperty()
    @Column({ length: 200 })
    imageUrl: string;

    @ApiModelProperty({ type: User, required: false })
    @ManyToOne(type => User, user => user.flashcards)
    @IsNotEmpty()
    user: User;

    @ApiModelProperty({ type: Group })
    @ManyToOne(type => Group, group => group.flashcards, { cascade: ['insert', 'update'] })
    @IsNotEmpty()
    group: Group;

}
