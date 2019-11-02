import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { Flashcard } from './flashcard.entity';
import { FlashcardsService } from './flashcards.service';

@ApiUseTags('flashcards')
@Controller('flashcards')
@Crud({
    model: {
        type: Flashcard,
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
        },
    },
})
export class FlashcardsController {

    constructor(public service: FlashcardsService) {  }

}
