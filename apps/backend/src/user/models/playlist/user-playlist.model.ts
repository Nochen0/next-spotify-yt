import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class UserPlaylist {
  @Field()
  id!: string

  @Field()
  name!: string
}
