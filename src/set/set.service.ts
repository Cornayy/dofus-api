import { Injectable } from '@nestjs/common';
import { Set } from './set.entity';
import { getMongoManager } from 'typeorm';

@Injectable()
export class SetService {
    async getAll(): Promise<Set[]> {
        const manager = getMongoManager();

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
            ])
            .toArray();
    }
}
