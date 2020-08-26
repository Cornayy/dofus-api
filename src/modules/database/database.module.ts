import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Ceremonial } from '../ceremonial/ceremonial.entity';
import { Pet } from '../pet/pet.entity';
import { Equipment } from '../equipment/equipment.entity';
import { Resource } from '../resource/resource.entity';
import { Weapon } from '../weapon/weapon.entity';
import { Consumable } from '../consumable/consumable.entity';
import { Idol } from '../idol/idol.entity';
import { Set } from '../set/set.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async () => ({
                type: process.env.TYPE as any,
                host: process.env.HOST as any,
                port: process.env.PORT as any,
                database: process.env.DB_NAME as any,
                synchronize: true,
                autoLoadEntities: true,
                useUnifiedTopology: true,
            }),
        }),
        TypeOrmModule.forFeature([
            Ceremonial,
            Pet,
            Set,
            Equipment,
            Resource,
            Weapon,
            Consumable,
            Idol,
        ]),
    ],
})
export class DatabaseModule {}
