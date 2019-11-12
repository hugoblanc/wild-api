import { Controller, Post, Param, Delete } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Topic } from './topic.entity';
import { TopicsService } from './topics.service';

@ApiUseTags('topics')
@Controller('topics')
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
export class TopicsController implements CrudController<Topic> {

    constructor(public service: TopicsService) { }

    @Post('favorites/:idTopic')
    addToFavorite(@Param('idTopic') id: string) {
        return this.service.addToFavorites(id, 11495);
    }

    @Post('likes/:idTopic')
    addToLike(@Param('idTopic') id: string) {
        return this.service.addToLikes(id, 11495);
    }

    @Delete('favorites/:idTopic')
    removeFromFavorite(@Param('idTopic') id: string) {
        return this.service.removeFromFavorites(id, 11495);
    }

    @Delete('likes/:idTopic')
    removeFromLike(@Param('idTopic') id: string) {
        return this.service.removeFromLikes(id, 11495);
    }
}
