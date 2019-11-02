import { Injectable, Logger } from '@nestjs/common';
import { Flashcard } from './flashcard.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractService } from '../../core/abstract/abstract.service';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class FlashcardsService extends TypeOrmCrudService<Flashcard> {

    readonly logger = new Logger(FlashcardsService.name);
    constructor(
        @InjectRepository(Flashcard)
        private readonly repository: Repository<Flashcard>,
    ) {
        super(repository);
    }

}
