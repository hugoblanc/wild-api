import { Controller } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
import { Crud, CrudController } from '@nestjsx/crud';

@Controller('comment')
@Crud({
    model: {
        type: Comment,
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
            topic: {

            },
            ticket: {

            },
        },
    },
})
export class CommentController implements CrudController<Comment> {

    constructor(public service: CommentService) { }

}
