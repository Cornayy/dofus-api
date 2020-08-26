import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { SetModule } from './modules/set/set.module';
import { EquipmentModule } from './modules/equipment/equipment.module';
import { WeaponModule } from './modules/weapon/weapon.module';
import { ResourceModule } from './modules/resource/resource.module';
import { PetModule } from './modules/pet/pet.module';
import { CeremonialModule } from './modules/ceremonial/ceremonial.module';
import { ConsumableModule } from './modules/consumable/consumable.module';
import { IdolModule } from './modules/idol/idol.module';
import { MonsterModule } from './modules/monster/monster.module';
import { MountModule } from './modules/mount/mount.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        GraphQLModule.forRoot({
            debug: false,
            playground: true,
            autoSchemaFile: 'schema.gql',
            context: ({ req, res }) => ({ req, res }),
            cors: {
                credentials: true,
                origin: true,
            },
        }),
        DatabaseModule,
        SetModule,
        EquipmentModule,
        WeaponModule,
        ResourceModule,
        PetModule,
        CeremonialModule,
        ConsumableModule,
        IdolModule,
        MonsterModule,
        MountModule,
        IdolModule,
        MonsterModule,
        MountModule,
    ],
})
export class AppModule {}
