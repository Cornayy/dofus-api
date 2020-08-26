import { Resolver, Query, Args } from '@nestjs/graphql';
import { Pet } from '../pet.entity';
import { PetService } from '../pet.service';
import { EquipmentArgs } from '../../../args/equipment.args';

@Resolver(() => Pet)
export class PetResolver {
    constructor(private petService: PetService) {}

    @Query(() => [Pet])
    async getPets(@Args() args: EquipmentArgs): Promise<Pet[]> {
        return await this.petService.getAll(args);
    }
}
