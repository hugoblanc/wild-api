import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../core/abstract/abstract.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { User } from '../users/user.entity';

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
    user: User;

}
