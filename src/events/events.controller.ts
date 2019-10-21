import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { AbstractController } from '../core/abstract/abstract.controller';
import { Event } from './event.entity';
import { EventsService } from './events.service';

@ApiUseTags('events')
@Controller('events')
export class EventsController extends AbstractController<Event> {

    constructor(private readonly eventService: EventsService) {
        super(eventService);
    }

    @Post()
    @ApiResponse({ status: 200, type: [Event] })
    async create(@Body() event: Event): Promise<Event> {
        return super.create(event);
    }

    @Get('/:id')
    @ApiResponse({ status: 200, type: Event })
    findById(@Param('id') id: number): Promise<Event> {
        return super.findById(id);
    }

    @Get()
    @ApiResponse({ status: 200, type: [Event] })
    async findAll(): Promise<Event[]> {
        return super.findAll();
    }

}
