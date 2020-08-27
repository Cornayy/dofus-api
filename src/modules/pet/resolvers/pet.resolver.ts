import { Resolver, Query, Args } from '@nestjs/graphql';
import { Pet } from '../pet.entity';
import { PetService } from '../pet.service';
import { PetArgs } from '../../../args/pet.args';

@Resolver(() => Pet)
export class PetResolver {
    constructor(private petService: PetService) {}

    @Query(() => [Pet])
    async getPets(@Args() args: PetArgs): Promise<Pet[]> {
        return await this.petService.getAll(args);
    }
}
