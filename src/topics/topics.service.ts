import { Injectable, Logger } from '@nestjs/common';
import { Topic } from './topic.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractService } from '../core/abstract/abstract.service';

@Injectable()
export class TopicsService extends AbstractService {

    readonly logger = new Logger(TopicsService.name);
    constructor(
        @InjectRepository(Topic)
        private readonly topicRepository: Repository<Topic>,
    ) {
        super(topicRepository);
    }
}
