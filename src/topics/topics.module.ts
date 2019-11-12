import { TopicsSecureController } from './topics-secure.controller';
import { Module } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { TopicsController } from './topics.controller';
import { Topic } from './topic.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';

@Module({
    imports: [TypeOrmModule.forFeature([Topic]), UsersModule],
    providers: [TopicsService],
    controllers: [TopicsController, TopicsSecureController],
})
export class TopicsModule { }
