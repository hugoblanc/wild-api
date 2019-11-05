import { ApiProperty } from '@nestjs/swagger';

export class AbstractDto {

    @ApiProperty({ required: false })
    id?: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    createdAt: Date;

    @ApiProperty({ type: 'string', format: 'date-time', example: '2018-11-21T06:20:32.232Z' })
    updatedAt: Date;

}
