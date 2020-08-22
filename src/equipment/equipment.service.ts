import { Injectable } from '@nestjs/common';
import { Equipment } from './equipment.entity';
import { EquipmentArgs } from '../args/equipment.args';
import { mergeObjects } from '../utils/util';

@Injectable()
export class EquipmentService {
    async getAll({ name, level, type }: EquipmentArgs): Promise<Equipment[]> {
        const match = mergeObjects({ name }, { level }, { type });
        return await Equipment.find({ ...match });
    }
}
