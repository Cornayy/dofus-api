import { Injectable } from '@nestjs/common';
import { Set } from './set.entity';
import { getMongoManager } from 'typeorm';
import { SetArgs } from './args/set.arg';
import { mergeObjects } from 'src/utils/util';

@Injectable()
export class SetService {
    async getAll({ name, level }: SetArgs): Promise<Set[]> {
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
