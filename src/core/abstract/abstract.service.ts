import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';

export abstract class AbstractService {

    abstract logger: Logger;

    constructor(private readonly abstractRepository: Repository<any>) {

    }

    save(content: any): Promise<any> {
        // this.logger.log('Save Content contentId: ' + content.contentId);
        return this.abstractRepository.save(content);
    }

    findAll(): Promise<any[]> {
        return this.abstractRepository.find();
    }

    findById(id: number): Promise<any> {
        this.logger.log('Find content by id: ' + id);
        return this.abstractRepository.findOne({ where: { id } });
    }

}
