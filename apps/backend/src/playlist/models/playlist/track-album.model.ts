import { Field, ObjectType } from "type-graphql"
import { Image } from "../common/image.model"

@ObjectType()
export class TrackAlbum {
  @Field()
  id!: string

  @Field(() => [Image])
  images!: Image[]

  @Field()
  name!: string
}
