import { Controller, Logger, Get, Param, Body, Post } from '@nestjs/common';
import { AbstractService } from './abstract.service';
import { AbstractEntity } from './abstract.entity';

@Controller('abstract')
export class AbstractController<T extends AbstractEntity> {

    private readonly logger = new Logger('Content Controller');
    constructor(private abstractService: AbstractService<T>) { }

    @Get('/:id')
    getById(@Param('id') id: number) {
        return this.abstractService.findById(id);
    }

    @Get()
    async getAll() {
        return this.abstractService.findAll();
    }

    @Post()
    async create(@Body() abstractEntity: T) {
        return this.abstractService.save(abstractEntity);
    }

}
