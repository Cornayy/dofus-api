import { Resolver, Args, Query } from '@nestjs/graphql';
import { Consumable } from '../consumable.entity';
import { EquipmentArgs } from '../../../args/equipment.args';
import { ConsumableService } from '../consumable.service';

@Resolver(() => Consumable)
export class ConsumableResolver {
    constructor(private consumableService: ConsumableService) {}

    @Query(() => [Consumable])
    async getConsumables(@Args() args: EquipmentArgs): Promise<Consumable[]> {
        return await this.consumableService.getAll(args);
    }
}
