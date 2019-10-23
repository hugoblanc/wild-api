import { Controller, Post, Body, Get, Param, HttpStatus } from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { Flashcard } from './flashcard.entity';
import { AbstractController } from '../../core/abstract/abstract.controller';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { FlashcardDto } from './flashcard-dto';

@ApiUseTags('flashcards')
@Controller('flashcards')
export class FlashcardsController extends AbstractController<Flashcard, FlashcardDto> {

    constructor(private readonly flashcardsService: FlashcardsService) {
        super(flashcardsService);
    }

    @Post()
    @ApiResponse({ status: HttpStatus.CREATED, type: Flashcard })
    async create(@Body() flashcard: FlashcardDto) {
        return super.create(flashcard);
    }

    @Get('/:id')
    @ApiResponse({ status: HttpStatus.OK, type: Flashcard })
    findById(@Param('id') id: number) {
        return super.findById(id);
    }

    @Get()
    @ApiResponse({ status: HttpStatus.OK, type: [Flashcard] })
    async findAll() {
        return super.findAll();
    }

}
