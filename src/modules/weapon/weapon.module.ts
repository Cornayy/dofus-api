import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weapon } from './weapon.entity';
import { WeaponService } from './weapon.service';
import { WeaponResolver } from './resolvers/weapon.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Weapon])],
    providers: [WeaponService, WeaponResolver],
})
export class WeaponModule {}
