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

@ObjectType()
export class MonsterDrop {
    @Field()
    name: string;

    @Field()
    imageUrl: string;

    @Field()
    chance: string;
}
