import { AbstractEntity } from '../../core/abstract/abstract.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { User } from '../../users/user.entity';
import { ManyToOne, Entity, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Group } from '../../groups/group.entity';
import { Flashcard } from '../flashcards/flashcard.entity';

@Entity()
export class Flashfolder extends AbstractEntity {

    @ApiModelProperty({ type: User, required: false })
    @ManyToOne(type => User, user => user.flashfolders)
    @IsNotEmpty()
    user: User;

    @ApiModelProperty({ type: Group })
    @ManyToOne(type => Group, group => group.flashfolders, { cascade: ['insert', 'update'] })
    @IsNotEmpty()
    group: Group;

    @ApiModelProperty({ type: [Flashcard], required: false })
    @OneToMany(type => Flashcard, flashcard => flashcard.flashfolder)
    flashcards: Flashcard[];

}
