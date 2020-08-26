import { Module } from '@nestjs/common';
import { ConsumableService } from './consumable.service';
import { ConsumableResolver } from './resolvers/consumable.resolver';

@Module({
    providers: [ConsumableService, ConsumableResolver],
})
export class ConsumableModule {}
