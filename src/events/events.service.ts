import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventsService extends TypeOrmCrudService<Event> {

    readonly logger = new Logger(EventsService.name);

    constructor(
        @InjectRepository(Event)
        private readonly repository: Repository<Event>,
    ) {
        super(repository);
    }

}
