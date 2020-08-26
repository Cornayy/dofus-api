import { Module } from '@nestjs/common';
import { ResourceResolver } from './resolvers/resource.resolver';
import { ResourceService } from './resource.service';

@Module({
    providers: [ResourceResolver, ResourceService],
})
export class ResourceModule {}
