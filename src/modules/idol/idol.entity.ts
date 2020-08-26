import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Idol extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    difficultyScore: number;

    @Field()
    @Column()
    description: string;

    @Field(() => [String])
    @Column()
    bonus: string[];

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

    @Field()
    @Column()
    spells: string;
}
