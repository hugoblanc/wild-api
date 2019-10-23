import { EventDto } from './event-dto';
import { Body, Controller, Get, Param, Post, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { AbstractController } from '../core/abstract/abstract.controller';
import { Event } from './event.entity';
import { EventsService } from './events.service';

@ApiUseTags('events')
@Controller('events')
export class EventsController extends AbstractController<Event, EventDto> {

    constructor(private readonly eventService: EventsService) {
        super(eventService);
    }

    @Post()
    @ApiResponse({ status: HttpStatus.CREATED, type: Event })
    async create(@Body() event: EventDto) {
        return super.create(event);
    }

    @Get('/:id')
    @ApiResponse({ status: HttpStatus.OK, type: Event })
    findById(@Param('id') id: number): Promise<Event> {
        return super.findById(id);
    }

    @Get()
    @ApiResponse({ status: HttpStatus.OK, type: [Event] })
    async findAll(): Promise<Event[]> {
        return super.findAll();
    }

}
