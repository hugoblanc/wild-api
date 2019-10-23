import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { Topic } from './topic.entity';
import { TopicsService } from './topics.service';

@ApiUseTags('topics')
@Controller('topics')
@Crud({
    model: {
        type: Topic,
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true,
        },
    },
    query: {
        join: {
            user: {
                eager: true,
            },
            group: {
                eager: true,
            },
        },
    },
})
export class TopicsController {

    constructor(public service: TopicsService) {  }

    // @Post()
    // @ApiResponse({ status: HttpStatus.CREATED, type: Topic })
    // async create(@Body() topic: Topic) {
    //     return super.create(topic);
    // }

    // @Get('/:id')
    // @ApiResponse({ status: HttpStatus.OK, type: Topic })
    // findById(@Param('id') id: number) {
    //     return super.findById(id);
    // }

    // @Get()
    // @ApiResponse({ status: HttpStatus.OK, type: [Topic] })
    // async findAll() {
    //     return super.findAll();
    // }

}
