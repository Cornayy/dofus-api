import { Entity, BaseEntity, ObjectIdColumn, Column, ObjectID } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { RecipeIngredient } from '../../types';

@Entity()
@ObjectType()
export class Weapon extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Field()
    @Column()
    type: string;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    description: string;

    @Field()
    @Column()
    imageUrl: string;

    @Field()
    @Column()
    encyclopediaUrl: string;

    @Field()
    @Column()
    level: number;

    @Field(() => [String])
    @Column()
    stats: string[];

    @Field(() => [String])
    @Column()
    conditions: string[];

    @Field(() => [RecipeIngredient])
    @Column()
    recipe: RecipeIngredient[];
}
