import { Module } from '@nestjs/common';
import { MonsterService } from './monster.service';
import { MonsterResolver } from './resolvers/monster.resolver';

@Module({ providers: [MonsterService, MonsterResolver] })
export class MonsterModule {}
