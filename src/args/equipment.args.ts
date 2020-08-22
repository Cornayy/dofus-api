import { ArgsType, Field } from '@nestjs/graphql';
import { ItemArgs } from './item.args';

@ArgsType()
export class EquipmentArgs extends ItemArgs {
    @Field({ nullable: true })
    type?: string;
}
