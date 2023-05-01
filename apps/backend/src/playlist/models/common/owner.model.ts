import { Field, ObjectType } from "type-graphql"
import { Followers } from "./followers.model"

@ObjectType()
export class Owner {
  @Field(() => Followers)
  followers!: Followers

  @Field()
  id!: string

  @Field()
  display_name!: string
}
