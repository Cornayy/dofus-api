import { Injectable } from '@nestjs/common';
import { Ceremonial } from './ceremonial.entity';
import { EquipmentArgs } from '../../args/equipment.args';
import { mergeArguments } from '../../utils/util';

@Injectable()
export class CeremonialService {
    async getAll({ name, level, type }: EquipmentArgs): Promise<Ceremonial[]> {
        const match = mergeArguments({ name }, { level }, { type });
        return await Ceremonial.find({ ...match });
    }
}
