import { Controller, Post, Body, Get, Param, HttpStatus } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { Topic } from './topic.entity';
import { AbstractController } from '../core/abstract/abstract.controller';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

@ApiUseTags('topics')
@Controller('topics')
export class TopicsController extends AbstractController<Topic> {

    constructor(private readonly topicsService: TopicsService) {
        super(topicsService);
    }

    @Post()
    @ApiResponse({ status: HttpStatus.CREATED, type: Topic })
    async create(@Body() topic: Topic) {
        return super.create(topic);
    }

    @Get('/:id')
    @ApiResponse({ status: HttpStatus.OK, type: Topic })
    findById(@Param('id') id: number) {
        return super.findById(id);
    }

    @Get()
    @ApiResponse({ status: HttpStatus.OK, type: [Topic] })
    async findAll() {
        return super.findAll();
    }

}
