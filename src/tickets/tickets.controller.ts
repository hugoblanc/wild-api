import { Controller, Get, Param } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { TicketsService } from './tickets.service';
import { Ticket } from './ticket.entity';
import { Crud, CrudController } from '@nestjsx/crud';

@ApiUseTags('tickets')
@Controller('tickets')
@Crud({
    model: {
        type: Ticket,
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
export class TicketsController implements CrudController<Ticket> {

    constructor(public service: TicketsService) {
    }

    @Get('ticket/:id')
    findById(@Param('id') id: number) {
        return this.service.findOne(id);
    }

}
