import { GroupDto } from '../groups/group-dto';
import { ApiProperty } from '@nestjs/swagger';
export class UserDto {

    @ApiProperty({ required: false })
    id?: number;

    @ApiProperty()
    firstname: string;

    @ApiProperty()
    lastname: string;

    @ApiProperty({ type: [GroupDto], required: false })
    groups: GroupDto[];

}
