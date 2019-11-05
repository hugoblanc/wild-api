import { EventsSecureController } from './events-secure.controller';
import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Event } from './event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Event])],
    providers: [EventsService],
    controllers: [EventsController, EventsSecureController],
})
export class EventsModule { }
