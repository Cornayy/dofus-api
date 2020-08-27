import { Resolver, Args, Query } from '@nestjs/graphql';
import { Consumable } from '../consumable.entity';
import { ConsumableService } from '../consumable.service';
import { ConsumableArgs } from '../../../args/consumable.args';

@Resolver(() => Consumable)
export class ConsumableResolver {
    constructor(private consumableService: ConsumableService) {}

    @Query(() => [Consumable])
    async getConsumables(@Args() args: ConsumableArgs): Promise<Consumable[]> {
        return await this.consumableService.getAll(args);
    }
}
