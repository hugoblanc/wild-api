import { Injectable, Logger } from '@nestjs/common';
import { Comment } from './comment.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService extends TypeOrmCrudService<Comment> {

    readonly logger = new Logger(CommentService.name);

    constructor(
        @InjectRepository(Comment)
        private readonly repository: Repository<Comment>,
    ) {
        super(repository);
    }

}
