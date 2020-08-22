import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipment } from './equipment.entity';
import { EquipmentService } from './equipment.service';
import { EquipmentResolver } from './resolvers/equipment.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Equipment])],
    providers: [EquipmentService, EquipmentResolver],
})
export class EquipmentModule {}
