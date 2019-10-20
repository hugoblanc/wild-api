import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Group {

    @ApiModelProperty()
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
    })
    id: number;

    @ApiModelProperty()
    @Column('varchar', {
        nullable: false,
        name: 'name',
    })
    name: string;

}
