import { Resolver, Args, Query } from '@nestjs/graphql';
import { Idol } from '../idol.entity';
import { IdolService } from '../idol.service';
import { EquipmentArgs } from 'src/args/equipment.args';

@Resolver(() => Idol)
export class IdolResolver {
    constructor(private idolService: IdolService) {}

    @Query(() => [Idol])
    async getIdols(@Args() args: EquipmentArgs): Promise<Idol[]> {
        return await this.idolService.getAll(args);
    }
}
