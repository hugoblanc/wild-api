import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';

@Injectable()
export class TicketsService extends TypeOrmCrudService<Ticket> {

    readonly logger = new Logger(TicketsService.name);

    constructor(
        @InjectRepository(Ticket)
        private readonly repository: Repository<Ticket>,
    ) {
        super(repository);
    }

}
