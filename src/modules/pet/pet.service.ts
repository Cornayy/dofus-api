import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { mergeArguments } from '../../utils/util';
import { PetArgs } from '../../args/pet.args';

@Injectable()
export class PetService {
    async getAll({ name, level, type }: PetArgs): Promise<Pet[]> {
        const match = mergeArguments({ name }, { level }, { type });
        return await Pet.find({ ...match });
    }
}
