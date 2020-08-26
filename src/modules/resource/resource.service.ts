import { Injectable } from '@nestjs/common';
import { Resource } from './resource.entity';

@Injectable()
export class ResourceService {
    async getAll(): Promise<Resource[]> {
        return await Resource.find({});
    }
}
