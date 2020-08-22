import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class ItemArgs {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    level?: number;
}
