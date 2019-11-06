import { Injectable, Logger, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {

    readonly logger = new Logger(UsersService.name);
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>,
    ) {
        super(repository);
    }

    save(content: any): Promise<any> {
        return this.repository.save(content);
    }

}
