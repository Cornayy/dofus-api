import { SetService } from '../set.service';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { Set } from '../set.entity';
import { ItemArgs } from '../../args/item.args';

@Resolver(() => Set)
export class SetResolver {
    constructor(private service: SetService) {}

    @Query(() => [Set])
    async getSets(@Args() args: ItemArgs): Promise<Set[]> {
        return await this.service.getAll(args);
    }
}
