import { Injectable, Logger } from '@nestjs/common';
import { AbstractService } from '../core/abstract/abstract.service';
import { Group } from './group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GroupsService extends AbstractService {

    readonly logger = new Logger(GroupsService.name);
    constructor(
        @InjectRepository(Group)
        private readonly groupRepository: Repository<Group>,
    ) {
        super(groupRepository);
    }

}
