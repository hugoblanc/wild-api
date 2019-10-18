import { AbstractEntity } from './abstract.entity';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/events/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AbstractService<T extends AbstractEntity> {
    private readonly logger = new Logger(AbstractService.name);

    constructor(
        @InjectRepository(AbstractEntity)
        private readonly abstractRepository: Repository<T>,
    ) { }

    save(content: T): Promise<T> {
        // this.logger.log('Save Content contentId: ' + content.contentId);
        return this.abstractRepository.save(content);
    }

    findAll(): Promise<T[]> {
        return this.abstractRepository.find();
    }

    findById(id: number): Promise<T> {
        this.logger.log('Find content by id: ' + id);
        return this.abstractRepository.findOne({ where: { id } });
    }


}
