import { ArgsType, Field } from '@nestjs/graphql';
import { ItemArgs } from './item.args';
import { WeaponType } from '../types';

@ArgsType()
export class WeaponArgs extends ItemArgs {
    @Field(() => WeaponType, { nullable: true })
    type?: WeaponType;
}
