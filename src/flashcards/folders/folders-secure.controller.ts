import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Flashfolder } from './flashfolder.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { FoldersService } from './folders.service';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('flashcards-secure')
@Controller('flashfolders-secure')
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
@UseGuards(AuthGuard('jwt'))
export class FoldersSecureController implements CrudController<Flashfolder> {

    constructor(public service: FoldersService) { }
}
