import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { Topic } from './topic.entity';
import { AbstractController } from '../core/abstract/abstract.controller';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('topics')
@Controller('topics')
export class TopicsController extends AbstractController<Topic> {

    constructor(private readonly topicsService: TopicsService) {
        super(topicsService);
    }

    @Post()
    async create(@Body() topic: Topic) {
        return super.create(topic);
    }

    @Get('/:id')
    findById(@Param('id') id: number) {
        return super.findById(id);
    }

    @Get()
    async findAll() {
        return super.findAll();
    }

}
