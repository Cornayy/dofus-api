import { Injectable } from '@nestjs/common';
import { Mount } from './mount.entity';
import { NameArgs } from 'src/args/name.args';

@Injectable()
export class MountService {
    async getAll(args: NameArgs): Promise<Mount[]> {
        return await Mount.find(args);
    }
}
