import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Topic } from './topic.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class TopicsService extends TypeOrmCrudService<Topic> {

    readonly logger = new Logger(TopicsService.name);
    constructor(
        @InjectRepository(Topic)
        private readonly repository: Repository<Topic>,
        private userService: UsersService,
    ) {
        super(repository);
    }

    async addToFavorites(id: string, userId: any) {
        return this.addToList(id, 'favoriters', userId);
    }

    async addToLikes(id: string, userId?: any) {
        return this.addToList(id, 'likers', userId);
    }

    async removeFromFavorites(id: string, user: any) {
        return this.removeFromList(id, 'favoriters', user);
    }

    async removeFromLikes(id: string, user?: any) {
        return this.removeFromList(id, 'likers', user);
    }

    private async addToList(id: string, key: string, userId?: any) {
        console.log(id + ' ' + key + userId);

        const topic = await this.repository.findOne(parseInt(id, 10));
        const listeTopic = topic[key] || [];
        listeTopic.push(await this.userService.findOne(userId));
        topic[key] = listeTopic;
        return this.repository.save(topic);
    }

    private async removeFromList(id: string, key: string, userId: number) {
        const topic = await this.repository.findOne(parseInt(id, 10));
        const listeTopic: User[] = topic[key] || [];
        const index = listeTopic.findIndex((u) => u.id === (userId));
        listeTopic.splice(index, 1);
        topic[key] = listeTopic;
        return this.repository.save(topic);
    }
}
