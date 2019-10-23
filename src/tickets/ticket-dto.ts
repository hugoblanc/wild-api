import { AbstractDto } from '../core/abstract/abstract-dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { UserDto } from '../users/user-dto';
import { GroupDto } from '../groups/group-dto';

export class TicketDto extends AbstractDto {
    @ApiModelProperty({ type: UserDto })
    user: UserDto;

    @ApiModelProperty({ type: GroupDto })
    group: GroupDto;
}
