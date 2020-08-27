import { ArgsType, Field } from '@nestjs/graphql';
import { ItemArgs } from './item.args';
import { ConsumableType } from '../types';

@ArgsType()
export class ConsumableArgs extends ItemArgs {
    @Field(() => ConsumableType, { nullable: true })
    type?: ConsumableType;
}
