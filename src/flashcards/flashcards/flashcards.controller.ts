import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Flashcard } from './flashcard.entity';
import { FlashcardsService } from './flashcards.service';

@ApiUseTags('flashcards')
@Controller('flashcards')
@Crud({
    model: {
        type: Flashcard,
    },
    query: {
        join: {
            user: {
                eager: true,
            },
        },
    },
})
export class FlashcardsController implements CrudController<Flashcard> {

    constructor(public service: FlashcardsService) { }

}
