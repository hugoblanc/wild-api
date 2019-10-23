import { Injectable, Logger } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Flashfolder } from './flashfolder.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FoldersService extends TypeOrmCrudService<Flashfolder> {

    readonly logger = new Logger(FoldersService.name);

    constructor(
        @InjectRepository(Flashfolder)
        private readonly repository: Repository<Flashfolder>,
    ) {
        super(repository);
    }
}
