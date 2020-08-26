import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { EquipmentArgs } from '../../args/equipment.args';
import { mergeObjects } from '../../utils/util';

@Injectable()
export class PetService {
    async getAll({ name, level, type }: EquipmentArgs): Promise<Pet[]> {
        const match = mergeObjects({ name }, { level }, { type });
        return await Pet.find({ ...match });
    }
}
