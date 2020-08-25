import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weapon } from './weapon.entity';
import { WeaponService } from './weapon.service';

@Module({ imports: [TypeOrmModule.forFeature([Weapon])], providers: [WeaponService] })
export class WeaponModule {}
