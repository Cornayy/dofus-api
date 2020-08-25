import { Resolver } from '@nestjs/graphql';
import { WeaponService } from '../weapon.service';
import { Weapon } from '../weapon.entity';

@Resolver(() => Weapon)
export class WeaponResolver {
    constructor(private weaponService: WeaponService) {}

    async getAll(): Promise<Weapon[]> {
        return await this.weaponService.getAll();
    }
}
