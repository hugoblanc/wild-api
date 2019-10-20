import { Module } from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { FlashcardsController } from './flashcards.controller';
import { Flashcard } from './flashcard.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Flashcard])],
    providers: [FlashcardsService],
    controllers: [FlashcardsController]
})
export class FlashcardsModule { }
