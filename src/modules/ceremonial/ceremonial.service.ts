import { Injectable } from '@nestjs/common';
import { Ceremonial } from './ceremonial.entity';
import { EquipmentArgs } from '../../args/equipment.args';
import { mergeObjects } from '../../utils/util';

@Injectable()
export class CeremonialService {
    async getAll({ name, level, type }: EquipmentArgs): Promise<Ceremonial[]> {
        const match = mergeObjects({ name }, { level }, { type });
        return await Ceremonial.find({ ...match });
    }
}
