import { Resolver, Args, Query } from '@nestjs/graphql';
import { Ceremonial } from '../ceremonial.entity';
import { CeremonialService } from '../ceremonial.service';
import { EquipmentArgs } from '../../../args/equipment.args';

@Resolver(() => Ceremonial)
export class CeremonialResolver {
    constructor(private ceremonialService: CeremonialService) {}

    @Query(() => [Ceremonial])
    async getCeremonials(@Args() args: EquipmentArgs): Promise<Ceremonial[]> {
        return await this.ceremonialService.getAll(args);
    }
}
