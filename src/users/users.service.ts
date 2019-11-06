import { Injectable, Logger, Scope, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class UsersService extends TypeOrmCrudService<User> {

    readonly logger = new Logger(UsersService.name);
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>,
        @Inject(REQUEST) private readonly request: any,
    ) {
        super(repository);
    }

    save(content: any): Promise<any> {
        return this.repository.save(content);
    }

    findMe() {
        return this.request.user;
    }
}
