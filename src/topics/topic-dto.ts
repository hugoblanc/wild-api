import { AbstractDto } from './../core/abstract/abstract-dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { GroupDto } from '../groups/group-dto';
import { UserDto } from '../users/user-dto';

export class TopicDto extends AbstractDto {

    @ApiModelProperty()
    resourceUrl: string;

    @ApiModelProperty({ type: UserDto })
    user: UserDto;

    @ApiModelProperty({ type: GroupDto })
    group: GroupDto;
}
