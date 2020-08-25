import { EquipmentService } from '../equipment.service';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { Equipment } from '../equipment.entity';
import { EquipmentArgs } from '../../../args/equipment.args';

@Resolver(() => Equipment)
export class EquipmentResolver {
    constructor(private service: EquipmentService) {}

    @Query(() => [Equipment])
    async getEquipment(@Args() args: EquipmentArgs): Promise<Equipment[]> {
        return await this.service.getAll(args);
    }
}
