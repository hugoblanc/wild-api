import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('users')
@Controller('users')
@Crud({
    model: {
        type: User,
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true,
        },
    },
    routes: { only: ['getManyBase', 'getOneBase'] },
    query: {
        join: {
            groups: {
            },
            tickets: {
            },
            events: {
            },
            flashfolders: {
            },
            topics: {
            },
            favoriteTopics: {
            },
            likedTopics: {
            },
        },
    },
})
export class UsersController implements CrudController<User> {

    constructor(public service: UsersService) { }

    @Get('me')
    @UseGuards(AuthGuard('jwt'))
    findMe(@Request() req) {
        return req.user;
    }
}
