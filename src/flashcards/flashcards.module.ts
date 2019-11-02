import { Module } from '@nestjs/common';
import { FlashcardsService } from './flashcards/flashcards.service';
import { FlashcardsController } from './flashcards/flashcards.controller';
import { Flashcard } from './flashcards/flashcard.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flashfolder } from './folders/flashfolder.entity';
import { FoldersController } from './folders/folders.controller';
import { FoldersService } from './folders/folders.service';

@Module({
    imports: [TypeOrmModule.forFeature([Flashfolder, Flashcard])],
    providers: [FlashcardsService, FoldersService],
    controllers: [FlashcardsController, FoldersController],
})
export class FlashcardsModule { }
