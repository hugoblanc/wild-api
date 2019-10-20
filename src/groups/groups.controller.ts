import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { AbstractController } from '../core/abstract/abstract.controller';
import { GroupsService } from './groups.service';
import { Group } from './group.entity';

@Controller('groups')
export class GroupsController extends AbstractController<Group> {
    constructor(private readonly groupsService: GroupsService) {
        super(groupsService);
    }

    @Post()
    async create(@Body() group: Group) {
        return super.create(group);
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
