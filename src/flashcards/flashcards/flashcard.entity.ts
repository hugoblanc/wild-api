import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../../core/abstract/abstract.entity';
import { Flashfolder } from '../folders/flashfolder.entity';

@Entity()
export class Flashcard extends AbstractEntity {

    @ApiProperty()
    @Column({ type: 'longtext' })
    secondDescription: string;

    @ApiProperty()
    @Column({ length: 200, nullable: true , default: () => null })
    imageUrl: string;

    @ApiProperty({ type: Flashfolder })
    @ManyToOne(type => Flashfolder, flashfolder => flashfolder.flashcards, { cascade: ['insert', 'update'] })
    @IsNotEmpty()
    flashfolder: Flashfolder;
}
