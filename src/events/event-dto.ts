import { AbstractDto } from '../core/abstract/abstract-dto';
import { UserDto } from '../users/user-dto';
import { GroupDto } from '../groups/group-dto';
import { ApiModelProperty } from '@nestjs/swagger';

export class EventDto extends AbstractDto {

    @ApiModelProperty({ required: false })
    imageUrl?: string;

    @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    startAt: Date;

    @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    endAt: Date;

    @ApiModelProperty({ type: UserDto })
    user: UserDto;

    @ApiModelProperty({ type: GroupDto })
    group: GroupDto;

}
