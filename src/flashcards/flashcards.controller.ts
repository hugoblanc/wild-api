import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { Flashcard } from './flashcard.entity';
import { AbstractController } from '../core/abstract/abstract.controller';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('flashcards')
@Controller('flashcards')
export class FlashcardsController extends AbstractController<Flashcard> {

    constructor(private readonly flashcardsService: FlashcardsService) {
        super(flashcardsService);
    }

    @Post()
    async create(@Body() flashcard: Flashcard) {
        return super.create(flashcard);
    }

    @Get('/:id')
    findById(@Param('id') id: number) {
        return super.findById(id);
    }

    @Get()
    async findAll() {
        return super.findAll();
    }

}
