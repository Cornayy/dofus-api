import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consumable } from './consumable.entity';
import { ConsumableService } from './consumable.service';
import { ConsumableResolver } from './resolvers/consumable.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Consumable])],
    providers: [ConsumableService, ConsumableResolver],
})
export class ConsumableModule {}
