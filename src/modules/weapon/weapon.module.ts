import { Module } from '@nestjs/common';
import { WeaponService } from './weapon.service';
import { WeaponResolver } from './resolvers/weapon.resolver';

@Module({
    providers: [WeaponService, WeaponResolver],
})
export class WeaponModule {}
