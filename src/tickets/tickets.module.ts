import { TicketsSecureController } from './tickets-secure.controller';
import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { Ticket } from './ticket.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Ticket])],
    providers: [TicketsService],
    controllers: [TicketsController, TicketsSecureController],
})
export class TicketsModule { }
