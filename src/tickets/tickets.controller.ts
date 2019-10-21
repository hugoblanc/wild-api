import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { AbstractController } from '../core/abstract/abstract.controller';
import { Ticket } from './ticket.entity';
import { TicketsService } from './tickets.service';

@ApiUseTags('tickets')
@Controller('tickets')
export class TicketsController extends AbstractController<Ticket> {

    constructor(private readonly ticketsService: TicketsService) {
        super(ticketsService);
    }

    @Post()
    async create(@Body() ticket: Ticket) {
        return super.create(ticket);
    }

    @Get('/:id')
    findById(@Param('id') id: number) {
        return super.findById(id);
    }

    @Get()
    async findAll() {
        return super.findAll();
    }

}

