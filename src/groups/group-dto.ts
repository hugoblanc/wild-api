import { ApiProperty } from '@nestjs/swagger';

export class GroupDto {

    @ApiProperty({ required: false })
    id?: number;

    @ApiProperty()
    name: string;

}
