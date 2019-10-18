import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbstractController } from './abstract/abstract.controller';
import { AbstractEntity } from './abstract/abstract.entity';
import { AbstractService } from './abstract/abstract.service';

@Module({
  imports: [TypeOrmModule.forFeature([AbstractEntity])],
  providers: [AbstractService],
  controllers: [AbstractController],
})
export class CoreModule {}
