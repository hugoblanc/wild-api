import { AbstractDto } from '../core/abstract/abstract-dto';
import { UserDto } from '../users/user-dto';
import { GroupDto } from '../groups/group-dto';
import { ApiProperty } from '@nestjs/swagger';

export class EventDto extends AbstractDto {

    @ApiProperty({ required: false })
    imageUrl?: string;

    @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    startAt: Date;

    @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    endAt: Date;

    @ApiProperty({ type: UserDto })
    user: UserDto;

    @ApiProperty({ type: GroupDto })
    group: GroupDto;

}
