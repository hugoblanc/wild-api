
import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../core/abstract/abstract.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Event extends AbstractEntity {

    @ApiModelProperty()
    @Column({ length: 200 })
    imageUrl: string;

    @ApiModelProperty()
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    startAt: Date;

    @ApiModelProperty()
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    endAt: Date;

}
