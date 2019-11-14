import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FlashcardsModule } from './flashcards/flashcards.module';
import { TicketsModule } from './tickets/tickets.module';
import { TopicsModule } from './topics/topics.module';
import { EventsModule } from './events/events.module';
import { GroupsModule } from './groups/groups.module';
import { CoreModule } from './core/core.module';
import { OdysseyModule } from './odyssey/odyssey.module';
import { SchoolModule } from './school/school/school.module';
import { CommentModule } from './comment/comment.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.WILD_DB_HOST,
            port: parseInt(process.env.WILD_DB_PORT, 10),
            username: process.env.WILD_DB_USER,
            password: process.env.WILD_DB_PASSWORD,
            database: 'wild',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
            extra: {
                charset: 'utf8mb4_general_ci',
            },
        }),
        UsersModule,
        FlashcardsModule,
        TicketsModule,
        TopicsModule,
        EventsModule,
        GroupsModule,
        CoreModule,
        OdysseyModule,
        SchoolModule,
        CommentModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
