import { Module } from '@nestjs/common';
import { SetService } from './set.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Set } from './set.entity';
import { SetResolver } from './resolvers/set.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Set])],
    providers: [SetService, SetResolver],
})
export class SetModule {}
