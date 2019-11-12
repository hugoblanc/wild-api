import { Controller, Param, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Topic } from './topic.entity';
import { TopicsService } from './topics.service';

@ApiUseTags('topics')
@Controller('topics-secure')
@Crud({
    model: {
        type: Topic,
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true,
        },
    },
    query: {
        join: {
            user: {
                eager: true,
            },
            group: {
                eager: true,
            },
            favoriters: {
            },
            likers: {
            },
        },
    },
})
@UseGuards(AuthGuard('jwt'))
export class TopicsSecureController implements CrudController<Topic> {
    constructor(public service: TopicsService) { }

    @Post('favorites/:idTopic')
    addToFavorite(@Param('idTopic') id: string, @Request() req) {
        console.log(req.user.payload.id);

        return this.service.addToFavorites(id, req.user.payload.id);
    }

    @Post('likes/:idTopic')
    addTolike(@Param('idTopic') id: string, @Request() req) {
        return this.service.addToFavorites(id, req.user.payload.id);
    }
}
