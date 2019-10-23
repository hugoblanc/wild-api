import { ApiModelProperty } from '@nestjs/swagger';

export class AbstractDto {

    @ApiModelProperty({ required: false })
    id?: number;

    @ApiModelProperty()
    title: string;

    @ApiModelProperty()
    description: string;

    @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    createdAt: Date;

    @ApiModelProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    updatedAt: Date;

}
