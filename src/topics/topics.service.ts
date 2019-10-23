import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Topic } from './topic.entity';

@Injectable()
export class TopicsService extends TypeOrmCrudService<Topic> {

    readonly logger = new Logger(TopicsService.name);
    constructor(
        @InjectRepository(Topic)
        private readonly repository: Repository<Topic>,
    ) {
        super(repository);
    }
}
