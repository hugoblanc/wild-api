import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { TicketsService } from './tickets.service';
import { Ticket } from './ticket.entity';
import { Crud } from '@nestjsx/crud';

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
                eager: true,
            },
        },
    },
})
export class TicketsController {

    constructor(public service: TicketsService) {
    }

    // @Post()
    // @ApiResponse({ status: HttpStatus.CREATED, type: Ticket })
    // async create(@Body() ticket: TicketDto) {
    //     return super.create(ticket);
    // }

    // @Get('/:id')
    // @ApiResponse({ status: HttpStatus.OK, type: Ticket })
    // findById(@Param('id') id: number) {
    //     return super.findById(id);
    // }

    // @Get()
    // @ApiResponse({ status: HttpStatus.OK, type: [Ticket] })
    // async findAll() {
    //     return super.findAll();
    // }

}

