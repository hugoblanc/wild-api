import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FlashcardsModule } from './flashcards/flashcards.module';
import { TicketsModule } from './tickets/tickets.module';
import { TopicsModule } from './topics/topics.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [UsersModule, FlashcardsModule, TicketsModule, TopicsModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
