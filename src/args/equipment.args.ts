import { ArgsType, Field } from '@nestjs/graphql';
import { ItemArgs } from './item.args';
import { EquipmentType } from '../types';

@ArgsType()
export class EquipmentArgs extends ItemArgs {
    @Field(() => EquipmentType, { nullable: true })
    type?: EquipmentType;
}
