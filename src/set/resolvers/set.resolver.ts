import { SetService } from '../set.service';
import { Resolver, Query } from '@nestjs/graphql';
import { Set } from '../set.entity';

@Resolver('Set')
export class SetResolver {
    constructor(private service: SetService) {}

    @Query(() => [Set])
    async getSets(): Promise<Set[]> {
        return await this.service.getAll();
    }
}
