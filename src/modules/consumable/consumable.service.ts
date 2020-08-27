import { Injectable } from '@nestjs/common';
import { Consumable } from './consumable.entity';
import { mergeObjects } from '../../utils/util';
import { ConsumableArgs } from '../../args/consumable.args';

@Injectable()
export class ConsumableService {
    async getAll({ name, level, type }: ConsumableArgs): Promise<Consumable[]> {
        const match = mergeObjects({ name }, { level }, { type });
        return await Consumable.find({ ...match });
    }
}
