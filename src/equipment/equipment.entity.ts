import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { RecipeIngredient } from '../types';

@ObjectType()
@Entity()
export class Equipment extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    description: string;

    @Column()
    @Field(() => [String])
    conditions: string[];

    @Column()
    @Field()
    imageUrl: string;

    @Column()
    @Field()
    encyclopediaUrl: string;

    @Column()
    @Field()
    level: number;

    @Column()
    @Field()
    type: string;

    @Column()
    @Field(() => [String])
    stats: string[];

    @Column()
    @Field(() => [RecipeIngredient])
    recipe: RecipeIngredient[];
}
