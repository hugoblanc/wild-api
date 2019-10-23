import { Injectable, Logger } from '@nestjs/common';
import { Flashcard } from './flashcard.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractService } from '../../core/abstract/abstract.service';

@Injectable()
export class FlashcardsService extends AbstractService {

    readonly logger = new Logger(FlashcardsService.name);
    constructor(
        @InjectRepository(Flashcard)
        private readonly flashcardRepository: Repository<Flashcard>,
    ) {
        super(flashcardRepository);
    }

}
