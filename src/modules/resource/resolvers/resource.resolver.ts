import { ResourceService } from '../resource.service';
import { Resolver, Query } from '@nestjs/graphql';
import { Resource } from '../resource.entity';

@Resolver(() => Resource)
export class ResourceResolver {
    constructor(private resourceService: ResourceService) {}

    @Query(() => [Resource])
    async getResources(): Promise<Resource[]> {
        return await this.resourceService.getAll();
    }
}
