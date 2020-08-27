import { Field, ObjectType } from '@nestjs/graphql';

export * from './enums';

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
