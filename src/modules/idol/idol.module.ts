import { Module } from '@nestjs/common';
import { IdolResolver } from './resolvers/idol.resolver';
import { IdolService } from './idol.service';

@Module({ providers: [IdolResolver, IdolService] })
export class IdolModule {}
