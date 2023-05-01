import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class TrackArtist {
  @Field()
  id!: string

  @Field()
  name!: string
}
