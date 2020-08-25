import { Injectable } from '@nestjs/common';
import { Weapon } from './weapon.entity';

@Injectable()
export class WeaponService {
    async getAll(): Promise<Weapon[]> {
        return await Weapon.find({});
    }
}
