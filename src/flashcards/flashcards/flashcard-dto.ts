import { ApiModelProperty } from '@nestjs/swagger';

export class FlashcardDto {

    @ApiModelProperty({ required: false })
    secondDescription?: string;

    @ApiModelProperty({ required: false })
    imageUrl?: string;

}
