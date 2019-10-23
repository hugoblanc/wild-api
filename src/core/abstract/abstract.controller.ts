import { Body, Get, Logger, Param, Post } from '@nestjs/common';
import { AbstractService } from './abstract.service';

export class AbstractController<T, K> {

    private readonly logger = new Logger(AbstractController.name);
    constructor(private abstractService: AbstractService) { }

    async create(abstractEntity: K): Promise<T> {
        return this.abstractService.save(abstractEntity);
    }

    async findById(id: number) {
        return this.abstractService.findById(id);
    }

    async findAll() {
        return this.abstractService.findAll();
    }

}
