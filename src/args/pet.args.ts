import { ArgsType, Field } from '@nestjs/graphql';
import { ItemArgs } from './item.args';
import { PetType } from '../types';

@ArgsType()
export class PetArgs extends ItemArgs {
    @Field(() => PetType, { nullable: true })
    type?: PetType;
}
