import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

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
    ],
})
export class DatabaseModule {}
