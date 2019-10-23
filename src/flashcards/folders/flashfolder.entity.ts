import { AbstractEntity } from '../../core/abstract/abstract.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { User } from '../../users/user.entity';
import { ManyToOne, Entity } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Group } from '../../groups/group.entity';

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

}
