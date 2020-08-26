import { MonsterDrop } from '../../types/';
import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Monster extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    family: string;

    @Field()
    @Column()
    imageUrl: string;

    @Field()
    @Column()
    encyclopediaUrl: string;

    @Field()
    @Column()
    level: string;

    @Field(() => [String])
    @Column()
    characteristics: string[];

    @Field(() => [String])
    @Column()
    resistances: string[];

    @Field(() => [String])
    @Column()
    areas: string[];

    @Field(() => [MonsterDrop])
    @Column()
    drops: MonsterDrop[];
}
