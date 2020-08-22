import { Injectable } from '@nestjs/common';
import { Set } from './set.entity';
import { getMongoManager } from 'typeorm';
import { ItemArgs } from '../args/item.args';
import { mergeObjects } from '../utils/util';

@Injectable()
export class SetService {
    async getAll({ name, level }: ItemArgs): Promise<Set[]> {
        const manager = getMongoManager();
        const match = mergeObjects({ name }, { level });

        return await manager
            .aggregate(Set, [
                {
                    $lookup: {
                        from: 'equipment',
                        localField: 'encyclopediaUrl',
                        foreignField: 'set',
                        as: 'items',
                    },
                },
                {
                    $match: match,
                },
            ])
            .toArray();
    }
}
