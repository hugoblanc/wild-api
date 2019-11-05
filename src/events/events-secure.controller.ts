import { EventsService } from './events.service';
import { Controller, UseGuards } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Event } from './event.entity';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('events-secure')
@Controller('events-secure')
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
@UseGuards(AuthGuard('jwt'))
export class EventsSecureController implements CrudController<Event> {

    constructor(public service: EventsService) { }

}
