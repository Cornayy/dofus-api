import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Pet extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

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

    @Field()
    @Column()
    type: string;

    @Field(() => [String])
    @Column()
    conditions: string[];

    @Field(() => [String])
    @Column()
    stats: string[];
}
