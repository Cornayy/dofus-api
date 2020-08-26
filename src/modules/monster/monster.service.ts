import { Injectable } from '@nestjs/common';
import { ItemArgs } from '../../args/item.args';
import { Monster } from './monster.entity';
import { mergeObjects } from '../../utils/util';

@Injectable()
export class MonsterService {
    async getAll({ name, level }: ItemArgs): Promise<Monster[]> {
        const match = mergeObjects({ name }, { level });
        return await Monster.find({ ...match });
    }
}
