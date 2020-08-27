import { ResourceService } from '../resource.service';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { Resource } from '../resource.entity';
import { ResourceArgs } from '../../../args/resource.args';

@Resolver(() => Resource)
export class ResourceResolver {
    constructor(private resourceService: ResourceService) {}

    @Query(() => [Resource])
    async getResources(@Args() args: ResourceArgs): Promise<Resource[]> {
        return await this.resourceService.getAll(args);
    }
}
