import { Body, Controller, Get, Param, Post, HttpStatus } from '@nestjs/common';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
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
    @ApiResponse({ status: HttpStatus.CREATED, type: Ticket })
    async create(@Body() ticket: Ticket) {
        return super.create(ticket);
    }

    @Get('/:id')
    @ApiResponse({ status: HttpStatus.OK, type: Ticket })
    findById(@Param('id') id: number) {
        return super.findById(id);
    }

    @Get()
    @ApiResponse({ status: HttpStatus.OK, type: [Ticket] })
    async findAll() {
        return super.findAll();
    }

}

