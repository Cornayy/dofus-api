import { Injectable } from '@nestjs/common';
import { EquipmentArgs } from 'src/args/equipment.args';
import { Consumable } from './consumable.entity';
import { mergeObjects } from '../../utils/util';

@Injectable()
export class ConsumableService {
    async getAll({ name, level, type }: EquipmentArgs): Promise<Consumable[]> {
        const match = mergeObjects({ name }, { level }, { type });
        return await Consumable.find({ ...match });
    }
}
