import { ApiModelProperty } from '@nestjs/swagger';
import { UserDto } from '../../users/user-dto';

export class FlashcardDto {

    @ApiModelProperty({ required: false })
    secondDescription?: string;

    @ApiModelProperty({ required: false })
    imageUrl?: string;

    @ApiModelProperty({ type: UserDto })
    user: UserDto;

}
