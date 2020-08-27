import { Injectable } from '@nestjs/common';
import { Mount } from './mount.entity';
import { NameArgs } from '../../args/name.args';
import { FindManyOptions } from 'typeorm';

@Injectable()
export class MountService {
    async getAll({ name }: NameArgs): Promise<Mount[]> {
        const regex = { name: new RegExp(`.*${name}.*`, 'i') };
        return await Mount.find(regex as FindManyOptions);
    }
}
