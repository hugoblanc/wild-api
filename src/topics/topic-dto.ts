import { AbstractDto } from './../core/abstract/abstract-dto';
import { ApiProperty } from '@nestjs/swagger';
import { GroupDto } from '../groups/group-dto';
import { UserDto } from '../users/user-dto';

export class TopicDto extends AbstractDto {

    @ApiProperty()
    resourceUrl: string;

    @ApiProperty({ type: UserDto })
    user: UserDto;

    @ApiProperty({ type: GroupDto })
    group: GroupDto;
}
