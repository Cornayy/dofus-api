import { Module } from '@nestjs/common';
import { CeremonialService } from './ceremonial.service';
import { CeremonialResolver } from './resolvers/ceremonial.resolver';

@Module({
    providers: [CeremonialService, CeremonialResolver],
})
export class CeremonialModule {}
