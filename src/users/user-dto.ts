import { GroupDto } from '../groups/group-dto';
import { ApiModelProperty } from '@nestjs/swagger';
export class UserDto {

    @ApiModelProperty({ required: false })
    id?: number;

    @ApiModelProperty()
    firstname: string;

    @ApiModelProperty()
    lastname: string;

    @ApiModelProperty({ type: [GroupDto], required: false })
    groups: GroupDto[];

}
