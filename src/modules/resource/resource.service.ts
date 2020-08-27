import { Injectable } from '@nestjs/common';
import { Resource } from './resource.entity';
import { ResourceArgs } from '../../args/resource.args';
import { mergeArguments } from '../../utils/util';

@Injectable()
export class ResourceService {
    async getAll({ name, level, type }: ResourceArgs): Promise<Resource[]> {
        const match = mergeArguments({ name }, { level }, { type });
        return await Resource.find({ ...match });
    }
}
