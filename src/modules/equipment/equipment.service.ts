import { Injectable } from '@nestjs/common';
import { Equipment } from './equipment.entity';
import { EquipmentArgs } from '../../args/equipment.args';
import { mergeArguments } from '../../utils/util';

@Injectable()
export class EquipmentService {
    async getAll({ name, level, type }: EquipmentArgs): Promise<Equipment[]> {
        const match = mergeArguments({ name }, { level }, { type });
        return await Equipment.find({ ...match });
    }
}
