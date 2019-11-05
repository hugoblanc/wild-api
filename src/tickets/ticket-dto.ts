import { AbstractDto } from '../core/abstract/abstract-dto';
import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from '../users/user-dto';
import { GroupDto } from '../groups/group-dto';

export class TicketDto extends AbstractDto {
    @ApiProperty({ type: UserDto })
    user: UserDto;

    @ApiProperty({ type: GroupDto })
    group: GroupDto;
}
