import { Injectable } from '@nestjs/common';
import { Weapon } from './weapon.entity';
import { mergeObjects } from '../../utils/util';
import { WeaponArgs } from '../../args/weapon.args';

@Injectable()
export class WeaponService {
    async getAll({ name, level, type }: WeaponArgs): Promise<Weapon[]> {
        const match = mergeObjects({ name }, { level }, { type });
        return await Weapon.find({ ...match });
    }
}
