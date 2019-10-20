import { Injectable, Logger } from '@nestjs/common';
import { Event } from './event.entity';
import { AbstractService } from '../core/abstract/abstract.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService extends AbstractService {

    readonly logger = new Logger(EventsService.name);

    constructor(
        @InjectRepository(Event)
        private readonly eventReposotiry: Repository<Event>,
    ) {
        super(eventReposotiry);
    }

}
