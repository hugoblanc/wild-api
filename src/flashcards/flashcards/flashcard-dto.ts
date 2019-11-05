import { ApiProperty } from '@nestjs/swagger';

export class FlashcardDto {

    @ApiProperty({ required: false })
    secondDescription?: string;

    @ApiProperty({ required: false })
    imageUrl?: string;

}
