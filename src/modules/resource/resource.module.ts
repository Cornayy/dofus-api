import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceResolver } from './resolvers/resource.resolver';
import { ResourceService } from './resource.service';
import { Resource } from './resource.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Resource])],
    providers: [ResourceResolver, ResourceService],
})
export class ResourceModule {}
