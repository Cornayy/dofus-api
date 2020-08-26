import { Resolver, Args, Query } from '@nestjs/graphql';
import { Mount } from '../mount.entity';
import { MountService } from '../mount.service';
import { NameArgs } from '../../../args/name.args';

@Resolver(() => Mount)
export class MountResolver {
    constructor(private mountService: MountService) {}

    @Query(() => [Mount])
    async getMounts(@Args() args: NameArgs): Promise<Mount[]> {
        return await this.mountService.getAll(args);
    }
}
