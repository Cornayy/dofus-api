import { Resolver, Args, Query } from '@nestjs/graphql';
import { WeaponService } from '../weapon.service';
import { Weapon } from '../weapon.entity';
import { WeaponArgs } from '../../../args/weapon.args';

@Resolver(() => Weapon)
export class WeaponResolver {
    constructor(private weaponService: WeaponService) {}

    @Query(() => [Weapon])
    async getWeapons(@Args() args: WeaponArgs): Promise<Weapon[]> {
        return await this.weaponService.getAll(args);
    }
}
