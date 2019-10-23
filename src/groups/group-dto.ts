import { ApiModelProperty } from '@nestjs/swagger';

export class GroupDto {

    @ApiModelProperty({ required: false })
    id?: number;

    @ApiModelProperty()
    name: string;

}
