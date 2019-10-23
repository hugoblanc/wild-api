import { ApiModelProperty } from '@nestjs/swagger';

import { UserDto } from 'src/users/user-dto';

import { GroupDto } from 'src/groups/group-dto';

export class FlashcardDto {

    @ApiModelProperty({ required: false })
    secondDescription?: string;

    @ApiModelProperty({ required: false })
    imageUrl?: string;

    @ApiModelProperty({ type: 'any' })
    user: UserDto;

    @ApiModelProperty({ type: GroupDto })
    group: GroupDto;
}
