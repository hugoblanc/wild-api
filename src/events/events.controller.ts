import { EventsService } from './events.service';
import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { Event } from './event.entity';

@ApiUseTags('events')
@Controller('events')
@Crud({
    model: {
        type: Event,
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
export class EventsController {

    constructor(public service: EventsService) {
    }

    // @Post()
    // @ApiResponse({ status: HttpStatus.CREATED, type: Event })
    // async create(@Body() event: EventDto): Promise<Event> {
    //     return super.create(event);
    // }

    // @Get('/:id')
    // @ApiResponse({ status: HttpStatus.OK, type: Event })
    // findById(@Param('id') id: number): Promise<Event> {
    //     return super.findById(id);
    // }

    // @Get()
    // @ApiResponse({ status: HttpStatus.OK, type: [Event] })
    // async findAll(): Promise<Event[]> {
    //     return super.findAll();
    // }

}
