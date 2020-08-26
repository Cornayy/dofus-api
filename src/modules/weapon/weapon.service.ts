import { Injectable } from '@nestjs/common';
import { Weapon } from './weapon.entity';
import { ItemArgs } from '../../args/item.args';
import { mergeObjects } from '../../utils/util';

@Injectable()
export class WeaponService {
    async getAll({ name, level }: ItemArgs): Promise<Weapon[]> {
        const match = mergeObjects({ name }, { level });
        return await Weapon.find({ ...match });
    }
}
