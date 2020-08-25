import { Entity, BaseEntity, ObjectIdColumn, Column, ObjectID } from 'typeorm';
import { ObjectType } from '@nestjs/graphql';
import { RecipeIngredient } from '../../types';

@Entity()
@ObjectType()
export class Weapon extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    type: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    imageUrl: string;

    @Column()
    encyclopediaUrl: string;

    @Column()
    level: number;

    @Column()
    stats: string[];

    @Column()
    conditions: string[];

    @Column()
    recipe: RecipeIngredient[];
}
