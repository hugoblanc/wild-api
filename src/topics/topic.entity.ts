import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../core/abstract/abstract.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Topic extends AbstractEntity {

    @ApiModelProperty()
    @Column({ length: 150 })
    resourceUrl: string;

}
