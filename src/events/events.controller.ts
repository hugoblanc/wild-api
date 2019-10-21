import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './event.entity';
import { AbstractController } from '../core/abstract/abstract.controller';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('events')
@Controller('events')
export class EventsController extends AbstractController<Event> {

    constructor(private readonly eventService: EventsService) {
        super(eventService);
    }

    @Post()
    async create(@Body() event: Event) {
        return super.create(event);
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
