import { EventsService } from './events.service';
import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
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

            },
            school: {

            },
        },
    },
})
export class EventsController implements CrudController<Event> {

    constructor(public service: EventsService) { }

}
