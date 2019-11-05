import { AbstractEntity } from '../../core/abstract/abstract.entity';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/user.entity';
import { ManyToOne, Entity, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Group } from '../../groups/group.entity';
import { Flashcard } from '../flashcards/flashcard.entity';

@Entity()
export class Flashfolder extends AbstractEntity {

    @ApiProperty({ type: User, required: false })
    @ManyToOne(type => User, user => user.flashfolders)
    @IsNotEmpty()
    user: User;

    @ApiProperty({ type: Group })
    @ManyToOne(type => Group, group => group.flashfolders, { cascade: ['insert', 'update'] })
    @IsNotEmpty()
    group: Group;

    @ApiProperty({ type: [Flashcard], required: false })
    @OneToMany(type => Flashcard, flashcard => flashcard.flashfolder)
    flashcards: Flashcard[];

}
