import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class SongUrl {
  @Field()
  url!: string
}
