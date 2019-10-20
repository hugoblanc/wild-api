import { Injectable, Logger } from '@nestjs/common';
import { User } from './user.entity';
import { AbstractService } from '../core/abstract/abstract.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends AbstractService {

    readonly logger = new Logger(UsersService.name);
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {
        super(userRepository);
    }
}
