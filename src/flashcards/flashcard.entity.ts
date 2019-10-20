import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../core/abstract/abstract.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Flashcard extends AbstractEntity {

    @ApiModelProperty()
    @Column({ type: 'longtext' })
    secondDescription: string;

    @ApiModelProperty()
    @Column({ length: 200 })
    imageUrl: string;

}
