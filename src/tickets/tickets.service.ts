import { Injectable, Logger } from '@nestjs/common';
import { AbstractService } from '../core/abstract/abstract.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './ticket.entity';

@Injectable()
export class TicketsService extends AbstractService {

    readonly logger = new Logger(TicketsService.name);

    constructor(
        @InjectRepository(Ticket)
        private readonly ticketRepository: Repository<Ticket>,
    ) {
        super(ticketRepository);
    }

}
