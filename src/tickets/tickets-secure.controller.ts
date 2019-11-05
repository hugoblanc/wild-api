import { Controller, UseGuards } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { TicketsService } from './tickets.service';
import { Ticket } from './ticket.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('tickets-secure')
@Controller('tickets-secure')
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
                eager: true,
            },
        },
    },
})
@UseGuards(AuthGuard('jwt'))
export class TicketsSecureController implements CrudController<Ticket> {

    constructor(public service: TicketsService) {
    }

}
