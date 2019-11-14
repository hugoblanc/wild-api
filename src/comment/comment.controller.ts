import { Controller, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('topics', 'tickets-secure')
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
@UseGuards(AuthGuard('jwt'))
export class CommentController implements CrudController<Comment> {

    constructor(public service: CommentService) { }

}
