import { Module } from '@nestjs/common';
import { SetService } from './set.service';
import { SetResolver } from './resolvers/set.resolver';

@Module({
    providers: [SetService, SetResolver],
})
export class SetModule {}
