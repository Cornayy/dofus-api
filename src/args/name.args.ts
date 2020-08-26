import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class NameArgs {
    @Field({ nullable: true })
    name?: string;
}
