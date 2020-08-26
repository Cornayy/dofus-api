import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Consumable extends BaseEntity {
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

    @Field({ nullable: true })
    @Column()
    level?: number;

    @Field()
    @Column()
    type: string;

    @Field(() => [String])
    @Column()
    stats: string[];

    @Field(() => [String])
    @Column()
    conditions: string[];
}
