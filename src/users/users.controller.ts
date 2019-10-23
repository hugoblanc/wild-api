import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { AbstractController } from '../core/abstract/abstract.controller';
import { ApiUseTags } from '@nestjs/swagger';
import { UserDto } from './user-dto';

@ApiUseTags('users', 'tickets', 'flashcards', 'events', 'topics')
@Controller('users')
export class UsersController extends AbstractController<User, UserDto> {

    constructor(private readonly userService: UsersService) {
        super(userService);
    }

    @Post()
    async create(@Body() user: UserDto) {
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
