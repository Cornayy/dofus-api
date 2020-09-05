import { RecipeIngredient } from '../../types';
import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Equipment } from '../equipment/equipment.entity';

@ObjectType()
@Entity()
export class Set extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field({ nullable: true })
    imageUrl?: string;

    @Column()
    @Field()
    encyclopediaUrl: string;

    @Column()
    @Field()
    level: number;

    @Column()
    @Field(() => [String])
    bonus: string[];

    @Column()
    @Field(() => [RecipeIngredient])
    recipe: RecipeIngredient[];

    @Field(() => [Equipment])
    items: Equipment[];
}
