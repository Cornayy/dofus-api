import { ArgsType, Field } from '@nestjs/graphql';
import { ItemArgs } from './item.args';
import { ResourceType } from '../types';

@ArgsType()
export class ResourceArgs extends ItemArgs {
    @Field(() => ResourceType, { nullable: true })
    type?: ResourceType;
}
