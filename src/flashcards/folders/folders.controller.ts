import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Flashfolder } from './flashfolder.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { FoldersService } from './folders.service';

@ApiUseTags('flashcards')
@Controller('flashfolders')
@Crud({
    model: {
        type: Flashfolder,
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
            flashcards: {
                eager: true,
            },
            group: {
                eager: true,
            },
            user: {
                eager: true,
            },
        },
    },
})
export class FoldersController {

    constructor(public service: FoldersService)  { }
}
