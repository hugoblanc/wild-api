import { Controller, UseGuards } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Topic } from './topic.entity';
import { TopicsService } from './topics.service';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('topics-secure')
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

}
