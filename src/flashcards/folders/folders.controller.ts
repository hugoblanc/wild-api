import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Flashfolder } from './flashfolder.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { FoldersService } from './folders.service';

@ApiUseTags('flashcards')
@Controller('flashfolders')
@Crud({
    model: {
        type: Flashfolder,
    },
    query: {
        join: {
            flashcards: {
                eager: true,
                persist: ['id', 'title'],
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
export class FoldersController implements CrudController<Flashfolder> {

    constructor(public service: FoldersService) { }
}
