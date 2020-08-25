import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { SetModule } from './modules/set/set.module';
import { EquipmentModule } from './modules/equipment/equipment.module';
import { WeaponModule } from './modules/weapon/weapon.module';

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
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
