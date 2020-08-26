import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ceremonial } from './ceremonial.entity';
import { CeremonialService } from './ceremonial.service';
import { CeremonialResolver } from './resolvers/ceremonial.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Ceremonial])],
    providers: [CeremonialService, CeremonialResolver],
})
export class CeremonialModule {}
