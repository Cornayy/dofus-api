import { Resolver, Args, Query } from '@nestjs/graphql';
import { Monster } from '../monster.entity';
import { MonsterService } from '../monster.service';
import { ItemArgs } from '../../../args/item.args';

@Resolver(() => Monster)
export class MonsterResolver {
    constructor(private monsterService: MonsterService) {}

    @Query(() => [Monster])
    async getMonsters(@Args() args: ItemArgs): Promise<Monster[]> {
        return await this.monsterService.getAll(args);
    }
}
