import { Controller, UseGuards } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Flashcard } from './flashcard.entity';
import { FlashcardsService } from './flashcards.service';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('flashcards-secure')
@Controller('flashcards-secure')
@Crud({
    model: {
        type: Flashcard,
    },
})
@UseGuards(AuthGuard('jwt'))
export class FlashcardsSecureController implements CrudController<Flashcard> {

    constructor(public service: FlashcardsService) { }

}
