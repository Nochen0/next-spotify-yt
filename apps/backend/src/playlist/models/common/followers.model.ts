import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class Followers {
  @Field()
  total!: string
}
