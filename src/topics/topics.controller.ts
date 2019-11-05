import { Controller } from '@nestjs/common';
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

}
