import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { AbstractController } from '../core/abstract/abstract.controller';

@Controller('users')
export class UsersController extends AbstractController<User> {

    constructor(private readonly userService: UsersService) {
        super(userService);
    }

    @Post()
    async create(@Body() user: User) {
        return super.create(user);
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
