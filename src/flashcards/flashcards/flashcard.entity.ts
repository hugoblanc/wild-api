import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../../core/abstract/abstract.entity';
import { User } from '../../users/user.entity';
import { Flashfolder } from '../folders/flashfolder.entity';

@Entity()
export class Flashcard extends AbstractEntity {

    @ApiModelProperty()
    @Column({ type: 'longtext' })
    secondDescription: string;

    @ApiModelProperty()
    @Column({ length: 200 })
    imageUrl: string;

    @ApiModelProperty({ type: Flashfolder })
    @ManyToOne(type => Flashfolder, flashfolder => flashfolder.flashcards, { cascade: ['insert', 'update'] })
    @IsNotEmpty()
    flashfolder: Flashfolder;
}
