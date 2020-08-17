import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RecipeIngredient {
    @Field()
    name: string;

    @Field()
    imageUrl: string;

    @Field()
    amount: number;
}
