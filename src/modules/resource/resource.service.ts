import { Injectable } from '@nestjs/common';
import { Resource } from './resource.entity';
import { ResourceArgs } from '../../args/resource.args';
import { mergeObjects } from '../../utils/util';

@Injectable()
export class ResourceService {
    async getAll({ name, level, type }: ResourceArgs): Promise<Resource[]> {
        const match = mergeObjects({ name }, { level }, { type });
        return await Resource.find({ ...match });
    }
}
