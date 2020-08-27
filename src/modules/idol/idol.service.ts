import { Injectable } from '@nestjs/common';
import { Idol } from './idol.entity';
import { mergeArguments } from '../../utils/util';
import { EquipmentArgs } from '../../args/equipment.args';

@Injectable()
export class IdolService {
    async getAll({ name, level, type }: EquipmentArgs): Promise<Idol[]> {
        const match = mergeArguments({ name }, { level }, { type });
        return await Idol.find({ ...match });
    }
}
