import { Module } from '@nestjs/common';
import { FlashcardsService } from './flashcards/flashcards.service';
import { FlashcardsController } from './flashcards/flashcards.controller';
import { Flashcard } from './flashcards/flashcard.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flashfolder } from './folders/flashfolder.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Flashcard, Flashfolder])],
    providers: [FlashcardsService],
    controllers: [FlashcardsController],
})
export class FlashcardsModule { }
